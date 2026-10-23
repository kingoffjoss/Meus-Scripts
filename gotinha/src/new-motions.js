import * as THREE from 'three';
export const newAnimations=[['bow','Fazer uma reverência'],['highFive','Bater aqui'],['clap','Bater palminhas'],['heart','Mandar um coração'],['hug','Dar um abraço'],['kiss','Mandar um beijo'],['winkLeft','Piscar o olho esquerdo'],['winkRight','Piscar o olho direito'],['nod','Concordar'],['shakeHead','Discordar'],['listen','Escutar com atenção'],['search','Procurar alguma coisa'],['peek','Espiar escondidinho'],['sneak','Andar na ponta dos pés'],['tiptoe','Se esticar para alcançar'],['run','Correr contente'],['march','Marchar'],['moonwalk','Fazer moonwalk'],['sideStep','Dar passinhos cruzados'],['balance','Se equilibrar'],['stumble','Tropeçar de leve'],['recover','Recuperar o equilíbrio'],['roll','Rolar como gelatina'],['wobble','Balançar molinho'],['jellyWave','Fazer uma onda de gelatina'],['squash','Virar uma panquequinha'],['breatheDeep','Respirar fundo'],['meditate','Meditar'],['relax','Relaxar'],['napCurl','Se enrolar para cochilar'],['wakeUp','Acordar devagar'],['dream','Sonhar acordado'],['sneeze','Espirrar'],['hiccup','Ter soluços'],['cough','Tossir de leve'],['cold','Sentir frio'],['hot','Se abanar de calor'],['thirsty','Pedir água'],['hungry','Pedir comida'],['lonely','Pedir companhia'],['grateful','Agradecer o carinho'],['excited','Ficar empolgado'],['relieved','Suspirar aliviado'],['disappointed','Ficar desapontado'],['determined','Ganhar coragem'],['read','Ler um livrinho'],['write','Desenhar'],['typing','Digitar'],['stretchArms','Alongar os bracinhos'],['clean','Se arrumar']];
export function addNewProps(root){
 const hidden=new THREE.Group();hidden.name='Acessorios';root.add(hidden);
 const mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.48});
 const heart=new THREE.Shape();heart.moveTo(0,-.12);heart.bezierCurveTo(-.36,.08,-.12,.31,0,.14);heart.bezierCurveTo(.12,.31,.36,.08,0,-.12);
 const love=new THREE.Mesh(new THREE.ExtrudeGeometry(heart,{depth:.045,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:3,steps:1}),mat('#ed91ae'));love.name='Coracao';hidden.add(love);
 const book=new THREE.Group();book.name='Livrinho';hidden.add(book);for(const side of [-1,1]){const cover=new THREE.Mesh(new THREE.BoxGeometry(.23,.28,.035),mat('#b9a0d5'));cover.position.x=side*.115;cover.rotation.y=side*-.18;book.add(cover);const page=new THREE.Mesh(new THREE.BoxGeometry(.21,.25,.014),mat('#fff6df'));page.position.set(side*.112,0,.027);page.rotation.y=side*-.18;book.add(page);}
 const laptop=new THREE.Group();laptop.name='Computador';hidden.add(laptop);const base=new THREE.Mesh(new THREE.BoxGeometry(.52,.025,.29),mat('#94abb5'));laptop.add(base);const screen=new THREE.Mesh(new THREE.BoxGeometry(.49,.30,.025),mat('#617d8d'));screen.position.set(0,.15,-.12);screen.rotation.x=-.16;laptop.add(screen);const glow=new THREE.Mesh(new THREE.PlaneGeometry(.40,.22),new THREE.MeshBasicMaterial({color:'#c1e8db'}));glow.position.set(0,.15,-.097);glow.rotation.x=-.16;laptop.add(glow);
 const pencil=new THREE.Mesh(new THREE.CylinderGeometry(.014,.014,.26,8),mat('#e8b76c'));pencil.name='Lapis';hidden.add(pencil);
 const tear=new THREE.Mesh(new THREE.SphereGeometry(.032,20,16),new THREE.MeshPhysicalMaterial({color:'#8cc7ef',roughness:.15,clearcoat:1}));tear.name='Lagrima';hidden.add(tear);
 return{love,book,laptop,pencil,tear};
}
export function poseNew(pet,state,t){
 const {root,body,arms,feet,eyes,mouth,smile,open,newProps}=pet,p=t*Math.PI/3,s=Math.sin(p),c=Math.cos(p),beat=Math.sin(p*4),pulse=(1-c)/2,tiny=.0001;
 const {love,book,laptop,pencil,tear}=newProps;Object.values(newProps).forEach(o=>o.scale.setScalar(tiny));
 const arm=(i,z,x=0)=>{arms[i].rotation.set(x,0,z);};
 const hold=(height=.7)=>arms.forEach((o,i)=>{o.position.set((i?1:-1)*.30,height,.80);o.rotation.z=(i? -1:1)*1.6;o.scale.setScalar(.58);});
 const close=(v=.12)=>eyes.forEach(e=>e.scale.y=v);
 const o=(x,y)=>{smile.scale.setScalar(tiny);open.scale.set(x,y,.018);};
 const gait=(rate,stride,lift)=>feet.forEach((f,i)=>{const a=p*rate+i*Math.PI;f.position.x+=(Math.cos(a)*stride);f.position.y+=Math.max(0,Math.sin(a))*lift;f.rotation.z=Math.sin(a)*.08;});
 switch(state){
 case 'bow':body.rotation.x=pulse*.35;body.scale.y=1-pulse*.10;arms.forEach((a,i)=>arm(i,(i?1:-1)*.22,-pulse*.2));close(1-pulse*.65);break;
 case 'highFive':arm(1,2.4-pulse*.35,-pulse*.15);root.rotation.z=-.045*pulse;arms[1].scale.setScalar(1+pulse*.12);break;
 case 'clap':hold(.87);arms.forEach((a,i)=>{a.position.x=(i?1:-1)*(.19+.10*(1-beat));a.rotation.z=(i?-1:1)*(1.5+beat*.12);});body.scale.y=1+beat*.018;break;
 case 'heart':hold(.74);love.scale.setScalar(.62+.09*beat);love.position.set(0,1.30+pulse*.35,.85);love.rotation.z=s*.08;mouth.scale.x=1.2;break;
 case 'hug':arms.forEach((a,i)=>{a.position.set((i?1:-1)*(.36-pulse*.16),.73,.56+pulse*.19);a.rotation.z=(i?-1:1)*(1.2+pulse*.35);a.scale.setScalar(.78);});body.rotation.z=s*.04;close(.75);break;
 case 'kiss':arms[1].position.set(.18,.85,.77);arms[1].scale.setScalar(.60);arm(1,1.6+pulse*.4);o(.035,.025);love.scale.setScalar(.35*pulse);love.position.set(.14+pulse*.50,1.08+pulse*.35,.9);break;
 case 'winkLeft':eyes[0].scale.y=.08+.92*(1-pulse)**3;arm(1,.55);root.rotation.z=-pulse*.045;break;
 case 'winkRight':eyes[1].scale.y=.08+.92*(1-pulse)**3;arm(0,-.55);root.rotation.z=pulse*.045;break;
 case 'nod':body.rotation.x=Math.sin(p*3)*.13;eyes.forEach(e=>e.position.y-=Math.max(0,Math.sin(p*3))*.025);break;
 case 'shakeHead':body.rotation.y=Math.sin(p*3)*.26;mouth.scale.x=.6;arm(1,.48);break;
 case 'listen':root.rotation.z=-.08;arms[0].position.set(-.44,1.02,.46);arms[0].scale.setScalar(.7);arm(0,-1.5);eyes.forEach(e=>e.position.x-=.025);break;
 case 'search':body.rotation.y=s*.42;root.rotation.z=Math.sin(p*2)*.05;arm(1,1.9);arms[1].position.set(.14,1.31,.63);arms[1].scale.setScalar(.65);break;
 case 'peek':arms.forEach((a,i)=>{a.position.set((i?1:-1)*.25,1.01,.78);a.scale.setScalar(.55);arm(i,(i?-1:1)*(1.2+pulse*.5));});eyes[0].scale.y=.25+.75*pulse;body.rotation.y=s*.15;break;
 case 'sneak':root.position.x=s*.38;body.scale.y=.90;body.rotation.z=Math.sin(p*4)*.055;gait(4,.065,.08);arm(0,-.55,-.25);arm(1,.55,-.25);eyes.forEach(e=>e.position.x+=.03*c);break;
 case 'tiptoe':root.position.y=pulse*.11;body.scale.y=1+pulse*.10;arm(0,-1.9*pulse);arm(1,1.9*pulse);feet.forEach(f=>{f.scale.z=.22;f.rotation.x=-.15*pulse;});break;
 case 'run':root.position.x=s*.5;root.position.y=Math.abs(Math.sin(p*8))*.09;body.rotation.z=-Math.sin(p*8)*.055;gait(8,.11,.13);arm(0,-.3,beat*.6);arm(1,.3,-beat*.6);break;
 case 'march':gait(4,.045,.16);root.position.y=(1-Math.cos(p*8))*.018;arm(0,-.2,beat*.48);arm(1,.2,-beat*.48);body.scale.y=1.025;break;
 case 'moonwalk':root.position.x=-s*.5;gait(4,.13,.035);body.rotation.x=-.07;arm(0,-.5);arm(1,.5);feet.forEach(f=>f.rotation.x=-.08);break;
 case 'sideStep':root.position.x=Math.sin(p*2)*.34;feet.forEach((f,i)=>{f.position.x+=(i?1:-1)*Math.sin(p*2)*.16;f.position.y+=Math.max(0,Math.sin(p*4+i*Math.PI))*.065;});root.rotation.z=Math.sin(p*4)*.045;break;
 case 'balance':root.rotation.z=s*.16;feet[1].position.y+=.16;feet[1].rotation.z=-.25;arm(0,-1.25+s*.15);arm(1,1.25+s*.15);eyes.forEach(e=>e.position.x-=s*.025);break;
 case 'stumble':{const j=Math.sin(p*2);root.rotation.z=j*.19;root.position.x=j*.13;body.scale.y=1-Math.abs(j)*.08;arm(0,-.8-j*.7);arm(1,.8-j*.7);feet[1].position.y+=Math.max(0,j)*.12;o(.035,.045);break;}
 case 'recover':root.rotation.z=s*.13*(.5+.5*c);arm(0,-.9-s*.4);arm(1,.9-s*.4);root.position.y=Math.abs(Math.sin(p*2))*.06;break;
 case 'roll':root.rotation.z=p;root.position.y=.99*(1-Math.cos(p));root.position.x=s*.36;arms.forEach(a=>a.scale.setScalar(.65));feet.forEach(f=>f.scale.multiplyScalar(.8));break;
 case 'wobble':body.rotation.z=s*.16;body.scale.set(1+beat*.055,1-beat*.05,1);arms.forEach((a,i)=>a.rotation.z=(i?1:-1)*(.2+Math.sin(p*4-.5)*.15));break;
 case 'jellyWave':body.rotation.z=Math.sin(p*2)*.10;body.scale.set(1+Math.sin(p*2)*.08,1+Math.sin(p*2-.7)*.08,1);pet.skin.morphTargetInfluences[0]=Math.sin(p*2)*.8;arm(0,-.8+Math.sin(p*2-.5)*.4);arm(1,.8+Math.sin(p*2-1)*.4);break;
 case 'squash':body.scale.set(1+pulse*.28,1-pulse*.37,1+pulse*.16);arms.forEach((a,i)=>arm(i,(i?1:-1)*(.2+pulse*.5)));close(1-pulse*.6);break;
 case 'breatheDeep':body.scale.set(1+pulse*.045,1+pulse*.07,1+pulse*.045);close(.35);arm(0,-.55*pulse);arm(1,.55*pulse);o(.025,.02+pulse*.02);break;
 case 'meditate':root.position.y=.07+.025*s;body.scale.y=.94;close(.055);feet.forEach((f,i)=>{f.position.x=(i?1:-1)*.24;f.rotation.z=(i?-1:1)*.35;});hold(.51);break;
 case 'relax':body.scale.set(1.09,.86+.012*s,1.04);root.rotation.z=-.055;close(.35);arms.forEach((a,i)=>arm(i,(i?1:-1)*.50));break;
 case 'napCurl':body.scale.set(1.13,.67+.012*s,1.10);root.rotation.z=.10;close(.055);hold(.48);feet.forEach(f=>f.position.z=.05);break;
 case 'wakeUp':body.scale.set(1.08-pulse*.08,.81+pulse*.24,1);close(.12+pulse*.88);arm(0,-2*pulse);arm(1,2*pulse);o(.04,.025+pulse*.055);break;
 case 'dream':close(.18);root.rotation.z=s*.06;love.scale.setScalar(.34+.08*s);love.position.set(.47,1.65+pulse*.15,.15);arms.forEach((a,i)=>arm(i,(i?1:-1)*.35));break;
 case 'sneeze':{const q=Math.sin(p*3),k=Math.max(0,q)**8;body.rotation.x=-.08+.28*k;body.scale.y=1.03-k*.12;arms[1].position.set(.15,.85,.79);arms[1].scale.setScalar(.6);arm(1,1.55);close(1-k*.94);o(.04,.03+k*.04);break;}
 case 'hiccup':{const k=Math.max(0,beat)**6;root.position.y=k*.07;body.scale.y=1+k*.035;body.rotation.x=-k*.05;o(.027,.03);break;}
 case 'cough':arms[1].position.set(.12,.82,.77);arms[1].scale.setScalar(.56);arm(1,1.4);body.rotation.x=.12+Math.max(0,beat)*.04;close(.50);o(.04,.035);break;
 case 'cold':root.rotation.z=Math.sin(p*12)*.018;body.scale.set(.95,1.02,.97);hold(.71);close(.7);arms.forEach(a=>a.rotation.x=beat*.07);break;
 case 'hot':arm(1,1.1+Math.sin(p*8)*.35);arms[1].position.y=.95;body.scale.y=.94;close(.65);o(.038,.04);break;
 case 'thirsty':arms[1].position.set(.10,.75,.76);arms[1].scale.setScalar(.6);arm(1,1.5);o(.025,.03);body.rotation.z=-.04;eyes.forEach(e=>e.scale.y=.8);break;
 case 'hungry':hold(.54);arms.forEach((a,i)=>a.position.x+=(i?1:-1)*s*.025);body.scale.y=.95;mouth.scale.x=.6;eyes.forEach(e=>e.scale.y=.85);break;
 case 'lonely':body.scale.y=.92;root.rotation.z=s*.035;arm(1,.9+pulse*.4);eyes.forEach(e=>e.scale.y=.75);tear.scale.setScalar(.6*pulse);tear.position.set(-.31,.97-pulse*.20,.79);break;
 case 'grateful':hold(.80);body.rotation.x=pulse*.16;love.scale.setScalar(.35+.1*pulse);love.position.set(0,1.32,.84);close(.8);break;
 case 'excited':root.position.y=Math.abs(Math.sin(p*6))*.15;arm(0,-1.2-beat*.20);arm(1,1.2+beat*.2);body.scale.y=1+beat*.035;mouth.scale.set(1.3,1.3,1);break;
 case 'relieved':body.scale.set(1+.04*pulse,1-.08*pulse,1);close(.35+.30*(1-pulse));o(.025,.02+pulse*.02);arm(0,-.35);arm(1,.35);break;
 case 'disappointed':body.scale.y=.88;body.rotation.x=.08;mouth.rotation.z=Math.PI;mouth.scale.x=.75;close(.65);arms.forEach((a,i)=>arm(i,(i?-1:1)*.08));break;
 case 'determined':body.scale.y=1.06;body.rotation.x=.07;eyes.forEach((e,i)=>e.rotation.z=(i?-1:1)*.13);arm(0,-.65);arm(1,.65);root.position.y=pulse*.025;break;
 case 'read':book.scale.setScalar(.85);book.position.set(0,.70,.95);book.rotation.x=-.14;hold(.73);eyes.forEach(e=>{e.position.y-=.025;e.position.x+=s*.02;});body.rotation.x=.045;break;
 case 'write':book.scale.setScalar(.9);book.position.set(0,.48,.99);book.rotation.x=-.7;pencil.scale.setScalar(1);pencil.position.set(.17+.035*beat,.72,.99);pencil.rotation.z=-.4+s*.12;hold(.69);arms[1].position.x+=beat*.025;eyes.forEach(e=>e.position.y-=.025);break;
 case 'typing':laptop.scale.setScalar(.95);laptop.position.set(0,.51,.98);hold(.64);arms.forEach((a,i)=>a.position.y+=.025*Math.sin(p*8+i*Math.PI));body.rotation.x=.06;eyes.forEach(e=>e.scale.y=.9);break;
 case 'stretchArms':arm(0,-1.3-pulse*.9);arm(1,1.3+pulse*.9);body.rotation.z=s*.08;arms.forEach(a=>a.scale.setScalar(1+pulse*.10));close(.7);break;
 case 'clean':arms.forEach((a,i)=>{a.position.set((i?1:-1)*(.32+.06*s),.98+beat*.06,.72);a.scale.setScalar(.62);a.rotation.z=(i?-1:1)*1.4;});eyes.forEach(e=>e.scale.y=.35+.65*(1-pulse));break;
 }
}
