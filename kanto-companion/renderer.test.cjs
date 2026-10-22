const {test}=require('node:test');const assert=require('node:assert/strict');const renderer=require('./renderer.js');
function setup(kind){
 const frames=new Map(),matrices=[],resources=[];let next=0,draws=0;
 global.requestAnimationFrame=f=>{const n=++next;frames.set(n,f);return n;};global.cancelAnimationFrame=n=>frames.delete(n);
 const gl=new Proxy({getShaderParameter:()=>true,getProgramParameter:()=>true,getAttribLocation:()=>0,getUniformLocation:(_,n)=>n,uniformMatrix4fv(n,_,m){if(n==='model')matrices.push([...m]);},drawElements(){draws++;},deleteBuffer(b){resources.push(b);}}, {get:(obj,key)=>key in obj?obj[key]:key.startsWith('create')?()=>({type:key}):key.toUpperCase()===key?1:()=>{}});
 const canvas={clientWidth:160,clientHeight:190,getContext:()=>gl,addEventListener(){},removeEventListener(){}};
 const model=renderer(canvas,kind);return{model,frames,matrices,resources,step(t){matrices.length=0;const [n,f]=frames.entries().next().value;frames.delete(n);f(t);return matrices.map(x=>[...x]);},get draws(){return draws;}};
}
test('cada inicial usa geometria com matrizes de articulação que mudam entre quadros',()=>{for(const kind of [0,1,2]){const s=setup(kind);const a=s.step(0),b=s.step(1400);assert.ok(a.length>25);assert.notDeepEqual(a,b);assert.ok(b.flat().every(Number.isFinite));s.model.stop();assert.equal(s.frames.size,0);assert.equal(s.resources.length,2);}});
test('carinho altera a pose renderizada',()=>{const s=setup(1);const a=s.step(900);s.model.react();const b=s.step(900);assert.notDeepEqual(a,b);s.model.stop();});
test('falha de WebGL gera erro explícito em vez de uma imagem substituta',()=>{assert.throws(()=>renderer({getContext:()=>null}),/WebGL indisponível/);});
