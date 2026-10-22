const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const deps=process.env.KANTO_DEPENDENCY_ROOT?createRequire(path.resolve(process.env.KANTO_DEPENDENCY_ROOT,'package.json')):require;
const esbuild=deps('esbuild-wasm');
const three=path.dirname(deps.resolve('three/package.json'.replace('/package.json','')));
const entries=[['Squidle','água'],['Alpaca','terra'],['Dragon','ar']].map(([name,element])=>({name,element,base64:fs.readFileSync(path.join(__dirname,'assets/animals',name+'.glb')).toString('base64')}));
esbuild.build({entryPoints:[path.join(__dirname,'src/main.js')],outfile:path.join(__dirname,'console.js'),bundle:true,minify:true,format:'iife',target:['chrome110'],legalComments:'eof',alias:{'three/addons':path.resolve(three,'../examples/jsm'),three:path.resolve(three,'three.module.js')},plugins:[{name:'models',setup(build){build.onResolve({filter:/models\.generated\.js$/},()=>({path:'models',namespace:'embedded'}));build.onLoad({filter:/.*/,namespace:'embedded'},()=>({contents:'export default '+JSON.stringify(entries),loader:'js'}));}}]}).catch(()=>process.exitCode=1);

