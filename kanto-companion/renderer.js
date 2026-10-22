/* Native WebGL geometry: no image, sprite sheet, CDN or runtime dependency. */
function createKantoRenderer(canvas,kind=1){
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false});
  if(!gl)throw Error('WebGL indisponível neste navegador.');
  const vertex='attribute vec3 p;uniform mat4 model,projection;varying vec3 normal,pos;void main(){pos=(model*vec4(p,1.)).xyz;vec3 scales=vec3(dot(model[0].xyz,model[0].xyz),dot(model[1].xyz,model[1].xyz),dot(model[2].xyz,model[2].xyz));normal=normalize(mat3(model)*(p/scales));gl_Position=projection*vec4(pos,1.);}';
  const fragment='precision mediump float;uniform vec3 color;uniform float glow;varying vec3 normal,pos;void main(){vec3 n=normalize(normal);vec3 light=normalize(vec3(-3.,5.,6.));float diffuse=max(dot(n,light),0.);float rim=pow(1.-abs(n.z),3.);float spec=pow(max(dot(reflect(-light,n),vec3(0.,0.,1.)),0.),38.);float texture=1.-.025*abs(sin(pos.x*93.)*sin(pos.y*87.)*sin(pos.z*91.));vec3 c=color*(.43+.57*diffuse)*texture+vec3(.19)*spec+vec3(.07,.09,.1)*rim;c=mix(c,color,glow);gl_FragColor=vec4(c,1.);}';
  const shaders=[];const compile=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));shaders.push(s);return s;};
  const program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));gl.useProgram(program);
  const vertices=[],indices=[],rows=20,cols=28;
  for(let i=0;i<=rows;i++)for(let j=0;j<=cols;j++){const a=i*Math.PI/rows,b=j*2*Math.PI/cols;vertices.push(Math.sin(a)*Math.cos(b),Math.cos(a),Math.sin(a)*Math.sin(b));}
  for(let i=0;i<rows;i++)for(let j=0;j<cols;j++){const a=i*(cols+1)+j,b=a+cols+1;indices.push(a,b,a+1,b,b+1,a+1);}
  const vb=gl.createBuffer(),ib=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vb);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);const attr=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,3,gl.FLOAT,false,0,0);
  const uniform={};for(const n of ['model','projection','color','glow'])uniform[n]=gl.getUniformLocation(program,n);
  const identity=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
  const mul=(a,b)=>{const c=new Array(16).fill(0);for(let i=0;i<4;i++)for(let j=0;j<4;j++)for(let k=0;k<4;k++)c[j*4+i]+=a[k*4+i]*b[j*4+k];return c;};
  const move=(x,y,z)=>{const m=identity();m[12]=x;m[13]=y;m[14]=z;return m;};
  const rotate=(axis,a)=>{const c=Math.cos(a),s=Math.sin(a);return axis==='x'?[1,0,0,0,0,c,s,0,0,-s,c,0,0,0,0,1]:axis==='y'?[c,0,-s,0,0,1,0,0,s,0,c,0,0,0,0,1]:[c,s,0,0,-s,c,0,0,0,0,1,0,0,0,0,1];};
  const joint=(parent,x,y,z,axis='z',angle=0)=>mul(mul(parent,move(x,y,z)),rotate(axis,angle));
  const shape=(parent,x,y,z,sx,sy,sz,color,glow=0)=>{const scale=[sx,0,0,0,0,sy,0,0,0,0,sz,0,0,0,0,1];gl.uniformMatrix4fv(uniform.model,false,new Float32Array(mul(mul(parent,move(x,y,z)),scale)));gl.uniform3fv(uniform.color,color);gl.uniform1f(uniform.glow,glow);gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_SHORT,0);};
  gl.enable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
  let frame=0,stopped=false,excitedUntil=0;const reduced=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const skin=kind===0?[.25,.65,.49]:kind===1?[.95,.38,.075]:[.24,.63,.83],cream=[1,.82,.48],dark=[.035,.055,.05],white=[.98,.99,.95];
  function draw(ms=0){if(stopped)return;const t=reduced?0:ms/1000,happy=ms<excitedUntil?Math.sin(t*12)*.2:0;
    const dpr=Math.min(typeof devicePixelRatio==='number'?devicePixelRatio:1,2),w=Math.round((canvas.clientWidth||180)*dpr),h=Math.round((canvas.clientHeight||210)*dpr);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}gl.viewport(0,0,w,h);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);
    const height=4.8,width=height*w/h;gl.uniformMatrix4fv(uniform.projection,false,new Float32Array([2/width,0,0,0,0,2/height,0,0,0,0,-.1,0,0,-.85,0,1]));
    const root=joint(identity(),0,.08+Math.sin(t*2)*.035+Math.abs(happy),0,'y',-.28+Math.sin(t*.55)*.15);
    if(kind===0){
      shape(root,0,1.02,-.2,.83,.58,.85,skin);shape(root,0,1.68,-.55,.69,.79,.64,[.22,.43,.16]);
      for(let i=0;i<5;i++){const a=i*1.256;shape(joint(root,0,1.8,-.55,'y',a),.18,.13,0,.29,.67,.19,[.33,.55,.18]);}
      for(const x of [-.53,.53])for(const z of [-.65,.4]){const leg=joint(root,x,.68,z,'x',Math.sin(t*2+z*3+x*3)*.08+happy);shape(leg,0,-.2,0,.25,.4,.27,skin);shape(leg,0,-.48,.07,.28,.14,.31,skin);}
    }else{
      shape(root,0,1.4,0,.64,.85,.47,skin);shape(root,0,1.3,.405,.46,.61,.12,cream);
      if(kind===2){shape(root,0,1.42,-.32,.76,.84,.37,[.35,.19,.08]);shape(root,0,1.42,-.46,.62,.7,.32,[.56,.32,.13]);for(let i=-1;i<=1;i++)shape(root,i*.22,1.5,-.76,.025,.47,.025,[.25,.12,.06]);}
      for(const side of [-1,1]){
        const leg=joint(root,side*.43,.68,0,'x',Math.sin(t*2+side*2)*.12+happy);shape(leg,0,-.12,0,.31,.42,.32,skin);shape(leg,0,-.43,.2,.34,.17,.45,skin);for(let i=-1;i<=1;i++)shape(leg,i*.14,-.43,.58,.065,.07,.12,white);
        const arm=joint(root,side*.55,1.78,.04,'z',side*(.35+Math.sin(t*1.8+side)*.12+happy*2));shape(arm,side*.17,-.27,.04,.23,.43,.23,skin);shape(arm,side*.27,-.57,.09,.24,.2,.24,skin);
      }
      let tail=joint(root,.27,.85,-.3,'y',Math.sin(t*2)*.32);for(let i=0;i<6;i++){tail=joint(tail,.18,.025,-.2,'z',-.12+Math.sin(t*3-i*.7)*.08);shape(tail,0,0,0,.21-i*.02,.2-i*.019,.29-i*.02,skin);}
      if(kind===1){for(let i=0;i<5;i++)shape(tail,Math.sin(t*13+i)*.055,.16+i*.105,0,.17-i*.026,.23-i*.025,.14-i*.02,i<2?[1,.34,.015]:[1,.84,.12],1);}else{shape(tail,0,.13,0,.23,.26,.14,skin);}
    }
    const head=joint(root,0,kind===0?1.36:2.52,kind===0?.62:.08,'y',Math.sin(t*.8)*.16+happy*.3);const hs=kind===0?1.08:1;
    shape(head,0,0,0,.73*hs,.64,.6,skin);shape(head,0,-.18,.43,.54,.3,.37,skin);shape(head,0,-.33,.57,.34,.065,.19,[.25,.1,.07]);shape(head,0,-.29,.61,.33,.04,.19,skin);
    if(kind===0)for(const x of [-.48,.48])shape(joint(head,x,.46,-.1,'z',-x*.5),0,.08,0,.2,.33,.18,skin);
    const blink=Math.sin(t*1.6)> .995?.08:1;
    for(const side of [-1,1]){const eye=joint(head,side*.42,.1,.44,'y',side*.35);shape(eye,0,0,.03,.225,.29*blink,.105,white);shape(eye,-side*.025,-.005,.115,.135,.225*blink,.04,kind===0?[.67,.16,.1]:[.07,.23,.2]);shape(eye,-side*.025,-.005,.149,.067,.17*blink,.021,dark);shape(eye,-.04,.09*blink,.17,.038,.05*blink,.012,white,1);shape(head,side*.15,-.12,.78,.028,.019,.018,dark);}
    if(kind===0){for(const x of [-.34,.28])shape(head,x,.32,.49,.1,.12,.025,[.1,.4,.29]);}
    frame=requestAnimationFrame(draw);
  }
  const lost=e=>{e.preventDefault();cancelAnimationFrame(frame);};canvas.addEventListener('webglcontextlost',lost);frame=requestAnimationFrame(draw);
  return{react(){excitedUntil=performance.now()+2200;},stop(){stopped=true;cancelAnimationFrame(frame);canvas.removeEventListener('webglcontextlost',lost);gl.deleteBuffer(vb);gl.deleteBuffer(ib);for(const s of shaders)gl.deleteShader(s);gl.deleteProgram(program);}};
}
if(typeof module!=='undefined'&&module.exports)module.exports=createKantoRenderer;
