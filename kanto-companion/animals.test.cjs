const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),path=require('path'),{createRequire}=require('module');
const deps=process.env.KANTO_DEPENDENCY_ROOT?createRequire(path.resolve(process.env.KANTO_DEPENDENCY_ROOT,'package.json')):require;
const THREE=deps('three');
const threeRoot=path.resolve(path.dirname(deps.resolve('three')),'..');
const loaderPromise=import(require('url').pathToFileURL(path.join(threeRoot,'examples/jsm/loaders/GLTFLoader.js')).href);
const canonical=n=>n.split('|').pop();
for(const [name,count]of [['Squidle',8],['Alpaca',13],['Dragon',8]])test(name+' tem geometria, esqueleto e '+count+' movimentos distintos',async()=>{
 const b=fs.readFileSync(path.join(__dirname,'assets/animals',name+'.glb'));assert.equal(b.toString('ascii',0,4),'glTF');const j=JSON.parse(b.toString('utf8',20,20+b.readUInt32LE(12)));assert.ok(j.skins.length);assert.equal(new Set(j.animations.map(a=>canonical(a.name))).size,count);
 const {GLTFLoader}=await loaderPromise;const model=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');let skinned=0;model.scene.traverse(n=>{if(n.isSkinnedMesh)skinned++;});assert.ok(skinned>0);
 const mixer=new THREE.AnimationMixer(model.scene),clip=model.animations.find(c=>/Walk|Fast_Flying/.test(c.name));assert.ok(clip);const snapshot=()=>{const a=[];model.scene.traverse(n=>a.push(...n.position.toArray(),...n.quaternion.toArray()));return a;};const before=snapshot();mixer.clipAction(clip).play();mixer.update(Math.min(.38,clip.duration*.4));assert.notDeepEqual(snapshot(),before);mixer.stopAllAction();mixer.uncacheRoot(model.scene);
});
test('todos os assets possuem autoria, licença e hashes de origem',()=>{const p=JSON.parse(fs.readFileSync(path.join(__dirname,'assets/animals/PROVENANCE.json')));for(const m of p.models){assert.equal(m.author,'Quaternius');assert.equal(m.license,'CC0 1.0');const b=fs.readFileSync(path.join(__dirname,'assets/animals',m.name+'.glb'));assert.equal(require('crypto').createHash('sha256').update(b).digest('hex'),m.sha256);}});
