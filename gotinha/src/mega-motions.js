import * as THREE from 'three';
// 20 movement families × 10 choreographies. Each routine changes phrasing,
// timing, direction and secondary gestures, rather than renaming a pose.
const groups=[
 ['groove','Dança',['Samba miudinho','Samba com bracinhos','Balanço de reggae','Passinho de disco','Dança robótica','Ginga de forró','Valsa de gelatina','Dança em oito','Twist sorridente','Final de musical']],
 ['greeting','Cumprimentos',['Oi com as duas mãos','Aceno delicado','Olá bem animado','Saudação de capitão','Cumprimento real','Reverência de palco','Oi escondidinho','Tchau demorado','Aceno de reencontro','Bom dia espreguiçado']],
 ['sport','Esportes',['Aquecimento de corrida','Polichinelo suave','Agachamento fofo','Boxe de brincadeira','Goleiro atento','Arremesso imaginário','Surfe equilibrado','Remada de canoa','Pedalada no ar','Pulo de corda']],
 ['yoga','Alongamentos',['Alongar para o céu','Alongar para a esquerda','Alongar para a direita','Alongamento cruzado','Postura da árvore','Abraçar os joelhos','Alongar a cintura','Alongar antes de dormir','Alongamento em arco','Saudação ao sol']],
 ['balance','Equilíbrio',['Equilibrar no pé esquerdo','Equilibrar no pé direito','Caminhar na corda bamba','Equilibrar de olhos fechados','Prancha de surfista','Pêndulo tranquilo','Equilíbrio de bailarino','Passo no gelo','Balanço de barco','Recuperar sem cair']],
 ['joy','Alegria',['Receber uma boa notícia','Pulinhos de reencontro','Explosão de alegria','Dancinha da vitória','Festejar um objetivo','Comemorar com palmas','Alegria tímida','Sorriso radiante','Festa dos bracinhos','Agradecer uma surpresa']],
 ['curiosity','Exploração',['Investigar o chão','Olhar para o alto','Espiar pela esquerda','Espiar pela direita','Procurar uma estrelinha','Seguir uma borboleta','Escutar um barulhinho','Cheirar uma flor','Olhar atrás de si','Explorar devagarinho']],
 ['sleepy','Descanso',['Acomodar para dormir','Cochilo balançando','Soninho de tarde','Descansar as mãos','Soneca feliz','Suspirar de sono','Dormir abraçadinho','Ajeitar um travesseiro','Bocejo comprido','Preguiça de acordar']],
 ['wake','Despertar',['Abrir os olhos devagar','Bom dia com pulinho','Acordar espreguiçando','Acordar curioso','Sacudir o soninho','Acordar de um sonho','Preparar para o dia','Acordar bem humorado','Esticar os pezinhos','Saudação da manhã']],
 ['affection','Afeto',['Abraço apertadinho','Abraço de reencontro','Mandar beijinhos','Coração com as mãos','Carinho no próprio rosto','Agradecer companhia','Abraço de consolo','Oferecer um abraço','Carinho com sorriso','Amizade para sempre']],
 ['music','Música',['Reger uma orquestra','Tocar piano imaginário','Tocar violão imaginário','Bater um tamborzinho','Marcar o ritmo','Cantar baixinho','Cantar no palco','Tocar flauta imaginária','Tocar sininhos','Final de concerto']],
 ['work','Criatividade',['Rabiscar uma ideia','Pintar uma paisagem','Escrever com cuidado','Ler uma descoberta','Anotar um lembrete','Digitar concentrado','Conferir uma tarefa','Desenhar um coração','Pensar em uma solução','Celebrar uma ideia']],
 ['jelly','Gelatina',['Ondinha lateral','Molinho como pudim','Gelatina em espiral','Espichar e voltar','Pudim dançante','Onda de cima para baixo','Balanço elástico','Quase virar bolinha','Gelatina surpresa','Acomodar o corpinho']],
 ['sneak','Passinhos',['Passo silencioso','Passo de detetive','Marcha de formiguinha','Passo deslizante','Passinho indeciso','Passo de astronauta','Passo de desfile','Passo em zigue-zague','Passo na poça','Passo para uma surpresa']],
 ['shy','Emoções delicadas',['Vergonha de elogio','Sorriso de cantinho','Timidez com aceno','Esconder o rostinho','Pedir um favor','Ficar sem graça','Coragem para dizer oi','Agradecer baixinho','Olhar apaixonadinho','Surpresa delicada']],
 ['breathe','Tranquilidade',['Respirar em quatro tempos','Pausa de serenidade','Inspirar de olhos fechados','Soltar o peso do dia','Respirar com as mãos','Balanço de meditação','Pausa no gramado','Acalmar o coração','Ouvir a própria respiração','Relaxar por inteiro']],
 ['play','Brincadeiras',['Quicar uma bolinha','Equilibrar a bolinha','Jogar bolinha para cima','Passar a bola de lado','Esconde-esconde fofo','Pega-pega imaginário','Pular amarelinha','Brincar de estátua','Imitar um foguete','Fazer uma careta']],
 ['weather','Natureza',['Sentir uma brisa','Dançar na chuvinha','Olhar as nuvens','Sentir um raio de sol','Desviar de gotinhas','Brincar com o vento','Cheirar o jardim','Olhar um arco-íris','Escutar a chuva','Admirar o pôr do sol']],
 ['care','Autocuidado',['Lavar as mãozinhas','Limpar as bochechas','Pentear a gotinha','Ajeitar o sorriso','Escovar imaginariamente','Abraçar o próprio corpo','Conferir os pezinhos','Secar as mãozinhas','Sacudir a poeirinha','Pronto para passear']],
 ['show','Teatrinho',['Entrada de artista','Saudação de mágico','Apresentar uma surpresa','Contar uma historinha','Fazer suspense','Reação de plateia','Aplausos de pé','Final com reverência','Pose de herói','Até o próximo espetáculo']]
];
export const megaAnimations=groups.flatMap(([family,category,names])=>names.map((label,variant)=>({id:`plus_${family}_${variant+1}`,label,category,family,variant})));
const lookup=new Map(megaAnimations.map(a=>[a.id,a]));
export function poseMega(pet,state,t){
 const spec=lookup.get(state);if(!spec)return;
 const {root,body,arms,feet,eyes,mouth,smile,open,newProps,extras}=pet,v=spec.variant,side=v%2?1:-1,rate=.75+v*.065,p=t*Math.PI*rate,beat=Math.sin(p*2),wave=Math.sin(p),pulse=.5-.5*Math.cos(p),lag=Math.sin(p-.38),phrase=(t/(4.2+v*.19))%1;
 const reach=.65+v*.065,accent=Math.sin(phrase*Math.PI)**2;
 const hands=(a,b)=>{arms[0].rotation.z=a;arms[1].rotation.z=b;};
 const hold=(h=.75)=>arms.forEach((a,i)=>{a.position.set((i?1:-1)*.27,h,.77);a.rotation.set(-.15,0,(i?-1:1)*1.35);a.scale.setScalar(.65);});
 const close=n=>eyes.forEach(e=>e.scale.y=n);
 const gait=(stride=.055,lift=.06)=>feet.forEach((f,i)=>{const a=p*2+i*Math.PI;f.position.x+=Math.cos(a)*stride;f.position.y+=Math.max(0,Math.sin(a))*lift;f.rotation.z=Math.sin(a)*.09;});
 body.rotation.z=side*lag*.018;mouth.scale.x=1+accent*.1;
 switch(spec.family){
 case 'groove':root.position.x=Math.sin(p)*(.06+v*.014);root.position.y=Math.max(0,beat)*.055;root.rotation.z=beat*.055;body.rotation.y=Math.sin(p*.5)*.15;hands(-reach-wave*.28,reach+Math.sin(p+v*.4)*.28);arms.forEach((a,i)=>a.rotation.x=Math.cos(p*2+i+v)*.22);gait(.04+v*.004,.045);break;
 case 'greeting':{const lead=v%3===0?0:1;arms[lead].rotation.z=(lead?1:-1)*(1.6+pulse*.6);arms[lead].rotation.x=Math.sin(p*3)*.18;arms[1-lead].rotation.z=(lead?-1:1)*(.25+accent*v*.12);body.rotation.x=accent*(v===5?.35:.055);root.rotation.z=wave*.035;root.position.y=Math.max(0,beat)*v*.006;break;}
 case 'sport':body.position.y=-pulse*.07;body.scale.y=1-pulse*(.04+v*.004);root.position.y=Math.max(0,beat)*(.025+v*.018);hands(-.4-pulse*reach,.4+Math.sin(p+v*.3)*reach);arms.forEach((a,i)=>a.rotation.x=Math.sin(p*2+i*Math.PI)*(.2+v*.035));body.rotation.y=side*wave*.12;gait(.035+v*.003,.04+v*.006);break;
 case 'yoga':body.scale.y=1+pulse*.09;body.rotation.z=side*pulse*(.04+v*.012);hands(-.25-pulse*(1.1+v*.08),.25+pulse*(1.1+(9-v)*.08));arms.forEach((a,i)=>a.rotation.x=side*pulse*(i?.1:-.1)*v);close(.45+.5*(1-pulse));feet[v%2].position.y+=pulse*.04;break;
 case 'balance':root.rotation.z=side*wave*(.055+v*.005);body.rotation.y=lag*.1;hands(-.8-wave*.22,.8+wave*.22);feet[v%2].position.y+=.06+pulse*(.04+v*.006);feet[v%2].position.x+=side*pulse*.05;arms.forEach((a,i)=>a.rotation.x=Math.sin(p+i)*.13);break;
 case 'joy':root.position.y=Math.max(0,beat)*(.12+v*.018);body.scale.y=1+Math.sin(p*4)*.04;root.rotation.z=side*wave*.06;hands(-1.1-pulse*reach,1.1+pulse*reach);if(v%3===0)hold(.9+accent*.16);close(.35+.55*(1-accent));gait(.03,.06);break;
 case 'curiosity':body.rotation.y=Math.sin(p*.65+v*.2)*(.1+v*.018);root.rotation.z=side*wave*.055;body.rotation.x=(pulse-.5)*(.08+v*.012);eyes.forEach(e=>{e.position.x+=side*Math.sin(p*.7)*.04;e.position.y+=Math.cos(p*.7+v*.1)*.018;});arms[v%2].rotation.z=side*(.45+accent*.5);gait(.01,.015);break;
 case 'sleepy':body.scale.set(1.12,.79+Math.sin(p*.5)*.018,1.04);root.rotation.z=side*.04+wave*.012;close(.07+Math.max(0,beat)*.025);hold(.55+v*.006);smile.scale.setScalar(.0001);open.scale.set(.022,.026+pulse*.006,.018);extras.zzz.scale.setScalar(.7+v*.025);feet.forEach(f=>f.scale.y=.11);break;
 case 'wake':{const rise=.5-.5*Math.cos(p*.5);body.scale.y=.85+rise*.22;body.scale.x=1.08-rise*.08;close(.1+rise*.9);hands(-.2-rise*reach,.2+rise*reach);root.position.y=Math.max(0,beat)*rise*v*.009;body.rotation.z=side*(1-rise)*.035;gait(.025*rise,.035*rise);break;}
 case 'affection':hold(.7+accent*.13);arms.forEach((a,i)=>{a.position.x=(i?1:-1)*(.29-accent*.1);a.rotation.x=wave*.1;a.rotation.z+=(i?1:-1)*Math.sin(p+v*.2)*.14;});root.rotation.z=side*wave*.045;close(.5+pulse*.4);newProps.love.scale.setScalar(.4+accent*(.2+v*.02));newProps.love.position.set(side*.05,1.43+accent*.18,.65);newProps.love.rotation.z=wave*.1;break;
 case 'music':hold(.72);arms.forEach((a,i)=>{a.rotation.x=Math.sin(p*(i?2:3)+v*.3)*(.18+v*.02);a.position.y+=Math.sin(p*2+i)*.04;a.position.x+=Math.sin(p+i)*.04;});body.rotation.z=lag*.04;root.position.y=Math.max(0,beat)*.025;mouth.scale.y=1.2+accent*.2;if(v===0||v===9)hands(-.7-pulse, .7+pulse);break;
 case 'work':hold(.67);body.rotation.x=.08;eyes.forEach(e=>e.scale.y=.78);arms[1].position.y+=beat*.025;arms[1].rotation.x=Math.sin(p*3)*.13;root.rotation.z=side*wave*.018;if(v===3){newProps.book.scale.setScalar(.85);newProps.book.position.set(0,.7,.95);}else if(v===5){newProps.laptop.scale.setScalar(.85);newProps.laptop.position.set(0,.46,.85);}else{newProps.pencil.scale.setScalar(1);newProps.pencil.position.set(.2+wave*.025,.72+beat*.02,.95);newProps.pencil.rotation.z=.4+beat*.1;}break;
 case 'jelly':body.scale.set(1+beat*(.035+v*.006),1-beat*(.06+v*.007),1+Math.sin(p+.4)*.025);body.rotation.z=lag*(.04+v*.005);body.rotation.y=wave*.13;hands(-.3-wave*.25,.3+wave*.25);root.position.y=Math.max(0,beat)*.035;break;
 case 'sneak':gait(.035+v*.008,.035+v*.006);root.position.x=side*Math.sin(p*.5)*(.06+v*.012);root.position.y=Math.max(0,beat)*.025;body.rotation.y=side*.1+wave*.05;arms.forEach((a,i)=>a.rotation.x=Math.sin(p*2+i*Math.PI)*(.14+v*.015));body.scale.y=.96+beat*.012;break;
 case 'shy':hold(.63+accent*.1);root.rotation.z=side*(.02+wave*.025);eyes.forEach(e=>{e.scale.y=.7+accent*.15;e.position.x+=side*.022;});arms[v%2].position.y+=pulse*.16;arms[v%2].position.z+=.025;mouth.scale.x=.6+pulse*.2;body.scale.y=.97+lag*.012;break;
 case 'breathe':{const breath=.5-.5*Math.cos(p*.65);body.scale.set(1+breath*.025,1+breath*(.03+v*.003),1+breath*.02);hands(-.25-breath*.32,.25+breath*.32);close(.14+v*.025);root.rotation.z=wave*.01;arms.forEach(a=>a.position.y+=breath*.04);break;}
 case 'play':root.rotation.z=side*wave*.045;gait(.03,.04);if(v<4){extras.ball.scale.setScalar(.85);extras.ball.position.set(side*(.45+wave*.13),.28+Math.abs(beat)*(.28+v*.09),.8);extras.ball.rotation.z=p*2;arms[v%2].rotation.z=side*(.7+beat*.25);}else{hands(-.5-pulse*reach,.5+pulse*reach);root.position.y=Math.max(0,beat)*(.04+(v-4)*.035);body.rotation.y=wave*.15;}break;
 case 'weather':body.rotation.x=-.03-pulse*.04;body.rotation.z=side*lag*.04;eyes.forEach(e=>e.position.y+=pulse*.025);hands(-.25-pulse*(.2+v*.07),.25+pulse*(.2+v*.07));body.rotation.y=wave*.08;root.position.y=Math.max(0,beat)*v*.004;break;
 case 'care':hold(.75);const hand=arms[v%2];hand.position.set(side*(.22+wave*.05),.82+pulse*(.1+v*.01),.8);hand.rotation.x=beat*.15;hand.rotation.z=side*(1.1+wave*.15);body.rotation.z=-side*lag*.035;eyes.forEach(e=>e.scale.y=.75+pulse*.2);break;
 case 'show':root.rotation.z=side*wave*.04;body.rotation.y=Math.sin(p*.5)*.16;hands(-.4-pulse*reach,.4+accent*(1+v*.07));body.rotation.x=accent*(v===7?.3:.045);root.position.y=Math.max(0,beat)*(.025+v*.007);feet[v%2].position.x+=side*accent*.05;break;
 }
 // A short anticipation and a delayed recovery make the gestures feel soft.
 arms.forEach((a,i)=>a.rotation.y+=Math.sin(p-.3+i*.25+v*.1)*.035);
}
