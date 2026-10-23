(()=>{var qc=0,ll=1,Xc=2;var js=1,Yc=2,ji=3,Jn=0,Rt=1,bn=2,Mn=0,Qi=1,cl=2,hl=3,ul=4,Zc=5;var mi=100,Jc=101,$c=102,Kc=103,jc=104,Qc=200,eh=201,th=202,nh=203,dl=204,fl=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,Hr=0,Gr=1,Wr=2,zi=3,qr=4,Xr=5,Yr=6,Zr=7,Ma=0,dh=1,fh=2,ln=0,pl=1,ml=2,gl=3,Qs=4,xl=5,_l=6,vl=7;var yl=300,$n=301,gi=302,Sa=303,Ea=304,er=306,Jr=1e3,pn=1001,$r=1002,Et=1003,ph=1004;var tr=1005;var Tt=1006,wa=1007;var Kn=1008;var Vt=1009,bl=1010,Ml=1011,es=1012,Ta=1013,cn=1014,jt=1015,hn=1016,Aa=1017,Ca=1018,ts=1020,Sl=35902,El=35899,wl=1021,Tl=1022,Qt=1023,mn=1026,jn=1027,Ra=1028,Pa=1029,Qn=1030,Ia=1031;var La=1033,nr=33776,ir=33777,sr=33778,rr=33779,Da=35840,Na=35841,Ua=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37488,Va=37489,ar=37490,Ha=37491,Ga=37808,Wa=37809,qa=37810,Xa=37811,Ya=37812,Za=37813,Ja=37814,$a=37815,Ka=37816,ja=37817,Qa=37818,eo=37819,to=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,or=36285,lo=36286;var vs=2300,Kr=2301,kr=2302,$o=2303,Ko=2400,jo=2401,Qo=2402;var mh=3200;var lr=0,gh=1,Ln="",Ft="srgb",ys="srgb-linear",bs="linear",ot="srgb";var Vr=7680;var xh=519,_h=512,vh=513,yh=514,co=515,bh=516,Mh=517,ho=518,Sh=519,Eh=35044;var Al="300 es",an=2e3,ki=2001;function Xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){let i=Ms("canvas");return i.style.display="block",i}var fc={},Vi=null;function Cl(...i){let e="THREE."+i.shift();Vi?Vi("log",e,...i):console.log(e,...i)}function Th(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Th(i);let e="THREE."+i.shift();if(Vi)Vi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Th(i);let e="THREE."+i.shift();if(Vi)Vi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function oi(...i){let e=i.join(" ");e in fc||(fc[e]=!0,He(...i))}function Ah(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ch={[Hr]:Gr,[Wr]:Yr,[qr]:Zr,[zi]:Xr,[Gr]:Hr,[Yr]:Wr,[Zr]:qr,[Xr]:zi},gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=1234567,ms=Math.PI/180,Hi=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Rl(i,e){return(i%e+e)%e}function Zu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ju(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function $u(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function Ku(i,e=1){return e-Math.abs(Rl(i,e*2)-e)}function ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ed(i,e){return i+Math.floor(Math.random()*(e-i+1))}function td(i,e){return i+Math.random()*(e-i)}function nd(i){return i*(.5-Math.random())}function id(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sd(i){return i*ms}function rd(i){return i*Hi}function ad(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),m=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*m,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*m,o*c);break;case"ZXZ":i.set(l*m,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ei={DEG2RAD:ms,RAD2DEG:Hi,generateUUID:xi,clamp:Qe,euclideanModulo:Rl,mapLinear:Zu,inverseLerp:Ju,lerp:gs,damp:$u,pingpong:Ku,smoothstep:ju,smootherstep:Qu,randInt:ed,randFloat:td,randFloatSpread:nd,seededRandom:id,degToRad:sd,radToDeg:rd,isPowerOfTwo:ad,ceilPowerOfTwo:od,floorPowerOfTwo:ld,setQuaternionFromProperEuler:cd,normalize:Ut,denormalize:Oi},pe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(m!==v||l!==h||c!==d||u!==g){let f=l*h+c*d+u*g+m*v;f<0&&(h=-h,d=-d,g=-g,v=-v,f=-f);let p=1-o;if(f<.9995){let b=Math.acos(f),M=Math.sin(b);p=Math.sin(p*b)/M,o=Math.sin(o*b)/M,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,m=m*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,m=m*p+v*o;let b=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=b,c*=b,u*=b,m*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*m+l*d-c*h,e[t+1]=l*g+u*h+c*m-o*d,e[t+2]=c*g+u*d+o*h-l*m,e[t+3]=u*g-o*m-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*m+c*d*g,this._y=c*d*m-h*u*g,this._z=c*u*g+h*d*m,this._w=c*u*m-h*d*g;break;case"YXZ":this._x=h*u*m+c*d*g,this._y=c*d*m-h*u*g,this._z=c*u*g-h*d*m,this._w=c*u*m+h*d*g;break;case"ZXY":this._x=h*u*m-c*d*g,this._y=c*d*m+h*u*g,this._z=c*u*g+h*d*m,this._w=c*u*m-h*d*g;break;case"ZYX":this._x=h*u*m-c*d*g,this._y=c*d*m+h*u*g,this._z=c*u*g-h*d*m,this._w=c*u*m+h*d*g;break;case"YZX":this._x=h*u*m+c*d*g,this._y=c*d*m+h*u*g,this._z=c*u*g-h*d*m,this._w=c*u*m-h*d*g;break;case"XZY":this._x=h*u*m-c*d*g,this._y=c*d*m-h*u*g,this._z=c*u*g+h*d*m,this._w=c*u*m+h*d*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],h=n+o+m;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>m){let d=2*Math.sqrt(1+n-o-m);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>m){let d=2*Math.sqrt(1+o-n-m);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+m-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new F,mc=new xn,Xe=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],h=n[2],d=n[5],g=n[8],v=s[0],f=s[3],p=s[6],b=s[1],M=s[4],_=s[7],S=s[2],T=s[5],w=s[8];return r[0]=a*v+o*b+l*S,r[3]=a*f+o*M+l*T,r[6]=a*p+o*_+l*w,r[1]=c*v+u*b+m*S,r[4]=c*f+u*M+m*T,r[7]=c*p+u*_+m*w,r[2]=h*v+d*b+g*S,r[5]=h*f+d*M+g*T,r[8]=h*p+d*_+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*m+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=m*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new Xe,gc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){let i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:e,whitePoint:n,transfer:bs,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var tt=hd();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Si,jr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Ms("canvas")),Si.width=e.width,Si.height=e.height;let s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ms("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ud=0,Gi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Co(s[a].image)):r.push(Co(s[a]))}else r=Co(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var dd=0,Ro=new F,zt=class i extends gn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pn,s=pn,r=Tt,a=Kn,o=Qt,l=Vt,c=i.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=xi(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=yl;zt.DEFAULT_ANISOTROPY=1;var gt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],m=l[8],h=l[1],d=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(m-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(d+1)/2,S=(p+1)/2,T=(u+h)/4,w=(m+v)/4,x=(g+f)/4;return M>_&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=w/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(m-v)*(m-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(m-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qr=class extends gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends Qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ss=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ct=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,m,h,d,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,m,h,d,g,v,f)}set(e,t,n,s,r,a,o,l,c,u,m,h,d,g,v,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=m,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*m,g=o*u,v=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*m,g=c*u,v=c*m;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*m,g=c*u,v=c*m;t[0]=h-v*o,t[4]=-a*m,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*m,g=o*u,v=o*m;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*m,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*m,t[8]=g*m+d,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*m+g,t[10]=h-v*m}else if(e.order==="XZY"){let h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=h*m+v,t[5]=a*u,t[9]=d*m-g,t[2]=g*m-d,t[6]=o*u,t[10]=v*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,pd)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Fn.crossVectors(n,Ht),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Fn.crossVectors(n,Ht)),Fn.normalize(),_r.crossVectors(Ht,Fn),s[0]=Fn.x,s[4]=_r.x,s[8]=Ht.x,s[1]=Fn.y,s[5]=_r.y,s[9]=Ht.y,s[2]=Fn.z,s[6]=_r.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],h=n[9],d=n[13],g=n[2],v=n[6],f=n[10],p=n[14],b=n[3],M=n[7],_=n[11],S=n[15],T=s[0],w=s[4],x=s[8],A=s[12],R=s[1],L=s[5],D=s[9],P=s[13],C=s[2],O=s[6],$=s[10],B=s[14],V=s[3],N=s[7],G=s[11],Z=s[15];return r[0]=a*T+o*R+l*C+c*V,r[4]=a*w+o*L+l*O+c*N,r[8]=a*x+o*D+l*$+c*G,r[12]=a*A+o*P+l*B+c*Z,r[1]=u*T+m*R+h*C+d*V,r[5]=u*w+m*L+h*O+d*N,r[9]=u*x+m*D+h*$+d*G,r[13]=u*A+m*P+h*B+d*Z,r[2]=g*T+v*R+f*C+p*V,r[6]=g*w+v*L+f*O+p*N,r[10]=g*x+v*D+f*$+p*G,r[14]=g*A+v*P+f*B+p*Z,r[3]=b*T+M*R+_*C+S*V,r[7]=b*w+M*L+_*O+S*N,r[11]=b*x+M*D+_*$+S*G,r[15]=b*A+M*P+_*B+S*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],h=e[10],d=e[14],g=e[3],v=e[7],f=e[11],p=e[15],b=l*d-c*h,M=o*d-c*m,_=o*h-l*m,S=a*d-c*u,T=a*h-l*u,w=a*m-o*u;return t*(v*b-f*M+p*_)-n*(g*b-f*S+p*T)+s*(g*M-v*S+p*w)-r*(g*_-v*T+f*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],h=e[10],d=e[11],g=e[12],v=e[13],f=e[14],p=e[15],b=t*o-n*a,M=t*l-s*a,_=t*c-r*a,S=n*l-s*o,T=n*c-r*o,w=s*c-r*l,x=u*v-m*g,A=u*f-h*g,R=u*p-d*g,L=m*f-h*v,D=m*p-d*v,P=h*p-d*f,C=b*P-M*D+_*L+S*R-T*A+w*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=(o*P-l*D+c*L)*O,e[1]=(s*D-n*P-r*L)*O,e[2]=(v*w-f*T+p*S)*O,e[3]=(h*T-m*w-d*S)*O,e[4]=(l*R-a*P-c*A)*O,e[5]=(t*P-s*R+r*A)*O,e[6]=(f*_-g*w-p*M)*O,e[7]=(u*w-h*_+d*M)*O,e[8]=(a*D-o*R+c*x)*O,e[9]=(n*R-t*D-r*x)*O,e[10]=(g*T-v*_+p*b)*O,e[11]=(m*_-u*T-d*b)*O,e[12]=(o*A-a*L-l*x)*O,e[13]=(t*L-n*A+s*x)*O,e[14]=(v*M-g*S-f*b)*O,e[15]=(u*S-m*M+h*b)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,m=o+o,h=r*c,d=r*u,g=r*m,v=a*u,f=a*m,p=o*m,b=l*c,M=l*u,_=l*m,S=n.x,T=n.y,w=n.z;return s[0]=(1-(v+p))*S,s[1]=(d+_)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(h+p))*T,s[6]=(f+b)*T,s[7]=0,s[8]=(g+M)*w,s[9]=(f-b)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),l=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);let c=1/a,u=1/o,m=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=m,tn.elements[9]*=m,tn.elements[10]*=m,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2*r/(t-e),m=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===an)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ki)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2/(t-e),m=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===an)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ki)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ei=new F,tn=new ct,fd=new F(0,0,0),pd=new F(1,1,1),Fn=new F,_r=new F,Ht=new F,_c=new ct,vc=new xn,_n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},md=0,yc=new F,wi=new xn,wn=new ct,vr=new F,ls=new F,gd=new F,xd=new xn,bc=new F(1,0,0),Mc=new F(0,1,0),Sc=new F(0,0,1),Ec={type:"added"},_d={type:"removed"},Ti={type:"childadded",child:null},Po={type:"childremoved",child:null},wt=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new _n,n=new xn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(Sc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(Sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ls,vr,this.up):wn.lookAt(vr,ls,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(wn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new F(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vd={type:"move"},qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=u.position.distanceTo(m.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Rl(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Io(a,r,e+1/3),this.g=Io(a,r,e),this.b=Io(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return tt.workingToColorSpace(Lt.copy(this),e),Math.round(Qe(Lt.r*255,0,255))*65536+Math.round(Qe(Lt.g*255,0,255))*256+Math.round(Qe(Lt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Lt.copy(this),t);let n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ft){tt.workingToColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,s=Lt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(yr);let n=gs(On.h,yr.h,t),s=gs(On.s,yr.s,t),r=gs(On.l,yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ze;Ze.NAMES=Rh;var li=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},nn=new F,Tn=new F,Lo=new F,An=new F,Ai=new F,Ci=new F,wc=new F,Do=new F,No=new F,Uo=new F,Fo=new gt,Oo=new gt,Bo=new gt,Vn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),Tn.subVectors(n,t),Lo.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(Tn),l=nn.dot(Lo),c=Tn.dot(Tn),u=Tn.dot(Lo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let h=1/m,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),Tn.subVectors(e,t),nn.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),nn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ai.subVectors(s,n),Ci.subVectors(r,n),Do.subVectors(e,n);let l=Ai.dot(Do),c=Ci.dot(Do);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,s);let u=Ai.dot(No),m=Ci.dot(No);if(u>=0&&m<=u)return t.copy(s);let h=l*m-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ai,a);Uo.subVectors(e,r);let d=Ai.dot(Uo),g=Ci.dot(Uo);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ci,o);let f=u*g-d*m;if(f<=0&&m-u>=0&&d-g>=0)return wc.subVectors(r,s),o=(m-u)/(m-u+(d-g)),t.copy(s).addScaledVector(wc,o);let p=1/(f+v+h);return a=v*p,o=h*p,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Mr.subVectors(this.max,cs),Ri.subVectors(e.a,cs),Pi.subVectors(e.b,cs),Ii.subVectors(e.c,cs),Bn.subVectors(Pi,Ri),zn.subVectors(Ii,Pi),ni.subVectors(Ri,Ii);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!zo(t,Ri,Pi,Ii,Mr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,Ri,Pi,Ii,Mr))?!1:(Sr.crossVectors(Bn,zn),t=[Sr.x,Sr.y,Sr.z],zo(t,Ri,Pi,Ii,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Cn=[new F,new F,new F,new F,new F,new F,new F,new F],sn=new F,br=new vn,Ri=new F,Pi=new F,Ii=new F,Bn=new F,zn=new F,ni=new F,cs=new F,Mr=new F,Sr=new F,ii=new F;function zo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var yt=new F,Er=new pe,yd=0,Wt=class extends gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Es=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ws=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bd=new vn,hs=new F,ko=new F,Hn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(ko)),this.expandByPoint(hs.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Md=0,Kt=new ct,Vo=new wt,Li=new F,Gt=new vn,us=new vn,St=new F,At=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)?ws:Es)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,us.min),Gt.expandByPoint(St),St.addVectors(Gt.max,us.max),Gt.expandByPoint(St)):(Gt.expandByPoint(us.min),Gt.expandByPoint(us.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)St.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),St.add(Li)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;let c=new F,u=new F,m=new F,h=new pe,d=new pe,g=new pe,v=new F,f=new F;function p(x,A,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),m.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),u.sub(c),m.sub(c),d.sub(h),g.sub(h);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(m,-d.y).multiplyScalar(L),f.copy(m).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),o[x].add(v),o[A].add(v),o[R].add(v),l[x].add(f),l[A].add(f),l[R].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,A=b.length;x<A;++x){let R=b[x],L=R.start,D=R.count;for(let P=L,C=L+D;P<C;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new F,_=new F,S=new F,T=new F;function w(x){S.fromBufferAttribute(s,x),T.copy(S);let A=o[x];M.copy(A),M.sub(S.multiplyScalar(S.dot(A))).normalize(),_.crossVectors(T,A);let L=_.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,L)}for(let x=0,A=b.length;x<A;++x){let R=b[x],L=R.start,D=R.count;for(let P=L,C=L+D;P<C;P+=3)w(e.getX(P+0)),w(e.getX(P+1)),w(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,m=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,m=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Wt(h,u,m)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,h=c.length;m<h;m++){let d=c[m];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],m=r[c];for(let h=0,d=m.length;h<d;h++)u.push(m[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ho=new F,Sd=new F,Ed=new Xe,rn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ho.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ed.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wd=0,In=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Qi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Rn=new F,Go=new F,wr=new F,Tr=new F,Ts=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Go.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(Go);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=Tr.dot(this.direction),l=-Tr.dot(wr),c=Tr.lengthSq(),u=Math.abs(1-a*a),m,h,d,g;if(u>0)if(m=a*l-o,h=a*o-l,g=r*u,m>=0)if(h>=-g)if(h<=g){let v=1/u;m*=v,h*=v,d=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),d=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),d=-m*m+h*(h+2*l)+c;else h<=-g?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),d=-m*m+h*(h+2*l)+c):h<=g?(m=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),d=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),d=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Go).addScaledVector(wr,h),d}intersectSphere(e,t){if(e.radius<0)return null;Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-h.z)*m,l=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,l=(e.min.z-h.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,f=t.z-a.z,p=n.x-a.x,b=n.y-a.y,M=n.z-a.z,_=Math.abs(l),S=Math.abs(c),T=Math.abs(u),w,x,A,R,L,D,P,C,O,$,B,V;if(_>=S&&_>=T?(A=l,D=m,O=g,V=p,l>=0?(w=c,x=u,R=h,L=d,P=v,C=f,$=b,B=M):(w=u,x=c,R=d,L=h,P=f,C=v,$=M,B=b)):S>=T?(A=c,D=h,O=v,V=b,c>=0?(w=u,x=l,R=d,L=m,P=f,C=g,$=M,B=p):(w=l,x=u,R=m,L=d,P=g,C=f,$=p,B=M)):(A=u,D=d,O=f,V=M,u>=0?(w=l,x=c,R=m,L=h,P=g,C=v,$=p,B=b):(w=c,x=l,R=h,L=m,P=v,C=g,$=b,B=p)),A===0)return null;let N=w/A,G=x/A,Z=1/A,ae=R-N*D,fe=L-G*D,Ve=P-N*O,ze=C-G*O,We=$-N*V,te=B-G*V,ne=We*ze-te*Ve,me=ae*te-fe*We,Oe=Ve*fe-ze*ae;if(s){if(ne<0||me<0||Oe<0)return null}else if((ne<0||me<0||Oe<0)&&(ne>0||me>0||Oe>0))return null;let ge=ne+me+Oe;if(ge===0)return null;let Re=Z*(ne*D+me*O+Oe*V);return(ge>0?Re<0:Re>0)?null:this.at(Re/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tc=new ct,si=new Ts,Ar=new Hn,Ac=new F,Cr=new F,Rr=new F,Pr=new F,Wo=new F,Ir=new F,Cc=new F,Lr=new F,Ye=class extends wt{constructor(e=new At,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(Wo.fromBufferAttribute(m,e),a?Ir.addScaledVector(Wo,u):Ir.addScaledVector(Wo.sub(t),u))}t.add(Ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Ar.containsPoint(si.origin)===!1&&(si.intersectSphere(Ar,Ac)===null||si.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(Tc.copy(r).invert(),si.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let f=h[g],p=a[f.materialIndex],b=Math.max(f.start,d.start),M=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let _=b,S=M;_<S;_+=3){let T=o.getX(_),w=o.getX(_+1),x=o.getX(_+2);s=Dr(this,p,e,n,c,u,m,T,w,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let f=g,p=v;f<p;f+=3){let b=o.getX(f),M=o.getX(f+1),_=o.getX(f+2);s=Dr(this,a,e,n,c,u,m,b,M,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let f=h[g],p=a[f.materialIndex],b=Math.max(f.start,d.start),M=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let _=b,S=M;_<S;_+=3){let T=_,w=_+1,x=_+2;s=Dr(this,p,e,n,c,u,m,T,w,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let f=g,p=v;f<p;f+=3){let b=f,M=f+1,_=f+2;s=Dr(this,a,e,n,c,u,m,b,M,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Td(i,e,t,n,s,r,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:i}}function Dr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Cr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Pr);let u=Td(i,e,t,n,Cr,Rr,Pr,Cc);if(u){let m=new F;Vn.getBarycoord(Cc,Cr,Rr,Pr,m),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,l,c,m,new pe)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,l,c,m,new pe)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,m,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Vn.getNormal(Cr,Rr,Pr,h.normal),u.face=h,u.barycoord=m}return u}var As=class extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Et,u=Et,m,h){super(null,a,o,l,c,u,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Di=new ct,Rc=new ct,Nr=[],Pc=new vn,Ad=new ct,ds=new Ye,fs=new Hn,Rs=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ad)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Pc.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Pc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),fs.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Rc.multiplyMatrices(n,Di),ds.matrixWorld=Rc,ds.raycast(e,Nr);for(let a=0,o=Nr.length;a<o;a++){let l=Nr[a];l.instanceId=r,l.object=this,t.push(l)}Nr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(s*this.count),s,this.count,Ra,jt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ri=new Hn,Cd=new pe(.5,.5),Ur=new F,Xi=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],h=r[6],d=r[7],g=r[8],v=r[9],f=r[10],p=r[11],b=r[12],M=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,d-u,p-g,S-b).normalize(),s[1].setComponents(c+a,d+u,p+g,S+b).normalize(),s[2].setComponents(c+o,d+m,p+v,S+M).normalize(),s[3].setComponents(c-o,d-m,p-v,S-M).normalize(),n)s[4].setComponents(l,h,f,_).normalize(),s[5].setComponents(c-l,d-h,p-f,S-_).normalize();else if(s[4].setComponents(c-l,d-h,p-f,S-_).normalize(),t===an)s[5].setComponents(c+l,d+h,p+f,S+_).normalize();else if(t===ki)s[5].setComponents(l,h,f,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);let t=Cd.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ur.x=s.normal.x>0?e.max.x:e.min.x,Ur.y=s.normal.y>0?e.max.y:e.min.y,Ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends zt{constructor(e=[],t=$n,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Gn=class extends zt{constructor(e,t,n=cn,s,r,a,o=Et,l=Et,c,u=mn,m=1){if(u!==mn&&u!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:m};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ta=class extends Gn{constructor(e,t=cn,n=$n,s,r,a=Et,o=Et,l,c=mn){let u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Is=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2));function g(v,f,p,b,M,_,S,T,w,x,A){let R=_/w,L=S/x,D=_/2,P=S/2,C=T/2,O=w+1,$=x+1,B=0,V=0,N=new F;for(let G=0;G<$;G++){let Z=G*L-P;for(let ae=0;ae<O;ae++){let fe=ae*R-D;N[v]=fe*b,N[f]=Z*M,N[p]=C,c.push(N.x,N.y,N.z),N[v]=0,N[f]=0,N[p]=T>0?1:-1,u.push(N.x,N.y,N.z),m.push(ae/w),m.push(1-G/x),B+=1}}for(let G=0;G<x;G++)for(let Z=0;Z<w;Z++){let ae=h+Z+O*G,fe=h+Z+O*(G+1),Ve=h+(Z+1)+O*(G+1),ze=h+(Z+1)+O*G;l.push(ae,fe,ze),l.push(fe,Ve,ze),V+=6}o.addGroup(d,V,A),d+=V,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ls=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,u=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,h=3;m<=t;m++,h+=3){let d=n+m/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ci=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],h=[],d=[],g=0,v=[],f=n/2,p=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function b(){let _=new F,S=new F,T=0,w=(t-e)/n;for(let x=0;x<=r;x++){let A=[],R=x/r,L=R*(t-e)+e;for(let D=0;D<=s;D++){let P=D/s,C=P*l+o,O=Math.sin(C),$=Math.cos(C);S.x=L*O,S.y=-R*n+f,S.z=L*$,m.push(S.x,S.y,S.z),_.set(O,w,$).normalize(),h.push(_.x,_.y,_.z),d.push(P,1-R),A.push(g++)}v.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let R=v[A][x],L=v[A+1][x],D=v[A+1][x+1],P=v[A][x+1];(e>0||A!==0)&&(u.push(R,L,P),T+=3),(t>0||A!==r-1)&&(u.push(L,D,P),T+=3)}c.addGroup(p,T,0),p+=T}function M(_){let S=g,T=new pe,w=new F,x=0,A=_===!0?e:t,R=_===!0?1:-1;for(let D=1;D<=s;D++)m.push(0,f*R,0),h.push(0,R,0),d.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let C=D/s*l+o,O=Math.cos(C),$=Math.sin(C);w.x=A*$,w.y=f*R,w.z=A*O,m.push(w.x,w.y,w.z),h.push(0,R,0),T.x=O*.5+.5,T.y=$*.5*R+.5,d.push(T.x,T.y),g++}for(let D=0;D<s;D++){let P=S+D,C=L+D;_===!0?u.push(C,C+1,P):u.push(C+1,C,P),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ds=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new F,_=new F,S=new F;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],_),d(t[T+2],S),l(M,_,S,b)}function l(b,M,_,S){let T=S+1,w=[];for(let x=0;x<=T;x++){w[x]=[];let A=b.clone().lerp(_,x/T),R=M.clone().lerp(_,x/T),L=T-x;for(let D=0;D<=L;D++)D===0&&x===T?w[x][D]=A:w[x][D]=A.clone().lerp(R,D/L)}for(let x=0;x<T;x++)for(let A=0;A<2*(T-x)-1;A++){let R=Math.floor(A/2);A%2===0?(h(w[x][R+1]),h(w[x+1][R]),h(w[x][R])):(h(w[x][R+1]),h(w[x+1][R+1]),h(w[x+1][R]))}}function c(b){let M=new F;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(b),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let b=new F;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let _=f(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;a.push(_,1-S)}g(),m()}function m(){for(let b=0;b<a.length;b+=6){let M=a[b+0],_=a[b+2],S=a[b+4],T=Math.max(M,_,S),w=Math.min(M,_,S);T>.9&&w<.1&&(M<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function d(b,M){let _=b*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let b=new F,M=new F,_=new F,S=new F,T=new pe,w=new pe,x=new pe;for(let A=0,R=0;A<r.length;A+=9,R+=6){b.set(r[A+0],r[A+1],r[A+2]),M.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),T.set(a[R+0],a[R+1]),w.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),S.copy(b).add(M).add(_).divideScalar(3);let L=f(S);v(T,R+0,b,L),v(w,R+2,M,L),v(x,R+4,_,L)}}function v(b,M,_,S){S<0&&b.x===1&&(a[M]=b.x-1),_.x===0&&_.z===0&&(a[M]=S/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Xt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new ct;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends Xt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*m+this.aX,c=h*m+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},na=class extends Yi{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+m)+(l-o)/m;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ic=new F,Lc=new F,qo=new Pl,Xo=new Pl,Yo=new Pl,Zi=class extends Xt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Lc.subVectors(s[0],s[1]).add(s[0]),c=Lc);let m=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ic.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ic),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(m),d),v=Math.pow(m.distanceToSquared(h),d),f=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),qo.initNonuniformCatmullRom(c.x,m.x,h.x,u.x,g,v,f),Xo.initNonuniformCatmullRom(c.y,m.y,h.y,u.y,g,v,f),Yo.initNonuniformCatmullRom(c.z,m.z,h.z,u.z,g,v,f)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(c.x,m.x,h.x,u.x,this.tension),Xo.initCatmullRom(c.y,m.y,h.y,u.y,this.tension),Yo.initCatmullRom(c.z,m.z,h.z,u.z,this.tension));return n.set(qo.calc(l),Xo.calc(l),Yo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Rd(i,e){let t=1-i;return t*t*e}function Pd(i,e){return 2*(1-i)*i*e}function Id(i,e){return i*i*e}function xs(i,e,t,n){return Rd(i,e)+Pd(i,t)+Id(i,n)}function Ld(i,e){let t=1-i;return t*t*t*e}function Dd(i,e){let t=1-i;return 3*t*t*i*e}function Nd(i,e){return 3*(1-i)*i*i*e}function Ud(i,e){return i*i*i*e}function _s(i,e,t,n,s){return Ld(i,e)+Dd(i,t)+Nd(i,n)+Ud(i,s)}var Ns=class extends Xt{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(e,s.x,r.x,a.x,o.x),_s(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Xt{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(e,s.x,r.x,a.x,o.x),_s(e,s.y,r.y,a.y,o.y),_s(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Us=class extends Xt{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Xt{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends Xt{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(e,s.x,r.x,a.x),xs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hi=class extends Xt{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(e,s.x,r.x,a.x),xs(e,s.y,r.y,a.y),xs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Xt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Dc(o,l.x,c.x,u.x,m.x),Dc(o,l.y,c.y,u.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},ra=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:Zi,CubicBezierCurve:Ns,CubicBezierCurve3:ia,EllipseCurve:Yi,LineCurve:Us,LineCurve3:sa,QuadraticBezierCurve:Fs,QuadraticBezierCurve3:hi,SplineCurve:Os}),aa=class extends Xt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ra[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ra[s.type]().fromJSON(s))}return this}},Bs=class extends aa{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Us(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fs(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ns(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Yi(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wn=class extends Bs{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bs().fromJSON(s))}return this}};function Fd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ph(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vd(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,m=l;for(let h=t;h<s;h+=t){let d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>m&&(m=g)}c=Math.max(u-o,m-l),c=c!==0?32767/c:0}return zs(r,a,t,o,l,c,0),a}function Ph(i,e,t,n,s){let r;if(s===jd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Nc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Nc(a/n|0,i[a],i[a+1],r);return r&&Ji(r,r.next)&&(Vs(r),r=r.next),r}function ui(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||xt(t.prev,t,t.next)===0)){if(Vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Xd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Bd(i,n,s,r):Od(i)){e.push(l.i,i.i,c.i),Vs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zd(ui(i),e),zs(i,e,t,n,s,r,2)):a===2&&kd(i,e,t,n,s,r):zs(ui(i),e,t,n,s,r,1);break}}}function Od(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),m=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=m&&g.y<=d&&ps(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bd(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,m=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,m,h),v=Math.max(o,l,c),f=Math.max(u,m,h),p=el(d,g,e,t,n),b=el(v,f,e,t,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=b;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&ps(o,u,l,m,c,h,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&ps(o,u,l,m,c,h,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&ps(o,u,l,m,c,h,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=b;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&ps(o,u,l,m,c,h,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ji(n,s)&&Lh(n,t,t.next,s)&&ks(n,s)&&ks(s,n)&&(e.push(n.i,t.i,s.i),Vs(t),Vs(t.next),t=i=s),t=t.next}while(t!==i);return ui(t)}function kd(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jd(a,o)){let l=Dh(a,o);a=ui(a,a.next),l=ui(l,l.next),zs(a,e,t,n,s,r,0),zs(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vd(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ph(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Zd(c))}s.sort(Hd);for(let r=0;r<s.length;r++)t=Gd(s[r],t);return t}function Hd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gd(i,e){let t=Wd(i,e);if(!t)return e;let n=Dh(t,i);return ui(n,n.next),ui(t,t.next)}function Wd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,a=t.x<t.next.x?t:t.next,m===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ih(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let m=Math.abs(s-t.y)/(n-t.x);ks(t,i)&&(m<u||m===u&&(t.x>a.x||t.x===a.x&&qd(a,t)))&&(a=t,u=m)}t=t.next}while(t!==o);return a}function qd(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function Xd(i,e,t,n){let s=i;do s.z===0&&(s.z=el(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yd(s)}function Yd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function el(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ih(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ps(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ih(i,e,t,n,s,r,a,o)}function Jd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$d(i,e)&&(ks(i,e)&&ks(e,i)&&Kd(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Ji(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function Lh(i,e,t,n){let s=Or(xt(i,e,t)),r=Or(xt(i,e,n)),a=Or(xt(t,n,i)),o=Or(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Fr(i,t,e)||r===0&&Fr(i,n,e)||a===0&&Fr(t,i,n)||o===0&&Fr(t,e,n))}function Fr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Or(i){return i>0?1:i<0?-1:0}function $d(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Lh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ks(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Kd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dh(i,e){let t=tl(i.i,i.x,i.y),n=tl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nc(i,e,t,n){let s=tl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nl=class{static triangulate(e,t,n=2){return Fd(e,t,n)}},ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Uc(e),Fc(n,e);let a=e.length;t.forEach(Uc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fc(n,t[l]);let o=nl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var di=class i extends At{constructor(e=new Wn([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Qd,M,_=!1,S,T,w,x;if(p){M=p.getSpacedPoints(u),_=!0,h=!1;let j=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,j),T=new F,w=new F,x=new F}h||(f=0,d=0,g=0,v=0);let A=o.extractPoints(c),R=A.shape,L=A.holes;if(!ai.isClockWise(R)){R=R.reverse();for(let j=0,se=L.length;j<se;j++){let le=L[j];ai.isClockWise(le)&&(L[j]=le.reverse())}}function P(j){let le=10000000000000001e-36,he=j[0];for(let oe=1;oe<=j.length;oe++){let Fe=oe%j.length,Le=j[Fe],Ce=Le.x-he.x,qe=Le.y-he.y,U=Ce*Ce+qe*qe,it=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(he.x),Math.abs(he.y)),$e=le*it*it;if(U<=$e){j.splice(Fe,1),oe--;continue}he=Le}}P(R),L.forEach(P);let C=L.length,O=R;for(let j=0;j<C;j++){let se=L[j];R=R.concat(se)}function $(j,se,le){return se||Ge("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(se,le)}let B=R.length;function V(j,se,le){let he,oe,Fe,Le=j.x-se.x,Ce=j.y-se.y,qe=le.x-j.x,U=le.y-j.y,it=Le*Le+Ce*Ce,$e=Le*U-Ce*qe;if(Math.abs($e)>Number.EPSILON){let I=Math.sqrt(it),y=Math.sqrt(qe*qe+U*U),H=se.x-Ce/I,J=se.y+Le/I,Q=le.x-U/y,ue=le.y+qe/y,W=((Q-H)*U-(ue-J)*qe)/(Le*U-Ce*qe);he=H+Le*W-j.x,oe=J+Ce*W-j.y;let q=he*he+oe*oe;if(q<=2)return new pe(he,oe);Fe=Math.sqrt(q/2)}else{let I=!1;Le>Number.EPSILON?qe>Number.EPSILON&&(I=!0):Le<-Number.EPSILON?qe<-Number.EPSILON&&(I=!0):Math.sign(Ce)===Math.sign(U)&&(I=!0),I?(he=-Ce,oe=Le,Fe=Math.sqrt(it)):(he=Le,oe=Ce,Fe=Math.sqrt(it/2))}return new pe(he/Fe,oe/Fe)}let N=[];for(let j=0,se=O.length,le=se-1,he=j+1;j<se;j++,le++,he++)le===se&&(le=0),he===se&&(he=0),N[j]=V(O[j],O[le],O[he]);let G=[],Z,ae=N.concat();for(let j=0,se=C;j<se;j++){let le=L[j];Z=[];for(let he=0,oe=le.length,Fe=oe-1,Le=he+1;he<oe;he++,Fe++,Le++)Fe===oe&&(Fe=0),Le===oe&&(Le=0),Z[he]=V(le[he],le[Fe],le[Le]);G.push(Z),ae=ae.concat(Z)}let fe;if(f===0)fe=ai.triangulateShape(O,L);else{let j=[],se=[];for(let le=0;le<f;le++){let he=le/f,oe=d*Math.cos(he*Math.PI/2),Fe=g*Math.sin(he*Math.PI/2)+v;for(let Le=0,Ce=O.length;Le<Ce;Le++){let qe=$(O[Le],N[Le],Fe);me(qe.x,qe.y,-oe),he===0&&j.push(qe)}for(let Le=0,Ce=C;Le<Ce;Le++){let qe=L[Le];Z=G[Le];let U=[];for(let it=0,$e=qe.length;it<$e;it++){let I=$(qe[it],Z[it],Fe);me(I.x,I.y,-oe),he===0&&U.push(I)}he===0&&se.push(U)}}fe=ai.triangulateShape(j,se)}let Ve=fe.length,ze=g+v;for(let j=0;j<B;j++){let se=h?$(R[j],ae[j],ze):R[j];_?(w.copy(S.normals[0]).multiplyScalar(se.x),T.copy(S.binormals[0]).multiplyScalar(se.y),x.copy(M[0]).add(w).add(T),me(x.x,x.y,x.z)):me(se.x,se.y,0)}for(let j=1;j<=u;j++)for(let se=0;se<B;se++){let le=h?$(R[se],ae[se],ze):R[se];_?(w.copy(S.normals[j]).multiplyScalar(le.x),T.copy(S.binormals[j]).multiplyScalar(le.y),x.copy(M[j]).add(w).add(T),me(x.x,x.y,x.z)):me(le.x,le.y,m/u*j)}for(let j=f-1;j>=0;j--){let se=j/f,le=d*Math.cos(se*Math.PI/2),he=g*Math.sin(se*Math.PI/2)+v;for(let oe=0,Fe=O.length;oe<Fe;oe++){let Le=$(O[oe],N[oe],he);me(Le.x,Le.y,m+le)}for(let oe=0,Fe=L.length;oe<Fe;oe++){let Le=L[oe];Z=G[oe];for(let Ce=0,qe=Le.length;Ce<qe;Ce++){let U=$(Le[Ce],Z[Ce],he);_?me(U.x,U.y+M[u-1].y,M[u-1].x+le):me(U.x,U.y,m+le)}}}We(),te();function We(){let j=s.length/3;if(h){let se=0,le=B*se;for(let he=0;he<Ve;he++){let oe=fe[he];Oe(oe[2]+le,oe[1]+le,oe[0]+le)}se=u+f*2,le=B*se;for(let he=0;he<Ve;he++){let oe=fe[he];Oe(oe[0]+le,oe[1]+le,oe[2]+le)}}else{for(let se=0;se<Ve;se++){let le=fe[se];Oe(le[2],le[1],le[0])}for(let se=0;se<Ve;se++){let le=fe[se];Oe(le[0]+B*u,le[1]+B*u,le[2]+B*u)}}n.addGroup(j,s.length/3-j,0)}function te(){let j=s.length/3,se=0;ne(O,se),se+=O.length;for(let le=0,he=L.length;le<he;le++){let oe=L[le];ne(oe,se),se+=oe.length}n.addGroup(j,s.length/3-j,1)}function ne(j,se){let le=j.length;for(;--le>=0;){let he=le,oe=le-1;oe<0&&(oe=j.length-1);for(let Fe=0,Le=u+f*2;Fe<Le;Fe++){let Ce=B*Fe,qe=B*(Fe+1),U=se+he+Ce,it=se+oe+Ce,$e=se+oe+qe,I=se+he+qe;ge(U,it,$e,I)}}}function me(j,se,le){l.push(j),l.push(se),l.push(le)}function Oe(j,se,le){Re(j),Re(se),Re(le);let he=s.length/3,oe=b.generateTopUV(n,s,he-3,he-2,he-1);de(oe[0]),de(oe[1]),de(oe[2])}function ge(j,se,le,he){Re(j),Re(se),Re(he),Re(se),Re(le),Re(he);let oe=s.length/3,Fe=b.generateSideWallUV(n,s,oe-6,oe-3,oe-2,oe-1);de(Fe[0]),de(Fe[1]),de(Fe[3]),de(Fe[1]),de(Fe[2]),de(Fe[3])}function Re(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function de(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ef(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ra[s.type]().fromJSON(s)),new i(n,e.options)}},Qd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],m=e[n*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],f=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-m),new pe(h,1-g),new pe(v,1-p)]:[new pe(o,1-l),new pe(u,1-m),new pe(d,1-g),new pe(f,1-p)]}};function ef(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Hs=class i extends Ds{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Gs=class i extends Ds{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fi=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=e/o,h=t/l,d=[],g=[],v=[],f=[];for(let p=0;p<u;p++){let b=p*h-a;for(let M=0;M<c;M++){let _=M*m-r;g.push(_,-b,0),v.push(0,0,1),f.push(M/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let M=b+c*p,_=b+c*(p+1),S=b+1+c*(p+1),T=b+1+c*p;d.push(M,_,T),d.push(_,S,T)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yn=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],m=new F,h=new F,d=[],g=[],v=[],f=[];for(let p=0;p<=n;p++){let b=[],M=p/n,_=a+M*o,S=e*Math.cos(_),T=Math.sqrt(e*e-S*S),w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let A=x/t,R=s+A*r;m.x=-T*Math.cos(R),m.y=S,m.z=T*Math.sin(R),g.push(m.x,m.y,m.z),h.copy(m).normalize(),v.push(h.x,h.y,h.z),f.push(A+w,1-M),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let M=u[p][b+1],_=u[p][b],S=u[p+1][b],T=u[p+1][b+1];(p!==0||a>0)&&d.push(M,_,T),(p!==n-1||l<Math.PI)&&d.push(_,S,T)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ws=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],m=[],h=new F,d=new F,g=new F;for(let v=0;v<=n;v++){let f=a+v/n*o;for(let p=0;p<=s;p++){let b=p/s*r;d.x=(e+t*Math.cos(f))*Math.cos(b),d.y=(e+t*Math.cos(f))*Math.sin(b),d.z=t*Math.sin(f),c.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),m.push(p/s),m.push(v/n)}}for(let v=1;v<=n;v++)for(let f=1;f<=s;f++){let p=(s+1)*v+f-1,b=(s+1)*(v-1)+f-1,M=(s+1)*(v-1)+f,_=(s+1)*v+f;l.push(p,b,_),l.push(b,M,_)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var pi=class i extends At{constructor(e=new hi(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new pe,u=new F,m=[],h=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function v(){for(let M=0;M<t;M++)f(M);f(r===!1?t:0),b(),p()}function f(M){u=e.getPointAt(M/t,u);let _=a.normals[M],S=a.binormals[M];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,x=Math.sin(w),A=-Math.cos(w);l.x=A*_.x+x*S.x,l.y=A*_.y+x*S.y,l.z=A*_.z+x*S.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,m.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let _=1;_<=s;_++){let S=(s+1)*(M-1)+(_-1),T=(s+1)*M+(_-1),w=(s+1)*M+_,x=(s+1)*(M-1)+_;g.push(S,T,x),g.push(T,w,x)}}function b(){for(let M=0;M<=t;M++)for(let _=0;_<=s;_++)c.x=M/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ra[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function _i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Oc(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Oc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Dt(i){let e={};for(let t=0;t<i.length;t++){let n=_i(i[t]);for(let s in n)e[s]=n[s]}return e}function Oc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Nh={clone:_i,merge:Dt},nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oa=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends Ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qs=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ca=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ni(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jo:r=e,o=2*t-n;break;case Qo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:a=e,l=2*n-t;break;case Qo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,f=v*g,p=-h*f+2*h*v-h*g,b=(1+h)*f+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-d)*f+(1.5+d)*v+.5*g,_=d*f-d*v;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+b*a[c+S]+M*a[l+S]+_*a[m+S];return r}},ua=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),m=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*m+a[l+h]*u;return r}},da=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fa=class extends qn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let g=(n-t)/(s-t),v=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*v+a[l+f]*g;return r}let h=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],f=a[l+g],p=d*h+g*2,b=m[p],M=m[p+1],_=e*h+g*2,S=u[_],T=u[_+1],w=af(n,t,b,S,s);r[g]=Uh(w,v,M,T,f)}return r}};function Uh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function rf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function af(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Uh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=rf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ni(t,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ni(e.times,Array),values:Ni(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Zo(e.settings)&&(n.settings={inTangents:Ni(e.settings.inTangents,Array),outTangents:Ni(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case kr:t=this.InterpolantFactoryMethodSmooth;break;case $o:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return kr;case this.InterpolantFactoryMethodBezier:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Zo(this.settings)&&(Bc(this.settings.inTangents,e),Bc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Yu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,h=m-n,d=m+n;for(let g=0;g!==n;++g){let v=t[m+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[m+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Kr;var Xn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=vs;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xs=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends Jt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=vs;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,h=c.length;m<h;m+=2){let d=c[m],g=c[m+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fh=new _a,va=class{constructor(e){this.manager=e!==void 0?e:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ys=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jo=new ct,zc=new F,kc=new F,Zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ki||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Br=new F,zr=new xn,fn=new F,Js=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Br,zr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Br,zr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kn=new F,Vc=new pe,Hc=new pe,Ot=class extends Js{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Hc),t.subVectors(Hc,Vc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var il=class extends Zs{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends $i{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new il}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends Js{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sl=class extends Zs{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new sl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ui=-90,Fi=1,ya=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Ui,Fi,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Ui,Fi,e,t);r.layers=this.layers,this.add(r);let a=new Ot(Ui,Fi,e,t);a.layers=this.layers,this.add(a);let o=new Ot(Ui,Fi,e,t);o.layers=this.layers,this.add(o);let l=new Ot(Ui,Fi,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ba=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ll="\\[\\]\\.:\\/",of=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",lf="[^"+Ll.replace("\\.","")+"]",cf=/((?:WC+[\/:])*)/.source.replace("WC",Dl),hf=/(WCOD+)?/.source.replace("WCOD",lf),uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),df=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),ff=new RegExp("^"+cf+hf+uf+df+"$"),pf=["material","materials","bones","map"],rl=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(of,"")}static parseTrackName(e){let t=ff.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=rl;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var px=new Float32Array(1);var Gc=new ct,Ks=class{constructor(e,t,n=0,s=1/0){this.ray=new Ts(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(Wc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)al(e[s],this,n,t);return n.sort(Wc),n}};function Wc(i,e){return i.distance-e.distance}function al(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)al(r[a],e,t,!0)}}var ol=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Nl(i,e,t,n){let s=mf(n);switch(t){case wl:return i*e;case Ra:return i*e/s.components*s.byteLength;case Pa:return i*e/s.components*s.byteLength;case Qn:return i*e*2/s.components*s.byteLength;case Ia:return i*e*2/s.components*s.byteLength;case Tl:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:case Fa:return Math.max(i,16)*Math.max(e,8)/4;case Da:case Ua:return Math.max(i,8)*Math.max(e,8)/2;case Oa:case Ba:case ka:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case ar:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case io:case so:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case or:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mf(i){switch(i){case Vt:case bl:return{byteLength:1,components:1};case es:case Ml:case hn:return{byteLength:2,components:1};case Aa:case Ca:return{byteLength:2,components:4};case cn:case Ta:case jt:return{byteLength:4,components:1};case Sl:case El:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function su(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<m.length;d++){let g=m[h],v=m[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,m[h]=v)}m.length=h+1;for(let d=0,g=m.length;d<g;d++){let v=m[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,km=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:_f,alphahash_pars_fragment:vf,alphamap_fragment:yf,alphamap_pars_fragment:bf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:Ef,aomap_pars_fragment:wf,batching_pars_vertex:Tf,batching_vertex:Af,begin_vertex:Cf,beginnormal_vertex:Rf,bsdfs:Pf,iridescence_fragment:If,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Ff,color_fragment:Of,color_pars_fragment:Bf,color_pars_vertex:zf,color_vertex:kf,common:Vf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Wf,displacementmap_vertex:qf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Yf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:$f,envmap_common_pars_fragment:Kf,envmap_pars_fragment:jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:hp,envmap_vertex:ep,fog_vertex:tp,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:xp,lights_fragment_maps:_p,lights_fragment_end:vp,lightprobes_pars_fragment:yp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:wp,map_pars_fragment:Tp,map_particle_fragment:Ap,map_particle_pars_fragment:Cp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Ip,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Np,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:kp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:qp,opaque_fragment:Xp,packing:Yp,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:$p,dithering_pars_fragment:Kp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:xm,background_vert:_m,background_frag:vm,backgroundCube_vert:ym,backgroundCube_frag:bm,cube_vert:Mm,cube_frag:Sm,depth_vert:Em,depth_frag:wm,distance_vert:Tm,distance_frag:Am,equirect_vert:Cm,equirect_frag:Rm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Vm,meshphysical_vert:Hm,meshphysical_frag:Gm,meshtoon_vert:Wm,meshtoon_frag:qm,points_vert:Xm,points_frag:Ym,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:$m,sprite_frag:Km},be={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},En={basic:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Dt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Dt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Dt([be.points,be.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Dt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Dt([be.common,be.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Dt([be.sprite,be.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Dt([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Dt([be.lights,be.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};En.physical={uniforms:Dt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var uo={r:0,b:0,g:0},jm=new ct,ru=new Xe;ru.set(-1,0,0,0,1,0,0,0,1);function Qm(i,e,t,n,s,r){let a=new Ze(0),o=s===!0?0:1,l,c,u=null,m=0,h=null;function d(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let _=b.backgroundBlurriness>0;M=e.get(M,_)}return M}function g(b){let M=!1,_=d(b);_===null?f(a,o):_&&_.isColor&&(f(_,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,M){let _=d(M);_&&(_.isCubeTexture||_.mapping===er)?(c===void 0&&(c=new Ye(new qt(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:_i(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ru),c.material.toneMapped=tt.getTransfer(_.colorSpace)!==ot,(u!==_||m!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,m=_.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ye(new fi(2,2),new Yt({name:"BackgroundMaterial",uniforms:_i(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||m!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,m=_.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(uo,Il(i)),t.buffers.color.setClear(uo.r,uo.g,uo.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(a,o)},render:g,addToRenderList:v,dispose:p}}function eg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(L,D,P,C,O){let $=!1,B=m(L,C,P,D);r!==B&&(r=B,c(r.object)),$=d(L,C,P,O),$&&g(L,C,P,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(L,D,P,C),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function m(L,D,P,C){let O=C.wireframe===!0,$=n[D.id];$===void 0&&($={},n[D.id]=$);let B=L.isInstancedMesh===!0?L.id:0,V=$[B];V===void 0&&(V={},$[B]=V);let N=V[P.id];N===void 0&&(N={},V[P.id]=N);let G=N[O];return G===void 0&&(G=h(l()),N[O]=G),G}function h(L){let D=[],P=[],C=[];for(let O=0;O<t;O++)D[O]=0,P[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,D,P,C){let O=r.attributes,$=D.attributes,B=0,V=P.getAttributes();for(let N in V)if(V[N].location>=0){let Z=O[N],ae=$[N];if(ae===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;B++}return r.attributesNum!==B||r.index!==C}function g(L,D,P,C){let O={},$=D.attributes,B=0,V=P.getAttributes();for(let N in V)if(V[N].location>=0){let Z=$[N];Z===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),O[N]=ae,B++}r.attributes=O,r.attributesNum=B,r.index=C}function v(){let L=r.newAttributes;for(let D=0,P=L.length;D<P;D++)L[D]=0}function f(L){p(L,0)}function p(L,D){let P=r.newAttributes,C=r.enabledAttributes,O=r.attributeDivisors;P[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),O[L]!==D&&(i.vertexAttribDivisor(L,D),O[L]=D)}function b(){let L=r.newAttributes,D=r.enabledAttributes;for(let P=0,C=D.length;P<C;P++)D[P]!==L[P]&&(i.disableVertexAttribArray(P),D[P]=0)}function M(L,D,P,C,O,$,B){B===!0?i.vertexAttribIPointer(L,D,P,O,$):i.vertexAttribPointer(L,D,P,C,O,$)}function _(L,D,P,C){v();let O=C.attributes,$=P.getAttributes(),B=D.defaultAttributeValues;for(let V in $){let N=$[V];if(N.location>=0){let G=O[V];if(G===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let Z=G.normalized,ae=G.itemSize,fe=e.get(G);if(fe===void 0)continue;let Ve=fe.buffer,ze=fe.type,We=fe.bytesPerElement,te=ze===i.INT||ze===i.UNSIGNED_INT||G.gpuType===Ta;if(G.isInterleavedBufferAttribute){let ne=G.data,me=ne.stride,Oe=G.offset;if(ne.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)p(N.location+ge,ne.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<N.locationSize;ge++)f(N.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ge=0;ge<N.locationSize;ge++)M(N.location+ge,ae/N.locationSize,ze,Z,me*We,(Oe+ae/N.locationSize*ge)*We,te)}else{if(G.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)p(N.location+ne,G.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ne=0;ne<N.locationSize;ne++)f(N.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ne=0;ne<N.locationSize;ne++)M(N.location+ne,ae/N.locationSize,ze,Z,ae*We,ae/N.locationSize*ne*We,te)}}else if(B!==void 0){let Z=B[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(N.location,Z);break;case 3:i.vertexAttrib3fv(N.location,Z);break;case 4:i.vertexAttrib4fv(N.location,Z);break;default:i.vertexAttrib1fv(N.location,Z)}}}}b()}function S(){A();for(let L in n){let D=n[L];for(let P in D){let C=D[P];for(let O in C){let $=C[O];for(let B in $)u($[B].object),delete $[B];delete C[O]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let P in D){let C=D[P];for(let O in C){let $=C[O];for(let B in $)u($[B].object),delete $[B];delete C[O]}}delete n[L.id]}function w(L){for(let D in n){let P=n[D];for(let C in P){let O=P[C];if(O[L.id]===void 0)continue;let $=O[L.id];for(let B in $)u($[B].object),delete $[B];delete O[L.id]}}}function x(L){for(let D in n){let P=n[D],C=L.isInstancedMesh===!0?L.id:0,O=P[C];if(O!==void 0){for(let $ in O){let B=O[$];for(let V in B)u(B[V].object),delete B[V];delete O[$]}delete P[C],Object.keys(P).length===0&&delete n[D]}}}function A(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:f,disableUnusedAttributes:b}}function tg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ng(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Qt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Vt&&w!==jt&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:T}}function ig(i){let e=this,t=null,n=0,s=!1,r=!1,a=new rn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let d=m.length!==0||h||n!==0||s;return s=h,n=m.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=u(m,h,0)},this.setState=function(m,h,d){let g=m.clippingPlanes,v=m.clipIntersection,f=m.clipShadows,p=i.get(m);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let b=r?0:n,M=b*4,_=p.clippingState||null;l.value=_,_=u(g,h,M,d);for(let S=0;S!==M;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,h,d,g){let v=m!==null?m.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let p=d+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)a.copy(m[M]).applyMatrix4(b,o),a.normal.toArray(f,_),f[_+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}var is=4,sg=6,rg=20,ag=256,cr=new Zn,Oh=new Ze,Ul=null,Fl=0,Ol=0,Bl=!1,og=new F,vi=new F,rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=og}=r;Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Fl,Ol),this._renderer.xr.enabled=Bl,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:hn,format:Qt,colorSpace:ys,depthBuffer:!1},s=Bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lg(r)),this._blurMaterial=hg(r,e,t),this._ggxMaterial=cg(r,e,t)}return s}_compileMaterial(e){let t=new Ye(new At,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s,r){let l=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,d=m.toneMapping;m.getClearColor(Oh),m.toneMapping=ln,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new qt,new on({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,f=v.material,p=!1,b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,p=!0):(f.color.copy(Oh),p=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let S=this._cubeSize;ns(s,_*S,M>2?S:0,S,S),m.setRenderTarget(s),p&&m.render(v,l),m.render(e,l)}m.toneMapping=d,m.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$n||e.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),h=c*1.25,d=m*h,{_lodMax:g}=this,v=this._sizeLods[n],f=3*v*(n>g-is?n-g+is:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,ns(r,f,p,3*v,2*v),s.setRenderTarget(r),s.render(o,cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ns(e,f,p,3*v,2*v),s.setRenderTarget(e),s.render(o,cr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],m=3*u*(s>this._lodMax-is?s-this._lodMax+is:0),h=4*(this._cubeSize-u);ns(t,m,h,3*u,2*u),a.setRenderTarget(t),a.render(l,cr)}};function lg(i){let e=[],t=[],n=i,s=i-is+1+sg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,h=6,d=3,g=new Float32Array(d*h*m),v=new Float32Array(d*h*m);for(let p=0;p<m;p++){let b=p%3*2/3-1,M=p>2?0:-1,_=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];g.set(_,d*h*p);for(let S=0;S<h;S++){let T=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?vi.set(1,w,T):p===1?vi.set(-T,1,-w):p===2?vi.set(-T,w,1):p===3?vi.set(-1,w,-T):p===4?vi.set(-T,-1,w):vi.set(T,w,-1),vi.toArray(v,(p*h+S)*d)}}let f=new At;f.setAttribute("position",new Wt(g,d)),f.setAttribute("outputDirection",new Wt(v,d)),t.push(new Ye(f,null)),n>is&&n--}return{lodMeshes:t,sizeLods:e}}function Bh(i,e,t){let n=new kt(i,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cg(i,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function hg(i,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function zh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function kh(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var po=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ps(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qt(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Mn});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Tt),new ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function ug(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Sa||d===Ea)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new po(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===Sa||d===Ea,v=d===$n||d===gi;if(g||v){let f=t.get(h),p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new rs(i)),f=g?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{let b=h.image;return g&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new rs(i)),f=g?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,d){return d===Sa?h.mapping=$n:d===Ea&&(h.mapping=gi),h}function l(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function dg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&oi("WebGLRenderer: "+n+" extension not supported."),s}}}function fg(i,e,t,n){let s={},r=new WeakMap;function a(m){let h=m.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(m){let h=m.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(m){let h=[],d=m.index,g=m.attributes.position,v=0;if(g===void 0)return;if(d!==null){let b=d.array;v=d.version;for(let M=0,_=b.length;M<_;M+=3){let S=b[M+0],T=b[M+1],w=b[M+2];h.push(S,T,T,w,w,S)}}else{let b=g.array;v=g.version;for(let M=0,_=b.length/3-1;M<_;M+=3){let S=M+0,T=M+1,w=M+2;h.push(S,T,T,w,w,S)}}let f=new(g.count>=65535?ws:Es)(h,1);f.version=v;let p=r.get(m);p&&e.remove(p),r.set(m,f)}function u(m){let h=r.get(m);if(h){let d=m.index;d!==null&&h.version<d.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function pg(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*a),t.update(h,n,1)}function c(m,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,m*a,d),t.update(h,n,d))}function u(m,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,d);let v=0;for(let f=0;f<d;f++)v+=h[f];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,e,t){let n=new WeakMap,s=new gt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==m){let A=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=o.attributes.position.count*M,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*S*4*m),w=new Ss(T,_,S,m);w.type=jt,w.needsUpdate=!0;let x=M*4;for(let R=0;R<m;R++){let L=f[R],D=p[R],P=b[R],C=_*S*4*R;for(let O=0;O<L.count;O++){let $=O*x;d===!0&&(s.fromBufferAttribute(L,O),T[C+$+0]=s.x,T[C+$+1]=s.y,T[C+$+2]=s.z,T[C+$+3]=0),g===!0&&(s.fromBufferAttribute(D,O),T[C+$+4]=s.x,T[C+$+5]=s.y,T[C+$+6]=s.z,T[C+$+7]=0),v===!0&&(s.fromBufferAttribute(P,O),T[C+$+8]=s.x,T[C+$+9]=s.y,T[C+$+10]=s.z,T[C+$+11]=P.itemSize===4?s.w:1)}}h={count:m,texture:w,size:new pe(_,S)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function xg(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,h=e.get(c,m);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var _g={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[Qs]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[vl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function vg(i,e,t,n,s,r){let a=new kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new At;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let u=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Ye(c,u),h=new Zn(-1,1,1,-1,0,1),d=null,g=null,v=!1,f,p=null,b=[],M=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let T=0;T<b.length;T++){let w=b[T];w.setSize&&w.setSize(_,S)}},this.setEffects=function(_){b=_,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new kt(S,T,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new kt(S,T,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let x=b[w];x.setSize&&x.setSize(S,T)}},this.begin=function(_,S){if(v||_.toneMapping===ln&&b.length===0)return!1;if(p=S,S!==null){let T=S.width,w=S.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return M===!1&&_.setRenderTarget(a),f=_.toneMapping,_.toneMapping=ln,!0},this.hasRenderPass=function(){return M},this.end=function(_,S){_.toneMapping=f,v=!0;let T=a,w=o;for(let x=0;x<b.length;x++){let A=b[x];A.enabled!==!1&&(A.render(_,w,T,S),A.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,u.defines={},tt.getTransfer(d)===ot&&(u.defines.SRGB_TRANSFER="");let x=_g[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(p),_.render(m,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var au=new zt,Vl=new Gn(1,1),ou=new Ss,lu=new ea,cu=new Ps,Vh=[],Hh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),qh=new Float32Array(4);function as(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xo(i,e){let t=Hh[e];t===void 0&&(t=new Int32Array(e),Hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),Mt(t,n)}}function wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Mt(t,n)}}function Tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Mt(t,n)}}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vl.compareFunction=t.isReversedDepthBuffer()?ho:co,r=Vl):r=au,t.setTexture2D(e||r,s)}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lu,s)}function Og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cu,s)}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ou,s)}function zg(i){switch(i){case 5126:return yg;case 35664:return bg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(i,e){i.uniform1fv(this.addr,e)}function Vg(i,e){let t=as(e,this.size,2);i.uniform2fv(this.addr,t)}function Hg(i,e){let t=as(e,this.size,3);i.uniform3fv(this.addr,t)}function Gg(i,e){let t=as(e,this.size,4);i.uniform4fv(this.addr,t)}function Wg(i,e){let t=as(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qg(i,e){let t=as(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xg(i,e){let t=as(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yg(i,e){i.uniform1iv(this.addr,e)}function Zg(i,e){i.uniform2iv(this.addr,e)}function Jg(i,e){i.uniform3iv(this.addr,e)}function $g(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function jg(i,e){i.uniform2uiv(this.addr,e)}function Qg(i,e){i.uniform3uiv(this.addr,e)}function e0(i,e){i.uniform4uiv(this.addr,e)}function t0(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Vl:a=au;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function n0(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lu,r[a])}function i0(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||cu,r[a])}function s0(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ou,r[a])}function r0(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return qg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}},Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r0(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Xh(i,e){i.seq.push(e),i.map[e.id]=e}function a0(i,e,t){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xh(t,c===void 0?new Hl(o,i,e):new Gl(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Wl(o),Xh(t,m)),t=m}}}var ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);a0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var o0=37297,l0=0;function c0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zh=new Xe;function h0(i){tt._getMatrix(Zh,tt.workingColorSpace,i);let e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case bs:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c0(i.getShaderSource(e),o)}else return r}function u0(i,e){let t=h0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var d0={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[Qs]:"ACESFilmic",[_l]:"AgX",[vl]:"Neutral",[xl]:"Custom"};function f0(i,e){let t=d0[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fo=new F;function p0(){tt.getLuminanceCoefficients(fo);let i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function g0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ur(i){return i!==""}function $h(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(_0,y0)}var v0=new Map;function y0(i,e){let t=je[e];if(t===void 0){let n=v0.get(e);if(n!==void 0)t=je[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ql(t)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(b0,M0)}function M0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var S0={[js]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function E0(i){return S0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w0={[$n]:"ENVMAP_TYPE_CUBE",[gi]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE_UV"};function T0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var A0={[gi]:"ENVMAP_MODE_REFRACTION"};function C0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":A0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R0={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[dh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function P0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R0[i.combine]||"ENVMAP_BLENDING_NONE"}function I0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function L0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=E0(t),c=T0(t),u=C0(t),m=P0(t),h=I0(t),d=m0(t),g=g0(r),v=s.createProgram(),f,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(f=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?je.tonemapping_pars_fragment:"",t.toneMapping!==ln?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),p0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=ql(a),a=$h(a,t),a=Kh(a,t),o=ql(o),o=$h(o,t),o=Kh(o,t),a=jh(a),o=jh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+f+a,_=b+p+o,S=Yh(s,s.VERTEX_SHADER,M),T=Yh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(T)||"",O=D.trim(),$=P.trim(),B=C.trim(),V=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{let G=Jh(s,S,"vertex"),Z=Jh(s,T,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+G+`
`+Z)}else O!==""?He("WebGLProgram: Program Info Log:",O):($===""||B==="")&&(N=!1);N&&(L.diagnostics={runnable:V,programLog:O,vertexShader:{log:$,prefix:f},fragmentShader:{log:B,prefix:p}})}s.deleteShader(S),s.deleteShader(T),x=new ss(s,v),A=x0(s,v)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,o0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var D0=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yl(e),t.set(e,n)),n}},Yl=class{constructor(e){this.id=D0++,this.code=e,this.usedTimes=0}};function N0(i){return i===Qn||i===ar||i===or}function U0(i,e,t,n,s,r){let a=new Wi,o=new Xl,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,A,R,L,D,P){let C=L.fog,O=D.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||$,B),N=V&&V.mapping===er?V.image.height:null,G=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=Z!==void 0?Z.length:0,fe=0;O.morphAttributes.position!==void 0&&(fe=1),O.morphAttributes.normal!==void 0&&(fe=2),O.morphAttributes.color!==void 0&&(fe=3);let Ve,ze,We,te;if(G){let ut=En[G];Ve=ut.vertexShader,ze=ut.fragmentShader}else{Ve=x.vertexShader,ze=x.fragmentShader;let ut=o.getVertexShaderStage(x),rt=o.getFragmentShaderStage(x);o.update(x,ut,rt),We=ut.id,te=rt.id}let ne=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,Re=!!x.map,de=!!x.matcap,j=!!V,se=!!x.aoMap,le=!!x.lightMap,he=!!x.bumpMap&&x.wireframe===!1,oe=!!x.normalMap,Fe=!!x.displacementMap,Le=!!x.emissiveMap,Ce=!!x.metalnessMap,qe=!!x.roughnessMap,U=x.anisotropy>0,it=x.clearcoat>0,$e=x.dispersion>0,I=x.retroreflectivity>0,y=x.iridescence>0,H=x.sheen>0,J=x.transmission>0,Q=U&&!!x.anisotropyMap,ue=it&&!!x.clearcoatMap,W=it&&!!x.clearcoatNormalMap,q=it&&!!x.clearcoatRoughnessMap,ee=y&&!!x.iridescenceMap,ce=y&&!!x.iridescenceThicknessMap,Te=H&&!!x.sheenColorMap,_e=H&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Ne=!!x.specularColorMap,ke=!!x.specularIntensityMap,Je=J&&!!x.transmissionMap,k=J&&!!x.thicknessMap,ve=!!x.gradientMap,ie=!!x.alphaMap,ye=x.alphaTest>0,Ee=!!x.alphaHash,re=!!x.extensions,Be=ln;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=i.toneMapping);let De={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:ze,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:de,envMap:j,envMapMode:j&&V.mapping,envMapCubeUVHeight:N,aoMap:se,lightMap:le,bumpMap:he,normalMap:oe,displacementMap:Fe,emissiveMap:Le,normalMapObjectSpace:oe&&x.normalMapType===gh,normalMapTangentSpace:oe&&x.normalMapType===lr,packedNormalMap:oe&&x.normalMapType===lr&&N0(x.normalMap.format),metalnessMap:Ce,roughnessMap:qe,anisotropy:U,anisotropyMap:Q,clearcoat:it,clearcoatMap:ue,clearcoatNormalMap:W,clearcoatRoughnessMap:q,dispersion:$e,retroreflection:I,iridescence:y,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:Te,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:Ne,specularIntensityMap:ke,transmission:J,transmissionMap:Je,thicknessMap:k,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Qi&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:ye,alphaHash:Ee,combine:x.combine,mapUv:Re&&g(x.map.channel),aoMapUv:se&&g(x.aoMap.channel),lightMapUv:le&&g(x.lightMap.channel),bumpMapUv:he&&g(x.bumpMap.channel),normalMapUv:oe&&g(x.normalMap.channel),displacementMapUv:Fe&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:Ce&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:ue&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:W&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:Ne&&g(x.specularColorMap.channel),specularIntensityMapUv:ke&&g(x.specularIntensityMap.channel),transmissionMapUv:Je&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(oe||U),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Re||ie),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:fe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function f(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(A,x),b(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let A=d[x.type],R;if(A){let L=En[A];R=Nh.clone(L.uniforms)}else R=x.uniforms;return R}function _(x,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new L0(i,A,x,s),c.push(R),u.set(A,R)),R}function S(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function F0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,f,p){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:f,group:p},i[e]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=g,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=f,b.group=p),e++,b}function l(h,d,g,v,f,p,b){b.reversedDepth===!0&&(f=-f);let M=o(h,d,g,v,f,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(h,d,g,v,f,p){let b=o(h,d,g,v,f,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function u(h,d){t.length>1&&t.sort(h||O0),n.length>1&&n.sort(d||eu),s.length>1&&s.sort(d||eu)}function m(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function B0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new tu,i.set(n,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function z0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function k0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var V0=0;function H0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G0(i){let e=new z0,t=k0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ct,a=new ct;function o(c){let u=0,m=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,g=0,v=0,f=0,p=0,b=0,M=0,_=0,S=0,T=0,w=0,x=0,A=0,R=0;c.sort(H0);for(let D=0,P=c.length;D<P;D++){let C=c[D],O=C.color,$=C.intensity,B=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qn?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=O.r*$,m+=O.g*$,h+=O.b*$;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],$);R++}else if(C.isSunLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=V;let ae=G.getViewportCount();for(let fe=0;fe<ae;fe++)n.sunShadowMatrix[v+fe]=G.getMatrix(fe),n.sunShadowCascade[v+fe]=G._cascadeData[fe];v+=ae,g++}n.sun[d]=N,d++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=N,f++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(O).multiplyScalar($),N.distance=B,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[b]=N;let G=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,G.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[b]=G.matrix,C.castShadow){let Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[b]=Z,n.spotShadowMap[b]=V,w++}b++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(O).multiplyScalar($),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=N,M++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=N,p++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar($),N.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[_]=N,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==f||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==M||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==T||L.numSpotShadows!==w||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=f,n.spot.length=b,n.rectArea.length=M,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.sunLength=d,L.directionalLength=f,L.pointLength=p,L.spotLength=b,L.rectAreaLength=M,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=T,L.numSpotShadows=w,L.numSpotMaps=x,L.numLightProbes=R,n.version=V0++)}function l(c,u){let m=0,h=0,d=0,g=0,v=0,f=0,p=u.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let _=c[b];if(_.isSunLight){let S=n.sun[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}else if(_.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let S=n.hemi[f];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:n}}function nu(i){let e=new G0(i),t=[],n=[],s=[];function r(h){m.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function W0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new nu(i),e.set(s,[o])):r>=a.length?(o=new nu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Z0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],iu=new ct,hr=new F,kl=new F;function J0(i,e,t){let n=new Xi,s=new pe,r=new pe,a=new gt,o=new la,l=new ca,c={},u=t.maxTextureSize,m={[Jn]:Rt,[Rt]:Jn,[bn]:bn},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:q0,fragmentShader:X0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ye(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(T,w,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Yc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let A=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Mn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let P=p!==this.type;P&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=T.length;C<O;C++){let $=T[C],B=$.shadow;if(B===void 0){He("WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let V=B.getFrameExtents();s.multiply(V),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,B.mapSize.y=r.y));let N=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=N,B.map===null||P===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ji){if($.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kt(s.x,s.y,{format:Qn,type:hn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),B.map.texture.name=$.name+".shadowMap",B.map.depthTexture=new Gn(s.x,s.y,jt),B.map.depthTexture.name=$.name+".shadowMapDepth",B.map.depthTexture.format=mn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Et,B.map.depthTexture.magFilter=Et}else $.isPointLight?(B.map=new po(s.x),B.map.depthTexture=new ta(s.x,cn)):(B.map=new kt(s.x,s.y),B.map.depthTexture=new Gn(s.x,s.y,cn)),B.map.depthTexture.name=$.name+".shadowMap",B.map.depthTexture.format=mn,this.type===js?(B.map.depthTexture.compareFunction=N?ho:co,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Et,B.map.depthTexture.magFilter=Et);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let G=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();$.isPointLight!==!0&&B.updateMatrices($,x);for(let Z=0;Z<G;Z++){let ae=B.getCamera(Z);if($.isPointLight){let fe=B.camera,Ve=B.matrix,ze=$.distance||fe.far;ze!==fe.far&&(fe.far=ze,fe.updateProjectionMatrix()),hr.setFromMatrixPosition($.matrixWorld),fe.position.copy(hr),kl.copy(fe.position),kl.add(Y0[Z]),fe.up.copy(Z0[Z]),fe.lookAt(kl),fe.updateMatrixWorld(),Ve.makeTranslation(-hr.x,-hr.y,-hr.z),iu.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(iu,fe.coordinateSystem,fe.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(B.map),i.clear());let fe=B.getViewport(Z);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),D.viewport(a)}n=B.getFrustum(Z),_(w,x,ae,$,this.type)}B.isPointLightShadow!==!0&&this.type===ji&&b(B,x),B.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(A,R,L)};function b(T,w){let x=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new kt(s.x,s.y,{format:Qn,type:hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,x,d,v,null)}function M(T,w,x,A){let R=null,L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=R.uuid,P=w.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let O=C[P];O===void 0&&(O=R.clone(),C[P]=O,w.addEventListener("dispose",S)),R=O}if(R.visible=w.visible,R.wireframe=w.wireframe,A===ji?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:m[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=x}return R}function _(T,w,x,A,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ji)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let P=e.update(T),C=T.material;if(Array.isArray(C)){let O=P.groups;for(let $=0,B=O.length;$<B;$++){let V=O[$],N=C[V.materialIndex];if(N&&N.visible){let G=M(T,N,A,R);T.onBeforeShadow(i,T,w,x,P,G,V),i.renderBufferDirect(x,null,P,G,T,V),T.onAfterShadow(i,T,w,x,P,G,V)}}}else if(C.visible){let O=M(T,C,A,R);T.onBeforeShadow(i,T,w,x,P,O,null),i.renderBufferDirect(x,null,P,O,T,null),T.onAfterShadow(i,T,w,x,P,O,null)}}let D=T.children;for(let P=0,C=D.length;P<C;P++)_(D[P],w,x,A,R)}function S(T){T.target.removeEventListener("dispose",S);for(let x in c){let A=c[x],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function $0(i,e){function t(){let k=!1,ve=new gt,ie=null,ye=new gt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!k&&(i.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,re,Be,De,ut){ut===!0&&(Ee*=De,re*=De,Be*=De),ve.set(Ee,re,Be,De),ye.equals(ve)===!1&&(i.clearColor(Ee,re,Be,De),ye.copy(ve))},reset:function(){k=!1,ie=null,ye.set(-1,0,0,0)}}}function n(){let k=!1,ve=!1,ie=null,ye=null,Ee=null;return{setReversed:function(re){if(ve!==re){let Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ve=re;let De=Ee;Ee=null,this.setClear(De)}},getReversed:function(){return ve},setTest:function(re){re?ne(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(re){ie!==re&&!k&&(i.depthMask(re),ie=re)},setFunc:function(re){if(ve&&(re=Ch[re]),ye!==re){switch(re){case Hr:i.depthFunc(i.NEVER);break;case Gr:i.depthFunc(i.ALWAYS);break;case Wr:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case Yr:i.depthFunc(i.GREATER);break;case Zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=re}},setLocked:function(re){k=re},setClear:function(re){Ee!==re&&(Ee=re,ve&&(re=1-re),i.clearDepth(re))},reset:function(){k=!1,ie=null,ye=null,Ee=null,ve=!1}}}function s(){let k=!1,ve=null,ie=null,ye=null,Ee=null,re=null,Be=null,De=null,ut=null;return{setTest:function(rt){k||(rt?ne(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(rt){ve!==rt&&!k&&(i.stencilMask(rt),ve=rt)},setFunc:function(rt,en,un){(ie!==rt||ye!==en||Ee!==un)&&(i.stencilFunc(rt,en,un),ie=rt,ye=en,Ee=un)},setOp:function(rt,en,un){(re!==rt||Be!==en||De!==un)&&(i.stencilOp(rt,en,un),re=rt,Be=en,De=un)},setLocked:function(rt){k=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){k=!1,ve=null,ie=null,ye=null,Ee=null,re=null,Be=null,De=null,ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},m={},h={},d=new WeakMap,g=[],v=null,f=!1,p=null,b=null,M=null,_=null,S=null,T=null,w=null,x=new Ze(0,0,0),A=0,R=!1,L=null,D=null,P=null,C=null,O=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,V=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=V>=2);let G=null,Z={},ae=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ve=new gt().fromArray(ae),ze=new gt().fromArray(fe);function We(k,ve,ie,ye){let Ee=new Uint8Array(4),re=i.createTexture();i.bindTexture(k,re),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ie;Be++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ve+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return re}let te={};te[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(zi),he(!1),oe(ll),ne(i.CULL_FACE),se(Mn);function ne(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function me(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Oe(k,ve){return h[k]!==ve?(i.bindFramebuffer(k,ve),h[k]=ve,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ge(k,ve){let ie=g,ye=!1;if(k){ie=d.get(ve),ie===void 0&&(ie=[],d.set(ve,ie));let Ee=k.textures;if(ie.length!==Ee.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Be=Ee.length;re<Be;re++)ie[re]=i.COLOR_ATTACHMENT0+re;ie.length=Ee.length,ye=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ie)}function Re(k){return v!==k?(i.useProgram(k),v=k,!0):!1}let de={[mi]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[$c]:i.FUNC_REVERSE_SUBTRACT};de[Kc]=i.MIN,de[jc]=i.MAX;let j={[Qc]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function se(k,ve,ie,ye,Ee,re,Be,De,ut,rt){if(k===Mn){f===!0&&(me(i.BLEND),f=!1);return}if(f===!1&&(ne(i.BLEND),f=!0),k!==Zc){if(k!==p||rt!==R){if((b!==mi||S!==mi)&&(i.blendEquation(i.FUNC_ADD),b=mi,S=mi),rt)switch(k){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",k);break}else switch(k){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hl:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",k);break}M=null,_=null,T=null,w=null,x.set(0,0,0),A=0,p=k,R=rt}return}Ee=Ee||ve,re=re||ie,Be=Be||ye,(ve!==b||Ee!==S)&&(i.blendEquationSeparate(de[ve],de[Ee]),b=ve,S=Ee),(ie!==M||ye!==_||re!==T||Be!==w)&&(i.blendFuncSeparate(j[ie],j[ye],j[re],j[Be]),M=ie,_=ye,T=re,w=Be),(De.equals(x)===!1||ut!==A)&&(i.blendColor(De.r,De.g,De.b,ut),x.copy(De),A=ut),p=k,R=!1}function le(k,ve){k.side===bn?me(i.CULL_FACE):ne(i.CULL_FACE);let ie=k.side===Rt;ve&&(ie=!ie),he(ie),k.blending===Qi&&k.transparent===!1?se(Mn):se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ye=k.stencilWrite;o.setTest(ye),ye&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(k){L!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),L=k)}function oe(k){k!==qc?(ne(i.CULL_FACE),k!==D&&(k===ll?i.cullFace(i.BACK):k===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),D=k}function Fe(k){k!==P&&(B&&i.lineWidth(k),P=k)}function Le(k,ve,ie){k?(ne(i.POLYGON_OFFSET_FILL),(C!==ve||O!==ie)&&(C=ve,O=ie,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,ie))):me(i.POLYGON_OFFSET_FILL)}function Ce(k){k?ne(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function qe(k){k===void 0&&(k=i.TEXTURE0+$-1),G!==k&&(i.activeTexture(k),G=k)}function U(k,ve,ie){ie===void 0&&(G===null?ie=i.TEXTURE0+$-1:ie=G);let ye=Z[ie];ye===void 0&&(ye={type:void 0,texture:void 0},Z[ie]=ye),(ye.type!==k||ye.texture!==ve)&&(G!==ie&&(i.activeTexture(ie),G=ie),i.bindTexture(k,ve||te[k]),ye.type=k,ye.texture=ve)}function it(){let k=Z[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function y(){try{i.texSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function H(){try{i.texSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function ue(){try{i.texStorage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function W(){try{i.texStorage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function q(){try{i.texImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function ee(){try{i.texImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function ce(k){return m[k]!==void 0?m[k]:i.getParameter(k)}function Te(k,ve){m[k]!==ve&&(i.pixelStorei(k,ve),m[k]=ve)}function _e(k){Ve.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ve.copy(k))}function xe(k){ze.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ze.copy(k))}function Ne(k,ve){let ie=c.get(ve);ie===void 0&&(ie=new WeakMap,c.set(ve,ie));let ye=ie.get(k);ye===void 0&&(ye=i.getUniformBlockIndex(ve,k.name),ie.set(k,ye))}function ke(k,ve){let ye=c.get(ve).get(k);l.get(ve)!==ye&&(i.uniformBlockBinding(ve,ye,k.__bindingPointIndex),l.set(ve,ye))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},G=null,Z={},h={},d=new WeakMap,g=[],v=null,f=!1,p=null,b=null,M=null,_=null,S=null,T=null,w=null,x=new Ze(0,0,0),A=0,R=!1,L=null,D=null,P=null,C=null,O=null,Ve.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:me,bindFramebuffer:Oe,drawBuffers:ge,useProgram:Re,setBlending:se,setMaterial:le,setFlipSided:he,setCullFace:oe,setLineWidth:Fe,setPolygonOffset:Le,setScissorTest:Ce,activeTexture:qe,bindTexture:U,unbindTexture:it,compressedTexImage2D:$e,compressedTexImage3D:I,texImage2D:q,texImage3D:ee,pixelStorei:Te,getParameter:ce,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:ue,texStorage3D:W,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:J,compressedTexSubImage3D:Q,scissor:_e,viewport:xe,reset:Je}}function K0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,m=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,y){return g?new OffscreenCanvas(I,y):Ms("canvas")}function f(I,y,H){let J=1,Q=$e(I);if((Q.width>H||Q.height>H)&&(J=H/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ue=Math.floor(J*Q.width),W=Math.floor(J*Q.height);h===void 0&&(h=v(ue,W));let q=y?v(ue,W):h;return q.width=ue,q.height=W,q.getContext("2d").drawImage(I,0,0,ue,W),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+W+")."),q}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function p(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,y,H,J,Q,ue=!1){if(I!==null){if(i[I]!==void 0)return i[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W;J&&(W=e.get("EXT_texture_norm16"),W||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=y;if(y===i.RED&&(H===i.FLOAT&&(q=i.R32F),H===i.HALF_FLOAT&&(q=i.R16F),H===i.UNSIGNED_BYTE&&(q=i.R8),H===i.UNSIGNED_SHORT&&W&&(q=W.R16_EXT),H===i.SHORT&&W&&(q=W.R16_SNORM_EXT)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.R8UI),H===i.UNSIGNED_SHORT&&(q=i.R16UI),H===i.UNSIGNED_INT&&(q=i.R32UI),H===i.BYTE&&(q=i.R8I),H===i.SHORT&&(q=i.R16I),H===i.INT&&(q=i.R32I)),y===i.RG&&(H===i.FLOAT&&(q=i.RG32F),H===i.HALF_FLOAT&&(q=i.RG16F),H===i.UNSIGNED_BYTE&&(q=i.RG8),H===i.UNSIGNED_SHORT&&W&&(q=W.RG16_EXT),H===i.SHORT&&W&&(q=W.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RG8UI),H===i.UNSIGNED_SHORT&&(q=i.RG16UI),H===i.UNSIGNED_INT&&(q=i.RG32UI),H===i.BYTE&&(q=i.RG8I),H===i.SHORT&&(q=i.RG16I),H===i.INT&&(q=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(q=i.RGB16UI),H===i.UNSIGNED_INT&&(q=i.RGB32UI),H===i.BYTE&&(q=i.RGB8I),H===i.SHORT&&(q=i.RGB16I),H===i.INT&&(q=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),H===i.UNSIGNED_INT&&(q=i.RGBA32UI),H===i.BYTE&&(q=i.RGBA8I),H===i.SHORT&&(q=i.RGBA16I),H===i.INT&&(q=i.RGBA32I)),y===i.RGB&&(H===i.UNSIGNED_SHORT&&W&&(q=W.RGB16_EXT),H===i.SHORT&&W&&(q=W.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),y===i.RGBA){let ee=ue?bs:tt.getTransfer(Q);H===i.FLOAT&&(q=i.RGBA32F),H===i.HALF_FLOAT&&(q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(q=ee===ot?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&W&&(q=W.RGBA16_EXT),H===i.SHORT&&W&&(q=W.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(I,y){let H;return I?y===null||y===cn||y===ts?H=i.DEPTH24_STENCIL8:y===jt?H=i.DEPTH32F_STENCIL8:y===es&&(H=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cn||y===ts?H=i.DEPTH_COMPONENT24:y===jt?H=i.DEPTH_COMPONENT32F:y===es&&(H=i.DEPTH_COMPONENT16),H}function T(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Et&&I.minFilter!==Tt?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function w(I){let y=I.target;y.removeEventListener("dispose",w),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&m.delete(y)}function x(I){let y=I.target;y.removeEventListener("dispose",x),L(y)}function A(I){let y=n.get(I);if(y.__webglInit===void 0)return;let H=I.source,J=d.get(H);if(J){let Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(I),Object.keys(J).length===0&&d.delete(H)}n.remove(I)}function R(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let H=I.source,J=d.get(H);delete J[y.__cacheKey],a.memory.textures--}function L(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=I.textures;for(let J=0,Q=H.length;J<Q;J++){let ue=n.get(H[J]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(I)}let D=0;function P(){D=0}function C(){return D}function O(I){D=I}function $(){let I=D;return I>=s.maxTextures&&He("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function B(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function V(I,y){let H=n.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let J=I.image;if(J===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,I,y);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function N(I,y){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){me(H,I,y);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function G(I,y){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){me(H,I,y);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function Z(I,y){let H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){Oe(H,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}let ae={[Jr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},fe={[Et]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Ve={[_h]:i.NEVER,[Sh]:i.ALWAYS,[vh]:i.LESS,[co]:i.LEQUAL,[yh]:i.EQUAL,[ho]:i.GEQUAL,[bh]:i.GREATER,[Mh]:i.NOTEQUAL};function ze(I,y){if(y.type===jt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Tt||y.magFilter===wa||y.magFilter===tr||y.magFilter===Kn||y.minFilter===Tt||y.minFilter===wa||y.minFilter===tr||y.minFilter===Kn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ae[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ae[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ae[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,fe[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Et||y.minFilter!==tr&&y.minFilter!==Kn||y.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function We(I,y){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",w));let J=y.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let ue=B(y);if(ue!==I.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[ue].usedTimes++;let W=Q[I.__cacheKey];W!==void 0&&(Q[I.__cacheKey].usedTimes--,W.usedTimes===0&&R(y)),I.__cacheKey=ue,I.__webglTexture=Q[ue].texture}return H}function te(I,y,H){return Math.floor(Math.floor(I/H)/y)}function ne(I,y,H,J){let ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,H,J,y.data);else{ue.sort((Te,_e)=>Te.start-_e.start);let W=0;for(let Te=1;Te<ue.length;Te++){let _e=ue[W],xe=ue[Te],Ne=_e.start+_e.count,ke=te(xe.start,y.width,4),Je=te(_e.start,y.width,4);xe.start<=Ne+1&&ke===Je&&te(xe.start+xe.count-1,y.width,4)===ke?_e.count=Math.max(_e.count,xe.start+xe.count-_e.start):(++W,ue[W]=xe)}ue.length=W+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Te=0,_e=ue.length;Te<_e;Te++){let xe=ue[Te],Ne=Math.floor(xe.start/4),ke=Math.ceil(xe.count/4),Je=Ne%y.width,k=Math.floor(Ne/y.width),ve=ke,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Je,k,ve,ie,H,J,y.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function me(I,y,H){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let Q=We(I,y),ue=y.source;t.bindTexture(J,I.__webglTexture,i.TEXTURE0+H);let W=n.get(ue);if(ue.version!==W.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ie=tt.getPrimaries(tt.workingColorSpace),ye=y.colorSpace===Ln?null:tt.getPrimaries(y.colorSpace),Ee=y.colorSpace===Ln||ie===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=f(y.image,!1,s.maxTextureSize);ee=it(y,ee);let ce=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),_e=_(y.internalFormat,ce,Te,y.normalized,y.colorSpace,y.isVideoTexture);ze(J,y);let xe,Ne=y.mipmaps,ke=y.isVideoTexture!==!0,Je=W.__version===void 0||Q===!0,k=ue.dataReady,ve=T(y,ee);if(y.isDepthTexture)_e=S(y.format===jn,y.type),Je&&(ke?t.texStorage2D(i.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,_e,ee.width,ee.height,0,ce,Te,null));else if(y.isDataTexture)if(Ne.length>0){ke&&Je&&t.texStorage2D(i.TEXTURE_2D,ve,_e,Ne[0].width,Ne[0].height);for(let ie=0,ye=Ne.length;ie<ye;ie++)xe=Ne[ie],ke?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,xe.width,xe.height,ce,Te,xe.data):t.texImage2D(i.TEXTURE_2D,ie,_e,xe.width,xe.height,0,ce,Te,xe.data);y.generateMipmaps=!1}else ke?(Je&&t.texStorage2D(i.TEXTURE_2D,ve,_e,ee.width,ee.height),k&&ne(y,ee,ce,Te)):t.texImage2D(i.TEXTURE_2D,0,_e,ee.width,ee.height,0,ce,Te,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,_e,Ne[0].width,Ne[0].height,ee.depth);for(let ie=0,ye=Ne.length;ie<ye;ie++)if(xe=Ne[ie],y.format!==Qt)if(ce!==null)if(ke){if(k)if(y.layerUpdates.size>0){let Ee=Nl(xe.width,xe.height,y.format,y.type);for(let re of y.layerUpdates){let Be=xe.data.subarray(re*Ee/xe.data.BYTES_PER_ELEMENT,(re+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,re,xe.width,xe.height,1,ce,Be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,ee.depth,ce,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,xe.width,xe.height,ee.depth,0,xe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,ee.depth,ce,Te,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,xe.width,xe.height,ee.depth,0,ce,Te,xe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ke&&Je&&t.texStorage2D(i.TEXTURE_2D,ve,_e,Ne[0].width,Ne[0].height);for(let ie=0,ye=Ne.length;ie<ye;ie++)xe=Ne[ie],y.format!==Qt?ce!==null?ke?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,xe.width,xe.height,ce,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,xe.width,xe.height,0,xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,xe.width,xe.height,ce,Te,xe.data):t.texImage2D(i.TEXTURE_2D,ie,_e,xe.width,xe.height,0,ce,Te,xe.data)}else if(y.isDataArrayTexture)if(ke){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,_e,ee.width,ee.height,ee.depth),k)if(y.layerUpdates.size>0){let ie=Nl(ee.width,ee.height,y.format,y.type);for(let ye of y.layerUpdates){let Ee=ee.data.subarray(ye*ie/ee.data.BYTES_PER_ELEMENT,(ye+1)*ie/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,ee.width,ee.height,1,ce,Te,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,ce,Te,ee.data);else if(y.isData3DTexture)ke?(Je&&t.texStorage3D(i.TEXTURE_3D,ve,_e,ee.width,ee.height,ee.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,ce,Te,ee.data);else if(y.isFramebufferTexture){if(Je)if(ke)t.texStorage2D(i.TEXTURE_2D,ve,_e,ee.width,ee.height);else{let ie=ee.width,ye=ee.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,_e,ie,ye,0,ce,Te,null),ie>>=1,ye>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ee.parentNode!==ie){ie.appendChild(ee),m.add(y),ie.onpaint=ye=>{let Ee=ye.changedElements;for(let re of m)Ee.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Ee=i.RGBA,re=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,re,Be,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ke&&Je){let ie=$e(Ne[0]);t.texStorage2D(i.TEXTURE_2D,ve,_e,ie.width,ie.height)}for(let ie=0,ye=Ne.length;ie<ye;ie++)xe=Ne[ie],ke?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ce,Te,xe):t.texImage2D(i.TEXTURE_2D,ie,_e,ce,Te,xe);y.generateMipmaps=!1}else if(ke){if(Je){let ie=$e(ee);t.texStorage2D(i.TEXTURE_2D,ve,_e,ie.width,ie.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,_e,ce,Te,ee);p(y)&&b(J),W.__version=ue.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Oe(I,y,H){if(y.image.length!==6)return;let J=We(I,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let ue=n.get(Q);if(Q.version!==ue.__version||J===!0){t.activeTexture(i.TEXTURE0+H);let W=tt.getPrimaries(tt.workingColorSpace),q=y.colorSpace===Ln?null:tt.getPrimaries(y.colorSpace),ee=y.colorSpace===Ln||W===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Te=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let re=0;re<6;re++)!ce&&!Te?_e[re]=f(y.image[re],!0,s.maxCubemapSize):_e[re]=Te?y.image[re].image:y.image[re],_e[re]=it(y,_e[re]);let xe=_e[0],Ne=r.convert(y.format,y.colorSpace),ke=r.convert(y.type),Je=_(y.internalFormat,Ne,ke,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,ve=ue.__version===void 0||J===!0,ie=Q.dataReady,ye=T(y,xe);ze(i.TEXTURE_CUBE_MAP,y);let Ee;if(ce){k&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Je,xe.width,xe.height);for(let re=0;re<6;re++){Ee=_e[re].mipmaps;for(let Be=0;Be<Ee.length;Be++){let De=Ee[Be];y.format!==Qt?Ne!==null?k?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,De.width,De.height,Ne,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,Je,De.width,De.height,0,De.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,De.width,De.height,Ne,ke,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,Je,De.width,De.height,0,Ne,ke,De.data)}}}else{if(Ee=y.mipmaps,k&&ve){Ee.length>0&&ye++;let re=$e(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Je,re.width,re.height)}for(let re=0;re<6;re++)if(Te){k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,_e[re].width,_e[re].height,Ne,ke,_e[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,_e[re].width,_e[re].height,0,Ne,ke,_e[re].data);for(let Be=0;Be<Ee.length;Be++){let ut=Ee[Be].image[re].image;k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,ut.width,ut.height,Ne,ke,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,Je,ut.width,ut.height,0,Ne,ke,ut.data)}}else{k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,ke,_e[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Ne,ke,_e[re]);for(let Be=0;Be<Ee.length;Be++){let De=Ee[Be];k?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Ne,ke,De.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,Je,Ne,ke,De.image[re])}}}p(y)&&b(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function ge(I,y,H,J,Q,ue){let W=r.convert(H.format,H.colorSpace),q=r.convert(H.type),ee=_(H.internalFormat,W,q,H.normalized,H.colorSpace),ce=n.get(y),Te=n.get(H);if(Te.__renderTarget=y,!ce.__hasExternalTextures){let _e=Math.max(1,y.width>>ue),xe=Math.max(1,y.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ee,_e,xe,y.depth,0,W,q,null):t.texImage2D(Q,ue,ee,_e,xe,0,W,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),qe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,Te.__webglTexture,0,Ce(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,Te.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(I,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,ue=S(y.stencilBuffer,Q),W=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(y),ue,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(y),ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,I)}else{let J=y.textures;for(let Q=0;Q<J.length;Q++){let ue=J[Q],W=r.convert(ue.format,ue.colorSpace),q=r.convert(ue.type),ee=_(ue.internalFormat,W,q,ue.normalized,ue.colorSpace);qe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(y),ee,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(y),ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(I,y,H){let J=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y.depthTexture);let ce=r.convert(y.depthTexture.format),Te=r.convert(y.depthTexture.type),_e;y.depthTexture.format===mn?_e=i.DEPTH_COMPONENT24:y.depthTexture.format===jn&&(_e=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_e,y.width,y.height,0,ce,Te,null)}}else V(y.depthTexture,0);let ue=Q.__webglTexture,W=Ce(y),q=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=y.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===mn)qe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,q,ue,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,ee,q,ue,0);else if(y.depthTexture.format===jn)qe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,q,ue,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,ee,q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(I){let y=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)de(y.__webglFramebuffer[J],I,J);else{let J=I.texture.mipmaps;J&&J.length>0?de(y.__webglFramebuffer[0],I,0):de(y.__webglFramebuffer,I,0)}else if(H){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),Re(y.__webglDepthbuffer[J],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{let J=I.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Re(y.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(I,y,H){let J=n.get(I);y!==void 0&&ge(J.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&j(I)}function le(I){let y=I.texture,H=n.get(I),J=n.get(y);I.addEventListener("dispose",x);let Q=I.textures,ue=I.isWebGLCubeRenderTarget===!0,W=Q.length>1;if(W||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[q]=[];for(let ee=0;ee<y.mipmaps.length;ee++)H.__webglFramebuffer[q][ee]=i.createFramebuffer()}else H.__webglFramebuffer[q]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)H.__webglFramebuffer[q]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(W)for(let q=0,ee=Q.length;q<ee;q++){let ce=n.get(Q[q]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&qe(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let ee=Q[q];H.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[q]);let ce=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),_e=_(ee.internalFormat,ce,Te,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),xe=Ce(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,_e,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,H.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ge(H.__webglFramebuffer[q][ee],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee);else ge(H.__webglFramebuffer[q],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let q=0,ee=Q.length;q<ee;q++){let ce=Q[q],Te=n.get(ce),_e=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Te.__webglTexture),ze(_e,ce),ge(H.__webglFramebuffer,I,ce,i.COLOR_ATTACHMENT0+q,_e,0),p(ce)&&b(_e)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,J.__webglTexture),ze(q,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ge(H.__webglFramebuffer[ee],I,y,i.COLOR_ATTACHMENT0,q,ee);else ge(H.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,q,0);p(y)&&b(q),t.unbindTexture()}I.depthBuffer&&j(I)}function he(I){let y=I.textures;for(let H=0,J=y.length;H<J;H++){let Q=y[H];if(p(Q)){let ue=M(I),W=n.get(Q).__webglTexture;t.bindTexture(ue,W),b(ue),t.unbindTexture()}}}let oe=[],Fe=[];function Le(I){if(I.samples>0){if(qe(I)===!1){let y=I.textures,H=I.width,J=I.height,Q=i.COLOR_BUFFER_BIT,ue=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(I),q=y.length>1;if(q)for(let ce=0;ce<y.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);let Te=n.get(y[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,Q,i.NEAREST),l===!0&&(oe.length=0,Fe.length=0,oe.push(i.COLOR_ATTACHMENT0+ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(oe.push(ue),Fe.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ce=0;ce<y.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);let Te=n.get(y[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ce(I){return Math.min(s.maxSamples,I.samples)}function qe(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(I){let y=a.render.frame;u.get(I)!==y&&(u.set(I,y),I.update())}function it(I,y){let H=I.colorSpace,J=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==ys&&H!==Ln&&(tt.getTransfer(H)===ot?(J!==Qt||Q!==Vt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",H)),y}function $e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=se,this.setupRenderTarget=le,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j0(i,e){function t(n,s=Ln){let r,a=tt.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===Ml)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===jt)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===Tl)return i.RGB;if(n===Qt)return i.RGBA;if(n===mn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za||n===ka||n===Va||n===ar||n===Ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ar)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Wa||n===qa||n===Xa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===or||n===lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Is(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yt({vertexShader:Q0,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends gn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,h=null,d=null,g=null,v=typeof XRWebGLBinding<"u",f=new Zl,p={},b=t.getContextAttributes(),M=null,_=null,S=[],T=[],w=new pe,x=null,A=null,R=new Ot;R.viewport=new gt;let L=new Ot;L.viewport=new gt;let D=[R,L],P=new ba,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ne=S[te];return ne===void 0&&(ne=new qi,S[te]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(te){let ne=S[te];return ne===void 0&&(ne=new qi,S[te]=ne),ne.getGripSpace()},this.getHand=function(te){let ne=S[te];return ne===void 0&&(ne=new qi,S[te]=ne),ne.getHandSpace()};function $(te){let ne=T.indexOf(te.inputSource);if(ne===-1)return;let me=S[ne];me!==void 0&&(me.update(te.inputSource,te.frame,c||a),me.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let te=0;te<S.length;te++){let ne=T[te];ne!==null&&(T[te]=null,S[te].disconnect(ne))}C=null,O=null,f.reset();for(let te in p)delete p[te];if(e.setRenderTarget(M),d=null,h=null,m=null,s=null,_=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),A!==null){let te=A.camera;te.fov=A.fov,te.zoom=A.zoom,te.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?jn:mn,Oe=b.stencil?ts:cn);let Re={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new kt(h.textureWidth,h.textureHeight,{format:Qt,type:Vt,depthTexture:new Gn(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new kt(d.framebufferWidth,d.framebufferHeight,{format:Qt,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function V(te){for(let ne=0;ne<te.removed.length;ne++){let me=te.removed[ne],Oe=T.indexOf(me);Oe>=0&&(T[Oe]=null,S[Oe].disconnect(me))}for(let ne=0;ne<te.added.length;ne++){let me=te.added[ne],Oe=T.indexOf(me);if(Oe===-1){for(let Re=0;Re<S.length;Re++)if(Re>=T.length){T.push(me),Oe=Re;break}else if(T[Re]===null){T[Re]=me,Oe=Re;break}if(Oe===-1)break}let ge=S[Oe];ge&&ge.connect(me)}}let N=new F,G=new F;function Z(te,ne,me){N.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(me.matrixWorld);let Oe=N.distanceTo(G),ge=ne.projectionMatrix.elements,Re=me.projectionMatrix.elements,de=ge[14]/(ge[10]-1),j=ge[14]/(ge[10]+1),se=(ge[9]+1)/ge[5],le=(ge[9]-1)/ge[5],he=(ge[8]-1)/ge[0],oe=(Re[8]+1)/Re[0],Fe=de*he,Le=de*oe,Ce=Oe/(-he+oe),qe=Ce*-he;if(ne.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(qe),te.translateZ(Ce),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ge[10]===-1)te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let U=de+Ce,it=j+Ce,$e=Fe-qe,I=Le+(Oe-qe),y=se*j/it*U,H=le*j/it*U;te.projectionMatrix.makePerspective($e,I,y,H,U,it),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ae(te,ne){ne===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ne.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ne=te.near,me=te.far;f.texture!==null&&(f.depthNear>0&&(ne=f.depthNear),f.depthFar>0&&(me=f.depthFar)),P.near=L.near=R.near=ne,P.far=L.far=R.far=me,(C!==P.near||O!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,O=P.far),P.layers.mask=te.layers.mask|6,R.layers.mask=P.layers.mask&-5,L.layers.mask=P.layers.mask&-3;let Oe=te.parent,ge=P.cameras;ae(P,Oe);for(let Re=0;Re<ge.length;Re++)ae(ge[Re],Oe);ge.length===2?Z(P,R,L):P.projectionMatrix.copy(R.projectionMatrix),A===null&&te.isPerspectiveCamera&&(A={camera:te,fov:te.fov,zoom:te.zoom}),fe(te,P,Oe)};function fe(te,ne,me){me===null?te.matrix.copy(ne.matrixWorld):(te.matrix.copy(me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ne.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Hi*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(P)},this.getCameraTexture=function(te){return p[te]};let Ve=null;function ze(te,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){let me=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Oe=!1;me.length!==P.cameras.length&&(P.cameras.length=0,Oe=!0);for(let j=0;j<me.length;j++){let se=me[j],le=null;if(d!==null)le=d.getViewport(se);else{let oe=m.getViewSubImage(h,se);le=oe.viewport,j===0&&(e.setRenderTargetTextures(_,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(_))}let he=D[j];he===void 0&&(he=new Ot,he.layers.enable(j),he.viewport=new gt,D[j]=he),he.matrix.fromArray(se.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(se.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(le.x,le.y,le.width,le.height),j===0&&(P.matrix.copy(he.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Oe===!0&&P.cameras.push(he)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){m=n.getBinding();let j=m.getDepthInformation(me[0]);j&&j.isValid&&j.texture&&f.init(j,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),m=n.getBinding();for(let j=0;j<me.length;j++){let se=me[j].camera;if(se){let le=p[se];le||(le=new Is,p[se]=le);let he=m.getCameraImage(se);le.sourceTexture=he}}}}for(let me=0;me<S.length;me++){let Oe=T[me],ge=S[me];Oe!==null&&ge!==void 0&&ge.update(Oe,ne,c||a)}Ve&&Ve(te,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let We=new su;We.setAnimationLoop(ze),this.setAnimationLoop=function(te){Ve=te},this.dispose=function(){}}},tx=new ct,hu=new Xe;hu.set(-1,0,0,0,1,0,0,0,1);function nx(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Il(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,b,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),m(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,_)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,b,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Rt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Rt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,_=b.envMapRotation;M&&(f.envMap.value=M,f.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(hu),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,b,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=M*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function m(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){let b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ix(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let T=S.program;n.uniformBlockBinding(_,T)}function c(_,S){let T=s[_.id];T===void 0&&(f(_),T=u(_),s[_.id]=T,_.addEventListener("dispose",b));let w=S.program;n.updateUBOMapping(_,w);let x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){let S=m();_.__bindingPointIndex=S;let T=i.createBuffer(),w=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function m(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let S=s[_.id],T=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,A=T.length;x<A;x++){let R=T[x];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)d(R[L],x,L,w);else d(R,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,S,T,w){if(v(_,S,T,w)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let R=0;for(let L=0;L<A.length;L++){let D=A[L],P=p(D);g(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,S,T){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,T)}function v(_,S,T,w){let x=_.value,A=S+"_"+T;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let R=w[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function f(_){let S=_.uniforms,T=0,w=16;for(let A=0,R=S.length;A<R;A++){let L=Array.isArray(S[A])?S[A]:[S[A]];for(let D=0,P=L.length;D<P;D++){let C=L[D],O=Array.isArray(C.value)?C.value:[C.value];for(let $=0,B=O.length;$<B;$++){let V=O[$],N=p(V),G=T%w,Z=G%N.boundary,ae=G+Z;T+=Z,ae!==0&&w-ae<N.storage&&(T+=w-ae),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=N.storage}}}let x=T%w;return x>0&&(T+=w-x),_.__size=T,_.__cache={},this}function p(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),S}function b(_){let S=_.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function rx(){return Sn===null&&(Sn=new As(sx,16,16,Qn,hn),Sn.name="DFG_LUT",Sn.minFilter=Tt,Sn.magFilter=Tt,Sn.wrapS=pn,Sn.wrapT=pn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var mo=class{constructor(e={}){let{canvas:t=wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Vt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,f=new Set([La,Ia,Pa]),p=new Set([Vt,cn,es,ts,Aa,Ca]),b=new Uint32Array(4),M=new Int32Array(4),_=new F,S=null,T=null,w=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,D=null,P=null,C=null,O=null;this._outputColorSpace=Ft;let $=0,B=0,V=null,N=-1,G=null,Z=new gt,ae=new gt,fe=null,Ve=new Ze(0),ze=0,We=t.width,te=t.height,ne=1,me=null,Oe=null,ge=new gt(0,0,We,te),Re=new gt(0,0,We,te),de=!1,j=new Xi,se=!1,le=!1,he=new ct,oe=new F,Fe=new gt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function qe(){return V===null?ne:1}let U=n;function it(E,z){return t.getContext(E,z)}let $e,I,y,H,J,Q,ue,W,q,ee,ce,Te,_e,xe,Ne,ke,Je,k,ve,ie,ye,Ee,re;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",en,!1),U===null){let z="webgl2";if(U=it(z,E),U===null)throw it(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(E){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",en,!1),Ge("WebGLRenderer: "+E.message),E}function Be(){$e=new dg(U),$e.init(),ye=new j0(U,$e),I=new ng(U,$e,e,ye),y=new $0(U,$e),I.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),P=U.createFramebuffer(),C=U.createFramebuffer(),O=U.createFramebuffer(),H=new mg(U),J=new F0,Q=new K0(U,$e,y,J,I,ye,H),ue=new ug(R),W=new xf(U),Ee=new eg(U,W),q=new fg(U,W,H,Ee),ee=new xg(U,q,W,Ee,H),k=new gg(U,I,Q),Ne=new ig(J),ce=new U0(R,ue,$e,I,Ee,Ne),Te=new nx(R,J),_e=new B0,xe=new W0($e),Je=new Qm(R,ue,y,ee,g,l),ke=new J0(R,ee,I),re=new ix(U,H,I,y),ve=new tg(U,$e,H),ie=new pg(U,$e,H),H.programs=ce.programs,R.capabilities=I,R.extensions=$e,R.properties=J,R.renderLists=_e,R.shadowMap=ke,R.state=y,R.info=H}v!==Vt&&(A=new vg(v,t.width,t.height,o,s,r));let De=new Jl(R,U);this.xr=De,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(We,te,!1))},this.getSize=function(E){return E.set(We,te)},this.setSize=function(E,z,K=!0){if(De.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}We=E,te=z,t.width=Math.floor(E*ne),t.height=Math.floor(z*ne),K===!0&&(t.style.width=E+"px",t.style.height=z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(We*ne,te*ne).floor()},this.setDrawingBufferSize=function(E,z,K){We=E,te=z,ne=K,t.width=Math.floor(E*K),t.height=Math.floor(z*K),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(v===Vt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,z,K,X){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,z,K,X),y.viewport(Z.copy(ge).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,z,K,X){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,z,K,X),y.scissor(ae.copy(Re).multiplyScalar(ne).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){y.setScissorTest(de=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){Oe=E},this.getClearColor=function(E){return E.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,K=!0){let X=0;if(E){let Y=!1;if(V!==null){let Se=V.texture.format;Y=f.has(Se)}if(Y){let Se=V.texture.type,Ae=p.has(Se),Me=Je.getClearColor(),Pe=Je.getClearAlpha(),Ue=Me.r,Ke=Me.g,et=Me.b;Ae?(b[0]=Ue,b[1]=Ke,b[2]=et,b[3]=Pe,U.clearBufferuiv(U.COLOR,0,b)):(M[0]=Ue,M[1]=Ke,M[2]=et,M[3]=Pe,U.clearBufferiv(U.COLOR,0,M))}else X|=U.COLOR_BUFFER_BIT}z&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",en,!1),Je.dispose(),_e.dispose(),xe.dispose(),J.dispose(),ue.dispose(),ee.dispose(),Ee.dispose(),re.dispose(),ce.dispose(),De.dispose(),De.removeEventListener("sessionstart",sc),De.removeEventListener("sessionend",rc),ti.stop()};function ut(E){E.preventDefault(),Cl("WebGLRenderer: Context Lost."),L=!0}function rt(){Cl("WebGLRenderer: Context Restored."),L=!1;let E=H.autoReset,z=ke.enabled,K=ke.autoUpdate,X=ke.needsUpdate,Y=ke.type;Be(),H.autoReset=E,ke.enabled=z,ke.autoUpdate=K,ke.needsUpdate=X,ke.type=Y}function en(E){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function un(E){let z=E.target;z.removeEventListener("dispose",un),zu(z)}function zu(E){ku(E),J.remove(E)}function ku(E){let z=J.get(E).programs;z!==void 0&&(z.forEach(function(K){ce.releaseProgram(K)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,K,X,Y,Se){z===null&&(z=Le);let Ae=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Me=Gu(E,z,K,X,Y);y.setMaterial(X,Ae);let Pe=K.index,Ue=1;if(X.wireframe===!0){if(Pe=q.getWireframeAttribute(K),Pe===void 0)return;Ue=2}let Ke=K.drawRange,et=K.attributes.position,Ie=Ke.start*Ue,at=(Ke.start+Ke.count)*Ue;Se!==null&&(Ie=Math.max(Ie,Se.start*Ue),at=Math.min(at,(Se.start+Se.count)*Ue)),Pe!==null?(Ie=Math.max(Ie,0),at=Math.min(at,Pe.count)):et!=null&&(Ie=Math.max(Ie,0),at=Math.min(at,et.count));let vt=at-Ie;if(vt<0||vt===1/0)return;Ee.setup(Y,X,Me,K,Pe);let pt,ht=ve;if(Pe!==null&&(pt=W.get(Pe),ht=ie,ht.setIndex(pt)),Y.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*qe()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(Y.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),y.setLineWidth(Pt*qe()),Y.isLineSegments?ht.setMode(U.LINES):Y.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else Y.isPoints?ht.setMode(U.POINTS):Y.isSprite&&ht.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ht.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Pt=Y._multiDrawStarts,we=Y._multiDrawCounts,Nt=Y._multiDrawCount,st=Pe?W.get(Pe).bytesPerElement:1,$t=J.get(X).currentProgram.getUniforms();for(let dn=0;dn<Nt;dn++)$t.setValue(U,"_gl_DrawID",dn),ht.render(Pt[dn]/st,we[dn])}else if(Y.isInstancedMesh)ht.renderInstances(Ie,vt,Y.count);else if(K.isInstancedBufferGeometry){let Pt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Pt);ht.renderInstances(Ie,vt,we)}else ht.render(Ie,vt)};function ic(E,z,K,X){D!==null&&E.isNodeMaterial&&D.setObject(X,E),se===!0&&Ne.setState(E,K,!1),E.transparent===!0&&E.side===bn&&E.forceSinglePass===!1?(E.side=Rt,E.needsUpdate=!0,xr(E,z,X),E.side=Jn,E.needsUpdate=!0,xr(E,z,X),E.side=bn):xr(E,z,X)}this.compile=function(E,z,K=null){K===null&&(K=E),D!==null&&D.renderStart(E,z,K),T=xe.get(K),T.init(z),x.push(T),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),E!==K&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),le=this.localClippingEnabled,se=Ne.init(this.clippingPlanes,le),se===!0&&Ne.setGlobalState(this.clippingPlanes,z),D!==null&&ke.render(T.state.shadowsArray,K,z);let X=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Me=Se[Ae];ic(Me,K,z,Y),X.add(Me)}else ic(Se,K,z,Y),X.add(Se)}),T=x.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(E,z,K=null){let X=this.compile(E,z,K);return new Promise(Y=>{function Se(){if(X.forEach(function(Ae){let Pe=J.get(Ae).currentProgram;(Pe===void 0||Pe.isReady())&&X.delete(Ae)}),X.size===0){Y(E);return}setTimeout(Se,10)}$e.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Eo=null;function Vu(E){Eo&&Eo(E)}function sc(){ti.stop()}function rc(){ti.start()}let ti=new su;ti.setAnimationLoop(Vu),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){Eo=E,De.setAnimationLoop(E),E===null?ti.stop():ti.start()},De.addEventListener("sessionstart",sc),De.addEventListener("sessionend",rc),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,z);let K=De.enabled===!0&&De.isPresenting===!0,X=A!==null&&(V===null||K)&&A.begin(R,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(z),z=De.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,z,V),T=xe.get(E,x.length),T.init(z),T.state.textureUnits=Q.getTextureUnits(),x.push(T),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(he,an,z.reversedDepth),le=this.localClippingEnabled,se=Ne.init(this.clippingPlanes,le),S=_e.get(E,w.length),S.init(),w.push(S),De.enabled===!0&&De.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&wo(Ae,z,-1/0,R.sortObjects)}wo(E,z,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(me,Oe),Ce=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ce&&Je.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ne.beginShadows();let Y=T.state.shadowsArray;if(ke.render(Y,E,z),se===!0&&Ne.endShadows(),(X&&A.hasRenderPass())===!1){let Ae=S.opaque,Me=S.transmissive;if(T.setupLights(),z.isArrayCamera){let Pe=z.cameras;if(Me.length>0)for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){let et=Pe[Ue];oc(Ae,Me,E,et)}Ce&&Je.render(E);for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){let et=Pe[Ue];ac(S,E,et,et.viewport)}}else Me.length>0&&oc(Ae,Me,E,z),Ce&&Je.render(E),ac(S,E,z)}V!==null&&B===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),X&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,z),Ee.resetDefaultState(),N=-1,G=null,x.pop(),x.length>0?(T=x[x.length-1],Q.setTextureUnits(T.state.textureUnits),se===!0&&Ne.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,D!==null&&D.renderEnd()};function wo(E,z,K,X){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(j)){X&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);let Ae=ee.update(E),Me=E.material;Me.visible&&S.push(E,Ae,Me,K,Fe.z,null,z)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(j))){let Ae=ee.update(E),Me=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Fe.copy(Ae.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(Me)){let Pe=Ae.groups;for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){let et=Pe[Ue],Ie=Me[et.materialIndex];Ie&&Ie.visible&&S.push(E,Ae,Ie,K,Fe.z,et,z)}}else Me.visible&&S.push(E,Ae,Me,K,Fe.z,null,z)}}let Se=E.children;for(let Ae=0,Me=Se.length;Ae<Me;Ae++)wo(Se[Ae],z,K,X)}function ac(E,z,K,X){let{opaque:Y,transmissive:Se,transparent:Ae}=E;T.setupLightsView(K),se===!0&&Ne.setGlobalState(R.clippingPlanes,K),X&&y.viewport(Z.copy(X)),Y.length>0&&gr(Y,z,K),Se.length>0&&gr(Se,z,K),Ae.length>0&&gr(Ae,z,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function oc(E,z,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Ie=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new kt(1,1,{generateMipmaps:!0,type:Ie?hn:Vt,minFilter:Kn,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Se=T.state.transmissionRenderTarget[X.id],Ae=X.viewport||Z;Se.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Pe=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(Ve),ze=R.getClearAlpha(),ze<1&&R.setClearColor(16777215,.5),R.clear(),Ce&&Je.render(K);let Ke=R.toneMapping;R.toneMapping=ln;let et=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),se===!0&&Ne.setGlobalState(R.clippingPlanes,X),gr(E,K,X),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let at=0,vt=z.length;at<vt;at++){let pt=z[at],{object:ht,geometry:Pt,material:we,group:Nt}=pt;if(we.side===bn&&ht.layers.test(X.layers)){let st=we.side;we.side=Rt,we.needsUpdate=!0,lc(ht,K,X,Pt,we,Nt),we.side=st,we.needsUpdate=!0,Ie=!0}}Ie===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}R.setRenderTarget(Me,Pe,Ue),R.setClearColor(Ve,ze),et!==void 0&&(X.viewport=et),R.toneMapping=Ke}function gr(E,z,K){let X=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Se=E.length;Y<Se;Y++){let Ae=E[Y],{object:Me,geometry:Pe,group:Ue}=Ae,Ke=Ae.material;Ke.allowOverride===!0&&X!==null&&(Ke=X),Me.layers.test(K.layers)&&lc(Me,z,K,Pe,Ke,Ue)}}function lc(E,z,K,X,Y,Se){D!==null&&Y.isNodeMaterial&&D.setObject(E,Y),E.onBeforeRender(R,z,K,X,Y,Se),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(R,z,K,X,E,Se),Y.transparent===!0&&Y.side===bn&&Y.forceSinglePass===!1?(Y.side=Rt,Y.needsUpdate=!0,R.renderBufferDirect(K,z,X,Y,E,Se),Y.side=Jn,Y.needsUpdate=!0,R.renderBufferDirect(K,z,X,Y,E,Se),Y.side=bn):R.renderBufferDirect(K,z,X,Y,E,Se),E.onAfterRender(R,z,K,X,Y,Se)}function xr(E,z,K){z.isScene!==!0&&(z=Le);let X=J.get(E),Y=T.state.lights,Se=T.state.shadowsArray,Ae=Y.state.version,Me=ce.getParameters(E,Y.state,Se,z,K,T.state.lightProbeGridArray),Pe=ce.getProgramCacheKey(Me),Ue=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let Ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ue.get(E.envMap||X.environment,Ke),X.envMapRotation=X.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",un),Ue=new Map,X.programs=Ue);let et=Ue.get(Pe);if(et!==void 0){if(X.currentProgram===et&&X.lightsStateVersion===Ae)return hc(E,Me),et}else Me.uniforms=ce.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,K,Me),E.onBeforeCompile(Me,R),et=ce.acquireProgram(Me,Pe),Ue.set(Pe,et),X.uniforms=Me.uniforms;let Ie=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),hc(E,Me),X.needsLights=qu(E),X.lightsStateVersion=Ae,X.needsLights&&(Ie.ambientLightColor.value=Y.state.ambient,Ie.lightProbe.value=Y.state.probe,Ie.sunLights.value=Y.state.sun,Ie.sunLightShadows.value=Y.state.sunShadow,Ie.directionalLights.value=Y.state.directional,Ie.directionalLightShadows.value=Y.state.directionalShadow,Ie.spotLights.value=Y.state.spot,Ie.spotLightShadows.value=Y.state.spotShadow,Ie.rectAreaLights.value=Y.state.rectArea,Ie.ltc_1.value=Y.state.rectAreaLTC1,Ie.ltc_2.value=Y.state.rectAreaLTC2,Ie.pointLights.value=Y.state.point,Ie.pointLightShadows.value=Y.state.pointShadow,Ie.hemisphereLights.value=Y.state.hemi,Ie.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ie.sunShadowCascade.value=Y.state.sunShadowCascade,Ie.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ie.spotLightMatrix.value=Y.state.spotLightMatrix,Ie.spotLightMap.value=Y.state.spotLightMap,Ie.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=et,X.uniformsList=null,et}function cc(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=ss.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function hc(E,z){let K=J.get(E);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Hu(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let K=0,X=E.length;K<X;K++){let Y=E[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function Gu(E,z,K,X,Y){z.isScene!==!0&&(z=Le),Q.resetTextureUnits();let Se=z.fog,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Me=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:tt.workingColorSpace,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ue=ue.get(X.envMap||Ae,Pe),Ke=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,et=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,vt=!!K.morphAttributes.color,pt=ln;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(pt=R.toneMapping);let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pt=ht!==void 0?ht.length:0,we=J.get(X),Nt=T.state.lights;if(se===!0&&(le===!0||E!==G)){let dt=E===G&&X.id===N;Ne.setState(X,E,dt)}let st=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Nt.state.version||we.outputColorSpace!==Me||Y.isBatchedMesh&&we.batching===!1||!Y.isBatchedMesh&&we.batching===!0||Y.isBatchedMesh&&we.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&we.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&we.instancing===!1||!Y.isInstancedMesh&&we.instancing===!0||Y.isSkinnedMesh&&we.skinning===!1||!Y.isSkinnedMesh&&we.skinning===!0||Y.isInstancedMesh&&we.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&we.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&we.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&we.instancingMorph===!1&&Y.morphTexture!==null||we.envMap!==Ue||X.fog===!0&&we.fog!==Se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ne.numPlanes||we.numIntersection!==Ne.numIntersection)||we.vertexAlphas!==Ke||we.vertexTangents!==et||we.morphTargets!==Ie||we.morphNormals!==at||we.morphColors!==vt||we.toneMapping!==pt||we.morphTargetsCount!==Pt||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,we.__version=X.version);let $t=we.currentProgram;st===!0&&($t=xr(X,z,Y),D&&X.isNodeMaterial&&D.onUpdateProgram(X,$t,we));let dn=!1,Dn=!1,bi=!1,lt=$t.getUniforms(),_t=we.uniforms;if(y.useProgram($t.program)&&(dn=!0,Dn=!0,bi=!0),X.id!==N&&(N=X.id,Dn=!0),we.needsLights){let dt=Hu(T.state.lightProbeGridArray,Y);we.lightProbeGrid!==dt&&(we.lightProbeGrid=dt,Dn=!0)}if(dn||G!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",E.projectionMatrix),lt.setValue(U,"viewMatrix",E.matrixWorldInverse);let Un=lt.map.cameraPosition;Un!==void 0&&Un.setValue(U,oe.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,Dn=!0,bi=!0)}if(we.needsLights&&(Nt.state.sunShadowMap.length>0&&lt.setValue(U,"sunShadowMap",Nt.state.sunShadowMap,Q),Nt.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",Nt.state.directionalShadowMap,Q),Nt.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",Nt.state.spotShadowMap,Q),Nt.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",Nt.state.pointShadowMap,Q)),Y.isSkinnedMesh){lt.setOptional(U,Y,"bindMatrix"),lt.setOptional(U,Y,"bindMatrixInverse");let dt=Y.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),lt.setValue(U,"boneTexture",dt.boneTexture,Q))}Y.isBatchedMesh&&(lt.setOptional(U,Y,"batchingTexture"),lt.setValue(U,"batchingTexture",Y._matricesTexture,Q),lt.setOptional(U,Y,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",Y._indirectTexture,Q),lt.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",Y._colorsTexture,Q));let Nn=K.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&k.update(Y,K,$t),(Dn||we.receiveShadow!==Y.receiveShadow)&&(we.receiveShadow=Y.receiveShadow,lt.setValue(U,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(_t.envMapIntensity.value=z.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=rx()),Dn){if(lt.setValue(U,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Wu(_t,bi),Se&&X.fog===!0&&Te.refreshFogUniforms(_t,Se),Te.refreshMaterialUniforms(_t,X,ne,te,T.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){let dt=we.lightProbeGrid;_t.probesSH.value=dt.texture,_t.probesMin.value.copy(dt.boundingBox.min),_t.probesMax.value.copy(dt.boundingBox.max),_t.probesResolution.value.copy(dt.resolution)}ss.upload(U,cc(we),_t,Q)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ss.upload(U,cc(we),_t,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(U,"center",Y.center),lt.setValue(U,"modelViewMatrix",Y.modelViewMatrix),lt.setValue(U,"normalMatrix",Y.normalMatrix),lt.setValue(U,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let dt=X.uniformsGroups;for(let Un=0,Mi=dt.length;Un<Mi;Un++){let dc=dt[Un];re.update(dc,$t),re.bind(dc,$t)}}return $t}function Wu(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function qu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,z,K){let X=J.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),J.get(E.texture).__webglTexture=z,J.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let K=J.get(E);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,K=0){V=E,$=z,B=K;let X=null,Y=!1,Se=!1;if(E){let Me=J.get(E);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),Z.copy(E.viewport),ae.copy(E.scissor),fe=E.scissorTest,y.viewport(Z),y.scissor(ae),y.setScissorTest(fe),N=-1;return}else if(Me.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(Me.__hasExternalTextures)Q.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ke=E.depthTexture;if(Me.__boundDepthTexture!==Ke){if(Ke!==null&&J.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);let Ue=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?X=Ue[z][K]:X=Ue[z],Y=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?X=J.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?X=Ue[K]:X=Ue,Z.copy(E.viewport),ae.copy(E.scissor),fe=E.scissorTest}else Z.copy(ge).multiplyScalar(ne).floor(),ae.copy(Re).multiplyScalar(ne).floor(),fe=de;if(K!==0&&(X=P),y.bindFramebuffer(U.FRAMEBUFFER,X)&&y.drawBuffers(E,X),y.viewport(Z),y.scissor(ae),y.setScissorTest(fe),Y){let Me=J.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,K)}else if(Se){let Me=z;for(let Pe=0;Pe<E.textures.length;Pe++){let Ue=J.get(E.textures[Pe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,K,Me)}}else if(E!==null&&K!==0){let Me=J.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,K)}N=-1};function uc(E){let z=J.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=I.textureFormatReadable(E.format),z.__typeReadable=I.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,K,X,Y,Se,Ae,Me=0){if(!(E&&E.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){y.bindFramebuffer(U.FRAMEBUFFER,Pe);try{let Ue=E.textures[Me],Ke=Ue.format,et=Ue.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ie=uc(Ue);if(Ie.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-X&&K>=0&&K<=E.height-Y&&U.readPixels(z,K,X,Y,ye.convert(Ke),ye.convert(et),Se)}finally{let Ue=V!==null?J.get(V).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,z,K,X,Y,Se,Ae,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(z>=0&&z<=E.width-X&&K>=0&&K<=E.height-Y){y.bindFramebuffer(U.FRAMEBUFFER,Pe);let Ue=E.textures[Me],Ke=Ue.format,et=Ue.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ie=uc(Ue);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(z,K,X,Y,ye.convert(Ke),ye.convert(et),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let vt=V!==null?J.get(V).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,vt);let pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ah(U,pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(pt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,K=0){let X=Math.pow(2,-K),Y=Math.floor(E.image.width*X),Se=Math.floor(E.image.height*X),Ae=z!==null?z.x:0,Me=z!==null?z.y:0;Q.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ae,Me,Y,Se),y.unbindTexture()},this.copyTextureToTexture=function(E,z,K=null,X=null,Y=0,Se=0){let Ae,Me,Pe,Ue,Ke,et,Ie,at,vt,pt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(K!==null)Ae=K.max.x-K.min.x,Me=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Ke=K.min.y,et=K.isBox3?K.min.z:0;else{let _t=Math.pow(2,-Y);Ae=Math.floor(pt.width*_t),Me=Math.floor(pt.height*_t),E.isDataArrayTexture?Pe=pt.depth:E.isData3DTexture?Pe=Math.floor(pt.depth*_t):Pe=1,Ue=0,Ke=0,et=0}X!==null?(Ie=X.x,at=X.y,vt=X.z):(Ie=0,at=0,vt=0);let ht=ye.convert(z.format),Pt=ye.convert(z.type),we;z.isData3DTexture?(Q.setTexture3D(z,0),we=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),we=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),we=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let Nt=y.getParameter(U.UNPACK_ROW_LENGTH),st=y.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=y.getParameter(U.UNPACK_SKIP_PIXELS),dn=y.getParameter(U.UNPACK_SKIP_ROWS),Dn=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),y.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),y.pixelStorei(U.UNPACK_SKIP_IMAGES,et);let bi=E.isDataArrayTexture||E.isData3DTexture,lt=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let _t=J.get(E),Nn=J.get(z),dt=J.get(_t.__renderTarget),Un=J.get(Nn.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,dt.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Mi=0;Mi<Pe;Mi++)bi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(E).__webglTexture,Y,et+Mi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(z).__webglTexture,Se,vt+Mi)),U.blitFramebuffer(Ue,Ke,Ae,Me,Ie,at,Ae,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||J.has(E)){let _t=J.get(E),Nn=J.get(z);y.bindFramebuffer(U.READ_FRAMEBUFFER,C),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let dt=0;dt<Pe;dt++)bi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,Y,et+dt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_t.__webglTexture,Y),lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nn.__webglTexture,Se,vt+dt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nn.__webglTexture,Se),Y!==0?U.blitFramebuffer(Ue,Ke,Ae,Me,Ie,at,Ae,Me,U.COLOR_BUFFER_BIT,U.NEAREST):lt?U.copyTexSubImage3D(we,Se,Ie,at,vt+dt,Ue,Ke,Ae,Me):U.copyTexSubImage2D(we,Se,Ie,at,Ue,Ke,Ae,Me);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(we,Se,Ie,at,vt,Ae,Me,Pe,ht,Pt,pt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(we,Se,Ie,at,vt,Ae,Me,Pe,ht,pt.data):U.texSubImage3D(we,Se,Ie,at,vt,Ae,Me,Pe,ht,Pt,pt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Ie,at,Ae,Me,ht,Pt,pt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Ie,at,pt.width,pt.height,ht,pt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Ie,at,Ae,Me,ht,Pt,pt);y.pixelStorei(U.UNPACK_ROW_LENGTH,Nt),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),y.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),y.pixelStorei(U.UNPACK_SKIP_ROWS,dn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Dn),Se===0&&z.generateMipmaps&&U.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){$=0,B=0,V=null,y.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var _o=[["mint","Menta","#60cebd"],["ocean","Oceano","#65aff0"],["lavender","Lavanda","#b198ec"],["peach","P\xEAssego","#f4af83"],["rose","Rosa","#ed94bc"],["honey","Mel","#e9c568"],["lime","Lim\xE3o","#a5cf70"],["pearl","P\xE9rola","#d4e2ec"]];function uu(i){let e=i.skin.material,t=new Map(_o.map(([v,,f])=>[v,new Ze(f)])),n="mint",s=2,r=t.get("mint").clone(),a=r.clone();try{let v=localStorage.getItem("pingo-color-v1");t.has(v)&&(n=v)}catch{}e.color.copy(t.get(n)),e.attenuationColor.copy(t.get(n)),a.copy(e.color),r.copy(a);let o=new ft;o.name="Transformacao_Cromatica",i.root.add(o);let l=new on({color:"#fff5d0",transparent:!0,opacity:0,depthWrite:!1}),c=new Ye(new Ws(1.02,.012,8,64),l);c.rotation.x=.9,c.position.y=.85,o.add(c);let u=new Gs(.026,0),m=[];for(let v=0;v<12;v++){let f=new Ye(u,l);o.add(f),m.push(f)}o.visible=!1;let h=new Set;function d(v,{animate:f=!0}={}){if(!t.has(v))return!1;r.copy(e.color),a.copy(t.get(v)),n=v,s=f?0:1.4,f||(e.color.copy(a),e.attenuationColor.copy(a));try{localStorage.setItem("pingo-color-v1",v)}catch{}return h.forEach(p=>p(n)),!0}function g(v){s=Math.min(1.4,s+Math.max(0,v));let f=s/1.4,p=f*f*(3-2*f);e.color.lerpColors(r,a,p),e.attenuationColor.copy(e.color),o.visible=f<1,l.opacity=Math.sin(f*Math.PI)*.75,c.scale.setScalar(.8+f*.48),c.rotation.z=f*Math.PI*1.2;for(let b=0;b<m.length;b++){let M=b*Math.PI/6+f*2;m[b].position.set(Math.cos(M)*(.7+f*.48),.85+Math.sin(M)*(.65+f*.22),.4+Math.sin(M*2)*.12),m[b].rotation.z=M+f*3,m[b].scale.setScalar(Math.sin(f*Math.PI)*(.6+b%3*.2))}}return{select:d,update:g,get selected(){return n},subscribe(v){return h.add(v),v(n),()=>h.delete(v)}}}function du(i,e,{onTransform:t=()=>{}}={}){let n=document.createElement("section");n.className="pingo-look",n.innerHTML='<div class="section-title">Transforma\xE7\xE3o \u2727</div><p class="section-copy">O mesmo Pingo, oito jeitos de brilhar.</p><div class="color-swatches" role="group" aria-label="Cor do Pingo"></div><button type="button" class="surprise-color">\u2727 Me surpreenda</button><div class="color-status feedback" role="status"></div>';let s=n.querySelector(".color-swatches");for(let[a,o,l]of _o){let c=document.createElement("button");c.type="button",c.dataset.color=a,c.title=o,c.setAttribute("aria-label","Transformar em "+o),c.innerHTML='<span aria-hidden="true"></span><small></small>',c.querySelector("span").style.background=l,c.querySelector("small").textContent=o,c.onclick=()=>{e.select(a),t(o)},s.append(c)}n.querySelector(".surprise-color").onclick=()=>{let a=_o.filter(([c])=>c!==e.selected),[o,l]=a[Math.floor(Math.random()*a.length)];e.select(o),t(l)};let r=e.subscribe(a=>{n.querySelectorAll("[data-color]").forEach(o=>o.setAttribute("aria-pressed",String(o.dataset.color===a))),n.querySelector(".color-status").textContent="Cor atual: "+_o.find(o=>o[0]===a)[1]});return i.append(n),r}var fu=".pingo-look{padding-top:18px;margin-top:18px;border-top:1px solid #e0ebe4}.color-swatches{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin:12px 0}.color-swatches button{display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 3px!important;background:transparent!important;border:1px solid transparent!important;border-radius:12px!important}.color-swatches button span{width:26px;height:26px;border-radius:50%;box-shadow:inset 2px 2px 4px #ffffff70,0 2px 5px #26463515}.color-swatches button small{font:9px system-ui;color:#6d877b}.color-swatches button[aria-pressed=true]{border-color:#72b49c!important;background:#edf7f0!important}.color-swatches button:focus-visible{outline:2px solid #578b74;outline-offset:2px}.surprise-color{width:100%;font:11px system-ui;padding:10px;border:1px solid #d5e7db;border-radius:10px;background:#f1f8f3;color:#4c7d65;cursor:pointer}.pingo-look .section-title{font-size:14px;font-weight:600}.pingo-look .section-copy{font-size:11px;color:#82978a}.animation-search{box-sizing:border-box;width:100%;padding:11px;border:1px solid #dce8e0;border-radius:10px;background:#fff;font:12px system-ui;color:#416b58;margin-top:10px}";var ax='[data-automation-id="message-group"]',ox='[data-automation-id="messaging-gadget-message-textbody"]',lx='[data-automation-id="message-group-header"]',$l=new WeakMap,cx=0;function pu(i){let e=[];for(let t of i.querySelectorAll(ax)){let n=t.querySelector(lx),s=(n?.innerText||n?.textContent||"").replace(/Copiar com contexto/gi,"").split(`
`)[0].replace(/[|\s]+$/g,"").trim()||(/outbound/i.test(n?.className||"")?"Atendente":"Cliente");for(let r of t.querySelectorAll(ox)){let a=(r.innerText||r.textContent||"").trim();a&&e.push(s+": "+a)}}return e.join(`

`)}function Kl(i=document){let e=[],t=new Set,n=0;function s(r){if(!(t.has(r)||n++>=2e3)){t.add(r);for(let a of r.querySelectorAll("app-view-stack,app-carousel-view"))a.shadowRoot&&s(a.shadowRoot);for(let a of r.querySelectorAll("iframe")){if(!a.getClientRects().length||getComputedStyle(a).visibility==="hidden"||a.closest('[hidden],[aria-hidden="true"]'))continue;if((a.getAttribute?.("src")||a.src||"").includes("messaging-gadget"))e.push(a);else try{a.contentDocument&&s(a.contentDocument)}catch{}}for(let a of r.querySelectorAll("*"))a.id!=="pingo-flutuante"&&a.shadowRoot&&s(a.shadowRoot)}}return s(i),[...new Set(e)]}function hx(i){return new Promise(e=>{let t=i.contentWindow,n=location.origin;if(!t)return e("");let s="pingo-aja-"+crypto.randomUUID(),r=!1,a=c=>{r||(r=!0,clearTimeout(l),window.removeEventListener("message",o),e(typeof c=="string"?c:""))},o=c=>{c.source===t&&c.origin===n&&c.data?.tipo==="aja-chat-resposta"&&c.data.id===s&&a(c.data.texto)};window.addEventListener("message",o);let l=setTimeout(()=>a(""),1400);try{t.postMessage({tipo:"aja-chat-pedir",id:s},n)}catch{a("")}})}async function mu(){let i=pu(document),e="current";if(!i){let n=Kl();if(n.length>1)return{title:"Conversa AjaModular",text:"",source:"H\xE1 mais de um quadro vis\xEDvel. Deixe s\xF3 a conversa desejada aberta antes de capturar.",scopeId:""};let s=n[0];if(!s)return{title:"Conversa AjaModular",text:"",source:"Nenhum quadro de mensagens do AjaModular/Genesys foi encontrado.",scopeId:""};$l.has(s)||$l.set(s,"frame-"+ ++cx),e=$l.get(s);try{i=s.contentDocument?pu(s.contentDocument):""}catch{}i||(i=await hx(s))}let t=Array.from(i.slice(0,180)).reduce((n,s)=>n*31+s.charCodeAt(0)>>>0,0);return{title:"Conversa aberta no AjaModular",text:i.slice(-4e3),source:i?"AjaModular \xB7 somente as mensagens da conversa aberta":"N\xE3o consegui ler as mensagens. Ative o AjaModular neste quadro; quadros de outro dom\xEDnio n\xE3o s\xE3o acess\xEDveis.",scopeId:e+":"+t}}function vo(i){return i.replace(/\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b/gi,"[e-mail oculto]").replace(/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g,"[documento oculto]").replace(/\b\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}\b/g,"[documento oculto]").replace(/(?:\+?55\s*)?\(?\d{2}\)?[\s-]*9?\d{4}[\s-]*\d{4}\b/g,"[telefone oculto]").replace(/\b\d{9,}\b/g,"[n\xFAmero oculto]")}function gu(i){let e=null,t="",n=[...i.querySelectorAll('[data-automation-id="message-group"]')];for(let s=0;s<n.length;s++){let r=n[s],a=r.querySelector('[data-automation-id="message-group-header"]');if(!a)continue;let o=(a.innerText||a.textContent||"").replace(/Copiar com contexto/gi,"").split(`
`)[0].replace(/[|\s]+$/g,"").trim(),l=[...r.querySelectorAll('[data-automation-id="messaging-gadget-message-textbody"]')].map(c=>(c.innerText||c.textContent||"").trim()).filter(Boolean).join(`
`);if(l){if(/outbound/i.test(a.className||"")){t=l;continue}/^(bot|sistema|system|assistente virtual|isa)$/i.test(o)||(e={text:l.slice(-2e3),previousAgent:t.slice(-700),key:r.getAttribute?.("data-message-id")||r.id||String(s)})}}return e}function xu({ask:i,isConnected:e,isBusy:t,say:n,onState:s=()=>{},react:r=()=>{}}){let a=/(^|\.)pure\.cloud$/i.test(location.hostname),o=!1,l=!1,c="",u="",m=0,h=0,d="",g=null,v=new WeakMap,f=0;function p(S){s({enabled:a,label:S||(a?"Acompanhando cliente":"Acompanhamento pausado")})}function b(S){S&&!v.has(S)&&v.set(S,++f);let T=document.querySelector('.interaction-group.is-selected,[data-qa-id="interaction-group-list-item"].is-selected'),w=document.querySelector("#interaction-header-participant-name");return String(S?v.get(S):"self")+":"+(T?.getAttribute("data-conversation-id")||T?.getAttribute("data-interaction-id")||T?.id||w?.textContent||location.pathname)}async function M(){if(!(!a||o||l||document.visibilityState!=="visible")){l=!0;try{let S=document,T=null;if(!S.querySelector('[data-automation-id="message-group"]')){let P=Kl();if(P.length!==1){p(P.length?"Deixe uma conversa aberta":"Procurando conversa");return}T=P[0];try{S=T.contentDocument}catch{S=null}}if(!S){p("Quadro sem acesso de leitura");return}let w=gu(S);if(!w){p("Aguardando resposta do cliente");return}let x=b(T),A=x+":"+w.key+":"+w.text;if(d&&x!==d&&(c="",u="",g=null),d=x,A!==c&&(c=A,g={...w,fingerprint:A},m=Date.now(),r(),p("\xDAltima resposta identificada"),n(`\u{1F4AC} O cliente mandou mensagem:
`+w.text,Math.min(40,Math.max(14,w.text.length/16)))),!g||g.fingerprint===u||!e()||t()||Date.now()-m<Math.min(4e4,Math.max(14e3,g.text.length/16*1e3))||Date.now()-h<25e3)return;let R=g;u=R.fingerprint,h=Date.now(),p("Pensando na resposta do cliente\u2026");let L={text:vo(`\xDAltima resposta do cliente:
`+R.text+(R.previousAgent?`

Mensagem anterior enviada pela plataforma:
`+R.previousAgent:"")),title:"Conversa ativa no Genesys/AjaModular"},D=await i("Comente para mim, o atendente, a \xFAltima resposta do cliente em uma ou duas frases. Seja natural, \xFAtil e respeitoso. Sugira uma pergunta ou pr\xF3ximo passo quando fizer sentido. N\xE3o invente o estado da rede ou da conta, n\xE3o atribua inten\xE7\xF5es, n\xE3o repita dados pessoais e n\xE3o responda ao cliente em meu nome.",{context:L,mode:"client-auto"});p(D?"Acompanhando cliente":"Leitura ativa \xB7 confira a IA")}finally{l=!1}}}let _=setInterval(()=>M().catch(()=>p("Aguardando quadro de conversa")),3500);return p(),{get enabled(){return a},toggle(){a=!a,c="",u="",g=null,p(),a&&M().catch(()=>{})},dispose(){o=!0,a=!1,clearInterval(_)}}}function ux(i=document){let e=i.getSelection?.(),t="";if(e&&!e.isCollapsed&&!e.anchorNode?.parentElement?.closest("#pingo-flutuante,input,textarea,[contenteditable]")&&(t=e.toString().trim()),t)return{title:i.title.slice(0,120),text:t.slice(0,4e3),source:"Trecho selecionado"};let n=i.createTreeWalker(i.body||i.documentElement,NodeFilter.SHOW_TEXT),s=[],r,a=0,o=0;for(;(r=n.nextNode())&&a++<6e3&&o<4e3;){let l=r.parentElement,c=r.textContent.trim();if(!l||c.length<2||l.closest('#pingo-flutuante,script,style,noscript,input,textarea,select,[contenteditable],nav,header,footer,[hidden],[aria-hidden="true"]'))continue;let u=getComputedStyle(l);if(u.visibility==="hidden"||u.display==="none"||u.opacity==="0")continue;let m=l.getBoundingClientRect();!m.width||!m.height||m.bottom<0||m.top>innerHeight||m.right<0||m.left>innerWidth||(s.push(c),o+=c.length+1)}return{title:i.title.slice(0,120),text:s.join(`
`).slice(0,4e3),source:"Texto vis\xEDvel nesta p\xE1gina"}}function _u(i,{ask:e,say:t,isConnected:n,onOpen:s=()=>{}}){let r=document.createElement("details");r.className="page-reader",r.innerHTML='<summary>\u2315 Ler p\xE1gina e conversa</summary><p class="feedback">Capturo s\xF3 o texto vis\xEDvel ou selecionado. Revise antes de enviar ao seu servidor e ao provedor configurado (OpenAI ou Gemini). N\xE3o leio senhas, campos digitados, imagens ou outras abas.</p><label>Fonte da leitura<select aria-label="Fonte da leitura"><option value="page">Tela / p\xE1gina atual</option><option value="aja">Conversa aberta no AjaModular</option></select></label><label class="alive-toggle"><input type="checkbox" data-redact checked> Ocultar documentos, telefones e e-mails</label><button type="button" data-capture>Capturar texto vis\xEDvel</button><div class="feedback" data-page-source role="status">Nenhuma leitura enviada.</div><textarea aria-label="Pr\xE9via edit\xE1vel da p\xE1gina" placeholder="O texto capturado aparecer\xE1 aqui para voc\xEA revisar." maxlength="4000" rows="5"></textarea><div class="life-buttons"><button type="button" data-opinion>Dar opini\xE3o no bal\xE3o</button><button type="button" data-doubt>Ajudar com a d\xFAvida</button></div><label class="reader-question-label">D\xFAvida para pesquisar<input class="reminder-input" aria-label="D\xFAvida para pesquisar" maxlength="300" placeholder="Digite ou capture uma pergunta\u2026"></label><a class="reader-search" target="_blank" rel="noopener noreferrer">Pesquisar no Google \u2197</a><p class="feedback">A pesquisa abre o Google com a pergunta acima. N\xE3o faz consultas pagas pela API.</p><label class="alive-toggle"><input type="checkbox" data-auto-page> Permitir opini\xF5es autom\xE1ticas desta p\xE1gina</label><p class="feedback">Ao ligar, novos trechos vis\xEDveis podem ser enviados \xE0 IA configurada, no m\xE1ximo uma vez a cada 90 segundos, enquanto esta aba estiver vis\xEDvel. Desligue para parar. A permiss\xE3o termina ao recarregar ou remover o Pingo.</p>',i.append(r);let a=r.querySelector("textarea"),o=r.querySelector("[data-page-source]"),l=r.querySelector("[data-auto-page]"),c=r.querySelector('[aria-label="D\xFAvida para pesquisar"]'),u=r.querySelector("a"),m="",h="",d=0,g=!1,v=!1,f=0,p="",b=r.querySelector("select"),M=r.querySelector("[data-redact]"),_=async()=>{let L=b.value==="aja"?await mu():{...ux(),scopeId:location.origin+location.pathname};return M.checked&&(L.text=vo(L.text)),L};b.onchange=()=>{l.checked=!1,a.value="",p="",o.textContent="Fonte alterada. Capture e revise antes de autorizar."},M.onchange=()=>{l.checked=!1,a.value="",o.textContent="Capture novamente para aplicar a prote\xE7\xE3o escolhida."};function S(){let L=c.value.trim();L?(u.href="https://www.google.com/search?q="+encodeURIComponent(L),u.removeAttribute("aria-disabled")):(u.removeAttribute("href"),u.setAttribute("aria-disabled","true"))}c.oninput=S,S();async function T(){let L=await _();m=L.title,p=L.scopeId,a.value=L.text,o.textContent=L.text?L.source+" \xB7 "+L.text.length+" caracteres. Revise antes de enviar.":L.source||"N\xE3o encontrei texto leg\xEDvel nesta \xE1rea. Role a p\xE1gina ou selecione um trecho.";let D=L.text.match(/[^.!?\n]{8,250}\?/g);return D?.length&&(c.value=D.at(-1).trim(),S()),L.text}let w=()=>({text:a.value.trim(),title:m});async function x(L){if(!a.value.trim())return o.textContent="Capture ou selecione um trecho primeiro.",!1;let P=L==="opinion"?"D\xEA uma opini\xE3o breve e respeitosa sobre esse trecho. Diferencie sua interpreta\xE7\xE3o dos fatos.":c.value.trim()||"Identifique a principal d\xFAvida deste trecho e ajude a respond\xEA-la. Se faltar informa\xE7\xE3o, pergunte em vez de adivinhar.";o.textContent="Consultando Pingo\u2026";let C=await e(P,{context:w(),mode:L});return o.textContent=C?"Coment\xE1rio enviado para o bal\xE3o do Pingo.":"N\xE3o consegui comentar. Confira a conex\xE3o da IA.",C}r.querySelector("[data-capture]").onclick=T,r.querySelector("[data-opinion]").onclick=()=>x("opinion"),r.querySelector("[data-doubt]").onclick=()=>x("question"),l.onchange=()=>{if(!l.checked){o.textContent="Acompanhamento desligado. N\xE3o envio novas leituras.";return}if(!n()){l.checked=!1,o.textContent="Conecte sua IA antes de ligar o acompanhamento.";return}if(!a.value.trim()){l.checked=!1,T(),o.textContent="Revise a pr\xE9via e depois ligue o acompanhamento para autorizar o envio.";return}h=a.value,d=Date.now(),o.textContent="Acompanhamento autorizado somente nesta p\xE1gina. Pr\xF3xima leitura em at\xE9 90 segundos."};let A=L=>{L.composedPath().some(D=>D?.id==="pingo-flutuante")||(f=Date.now())};document.addEventListener("input",A,!0);let R=setInterval(async()=>{if(g||!l.checked||v||document.visibilityState!=="visible"||Date.now()-d<9e4||Date.now()-f<5e3)return;let L=await _();if(L.scopeId!==p){l.checked=!1,o.textContent="A conversa ou p\xE1gina mudou. Capture e autorize novamente para n\xE3o misturar atendimentos.";return}if(!(L.text.length<60||L.text===h)){h=L.text,d=Date.now(),v=!0;try{a.value=L.text,m=L.title,await e("Reaja naturalmente a essa conversa ou p\xE1gina em uma ou duas frases. Pode oferecer ajuda para uma d\xFAvida, fazer uma observa\xE7\xE3o \xFAtil ou dar uma opini\xE3o com tato. N\xE3o atribua inten\xE7\xF5es \xE0s pessoas e n\xE3o afirme que pesquisou.",{context:w(),mode:"opinion"})||(l.checked=!1,o.textContent="Acompanhamento pausado: confira a conex\xE3o.")}finally{v=!1}}},15e3);return{open(){r.open=!0,s(),r.scrollIntoView({block:"nearest"})},dispose(){g=!0,clearInterval(R),document.removeEventListener("input",A,!0)}}}var vu=".page-reader{border-top:1px solid #dfeae2;padding-top:12px;margin-top:15px;font-size:11px;color:#577c68}.page-reader summary{cursor:pointer;font-weight:600}.page-reader textarea{box-sizing:border-box;width:100%;resize:vertical;min-height:100px;max-height:220px;border:1px solid #d9e6de;border-radius:11px;background:#fff;font:11px/1.6 system-ui;padding:10px;color:#476354;margin:7px 0}.page-reader .reader-question-label{font-size:10px;margin:10px 0;display:block}.reader-search{display:block;padding:9px 12px;border-radius:10px;background:#e9f3ec;color:#36795d;text-decoration:none;text-align:center}.reader-search[aria-disabled=true]{opacity:.45;pointer-events:none}.page-reader .alive-toggle{line-height:1.7}.page-reader input.reminder-input{margin-top:5px}";function yu(i,{say:e=()=>{},onChatReady:t=()=>{},openConnection:n=()=>{},onScreenReady:s=()=>{},onChatDispose:r=()=>{},onReply:a=()=>{},onClientReady:o=()=>{},onClientState:l=()=>{}}={}){let c=i.querySelector(".dash-tabs"),u=i.querySelector(".dash-body"),m=document.createElement("button");m.textContent="\u2727 Conversar",m.setAttribute("role","tab"),m.dataset.tab="chat",c.append(m);let h=document.createElement("div");h.className="dash-page",h.dataset.page="chat",h.id="pingo-page-chat",h.hidden=!0,h.setAttribute("role","tabpanel"),u.append(h),h.innerHTML='<div class="section-title">Pode perguntar \u{1F4AC}</div><p class="section-copy">Respostas curtas, simples e com sinceridade.</p><div class="chat-log" role="log" aria-label="Conversa com Pingo" aria-live="polite"><div class="chat-bubble">Oi! Sou o Pingo. Conecte meu servidor para conversarmos de verdade.</div></div><form class="chat-form"><input class="reminder-input" aria-label="Pergunta para o Pingo" placeholder="Pingo, por que o c\xE9u \xE9 azul?" maxlength="1200" required><button type="submit">Enviar \u2197</button></form><div class="chat-status feedback" role="status">IA ainda n\xE3o conectada.</div><details class="chat-settings"><summary>Conectar IA</summary><p class="feedback">Informe seu servidor e a senha de acesso ao Pingo. N\xE3o cole chaves da OpenAI ou do Gemini aqui. S\xF3 envio suas mensagens e os trechos de p\xE1gina que voc\xEA autorizar.</p><form class="chat-config"><input class="reminder-input" type="url" aria-label="URL do servidor do Pingo" placeholder="https://seu-pingo.workers.dev/chat" value="https://pingo-ia.josiasqueirozx.workers.dev/chat" required><input class="reminder-input" type="password" aria-label="Senha de acesso ao Pingo" placeholder="Senha do seu servidor (n\xE3o a API)" autocomplete="off" required><button>Conectar e testar IA</button></form></details>';let d="",g="",v=!1,f=!1,p=[],b=h.querySelector(".chat-status"),M=h.querySelector(".chat-log"),_=h.querySelector(".chat-form"),S=_.querySelector("input");h.querySelector(".chat-config").onsubmit=async R=>{R.preventDefault();let L=R.target.querySelectorAll("input");try{let D=new URL(L[0].value);if(D.protocol!=="https:"||D.username||D.password||D.search||D.hash)throw Error();if(/^(AIza|sk-)/.test(L[1].value)){b.textContent="Essa parece ser uma chave de API. Cadastre-a somente no Cloudflare.",L[1].value="";return}d=D.href,g=L[1].value,f=!1,L[1].value="";let P=R.target.querySelector("button");P.disabled=!0;try{let C=await w("Diga apenas: Oi! Estou conectado e pronto para conversar.",{mode:"connection"});h.querySelector(".chat-settings").open=!C,C&&(f=!0,b.textContent="IA conectada e testada. Pode perguntar!")}finally{P.disabled=!1}}catch{b.textContent="Informe uma URL HTTPS v\xE1lida, sem chaves ou par\xE2metros."}};function T(R,L=!1){let D=document.createElement("div");return D.className="chat-bubble"+(L?" user":""),D.textContent=R,M.append(D),M.scrollTop=M.scrollHeight,D}async function w(R,{context:L=null,mode:D="chat"}={}){if(!v&&(R=R.trim(),!!R)){if(!d){b.textContent="Primeiro conecte seu servidor em \u201CConectar IA\u201D.",e("Conecte minha IA uma vez no painel para conversarmos. \u{1F49A}",10),h.querySelector("details").open=!0,n();return}v=!0,_.querySelector("button").disabled=!0,T(R,!0),S.value="",b.textContent="Pingo est\xE1 pensando\u2026",e("Deixa eu pensar\u2026 \u2727",30);try{let P=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g},body:JSON.stringify({message:R,history:L?[]:p.slice(-6),context:L,mode:D}),signal:AbortSignal.timeout(3e4)}),C=await P.json();if(!P.ok)throw Error(P.status===401?"Senha do Pingo incorreta. Use PINGO_ACCESS_TOKEN, n\xE3o a chave da API.":C.error||"N\xE3o consegui responder agora. Confira o servidor.");if(typeof C.reply!="string"||!C.reply.trim())throw Error("O servidor n\xE3o enviou uma resposta.");let O=C.reply.slice(0,1600);T(O),a(O,D),e(O,14),!L&&D!=="connection"&&(p.push({role:"user",text:R},{role:"model",text:O}),p.splice(0,Math.max(0,p.length-6))),b.textContent="IA pode errar. Confira informa\xE7\xF5es importantes."}catch(P){b.textContent=P.name==="TimeoutError"?"Demorou demais. Tente novamente.":/fetch|network/i.test(P.message)?"A p\xE1gina bloqueou a conex\xE3o ou a rede falhou. Teste na p\xE1gina oficial do Pingo.":P.message}finally{v=!1,_.querySelector("button").disabled=!1}return b.textContent.startsWith("IA pode errar.")||e(b.textContent,12),b.textContent.startsWith("IA pode errar.")}}_.onsubmit=R=>{R.preventDefault(),w(S.value)},t({ask:w,get busy(){return v}});let x=_u(h,{ask:w,say:e,isConnected:()=>f,onOpen:n});s(x);let A=xu({ask:w,isConnected:()=>f,isBusy:()=>v,say:e,react:()=>a("Cliente respondeu.","client-auto"),onState:l});return o(A),r(()=>{x.dispose(),A.dispose()}),h}var bu=vu+".panel .dash-tabs button{font-size:10px}.chat-log{max-height:235px;overflow:auto;display:flex;flex-direction:column;gap:10px;margin:14px 0;overscroll-behavior:contain}.chat-bubble{font-size:12px;line-height:1.7;background:#edf5ef;border-radius:13px 13px 13px 3px;padding:11px 13px;max-width:95%;white-space:pre-wrap;overflow-wrap:anywhere}.chat-bubble.user{background:#dcefe5;align-self:flex-end;border-radius:13px 13px 3px 13px}.chat-form{display:flex;gap:6px}.chat-form input{min-width:0}.chat-form button{white-space:nowrap;background:#377f65!important;color:white!important}.chat-form button:disabled{opacity:.5;cursor:wait}.chat-settings{border-top:1px solid #e4ede7;padding-top:12px;font-size:11px;color:#718d7c}.chat-settings summary{cursor:pointer}.chat-config{display:grid;gap:8px}";function Mu(i,e={}){let t=i.querySelector(".life-box"),n=[...i.children].filter(f=>f!==t),s=i.querySelector(".close-panel"),r=i.querySelector(".pause"),a=i.querySelector(".remove"),o=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div");o.dataset.page="care",l.dataset.page="motions",c.dataset.page="reminders";let u=!1;for(let f of[...t.children])f.classList.contains("companion-heading")&&(u=!0),(u?c:o).append(f);for(let f of n)f.tagName!=="H3"&&(f.contains(r)||l.append(f));i.replaceChildren(),i.setAttribute("aria-label","Painel do Pingo"),i.innerHTML='<header class="dash-header"><div class="dash-avatar" aria-hidden="true">\u2022\u1D17\u2022</div><div><strong>Pingo<span class="online-dot"></span></strong><small>Seu pequeno companheiro</small></div></header><nav class="dash-tabs" role="tablist" aria-label="Configura\xE7\xF5es do Pingo"><button role="tab" data-tab="care">\u2661 Cuidar</button><button role="tab" data-tab="motions">\u2197 Movimentos</button><button role="tab" data-tab="reminders">\u25F7 Lembretes</button></nav><div class="dash-body"></div><footer class="dash-footer"><span>Um Pingo de companhia</span></footer>',s.textContent="\xD7",s.title="Fechar painel",s.setAttribute("aria-label","Fechar painel"),i.querySelector("header").append(s);for(let f of[o,l,c])f.className="dash-page",f.id="pingo-page-"+f.dataset.page,f.setAttribute("role","tabpanel"),i.querySelector(".dash-body").append(f);l.insertAdjacentHTML("afterbegin",'<div class="section-title">Do jeitinho dele</div><p class="section-copy">Escolha um movimento ou deixe o Pingo explorar.</p>');let m=[...o.querySelectorAll(".alive-toggle")];for(let f of m)l.append(f);let h=o.querySelector(".mood");o.prepend(h),o.insertAdjacentHTML("afterbegin",'<div class="section-title">Como ele est\xE1?</div><p class="section-copy">Pequenos cuidados, um amigo mais feliz.</p>');let d={happy:"\u2661",eat:"\u25D2",drink:"\u25C9",sleep:"\u263E"};o.querySelectorAll("[data-care]").forEach(f=>{f.insertAdjacentHTML("afterbegin",`<span aria-hidden="true">${d[f.dataset.care]}</span>`)}),i.querySelector("footer").append(r,a),a.textContent="Sair",a.title="Remover Pingo desta p\xE1gina",a.setAttribute("aria-label","Remover Pingo"),yu(i,e);function v(f){i.querySelectorAll("[data-tab]").forEach(p=>{let b=p.dataset.tab===f;p.setAttribute("aria-selected",b),p.tabIndex=b?0:-1,p.id="pingo-tab-"+p.dataset.tab,p.setAttribute("aria-controls","pingo-page-"+p.dataset.tab)}),i.querySelectorAll("[data-page]").forEach(p=>{p.hidden=p.dataset.page!==f,p.setAttribute("aria-labelledby","pingo-tab-"+p.dataset.page)})}return i.querySelectorAll("[data-tab]").forEach((f,p,b)=>{f.onclick=()=>v(f.dataset.tab),f.onkeydown=M=>{let _;M.key==="ArrowRight"&&(_=(p+1)%b.length),M.key==="ArrowLeft"&&(_=(p+b.length-1)%b.length),M.key==="Home"&&(_=0),M.key==="End"&&(_=b.length-1),_!==void 0&&(M.preventDefault(),v(b[_].dataset.tab),b[_].focus())}}),v("care"),{select:v}}var Su=bu+`
.panel{width:350px!important;max-width:calc(100vw - 24px);max-height:calc(100dvh - 24px)!important;padding:0!important;overflow:hidden!important;border:1px solid #e0ece8!important;border-radius:24px!important;background:#fbfdfc!important;color:#23473e!important;box-shadow:0 22px 70px #143f3230,0 2px 8px #143f3210!important;font:13px/1.5 system-ui!important;display:flex;flex-direction:column}
.dash-header{display:flex;align-items:center;gap:12px;padding:21px 20px 18px;background:linear-gradient(130deg,#e4f6ee,#f6fbf8)}.dash-header strong{font-size:20px;letter-spacing:-.6px;display:flex;align-items:center;gap:8px}.dash-header small{display:block;color:#6c8a80;font-size:11px;margin-top:1px}.dash-avatar{width:45px;height:48px;border-radius:48% 48% 43% 43%;background:linear-gradient(130deg,#a7edd1,#54c6a5);box-shadow:inset 2px 3px 4px #ffffffb0,0 4px 9px #72b8a22a;display:grid;place-items:center;color:#275f50;font-size:19px}.online-dot{width:7px;height:7px;border-radius:50%;background:#47b38a;box-shadow:0 0 0 3px #47b38a16}.panel .close-panel{margin-left:auto;background:#ffffff90;border:0;width:30px;height:30px;border-radius:50%;font-size:22px;padding:0;color:#69887c}
.dash-tabs{display:flex;margin:14px 18px 0;padding:4px;gap:3px;border-radius:13px;background:#ecf2ef}.panel .dash-tabs button{flex:1;white-space:nowrap;padding:8px 2px;border:0;background:transparent;color:#758c82;font-size:11px;font-weight:600;border-radius:10px}.panel .dash-tabs [aria-selected=true]{background:white;color:#287b60;box-shadow:0 2px 5px #244c3c0b}.dash-body{overflow:auto;min-height:0;overscroll-behavior:contain}.dash-page{padding:19px 20px 20px}.dash-page[hidden]{display:none}.section-title,.panel .companion-heading{font-size:15px;font-weight:650;letter-spacing:-.3px;margin:0 0 3px}.panel .section-copy{font-size:11px;color:#81978d;line-height:1.6;margin:0 0 16px}.panel .mood{background:#edf7f1;color:#3f8266;font-size:12px;border-radius:11px;padding:11px 12px;margin:14px 0}.panel .needs{gap:14px 16px;margin:18px 0}.panel .needs label{font-size:11px;color:#738b80}.panel progress{appearance:none;display:block;height:6px;margin-top:7px;border:0;border-radius:10px;overflow:hidden;background:#eaf0eb}.panel progress::-webkit-progress-bar{background:#eaf0eb}.panel progress::-webkit-progress-value{background:#78c5a5;border-radius:10px}.panel [data-need=water]::-webkit-progress-value{background:#7cbcd4}.panel [data-need=energy]::-webkit-progress-value{background:#e3bd70}.panel [data-need=affection]::-webkit-progress-value{background:#d9a2b8}.panel .life-buttons{gap:8px;margin:13px 0 0}.panel button{transition:background .15s,box-shadow .15s;border:1px solid #dfebe4;background:#fff;color:#496c5c;font:12px system-ui;border-radius:11px;padding:10px;cursor:pointer}.panel button:hover{background:#eef7f1}.panel button:focus-visible,.panel input:focus-visible,.panel select:focus-visible{outline:2px solid #5caa90;outline-offset:3px}.panel [data-page=care]>.life-buttons{display:grid;grid-template-columns:1fr 1fr}.panel [data-care]{display:flex;align-items:center;gap:10px;padding:12px!important;text-align:left}.panel [data-care] span{display:grid;place-items:center;background:#f0f6f1;width:27px;height:27px;border-radius:9px;font-size:19px;color:#6eab90}.panel label{font-size:12px;margin:16px 0;color:#58776a}.panel input[type=checkbox]{appearance:none;width:31px;height:18px;border-radius:20px;background:#dce6df;vertical-align:middle;position:relative;margin:0 8px 0 0;cursor:pointer}.panel input[type=checkbox]:before{content:'';position:absolute;left:3px;top:3px;width:12px;height:12px;border-radius:50%;background:white;transition:transform .18s}.panel input[type=checkbox]:checked{background:#63b498}.panel input[type=checkbox]:checked:before{transform:translateX(13px)}.panel .alive-toggle{padding-top:12px;border-top:1px solid #edf2ed;line-height:1.8}.panel .speed{display:block;width:100%;margin-top:12px;accent-color:#65b598}.panel select{background:#fff;border:1px solid #dce8e0;padding:12px;width:100%;margin:12px 0 0;color:#416b58}.panel .reminder-input{background:white;padding:13px;font-size:12px;border-color:#dbe8e0}.panel [type=submit]{background:#377f65!important;color:white!important;border-color:#377f65!important}.panel .feedback{font-size:10px;color:#83988c;line-height:1.7}.panel .reminder-list{max-height:180px}.panel .reminder-list:empty:after{content:'Nenhum lembrete por enquanto. \u2601';display:block;text-align:center;padding:20px 10px;background:#f1f6f2;border:1px dashed #dce8df;border-radius:12px;color:#84978c;font-size:11px}.panel .reminder-row{background:#f0f6f2;border:0;padding:11px;border-radius:11px;margin:6px 0;font-size:11px}.panel .alert-card{margin-top:12px}.panel [data-test-reminder]{border:0;background:transparent;font-size:10px;padding-left:0;color:#82998b}.dash-footer{border-top:1px solid #e8efea;display:flex;align-items:center;gap:7px;padding:12px 18px;background:#f5f9f6}.dash-footer>span{font-size:9px;color:#91a599;flex:1}.panel .dash-footer button{font-size:10px;padding:7px 10px;background:transparent}.panel .remove{border:0;color:#ac8c89}.panel .row{gap:7px}.panel .row button{flex:1}.panel [data-page=motions]>p:not(.section-copy){font-size:10px;color:#91a297;line-height:1.7}.panel .companion-heading{margin-bottom:12px}@media(max-height:600px){.dash-header{padding:12px 18px}.dash-page{padding-top:12px}.dash-tabs{margin-top:9px}}
`;var yo=class{constructor(){this.last=null,this.vector=null,this.reversals=[],this.fast=0,this.nauseaUntil=0,this.rainbowUntil=0,this.speed=0}start(e,t,n){this.last={x:e,y:t,now:n},this.vector=null,this.reversals=[],this.fast=0,this.speed=0}move(e,t,n){if(!this.last)return this.start(e,t,n),null;let s=n-this.last.now,r=e-this.last.x,a=t-this.last.y,o=Math.hypot(r,a);if(this.last={x:e,y:t,now:n},s<=0||s>500)return null;let l=o/s*1e3;return this.speed+=(l-this.speed)*(1-Math.exp(-s/100)),this.fast=this.speed>850?this.fast+s:Math.max(0,this.fast-s*1.5),o>9&&l>450&&(this.vector&&(r*this.vector.x+a*this.vector.y)/(o*this.vector.length)<-.6&&this.reversals.push(n),this.vector={x:r,y:a,length:o}),this.reversals=this.reversals.filter(c=>n-c<1200),this.reversals.length>=3&&n>=this.rainbowUntil?(this.rainbowUntil=n+12e3,this.nauseaUntil=n+12e3,this.reversals=[],"rainbow"):this.fast>430&&n>=this.nauseaUntil&&n>=this.rainbowUntil?(this.nauseaUntil=n+7e3,this.fast=0,"nausea"):null}end(){this.last=null,this.vector=null,this.reversals=[]}};function Eu(i,e,t,n,s=Math.random){let r=i<t*.2||i>t*.8;return e<n*.25?{liked:!1,text:"Aqui no alto d\xE1 um friozinho na barriga\u2026 prefiro um lugar mais baixinho."}:r?{liked:!0,text:"Gostei desse cantinho! Consigo ficar pertinho sem atrapalhar."}:s()<.35?{liked:!1,text:"Aqui no meio eu posso atrapalhar sua leitura. Que tal um cantinho?"}:{liked:!0,text:"Gostei da vista daqui! Vou ficar um pouquinho com voc\xEA."}}function wu(i){let e=new Ks,t=new pe,n=[0,0],s=-1,r=0;function a(l,c,u,m){t.set(c,u),e.setFromCamera(t,l);let h=e.intersectObjects(i.arms,!0);if(h.length){let d=h[0].object;for(;d&&!d.name.startsWith("Bracinho_");)d=d.parent;if(d)return s=d.name.endsWith("-1")?0:1,r=m+1.25,s}return-1}function o(l,c,u,m=!1){for(let h=0;h<2;h++){let d=!m&&!["sleep","napCurl","rainbow","nausea"].includes(u)&&h===s&&c<r?1:0;n[h]+=(d-n[h])*(1-Math.exp(-8*l)),i.arms[h].rotation.z=ei.lerp(i.arms[h].rotation.z,(h===0?-1:1)*2.05,n[h]),i.arms[h].position.y+=n[h]*.07}}return{move:a,apply:o}}var bo=class extends li{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new qt;e.deleteAttribute("uv");let t=new Ct({side:Rt}),n=new Ct,s=new $s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ye(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Rs(e,n,6),o=new wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ye(e,os(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ye(e,os(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ye(e,os(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let m=new Ye(e,os(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let h=new Ye(e,os(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new Ye(e,os(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function os(i){return new qs({color:0,emissive:16777215,emissiveIntensity:i})}function Tu(i){let e=[];i.root.traverse(l=>e.push(l));let t="idle",n=0,s=null,r=()=>e.map(l=>({p:l.position.clone(),q:l.quaternion.clone(),s:l.scale.clone(),m:l.morphTargetInfluences?.slice()}));function a(l,c){t!==l&&(s=r(),t=l,n=c,i.setState(l,c))}function o(l){i.pose(l,t);let c=Math.min(1,Math.max(0,(l-n)/.48)),u=c*c*(3-2*c);return s&&c<1?e.forEach((m,h)=>{if(m.position.lerpVectors(s[h].p,m.position,u),m.quaternion.copy(s[h].q.clone().slerp(m.quaternion,u)),m.scale.lerpVectors(s[h].s,m.scale,u),m.morphTargetInfluences)for(let d=0;d<m.morphTargetInfluences.length;d++)m.morphTargetInfluences[d]=ei.lerp(s[h].m?.[d]||0,m.morphTargetInfluences[d],u)}):s=null,t}return{set:a,update:o,get state(){return t}}}var Bt=i=>Math.max(0,Math.min(100,Number.isFinite(i)?i:70)),dr=class{constructor(e=null,t=Math.random,n=Date.now()){if(this.random=t,this.needs={fullness:82,energy:80,water:84,affection:72,mood:76},this.recent=[],this.next=0,this.manualUntil=0,this.state="idle",this.lastInteraction=0,e?.version===1){for(let s of Object.keys(this.needs))Number.isFinite(e.needs?.[s])&&(this.needs[s]=Bt(e.needs[s]));Number.isFinite(e.savedAt)&&this.advance(Math.min(8*3600,Math.max(0,(n-e.savedAt)/1e3)),"idle")}}advance(e,t=this.state){if(!Number.isFinite(e)||e<=0)return;let n=Math.min(e,28800),s=this.needs,r=["sleep","napCurl"].includes(t);s.fullness=Bt(s.fullness-n*.012),s.water=Bt(s.water-n*.019),s.energy=Bt(s.energy+n*(r?.095:-.009)),s.affection=Bt(s.affection-n*.008),s.mood=Bt(s.mood+n*(s.affection>55&&s.fullness>40?.001:-.004))}interact(e,t){let n=this.needs;this.lastInteraction=t,n.affection=Bt(n.affection+5),e==="eat"?n.fullness=Bt(n.fullness+27):e==="drink"?n.water=Bt(n.water+30):["happy","hug","heart","grateful","kiss"].includes(e)?(n.affection=Bt(n.affection+13),n.mood=Bt(n.mood+9)):["nausea","rainbow"].includes(e)?(n.mood=Bt(n.mood-7),n.energy=Bt(n.energy-2)):["ball","dance","hop","run","celebrate"].includes(e)&&(n.mood=Bt(n.mood+5),n.energy=Bt(n.energy-1)),this.manualUntil=t+(e==="sleep"?50:16),this.state=e,this.next=this.manualUntil}get emotion(){let e=this.needs;return e.energy<25?"Sonolento":e.water<30?"Com sede":e.fullness<30?"Com fome":e.affection<30?"Quer companhia":e.mood>84?"Radiante":e.mood<40?"Quietinho":"Curioso e tranquilo"}choose(e){if(e<this.manualUntil||e<this.next)return null;let t=this.needs,n,s;t.energy<25?(n=["yawn","tired","sleep"],s="Estou ficando com soninho\u2026"):t.water<30?(n=["thirsty","breatheDeep","tired"],s="Pode me dar um pouquinho de \xE1gua?"):t.fullness<30?(n=["hungry","think","relax"],s="Acho que cabe um lanchinho por aqui."):t.affection<30?(n=["lonely","wave","hug"],s="Um carinho seria t\xE3o bom."):t.mood<40?(n=["sad","relax","breatheDeep","meditate"],s="Vou ficar um pouquinho mais quietinho."):(n=["walk","walk","curious","wave","search","stretch","listen","read","clean","wobble","think","ball","dance","proud","peek","jellyWave","nod","dream","relax","greet","plus_groove_1","plus_greeting_3","plus_yoga_1","plus_curiosity_6","plus_music_5","plus_play_1","plus_weather_3","plus_care_2","plus_breathe_2"],n=n.filter(o=>o!=="greet"),s="S\xF3 explorando e curtindo sua companhia.",t.mood>84&&n.push("celebrate","excited","heart","laugh"));let r=n.filter(o=>!this.recent.slice(-2).includes(o)),a=r.length?r:n;return this.state=a[Math.min(a.length-1,Math.floor(this.random()*a.length))],this.recent.push(this.state),this.recent=this.recent.slice(-4),this.next=e+(this.state==="sleep"?32:9+this.random()*8),{state:this.state,reason:s,emotion:this.emotion}}snapshot(e=Date.now()){return{version:1,needs:{...this.needs},savedAt:e}}};function jl(i=globalThis.localStorage){try{return JSON.parse(i.getItem("pingo-life-v1")||"null")}catch{return null}}function fr(i,e=globalThis.localStorage){try{e.setItem("pingo-life-v1",JSON.stringify(i.snapshot()))}catch{}}function Ql(i,e=Date.now()){let t=i.trim(),n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),s=n.match(/de\s*(\d+)\s*em\s*\1\s*(?:min|minuto)/)||n.match(/(?:cada|de)\s*(\d+)\s*(?:min|minuto)/);if(s){let o=Number(s[1]);if(o<1||o>1440)throw Error("Use um intervalo entre 1 e 1440 minutos.");return{title:n.includes("agua")?"Tomar \xE1gua":t,kind:n.includes("agua")?"water":"repeat",repeatMinutes:o,due:e+o*6e4}}let r=n.match(/(?:daqui a|em)\s*(\d+)\s*(?:min|minuto)/);if(r){let o=Number(r[1]);if(o<1||o>10080)throw Error("Use um prazo entre 1 minuto e 7 dias.");return{title:t,kind:"once",repeatMinutes:0,due:e+o*6e4}}let a=n.match(/(?:as|a|horas?\s*)?\s*(\d{1,2})[:h](\d{2})/);if(a){let o=Number(a[1]),l=Number(a[2]);if(o>23||l>59)throw Error("Esse hor\xE1rio n\xE3o \xE9 v\xE1lido.");let c=new Date(e);c.setHours(o,l,0,0),c.getTime()<=e&&c.setDate(c.getDate()+1);let u=/reuniao|meeting|consulta/.test(n),m=c.getTime();return{title:t,kind:u?"meeting":"once",repeatMinutes:0,eventAt:m,due:u?Math.max(e+1e3,m-10*6e4):m}}throw Error("Exemplos: \u201Ctomar \xE1gua a cada 30 minutos\u201D, \u201Creuni\xE3o \xE0s 21:40\u201D ou \u201Cpausa em 15 minutos\u201D.")}var Mo=class{constructor(e=[]){this.items=Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string"&&typeof t.title=="string"&&Number.isFinite(t.due)&&t.due>0&&Number.isFinite(t.repeatMinutes)&&t.repeatMinutes>=0).slice(0,100).map(t=>({...t,pending:!!t.pending,done:!!t.done})):[]}add(e){if(this.items.filter(n=>!n.done).length>=30)throw Error("O painel comporta at\xE9 30 lembretes ativos.");let t={...e,id:globalThis.crypto?.randomUUID?.()||String(Date.now())+"-"+Math.random(),pending:!1,done:!1};return this.items.push(t),t}tick(e=Date.now()){let t=[];for(let n of this.items)n.done||n.pending||n.due>e||(n.pending=!0,t.push({...n}),n.repeatMinutes>0&&(n.due=e+n.repeatMinutes*6e4));return t}acknowledge(e){let t=this.items.find(n=>n.id===e);t&&(t.pending=!1,t.repeatMinutes||(t.done=!0))}snooze(e,t=5,n=Date.now()){let s=this.items.find(r=>r.id===e);s&&(s.pending=!1,s.done=!1,s.due=n+t*6e4)}remove(e){this.items=this.items.filter(t=>t.id!==e)}message(e,t=Date.now()){if(e.kind==="water")return"Ei, est\xE1 na hora de tomar \xE1gua. Uma pausa para se hidratar faz bem!";if(e.kind==="meeting"){let n=Math.ceil(((e.eventAt||t)-t)/6e4);return n>0?"Sua reuni\xE3o come\xE7a em "+n+" minuto"+(n===1?"":"s")+": "+e.title:"Est\xE1 na hora da sua reuni\xE3o: "+e.title}return"Voc\xEA me pediu para lembrar: "+e.title}};function ec(i=globalThis.localStorage){try{return new Mo(JSON.parse(i.getItem("pingo-reminders-v1")||"[]"))}catch{return new Mo}}function pr(i,e=globalThis.localStorage){try{e.setItem("pingo-reminders-v1",JSON.stringify(i.items))}catch{}}var mr="pingo-reminder-owner-v1";function Au(i,e,t=Date.now()){if(!i)return!0;try{let n=JSON.parse(i.getItem(mr)||"null");return n&&n.owner!==e&&Number.isFinite(n.until)&&n.until>t?!1:(i.setItem(mr,JSON.stringify({owner:e,until:t+6e3})),JSON.parse(i.getItem(mr)||"null")?.owner===e)}catch{return!0}}function tc(i,e){try{JSON.parse(i?.getItem(mr)||"null")?.owner===e&&i.removeItem(mr)}catch{}}var Cu=".life-box{border-top:1px solid #dce7dc;margin-top:16px;padding-top:15px}.mood{font-size:12px;color:#49725f;margin:8px 0}.needs{display:grid;grid-template-columns:1fr 1fr;gap:9px;font-size:10px}.needs label{margin:0!important;display:block!important}progress{width:100%;height:7px;accent-color:#73bba5}form{margin:12px 0}input.reminder-input{box-sizing:border-box;width:100%;font:12px system-ui;border:1px solid #c8dbce;border-radius:10px;padding:10px;background:#fffdf6;color:#355746}.reminder-list{max-height:150px;overflow:auto;margin:10px 0}.reminder-row{display:flex;gap:5px;align-items:center;padding:7px 0;border-bottom:1px solid #e8ede3;font-size:10px}.reminder-row span{flex:1}.reminder-row button{padding:5px!important}.feedback{font-size:10px;line-height:1.6;color:#66816d;margin:8px 0}.alert-card{background:#fff1d8;border:1px solid #e5cc9b;border-radius:12px;padding:10px;font-size:12px;line-height:1.6}.alert-card[hidden]{display:none}.life-buttons{display:flex;gap:5px;flex-wrap:wrap;margin:8px 0}.life-buttons button{font-size:11px!important;padding:8px!important}.companion-heading{font-size:13px;font-weight:600;margin:12px 0 8px}.alive-toggle{font-size:12px!important}.badge-live{font-size:10px;color:#6b8f7e}";function Ru(){return`<div class="life-box"><label class="alive-toggle"><input type="checkbox" data-alive checked> Modo vivo: ele escolhe o que fazer</label><label class="alive-toggle"><input type="checkbox" data-chatter checked> Falas espont\xE2neas no bal\xE3o</label><div class="mood" data-mood aria-live="polite"></div><div class="needs">${[["fullness","Barriguinha"],["water","\xC1gua do Pingo"],["energy","Energia"],["affection","Carinho"]].map(([i,e])=>`<label>${e}<progress data-need="${i}" max="100" value="75"></progress></label>`).join("")}</div><div class="life-buttons"><button type="button" data-care="happy">Carinho</button><button type="button" data-care="eat">Comida</button><button type="button" data-care="drink">\xC1gua para ele</button><button type="button" data-care="sleep">Descansar</button></div><div class="companion-heading">Seus lembretes</div><div class="alert-card" data-alert hidden><div data-alert-text></div><div class="life-buttons"><button data-ack type="button">J\xE1 fiz</button><button data-snooze type="button">Adiar 5 min</button></div></div><form data-reminder-form><input class="reminder-input" aria-label="Novo lembrete" placeholder="Reuni\xE3o \xE0s 21:40" maxlength="180" required><div class="life-buttons"><button type="submit">Adicionar lembrete</button><button data-water type="button">\xC1gua a cada 30 min</button></div></form><div class="feedback" data-feedback role="status">Use \u201Cpausa em 15 minutos\u201D ou \u201Creuni\xE3o \xE0s 21:40\u201D. Reuni\xF5es avisam 10 minutos antes. Hor\xE1rio local do navegador.</div><div class="reminder-list" data-reminders></div><div class="feedback">Os avisos funcionam com esta p\xE1gina aberta. Os dados ficam salvos neste site/navegador.</div></div>`}function Pu(i,e,{onState:t=()=>{},onBubble:n=()=>{}}={}){let s;try{s=globalThis.localStorage}catch{s=null}let r=new dr(jl(s)),a=ec(s),o=Tu(i),l=e.querySelector("[data-alive]"),c=globalThis.crypto?.randomUUID?.()||String(Math.random()),u=0,m=0,h=0,d="idle",g=null,v=a.items.filter(V=>V.pending&&!V.done),f=0,p=-200,b=!0,M=!1,_=30+Math.random()*30,S={x:0,y:0};try{b=s?.getItem("pingo-autonomy")!=="off"}catch{}l.checked=b;let T=e.querySelector("[data-feedback]"),w=e.querySelector("[data-alert]");function x(V,N=9){g||(f=u+N,n(V,!1))}function A(){if(g||!v.length)return;g=v.shift(),w.hidden=!1;let V=a.message(g);e.querySelector("[data-alert-text]").textContent=V,o.set("alert",u),t("alert",!1),n(V,!0)}function R(){let V=e.querySelector("[data-reminders]");V.replaceChildren();for(let N of a.items.filter(G=>!G.done)){let G=document.createElement("div");G.className="reminder-row";let Z=document.createElement("span");Z.textContent=N.title+" \xB7 "+(N.pending?"aguardando confirma\xE7\xE3o":new Date(N.due).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}));let ae=document.createElement("button");ae.type="button",ae.textContent="\xD7",ae.setAttribute("aria-label","Excluir lembrete "+N.title),ae.onclick=()=>{a.remove(N.id),v=v.filter(fe=>fe.id!==N.id),g?.id===N.id&&(g=null,w.hidden=!0,n("",!1)),pr(a,s),R()},G.append(Z,ae),V.append(G)}}function L(V,{care:N=!0,manual:G=!0}={}){G&&(d=V,r.interact(V,u),fr(r,s)),o.set(V,u),t(V,G),N&&x({eat:"Nhac! Obrigado pelo lanchinho.",drink:"Ahh, que refrescante!",happy:"Adorei esse carinho.",sleep:"Vou descansar um pouquinho\u2026",hug:"Um abra\xE7o de gelatina para voc\xEA."}[V]||"Olha s\xF3 o que eu sei fazer!")}l.onchange=()=>{b=l.checked;try{s?.setItem("pingo-autonomy",b?"on":"off")}catch{}r.next=u+1,x(b?"Vou escolher meus pr\xF3prios movimentos por aqui.":"Pode escolher uma anima\xE7\xE3o para eu repetir.")},e.querySelectorAll("[data-care]").forEach(V=>V.onclick=()=>L(V.dataset.care));function D(V){a.add(V),pr(a,s),R(),T.textContent="Combinado! "+V.title+" \xB7 pr\xF3ximo aviso "+new Date(V.due).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}e.querySelector("[data-reminder-form]").onsubmit=V=>{V.preventDefault();let N=e.querySelector(".reminder-input");try{D(Ql(N.value)),N.value=""}catch(G){T.textContent=G.message}},e.querySelector("[data-water]").onclick=()=>{if(a.items.some(V=>V.kind==="water"&&V.repeatMinutes===30&&!V.done)){T.textContent="O lembrete de \xE1gua a cada 30 minutos j\xE1 est\xE1 ativo.";return}D(Ql("tomar \xE1gua a cada 30 minutos"))};let P=document.createElement("button");P.type="button",P.textContent="Testar aviso agora",P.dataset.testReminder="",P.onclick=()=>D({title:"Teste de lembrete de \xE1gua",kind:"water",repeatMinutes:0,due:Date.now()+1e3}),e.querySelector("[data-reminder-form]").append(P);function C(V){if(!g)return;let N=g.id;V?a.snooze(N):a.acknowledge(N),g=null,w.hidden=!0;let G=b?"idle":d;o.set(G,u),t(G,!1),pr(a,s),R(),f=u+5,n(V?"Combinado, aviso de novo em cinco minutos.":"Combinado! Vou continuar por aqui.",!1),r.next=u+3}e.querySelector("[data-ack]").onclick=()=>C(!1),e.querySelector("[data-snooze]").onclick=()=>C(!0),R();function O(V,N,G=!0){if(u=N,G){if(r.advance(V,o.state),b&&!g&&!M){let Z=r.choose(N);Z&&(o.set(Z.state,N),t(Z.state,!1),r.emotion!=="Curioso e tranquilo"&&N-p>120?(x(Z.reason),p=N):Math.random()<.13&&x(Z.reason,6))}if(o.update(N),!["sleep","napCurl","meditate"].includes(o.state))for(let Z of i.eyes)Z.rotation.y+=S.x*.06,Z.rotation.x+=S.y*.045,Z.position.x+=S.x*.012,Z.position.y-=S.y*.008}if(Date.now()-m>1e3){m=Date.now(),e.querySelector("[data-mood]").textContent="Agora: "+r.emotion;for(let Z of e.querySelectorAll("[data-need]"))Z.value=Math.round(r.needs[Z.dataset.need]);if(Au(s,c)){let Z=a.tick();Z.length&&(v.push(...Z),pr(a,s),R()),g||(v=a.items.filter(ae=>ae.pending&&!ae.done)),A()}else g&&(g=null,w.hidden=!0,n("",!1))}if(G&&b&&!g&&!["sleep","napCurl","meditate","nausea","rainbow"].includes(o.state)&&N>_&&N>r.manualUntil&&e.querySelector("[data-chatter]").checked){let Z=["Gostei de ficar pertinho de voc\xEA.","Um passinho e a vista j\xE1 muda.","Se precisar de uma pausa, estou por aqui.","Hoje estou com vontade de explorar.","Esse cantinho tem cara de boas ideias.","Um carinho de vez em quando deixa meu dia melhor.","Estou treinando meus passinhos de gelatina.","Ser\xE1 que cabe mais um pulinho?","Vamos dan\xE7ar um pouquinho? \u{1F3B5}","Que tal uma pausa para beber \xE1gua? \u{1F4A7}","Vamos brincar um pouquinho?","Um carinho cairia t\xE3o bem agora. \u{1F49A}","Vamos respirar fundo e espregui\xE7ar?"];x(Z[Math.floor(Math.random()*Z.length)],7),_=N+45+Math.random()*45}return!g&&f&&N>f&&(f=0,n("",!1)),N-h>30&&(h=N,fr(r,s)),o.state}let $=V=>{if(V.key==="pingo-reminders-v1")a.items=ec(s).items,g&&!a.items.some(N=>N.id===g.id&&N.pending&&!N.done)&&(g=null,w.hidden=!0,n("",!1)),R();else if(V.key==="pingo-life-v1"){let N=new dr(jl(s));r.needs=N.needs}},B=()=>{document.hidden&&tc(s,c),m=0};return addEventListener("storage",$),addEventListener("visibilitychange",B),{update:O,act:L,life:r,book:a,player:o,setInspecting(V){M=!!V},get autonomous(){return b},setPointer(V,N){S={x:V,y:N}},persist(){fr(r,s)},dispose(){fr(r,s),tc(s,c),removeEventListener("storage",$),removeEventListener("visibilitychange",B)},say:x}}var dx=[["groove","Dan\xE7a",["Samba miudinho","Samba com bracinhos","Balan\xE7o de reggae","Passinho de disco","Dan\xE7a rob\xF3tica","Ginga de forr\xF3","Valsa de gelatina","Dan\xE7a em oito","Twist sorridente","Final de musical"]],["greeting","Cumprimentos",["Oi com as duas m\xE3os","Aceno delicado","Ol\xE1 bem animado","Sauda\xE7\xE3o de capit\xE3o","Cumprimento real","Rever\xEAncia de palco","Oi escondidinho","Tchau demorado","Aceno de reencontro","Bom dia espregui\xE7ado"]],["sport","Esportes",["Aquecimento de corrida","Polichinelo suave","Agachamento fofo","Boxe de brincadeira","Goleiro atento","Arremesso imagin\xE1rio","Surfe equilibrado","Remada de canoa","Pedalada no ar","Pulo de corda"]],["yoga","Alongamentos",["Alongar para o c\xE9u","Alongar para a esquerda","Alongar para a direita","Alongamento cruzado","Postura da \xE1rvore","Abra\xE7ar os joelhos","Alongar a cintura","Alongar antes de dormir","Alongamento em arco","Sauda\xE7\xE3o ao sol"]],["balance","Equil\xEDbrio",["Equilibrar no p\xE9 esquerdo","Equilibrar no p\xE9 direito","Caminhar na corda bamba","Equilibrar de olhos fechados","Prancha de surfista","P\xEAndulo tranquilo","Equil\xEDbrio de bailarino","Passo no gelo","Balan\xE7o de barco","Recuperar sem cair"]],["joy","Alegria",["Receber uma boa not\xEDcia","Pulinhos de reencontro","Explos\xE3o de alegria","Dancinha da vit\xF3ria","Festejar um objetivo","Comemorar com palmas","Alegria t\xEDmida","Sorriso radiante","Festa dos bracinhos","Agradecer uma surpresa"]],["curiosity","Explora\xE7\xE3o",["Investigar o ch\xE3o","Olhar para o alto","Espiar pela esquerda","Espiar pela direita","Procurar uma estrelinha","Seguir uma borboleta","Escutar um barulhinho","Cheirar uma flor","Olhar atr\xE1s de si","Explorar devagarinho"]],["sleepy","Descanso",["Acomodar para dormir","Cochilo balan\xE7ando","Soninho de tarde","Descansar as m\xE3os","Soneca feliz","Suspirar de sono","Dormir abra\xE7adinho","Ajeitar um travesseiro","Bocejo comprido","Pregui\xE7a de acordar"]],["wake","Despertar",["Abrir os olhos devagar","Bom dia com pulinho","Acordar espregui\xE7ando","Acordar curioso","Sacudir o soninho","Acordar de um sonho","Preparar para o dia","Acordar bem humorado","Esticar os pezinhos","Sauda\xE7\xE3o da manh\xE3"]],["affection","Afeto",["Abra\xE7o apertadinho","Abra\xE7o de reencontro","Mandar beijinhos","Cora\xE7\xE3o com as m\xE3os","Carinho no pr\xF3prio rosto","Agradecer companhia","Abra\xE7o de consolo","Oferecer um abra\xE7o","Carinho com sorriso","Amizade para sempre"]],["music","M\xFAsica",["Reger uma orquestra","Tocar piano imagin\xE1rio","Tocar viol\xE3o imagin\xE1rio","Bater um tamborzinho","Marcar o ritmo","Cantar baixinho","Cantar no palco","Tocar flauta imagin\xE1ria","Tocar sininhos","Final de concerto"]],["work","Criatividade",["Rabiscar uma ideia","Pintar uma paisagem","Escrever com cuidado","Ler uma descoberta","Anotar um lembrete","Digitar concentrado","Conferir uma tarefa","Desenhar um cora\xE7\xE3o","Pensar em uma solu\xE7\xE3o","Celebrar uma ideia"]],["jelly","Gelatina",["Ondinha lateral","Molinho como pudim","Gelatina em espiral","Espichar e voltar","Pudim dan\xE7ante","Onda de cima para baixo","Balan\xE7o el\xE1stico","Quase virar bolinha","Gelatina surpresa","Acomodar o corpinho"]],["sneak","Passinhos",["Passo silencioso","Passo de detetive","Marcha de formiguinha","Passo deslizante","Passinho indeciso","Passo de astronauta","Passo de desfile","Passo em zigue-zague","Passo na po\xE7a","Passo para uma surpresa"]],["shy","Emo\xE7\xF5es delicadas",["Vergonha de elogio","Sorriso de cantinho","Timidez com aceno","Esconder o rostinho","Pedir um favor","Ficar sem gra\xE7a","Coragem para dizer oi","Agradecer baixinho","Olhar apaixonadinho","Surpresa delicada"]],["breathe","Tranquilidade",["Respirar em quatro tempos","Pausa de serenidade","Inspirar de olhos fechados","Soltar o peso do dia","Respirar com as m\xE3os","Balan\xE7o de medita\xE7\xE3o","Pausa no gramado","Acalmar o cora\xE7\xE3o","Ouvir a pr\xF3pria respira\xE7\xE3o","Relaxar por inteiro"]],["play","Brincadeiras",["Quicar uma bolinha","Equilibrar a bolinha","Jogar bolinha para cima","Passar a bola de lado","Esconde-esconde fofo","Pega-pega imagin\xE1rio","Pular amarelinha","Brincar de est\xE1tua","Imitar um foguete","Fazer uma careta"]],["weather","Natureza",["Sentir uma brisa","Dan\xE7ar na chuvinha","Olhar as nuvens","Sentir um raio de sol","Desviar de gotinhas","Brincar com o vento","Cheirar o jardim","Olhar um arco-\xEDris","Escutar a chuva","Admirar o p\xF4r do sol"]],["care","Autocuidado",["Lavar as m\xE3ozinhas","Limpar as bochechas","Pentear a gotinha","Ajeitar o sorriso","Escovar imaginariamente","Abra\xE7ar o pr\xF3prio corpo","Conferir os pezinhos","Secar as m\xE3ozinhas","Sacudir a poeirinha","Pronto para passear"]],["show","Teatrinho",["Entrada de artista","Sauda\xE7\xE3o de m\xE1gico","Apresentar uma surpresa","Contar uma historinha","Fazer suspense","Rea\xE7\xE3o de plateia","Aplausos de p\xE9","Final com rever\xEAncia","Pose de her\xF3i","At\xE9 o pr\xF3ximo espet\xE1culo"]]],nc=dx.flatMap(([i,e,t])=>t.map((n,s)=>({id:`plus_${i}_${s+1}`,label:n,category:e,family:i,variant:s}))),fx=new Map(nc.map(i=>[i.id,i]));function Iu(i,e,t){let n=fx.get(e);if(!n)return;let{root:s,body:r,arms:a,feet:o,eyes:l,mouth:c,smile:u,open:m,newProps:h,extras:d}=i,g=n.variant,v=g%2?1:-1,f=.75+g*.065,p=t*Math.PI*f,b=Math.sin(p*2),M=Math.sin(p),_=.5-.5*Math.cos(p),S=Math.sin(p-.38),T=t/(4.2+g*.19)%1,w=.65+g*.065,x=Math.sin(T*Math.PI)**2,A=(P,C)=>{a[0].rotation.z=P,a[1].rotation.z=C},R=(P=.75)=>a.forEach((C,O)=>{C.position.set((O?1:-1)*.27,P,.77),C.rotation.set(-.15,0,(O?-1:1)*1.35),C.scale.setScalar(.65)}),L=P=>l.forEach(C=>C.scale.y=P),D=(P=.055,C=.06)=>o.forEach((O,$)=>{let B=p*2+$*Math.PI;O.position.x+=Math.cos(B)*P,O.position.y+=Math.max(0,Math.sin(B))*C,O.rotation.z=Math.sin(B)*.09});switch(r.rotation.z=v*S*.018,c.scale.x=1+x*.1,n.family){case"groove":s.position.x=Math.sin(p)*(.06+g*.014),s.position.y=Math.max(0,b)*.055,s.rotation.z=b*.055,r.rotation.y=Math.sin(p*.5)*.15,A(-w-M*.28,w+Math.sin(p+g*.4)*.28),a.forEach((C,O)=>C.rotation.x=Math.cos(p*2+O+g)*.22),D(.04+g*.004,.045);break;case"greeting":{let C=g%3===0?0:1;a[C].rotation.z=(C?1:-1)*(1.6+_*.6),a[C].rotation.x=Math.sin(p*3)*.18,a[1-C].rotation.z=(C?-1:1)*(.25+x*g*.12),r.rotation.x=x*(g===5?.35:.055),s.rotation.z=M*.035,s.position.y=Math.max(0,b)*g*.006;break}case"sport":r.position.y=-_*.07,r.scale.y=1-_*(.04+g*.004),s.position.y=Math.max(0,b)*(.025+g*.018),A(-.4-_*w,.4+Math.sin(p+g*.3)*w),a.forEach((C,O)=>C.rotation.x=Math.sin(p*2+O*Math.PI)*(.2+g*.035)),r.rotation.y=v*M*.12,D(.035+g*.003,.04+g*.006);break;case"yoga":r.scale.y=1+_*.09,r.rotation.z=v*_*(.04+g*.012),A(-.25-_*(1.1+g*.08),.25+_*(1.1+(9-g)*.08)),a.forEach((C,O)=>C.rotation.x=v*_*(O?.1:-.1)*g),L(.45+.5*(1-_)),o[g%2].position.y+=_*.04;break;case"balance":s.rotation.z=v*M*(.055+g*.005),r.rotation.y=S*.1,A(-.8-M*.22,.8+M*.22),o[g%2].position.y+=.06+_*(.04+g*.006),o[g%2].position.x+=v*_*.05,a.forEach((C,O)=>C.rotation.x=Math.sin(p+O)*.13);break;case"joy":s.position.y=Math.max(0,b)*(.12+g*.018),r.scale.y=1+Math.sin(p*4)*.04,s.rotation.z=v*M*.06,A(-1.1-_*w,1.1+_*w),g%3===0&&R(.9+x*.16),L(.35+.55*(1-x)),D(.03,.06);break;case"curiosity":r.rotation.y=Math.sin(p*.65+g*.2)*(.1+g*.018),s.rotation.z=v*M*.055,r.rotation.x=(_-.5)*(.08+g*.012),l.forEach(C=>{C.position.x+=v*Math.sin(p*.7)*.04,C.position.y+=Math.cos(p*.7+g*.1)*.018}),a[g%2].rotation.z=v*(.45+x*.5),D(.01,.015);break;case"sleepy":r.scale.set(1.12,.79+Math.sin(p*.5)*.018,1.04),s.rotation.z=v*.04+M*.012,L(.07+Math.max(0,b)*.025),R(.55+g*.006),u.scale.setScalar(1e-4),m.scale.set(.022,.026+_*.006,.018),d.zzz.scale.setScalar(.7+g*.025),o.forEach(C=>C.scale.y=.11);break;case"wake":{let C=.5-.5*Math.cos(p*.5);r.scale.y=.85+C*.22,r.scale.x=1.08-C*.08,L(.1+C*.9),A(-.2-C*w,.2+C*w),s.position.y=Math.max(0,b)*C*g*.009,r.rotation.z=v*(1-C)*.035,D(.025*C,.035*C);break}case"affection":R(.7+x*.13),a.forEach((C,O)=>{C.position.x=(O?1:-1)*(.29-x*.1),C.rotation.x=M*.1,C.rotation.z+=(O?1:-1)*Math.sin(p+g*.2)*.14}),s.rotation.z=v*M*.045,L(.5+_*.4),h.love.scale.setScalar(.4+x*(.2+g*.02)),h.love.position.set(v*.05,1.43+x*.18,.65),h.love.rotation.z=M*.1;break;case"music":R(.72),a.forEach((C,O)=>{C.rotation.x=Math.sin(p*(O?2:3)+g*.3)*(.18+g*.02),C.position.y+=Math.sin(p*2+O)*.04,C.position.x+=Math.sin(p+O)*.04}),r.rotation.z=S*.04,s.position.y=Math.max(0,b)*.025,c.scale.y=1.2+x*.2,(g===0||g===9)&&A(-.7-_,.7+_);break;case"work":R(.67),r.rotation.x=.08,l.forEach(C=>C.scale.y=.78),a[1].position.y+=b*.025,a[1].rotation.x=Math.sin(p*3)*.13,s.rotation.z=v*M*.018,g===3?(h.book.scale.setScalar(.85),h.book.position.set(0,.7,.95)):g===5?(h.laptop.scale.setScalar(.85),h.laptop.position.set(0,.46,.85)):(h.pencil.scale.setScalar(1),h.pencil.position.set(.2+M*.025,.72+b*.02,.95),h.pencil.rotation.z=.4+b*.1);break;case"jelly":r.scale.set(1+b*(.035+g*.006),1-b*(.06+g*.007),1+Math.sin(p+.4)*.025),r.rotation.z=S*(.04+g*.005),r.rotation.y=M*.13,A(-.3-M*.25,.3+M*.25),s.position.y=Math.max(0,b)*.035;break;case"sneak":D(.035+g*.008,.035+g*.006),s.position.x=v*Math.sin(p*.5)*(.06+g*.012),s.position.y=Math.max(0,b)*.025,r.rotation.y=v*.1+M*.05,a.forEach((C,O)=>C.rotation.x=Math.sin(p*2+O*Math.PI)*(.14+g*.015)),r.scale.y=.96+b*.012;break;case"shy":R(.63+x*.1),s.rotation.z=v*(.02+M*.025),l.forEach(C=>{C.scale.y=.7+x*.15,C.position.x+=v*.022}),a[g%2].position.y+=_*.16,a[g%2].position.z+=.025,c.scale.x=.6+_*.2,r.scale.y=.97+S*.012;break;case"breathe":{let C=.5-.5*Math.cos(p*.65);r.scale.set(1+C*.025,1+C*(.03+g*.003),1+C*.02),A(-.25-C*.32,.25+C*.32),L(.14+g*.025),s.rotation.z=M*.01,a.forEach(O=>O.position.y+=C*.04);break}case"play":s.rotation.z=v*M*.045,D(.03,.04),g<4?(d.ball.scale.setScalar(.85),d.ball.position.set(v*(.45+M*.13),.28+Math.abs(b)*(.28+g*.09),.8),d.ball.rotation.z=p*2,a[g%2].rotation.z=v*(.7+b*.25)):(A(-.5-_*w,.5+_*w),s.position.y=Math.max(0,b)*(.04+(g-4)*.035),r.rotation.y=M*.15);break;case"weather":r.rotation.x=-.03-_*.04,r.rotation.z=v*S*.04,l.forEach(C=>C.position.y+=_*.025),A(-.25-_*(.2+g*.07),.25+_*(.2+g*.07)),r.rotation.y=M*.08,s.position.y=Math.max(0,b)*g*.004;break;case"care":R(.75);let P=a[g%2];P.position.set(v*(.22+M*.05),.82+_*(.1+g*.01),.8),P.rotation.x=b*.15,P.rotation.z=v*(1.1+M*.15),r.rotation.z=-v*S*.035,l.forEach(C=>C.scale.y=.75+_*.2);break;case"show":s.rotation.z=v*M*.04,r.rotation.y=Math.sin(p*.5)*.16,A(-.4-_*w,.4+x*(1+g*.07)),r.rotation.x=x*(g===7?.3:.045),s.position.y=Math.max(0,b)*(.025+g*.007),o[g%2].position.x+=v*x*.05;break}a.forEach((P,C)=>P.rotation.y+=Math.sin(p-.3+C*.25+g*.1)*.035)}var Lu=[["bow","Fazer uma rever\xEAncia"],["highFive","Bater aqui"],["clap","Bater palminhas"],["heart","Mandar um cora\xE7\xE3o"],["hug","Dar um abra\xE7o"],["kiss","Mandar um beijo"],["winkLeft","Piscar o olho esquerdo"],["winkRight","Piscar o olho direito"],["nod","Concordar"],["shakeHead","Discordar"],["listen","Escutar com aten\xE7\xE3o"],["search","Procurar alguma coisa"],["peek","Espiar escondidinho"],["sneak","Andar na ponta dos p\xE9s"],["tiptoe","Se esticar para alcan\xE7ar"],["run","Correr contente"],["march","Marchar"],["moonwalk","Fazer moonwalk"],["sideStep","Dar passinhos cruzados"],["balance","Se equilibrar"],["stumble","Trope\xE7ar de leve"],["recover","Recuperar o equil\xEDbrio"],["roll","Rolar como gelatina"],["wobble","Balan\xE7ar molinho"],["jellyWave","Fazer uma onda de gelatina"],["squash","Virar uma panquequinha"],["breatheDeep","Respirar fundo"],["meditate","Meditar"],["relax","Relaxar"],["napCurl","Se enrolar para cochilar"],["wakeUp","Acordar devagar"],["dream","Sonhar acordado"],["sneeze","Espirrar"],["hiccup","Ter solu\xE7os"],["cough","Tossir de leve"],["cold","Sentir frio"],["hot","Se abanar de calor"],["thirsty","Pedir \xE1gua"],["hungry","Pedir comida"],["lonely","Pedir companhia"],["grateful","Agradecer o carinho"],["excited","Ficar empolgado"],["relieved","Suspirar aliviado"],["disappointed","Ficar desapontado"],["determined","Ganhar coragem"],["read","Ler um livrinho"],["write","Desenhar"],["typing","Digitar"],["stretchArms","Alongar os bracinhos"],["clean","Se arrumar"],["nausea","Ficar enjoado"],["rainbow","Soltar um arco-\xEDris"]];function Du(i){let e=new ft;e.name="Acessorios",i.add(e);let t=d=>new Ct({color:d,roughness:.48}),n=new Wn;n.moveTo(0,-.12),n.bezierCurveTo(-.36,.08,-.12,.31,0,.14),n.bezierCurveTo(.12,.31,.36,.08,0,-.12);let s=new Ye(new di(n,{depth:.045,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:3,steps:1}),t("#ed91ae"));s.name="Coracao",e.add(s);let r=new ft;r.name="Livrinho",e.add(r);for(let d of[-1,1]){let g=new Ye(new qt(.23,.28,.035),t("#b9a0d5"));g.position.x=d*.115,g.rotation.y=d*-.18,r.add(g);let v=new Ye(new qt(.21,.25,.014),t("#fff6df"));v.position.set(d*.112,0,.027),v.rotation.y=d*-.18,r.add(v)}let a=new ft;a.name="Computador",e.add(a);let o=new Ye(new qt(.52,.025,.29),t("#94abb5"));a.add(o);let l=new Ye(new qt(.49,.3,.025),t("#617d8d"));l.position.set(0,.15,-.12),l.rotation.x=-.16,a.add(l);let c=new Ye(new fi(.4,.22),new on({color:"#c1e8db"}));c.position.set(0,.15,-.097),c.rotation.x=-.16,a.add(c);let u=new Ye(new ci(.014,.014,.26,8),t("#e8b76c"));u.name="Lapis",e.add(u);let m=new Ye(new yn(.032,20,16),new Zt({color:"#8cc7ef",roughness:.15,clearcoat:1}));m.name="Lagrima",e.add(m);let h=new ft;h.name="ArcoIris",e.add(h);for(let[d,g]of["#f58ba0","#ffb265","#f2dd72","#8bd39a","#70d5de","#829fe5","#b89be4"].entries()){let v=(d-3)*.016,f=new Zi([new F(v,.86,1),new F(.13+v,.73,1.1),new F(.28+v,.4+v,1.13),new F(.48+v,.25+v,1.12),new F(.78+v,.32+v,1.08)]),p=new Ye(new pi(f,36,.017,8,!1),t(g));p.name="Faixa_ArcoIris_"+d,h.add(p)}return{love:s,book:r,laptop:a,pencil:u,tear:m,rainbow:h}}function Nu(i,e,t){let{root:n,body:s,arms:r,feet:a,eyes:o,mouth:l,smile:c,open:u,newProps:m}=i,h=t*Math.PI/3,d=Math.sin(h),g=Math.cos(h),v=Math.sin(h*4),f=(1-g)/2,p=1e-4,{love:b,book:M,laptop:_,pencil:S,tear:T,rainbow:w}=m;Object.values(m).forEach(P=>P.scale.setScalar(p));let x=(P,C,O=0)=>{r[P].rotation.set(O,0,C)},A=(P=.7)=>r.forEach((C,O)=>{C.position.set((O?1:-1)*.3,P,.8),C.rotation.z=(O?-1:1)*1.6,C.scale.setScalar(.58)}),R=(P=.12)=>o.forEach(C=>C.scale.y=P),L=(P,C)=>{c.scale.setScalar(p),u.scale.set(P,C,.018)},D=(P,C,O)=>a.forEach(($,B)=>{let V=h*P+B*Math.PI;$.position.x+=Math.cos(V)*C,$.position.y+=Math.max(0,Math.sin(V))*O,$.rotation.z=Math.sin(V)*.08});switch(e){case"nausea":s.rotation.z=d*.07,s.rotation.x=.07,s.scale.y=.94,R(.38),L(.032,.035),A(.58),T.scale.setScalar(.6+.15*f),T.position.set(.38,1.18-f*.08,.66);break;case"rainbow":s.rotation.x=.11+v*.025,s.scale.y=.95-v*.018,R(.23),L(.065,.065),A(.56),w.scale.set(1+.06*v,.96,1),w.position.y=-.022+.008*d;break;case"bow":s.rotation.x=f*.35,s.scale.y=1-f*.1,r.forEach((P,C)=>x(C,(C?1:-1)*.22,-f*.2)),R(1-f*.65);break;case"highFive":x(1,2.4-f*.35,-f*.15),n.rotation.z=-.045*f,r[1].scale.setScalar(1+f*.12);break;case"clap":A(.87),r.forEach((P,C)=>{P.position.x=(C?1:-1)*(.19+.1*(1-v)),P.rotation.z=(C?-1:1)*(1.5+v*.12)}),s.scale.y=1+v*.018;break;case"heart":A(.74),b.scale.setScalar(.62+.09*v),b.position.set(0,1.3+f*.35,.85),b.rotation.z=d*.08,l.scale.x=1.2;break;case"hug":r.forEach((P,C)=>{P.position.set((C?1:-1)*(.36-f*.16),.73,.56+f*.19),P.rotation.z=(C?-1:1)*(1.2+f*.35),P.scale.setScalar(.78)}),s.rotation.z=d*.04,R(.75);break;case"kiss":r[1].position.set(.18,.85,.77),r[1].scale.setScalar(.6),x(1,1.6+f*.4),L(.035,.025),b.scale.setScalar(.35*f),b.position.set(.14+f*.5,1.08+f*.35,.9);break;case"winkLeft":o[0].scale.y=.08+.92*(1-f)**3,x(1,.55),n.rotation.z=-f*.045;break;case"winkRight":o[1].scale.y=.08+.92*(1-f)**3,x(0,-.55),n.rotation.z=f*.045;break;case"nod":s.rotation.x=Math.sin(h*3)*.13,o.forEach(P=>P.position.y-=Math.max(0,Math.sin(h*3))*.025);break;case"shakeHead":s.rotation.y=Math.sin(h*3)*.26,l.scale.x=.6,x(1,.48);break;case"listen":n.rotation.z=-.08,r[0].position.set(-.44,1.02,.46),r[0].scale.setScalar(.7),x(0,-1.5),o.forEach(P=>P.position.x-=.025);break;case"search":s.rotation.y=d*.42,n.rotation.z=Math.sin(h*2)*.05,x(1,1.9),r[1].position.set(.14,1.31,.63),r[1].scale.setScalar(.65);break;case"peek":r.forEach((P,C)=>{P.position.set((C?1:-1)*.25,1.01,.78),P.scale.setScalar(.55),x(C,(C?-1:1)*(1.2+f*.5))}),o[0].scale.y=.25+.75*f,s.rotation.y=d*.15;break;case"sneak":n.position.x=d*.38,s.scale.y=.9,s.rotation.z=Math.sin(h*4)*.055,D(4,.065,.08),x(0,-.55,-.25),x(1,.55,-.25),o.forEach(P=>P.position.x+=.03*g);break;case"tiptoe":n.position.y=f*.11,s.scale.y=1+f*.1,x(0,-1.9*f),x(1,1.9*f),a.forEach(P=>{P.scale.z=.22,P.rotation.x=-.15*f});break;case"run":n.position.x=d*.5,n.position.y=Math.abs(Math.sin(h*8))*.09,s.rotation.z=-Math.sin(h*8)*.055,D(8,.11,.13),x(0,-.3,v*.6),x(1,.3,-v*.6);break;case"march":D(4,.045,.16),n.position.y=(1-Math.cos(h*8))*.018,x(0,-.2,v*.48),x(1,.2,-v*.48),s.scale.y=1.025;break;case"moonwalk":n.position.x=-d*.5,D(4,.13,.035),s.rotation.x=-.07,x(0,-.5),x(1,.5),a.forEach(P=>P.rotation.x=-.08);break;case"sideStep":n.position.x=Math.sin(h*2)*.34,a.forEach((P,C)=>{P.position.x+=(C?1:-1)*Math.sin(h*2)*.16,P.position.y+=Math.max(0,Math.sin(h*4+C*Math.PI))*.065}),n.rotation.z=Math.sin(h*4)*.045;break;case"balance":n.rotation.z=d*.16,a[1].position.y+=.16,a[1].rotation.z=-.25,x(0,-1.25+d*.15),x(1,1.25+d*.15),o.forEach(P=>P.position.x-=d*.025);break;case"stumble":{let P=Math.sin(h*2);n.rotation.z=P*.19,n.position.x=P*.13,s.scale.y=1-Math.abs(P)*.08,x(0,-.8-P*.7),x(1,.8-P*.7),a[1].position.y+=Math.max(0,P)*.12,L(.035,.045);break}case"recover":n.rotation.z=d*.13*(.5+.5*g),x(0,-.9-d*.4),x(1,.9-d*.4),n.position.y=Math.abs(Math.sin(h*2))*.06;break;case"roll":n.rotation.z=h,n.position.y=.99*(1-Math.cos(h)),n.position.x=d*.36,r.forEach(P=>P.scale.setScalar(.65)),a.forEach(P=>P.scale.multiplyScalar(.8));break;case"wobble":s.rotation.z=d*.16,s.scale.set(1+v*.055,1-v*.05,1),r.forEach((P,C)=>P.rotation.z=(C?1:-1)*(.2+Math.sin(h*4-.5)*.15));break;case"jellyWave":s.rotation.z=Math.sin(h*2)*.1,s.scale.set(1+Math.sin(h*2)*.08,1+Math.sin(h*2-.7)*.08,1),i.skin.morphTargetInfluences[0]=Math.sin(h*2)*.8,x(0,-.8+Math.sin(h*2-.5)*.4),x(1,.8+Math.sin(h*2-1)*.4);break;case"squash":s.scale.set(1+f*.28,1-f*.37,1+f*.16),r.forEach((P,C)=>x(C,(C?1:-1)*(.2+f*.5))),R(1-f*.6);break;case"breatheDeep":s.scale.set(1+f*.045,1+f*.07,1+f*.045),R(.35),x(0,-.55*f),x(1,.55*f),L(.025,.02+f*.02);break;case"meditate":n.position.y=.07+.025*d,s.scale.y=.94,R(.055),a.forEach((P,C)=>{P.position.x=(C?1:-1)*.24,P.rotation.z=(C?-1:1)*.35}),A(.51);break;case"relax":s.scale.set(1.09,.86+.012*d,1.04),n.rotation.z=-.055,R(.35),r.forEach((P,C)=>x(C,(C?1:-1)*.5));break;case"napCurl":s.scale.set(1.13,.67+.012*d,1.1),n.rotation.z=.1,R(.055),A(.48),a.forEach(P=>P.position.z=.05);break;case"wakeUp":s.scale.set(1.08-f*.08,.81+f*.24,1),R(.12+f*.88),x(0,-2*f),x(1,2*f),L(.04,.025+f*.055);break;case"dream":R(.18),n.rotation.z=d*.06,b.scale.setScalar(.34+.08*d),b.position.set(.47,1.65+f*.15,.15),r.forEach((P,C)=>x(C,(C?1:-1)*.35));break;case"sneeze":{let P=Math.sin(h*3),C=Math.max(0,P)**8;s.rotation.x=-.08+.28*C,s.scale.y=1.03-C*.12,r[1].position.set(.15,.85,.79),r[1].scale.setScalar(.6),x(1,1.55),R(1-C*.94),L(.04,.03+C*.04);break}case"hiccup":{let P=Math.max(0,v)**6;n.position.y=P*.07,s.scale.y=1+P*.035,s.rotation.x=-P*.05,L(.027,.03);break}case"cough":r[1].position.set(.12,.82,.77),r[1].scale.setScalar(.56),x(1,1.4),s.rotation.x=.12+Math.max(0,v)*.04,R(.5),L(.04,.035);break;case"cold":n.rotation.z=Math.sin(h*12)*.018,s.scale.set(.95,1.02,.97),A(.71),R(.7),r.forEach(P=>P.rotation.x=v*.07);break;case"hot":x(1,1.1+Math.sin(h*8)*.35),r[1].position.y=.95,s.scale.y=.94,R(.65),L(.038,.04);break;case"thirsty":r[1].position.set(.1,.75,.76),r[1].scale.setScalar(.6),x(1,1.5),L(.025,.03),s.rotation.z=-.04,o.forEach(P=>P.scale.y=.8);break;case"hungry":A(.54),r.forEach((P,C)=>P.position.x+=(C?1:-1)*d*.025),s.scale.y=.95,l.scale.x=.6,o.forEach(P=>P.scale.y=.85);break;case"lonely":s.scale.y=.92,n.rotation.z=d*.035,x(1,.9+f*.4),o.forEach(P=>P.scale.y=.75),T.scale.setScalar(.6*f),T.position.set(-.31,.97-f*.2,.79);break;case"grateful":A(.8),s.rotation.x=f*.16,b.scale.setScalar(.35+.1*f),b.position.set(0,1.32,.84),R(.8);break;case"excited":n.position.y=Math.abs(Math.sin(h*6))*.15,x(0,-1.2-v*.2),x(1,1.2+v*.2),s.scale.y=1+v*.035,l.scale.set(1.3,1.3,1);break;case"relieved":s.scale.set(1+.04*f,1-.08*f,1),R(.35+.3*(1-f)),L(.025,.02+f*.02),x(0,-.35),x(1,.35);break;case"disappointed":s.scale.y=.88,s.rotation.x=.08,l.rotation.z=Math.PI,l.scale.x=.75,R(.65),r.forEach((P,C)=>x(C,(C?-1:1)*.08));break;case"determined":s.scale.y=1.06,s.rotation.x=.07,o.forEach((P,C)=>P.rotation.z=(C?-1:1)*.13),x(0,-.65),x(1,.65),n.position.y=f*.025;break;case"read":M.scale.setScalar(.85),M.position.set(0,.7,.95),M.rotation.x=-.14,A(.73),o.forEach(P=>{P.position.y-=.025,P.position.x+=d*.02}),s.rotation.x=.045;break;case"write":M.scale.setScalar(.9),M.position.set(0,.48,.99),M.rotation.x=-.7,S.scale.setScalar(1),S.position.set(.17+.035*v,.72,.99),S.rotation.z=-.4+d*.12,A(.69),r[1].position.x+=v*.025,o.forEach(P=>P.position.y-=.025);break;case"typing":_.scale.setScalar(.95),_.position.set(0,.51,.98),A(.64),r.forEach((P,C)=>P.position.y+=.025*Math.sin(h*8+C*Math.PI)),s.rotation.x=.06,o.forEach(P=>P.scale.y=.9);break;case"stretchArms":x(0,-1.3-f*.9),x(1,1.3+f*.9),s.rotation.z=d*.08,r.forEach(P=>P.scale.setScalar(1+f*.1)),R(.7);break;case"clean":r.forEach((P,C)=>{P.position.set((C?1:-1)*(.32+.06*d),.98+v*.06,.72),P.scale.setScalar(.62),P.rotation.z=(C?-1:1)*1.4}),o.forEach(P=>P.scale.y=.35+.65*(1-f));break}}function Uu(i,e,t){let{body:n,arms:s,skin:r}=i,a=t*Math.PI/3,o=["sleep","napCurl","meditate","relax","tired"].includes(e),l=o?.14:.32;e!=="jellyWave"&&(r.morphTargetInfluences[0]=Math.sin(a*2-.35)*l),r.morphTargetInfluences[1]=Math.sin(a*2+.6)*l*.45;let c=n.scale.x*n.scale.y*n.scale.z;if(!["stretch","stretchArms","squash","wakeUp","tiptoe","sleep","napCurl"].includes(e)){let u=Math.pow(Math.max(.65,Math.min(1.45,c)),-.14);n.scale.x*=u,n.scale.z*=u}for(let u=0;u<s.length;u++)s[u].rotation.y+=Math.sin(a*2-.45+u*.15)*.025*(o?.3:1);n.rotation.x+=Math.sin(a*2-.55)*.006*(o?.5:1)}var So=[["walk","Andar pela tela"],["sleep","Dormir com Zzz"],["eat","Comer biscoito"],["wave","Dar tchau"],["dance","Dan\xE7ar"],["spin","Dar uma voltinha"],["hop","Pular de alegria"],["stretch","Espregui\xE7ar"],["yawn","Bocejar"],["sad","Ficar tristinho"],["angry","Ficar emburrado"],["surprise","Levar um susto"],["laugh","Dar risada"],["think","Pensar"],["curious","Olhar curioso"],["celebrate","Comemorar"],["focus","Se concentrar"],["drink","Tomar \xE1gua"],["ball","Brincar com bola"],["shy","Ficar t\xEDmido"],["alert","Chamar aten\xE7\xE3o"],["tired","Ficar cansado"],["proud","Sentir orgulho"],...Lu,...nc.map(i=>[i.id,i.label])];function Fu(i){let e=new Ct({color:"#8c83bb",roughness:.55}),t=new ft;t.name="Sono_Zzz",i.add(t);for(let l=0;l<3;l++){let c=new Wn;c.moveTo(0,.22),c.lineTo(.18,.22),c.lineTo(.18,.18),c.lineTo(.055,.04),c.lineTo(.18,.04),c.lineTo(.18,0),c.lineTo(0,0),c.lineTo(0,.04),c.lineTo(.125,.18),c.lineTo(0,.18);let u=new Ye(new di(c,{depth:.018,bevelEnabled:!0,bevelSize:.005,bevelThickness:.004,bevelSegments:2,steps:1}),e);u.name="Zzz_"+l,t.add(u)}let n=new ft;n.name="Copo_Agua",i.add(n);let s=new Ye(new ci(.115,.085,.24,32),new Zt({color:"#80bcf2",roughness:.19,clearcoat:1}));s.name="Copo",n.add(s);let r=new Ye(new Ls(.1,32),new Ct({color:"#c1e8ff",roughness:.13}));r.rotation.x=-Math.PI/2,r.position.y=.122,n.add(r);let a=new Ye(new yn(.17,32,24),new Zt({color:"#ffc175",roughness:.25,clearcoat:1}));a.name="Bola",i.add(a);let o=[];for(let l=0;l<4;l++){let c=new Ye(new Hs(.018,0),new Ct({color:"#d8a566"}));c.name="Farelo_"+l,i.add(c),o.push(c)}return{zzz:t,cup:n,ball:a,crumbs:o}}function Ou(i,e,t){let{root:n,body:s,arms:r,feet:a,eyes:o,mouth:l,smile:c,open:u,extras:m}=i,h=t*Math.PI/3,d=Math.sin(h),g=Math.cos(h),v=Math.sin(h*4),f=1e-4,{zzz:p,cup:b,ball:M,crumbs:_}=m;p.scale.setScalar(e==="sleep"?1:f),b.scale.setScalar(e==="drink"?1:f),M.scale.setScalar(e==="ball"?1:f),_.forEach(w=>w.scale.setScalar(e==="eat"?1:f));for(let w=0;w<3;w++){let x=p.children[w],A=e==="sleep"?(t/4+w/3)%1:w/3,R=Math.sin(A*Math.PI)**.65;x.position.set(.48+A*.42+w*.05,1.45+A*.65,.1),x.scale.setScalar((.55+A*.65)*R),x.rotation.z=Math.sin(A*Math.PI*2)*.08}if(e==="eat"){let w=t%2/2,x=.5-.5*Math.cos(w*Math.PI*2);_.forEach((A,R)=>{let L=(w+R*.18)%1;A.position.set((R-1.5)*.045,.78-L*.25,1.08),A.scale.setScalar(Math.sin(L*Math.PI)*.65)})}let S=(w,x,A=0)=>{r[w].rotation.z=x,r[w].rotation.x=A},T=(w,x)=>{c.scale.setScalar(f),u.scale.set(w,x,.018)};switch(e){case"wave":S(1,1.85+v*.25),s.rotation.z=d*.025;break;case"dance":n.position.x=d*.22,n.position.y=(1-Math.cos(h*4))*.04,n.rotation.z=v*.12,S(0,-.9-v*.35),S(1,.9+v*.35),a.forEach((w,x)=>w.position.y=.14+Math.max(0,Math.sin(h*4+x*Math.PI))*.07);break;case"spin":n.rotation.y=h,n.position.y=(1-Math.cos(h*2))*.04,S(0,-1.3),S(1,1.3);break;case"hop":{let w=Math.max(0,Math.sin(h*3));n.position.y=w*.6,s.scale.set(1-w*.08,1+w*.14,1-w*.05),S(0,-w),S(1,w);break}case"stretch":s.scale.set(1-.08*(1-g),1+.12*(1-g),1-.04*(1-g)),S(0,-2.3*(1-g)/2),S(1,2.3*(1-g)/2),o.forEach(w=>w.scale.y=.55+.45*g*g);break;case"yawn":s.scale.y=.96+.05*d,o.forEach(w=>w.scale.y=.25),T(.045,.04+.07*(1-g)/2),S(1,1.5),r[1].position.set(.18,.9,.73),r[1].scale.setScalar(.6);break;case"sad":s.scale.y=.9,s.rotation.z=d*.025,o.forEach((w,x)=>{w.scale.y=.7,w.rotation.z=(x===0?1:-1)*.18}),l.rotation.z=Math.PI,l.position.y=.82,r.forEach((w,x)=>w.rotation.z=(x===0?1:-1)*.12);break;case"angry":s.scale.set(1.04+v*.012,.96-v*.012,1),n.rotation.z=v*.018,o.forEach((w,x)=>w.rotation.z=(x===0?-1:1)*.26),S(0,-.65),S(1,.65),l.scale.x=.6;break;case"surprise":n.position.y=(1-g)*.11,s.scale.y=1.08,o.forEach(w=>w.scale.set(1.12,1.13,1)),T(.055,.075),S(0,-1.7),S(1,1.7);break;case"laugh":s.scale.y=1+v*.05,n.rotation.z=v*.035,o.forEach(w=>w.scale.y=.22),T(.09,.07+.02*v),S(0,-.6),S(1,.6);break;case"think":n.rotation.z=-.07,o.forEach(w=>w.position.x+=.025),r[1].position.set(.19,.78,.75),r[1].scale.setScalar(.6),S(1,1.2+v*.04),l.scale.x=.6;break;case"curious":s.rotation.y=d*.32,n.rotation.z=d*.09,o.forEach(w=>w.scale.y=1.06),S(0,-.25),S(1,.25);break;case"celebrate":n.position.y=Math.abs(v)*.19,n.rotation.z=d*.07,S(0,-2.1-v*.13),S(1,2.1+v*.13),l.scale.set(1.3,1.4,1);break;case"focus":s.rotation.x=.08,o.forEach(w=>w.scale.y=.72),r.forEach((w,x)=>{w.position.set((x===0?-1:1)*.32,.6,.62),w.scale.setScalar(.7),w.rotation.z=(x===0?1:-1)*.8}),s.scale.y=1+.008*v,l.scale.x=.65;break;case"drink":{let w=(1-g)/2;b.position.set(.08,.66+w*.25,1.04),b.rotation.z=-w*.45,r.forEach((x,A)=>{x.position.set((A===0?-1:1)*.28,.72+w*.15,.85),x.scale.setScalar(.6),x.rotation.z=(A===0?1:-1)*1.6}),T(.033,.025),s.rotation.x=-w*.04;break}case"ball":M.position.set(.66,.23+Math.abs(v)*.5,.52),M.rotation.z=h*3,S(1,.5+v*.5),n.rotation.z=-.04,o.forEach(w=>w.position.x+=.025);break;case"shy":o.forEach(w=>w.scale.y=.8),n.rotation.z=d*.04,r.forEach((w,x)=>{w.position.set((x===0?-1:1)*.15,.6,.72),w.scale.setScalar(.65),w.rotation.z=(x===0?1:-1)*1.4}),l.scale.x=.65;break;case"alert":S(1,2+v*.18),n.position.y=(1-Math.cos(h*4))*.035,o.forEach(w=>w.scale.y=1.1),T(.035,.04);break;case"tired":s.scale.set(1.09,.87+Math.sin(h*2)*.012,1.03),n.rotation.z=d*.045,o.forEach(w=>w.scale.y=.28+.06*d),r.forEach((w,x)=>w.rotation.z=(x===0?1:-1)*.08),l.scale.x=.55;break;case"proud":s.scale.set(1.02,1.06+.01*d,1),r.forEach((w,x)=>{w.rotation.z=(x===0?-1:1)*.8,w.position.y=.7}),o.forEach(w=>w.scale.y=.8),l.scale.set(1.2,1.1,1);break}}function Bu(){let i=new ft;i.name="Pingo";let e=new ft;e.name="Gelatina",i.add(e);let t=new Zt({color:"#60cebd",roughness:.29,metalness:0,clearcoat:.72,clearcoatRoughness:.22,transmission:.11,thickness:1.25,ior:1.36,iridescence:.08,iridescenceIOR:1.32,sheen:.15,sheenRoughness:.45,envMapIntensity:.65,attenuationColor:"#7de1d4",attenuationDistance:3}),n=new Zt({color:"#132c3b",roughness:.19,clearcoat:1}),s=new on({color:"#fffdf4"}),r=new Ct({color:"#f2a5a9",roughness:.62}),a=new yn(1,48,32);a.setAttribute("color",new nt(new Float32Array(a.attributes.position.count*3).fill(1),3));function o(B,V,N,G,Z,ae,fe,Ve,ze){let We=new Ye(a,ze);return We.name=V,We.position.set(N,G,Z),We.scale.set(ae,fe,Ve),We.castShadow=!0,B.add(We),We}let l=new yn(1,96,64),c=l.attributes.position;for(let B=0;B<c.count;B++){let V=c.getY(B),N=.83*(1-.23*V);c.setXYZ(B,c.getX(B)*N+.12*Math.max(V,0)**2,.17+.86*(V+1),c.getZ(B)*N*.86)}l.computeVertexNormals();let u=c.clone(),m=c.clone();for(let B=0;B<c.count;B++){let V=Math.max(0,(c.getY(B)-.17)/1.72);u.setX(B,c.getX(B)+.065*Math.sin(V*Math.PI*.8)*V),m.setY(B,c.getY(B)-.045*Math.sin(V*Math.PI)),m.setX(B,c.getX(B)*(1+.025*Math.sin(V*Math.PI)))}l.morphAttributes.position=[u,m];let h=new Ye(l,t);h.name="Corpo",h.castShadow=!0,e.add(h);let d=[];for(let B=0;B<c.count;B++){let V=(c.getY(B)-.17)/1.72,N=.8+.2*Math.max(0,Math.min(1,V));d.push(N,N,Math.min(1,N+.015))}l.setAttribute("color",new nt(d,3)),t.vertexColors=!0;let g=new Zt({color:"#628fa1",roughness:.28,transparent:!0,opacity:.65}),v=[],f=[];for(let B of[-1,1]){let V=new ft;V.name="Olho_"+(B<0?"E":"D"),V.position.set(B*.265,1.04,.714),V.rotation.y=B*.17,e.add(V),o(V,"Pupila_"+B,0,0,0,.091,.132,.047,n),o(V,"Brilho_"+B,-.024,.046,.041,.023,.028,.009,s),o(V,"Pontinho_"+B,.027,-.036,.044,.009,.011,.005,s),o(V,"Reflexo_Suave_"+B,.021,-.065,.045,.039,.018,.006,g),v.push(V);let N=o(e,"Bochecha_"+B,B*.435,.86,.648,.085,.038,.013,r);N.rotation.y=B*.38,f.push(N)}let p=new ft;p.name="Sorriso",p.position.set(0,.866,.758),e.add(p);let b=new hi(new F(-.078,.025,0),new F(0,-.07,.015),new F(.078,.025,0)),M=new Ye(new pi(b,28,.014,8,!1),n);p.add(M),M.name="Sorriso_Curva";let _=o(p,"Bocejo",0,-.012,.008,.054,.07,.018,n);_.scale.set(1e-4,1e-4,1e-4);let S=[-1,1].map(B=>{let V=new ft;return V.name="Bracinho_"+B,V.position.set(B*.67,.75,.1),e.add(V),o(V,"Maozinha_"+B,B*.12,-.11,.1,.15,.25,.15,t),V}),T=[-1,1].map(B=>o(i,"Pezinho_"+B,B*.405,.14,.21,.207,.14,.28,t)),w=[];for(let[B,V,N,G,Z]of[[0,-.43,1.34,.45,.037],[1,.46,.62,.61,.023],[2,-.24,.51,.65,.018]]){let ae=o(e,"Bolhinha_"+B,V,N,G,Z,Z,Z,new Zt({color:"#c4f4e9",roughness:.17,transparent:!0,opacity:.48,depthWrite:!1}));w.push(ae)}let x=new ft;x.name="Lanchinho",i.add(x),o(x,"Biscoito",0,0,0,.16,.16,.045,new Ct({color:"#dba764",roughness:.8}));for(let[B,V,N]of[[0,-.065,.06],[1,.055,.075],[2,.045,-.065],[3,-.07,-.06]])o(x,"Chocolate_"+B,V,N,.044,.022,.025,.01,new Ct({color:"#5d3830",roughness:.7}));x.scale.setScalar(1e-4);let A=Fu(i),R=Du(i),L=[];i.traverse(B=>L.push({n:B,p:B.position.clone(),q:B.quaternion.clone(),s:B.scale.clone()}));let D="idle",P=0;function C(B,V){D=B,P=V}function O(B,V=null){for(let de of L)de.n.position.copy(de.p),de.n.quaternion.copy(de.q),de.n.scale.copy(de.s);let N=Math.max(0,B-P),G=V||D,Z=1,ae=1,fe=1,Ve=0,ze=0,We=0;i.rotation.set(0,0,0),e.rotation.set(0,0,0),p.rotation.set(0,0,0),p.position.set(0,.866,.758),v.forEach((de,j)=>{de.position.x=(j===0?-1:1)*.265,de.scale.set(1,1,1)});let te=Math.sin(B*Math.PI*2/3)*.012;if(Z+=te,ae-=te*.65,G==="jump"){let de=Math.min(N/1.4,1);if(de<.2){let j=Math.sin(de/.2*Math.PI*.5);Z+=j*.14,ae-=j*.23}else if(de<.77){let j=(de-.2)/.57;Ve=Math.sin(j*Math.PI)*.72,ae+=Math.sin(j*Math.PI)*.13,Z-=Math.sin(j*Math.PI)*.055,ze=Math.sin(j*Math.PI*2)*.035}else{let j=(de-.77)/.23,se=Math.sin(j*Math.PI)*Math.exp(-j*1.3);Z+=se*.19,ae-=se*.22}N>1.4&&!V&&(D="idle")}else if(G==="happy"){let de=Math.sin(Math.min(N/2,1)*Math.PI);Ve=Math.abs(Math.sin(N*8))*de*.09,ze=Math.sin(N*7)*de*.075,Z+=de*.025,ae+=de*.035,N>2&&!V&&(D="idle")}else if(G==="sleep"){let de=Math.sin(N*Math.PI/2);ae=.73+de*.018,Z=1.16-de*.008,fe=1.06,ze=-.035+de*.008}else if(G==="eat"){let de=ei.smoothstep(.5-.5*Math.cos(N*Math.PI/2),.35,.75),j=Math.sin(N*Math.PI*8)*de;Z+=j*.018,ae-=j*.022,ze=Math.sin(N*Math.PI/2)*.012,N>8&&!V&&(D="idle")}else if(G==="walk"){let de=N*Math.PI*4;We=Math.asin(.94*Math.sin(N*Math.PI/2))/Math.asin(.94)*.75,Ve=(1-Math.cos(de*2))*.012,Z+=Math.cos(de*2)*.012,ae-=Math.cos(de*2)*.016,ze=Math.sin(de)*.027}i.position.set(We,Ve,0),i.rotation.z=ze,e.scale.set(Z,ae,fe),e.rotation.y=G==="walk"?Math.cos(N*Math.PI/2)*.12:So.some(([de])=>de===G)?0:Math.sin(B*.65)*.025;let ne=N%6,me=ne>5.35&&ne<5.67?Math.max(.045,Math.abs(ne-5.51)/.16):1;v.forEach(de=>{de.scale.y=G==="sleep"?.065:me,de.rotation.z=G==="happy"?Math.sin(N*5)*.04:0}),p.scale.set(1,G==="happy"?1.22:1,1),M.scale.setScalar(G==="eat"||G==="sleep"?1e-4:1);let Oe=N%4/4,ge=.5-.5*Math.cos(Oe*Math.PI*2),Re=ei.smoothstep(ge,.35,.75);return _.scale.set(G==="eat"?.043:G==="sleep"?.025:1e-4,G==="eat"?.018+Re*(.018+.018*Math.sin(N*Math.PI*8)):G==="sleep"?.028+.004*Math.sin(N*Math.PI/2):1e-4,G==="eat"||G==="sleep"?.018:1e-4),x.scale.setScalar(G==="eat"?.9-ge*.3:1e-4),x.position.set(0,.63+.19*ge,1.04-.12*ge),x.rotation.set(-ge*.12,.15,Math.sin(N*Math.PI/2)*.08),S.forEach((de,j)=>{let se=j===0?-1:1;de.scale.setScalar(G==="eat"?.6:1),de.position.set(se*.67,.75,.1),de.rotation.set(0,0,-se*.18),G==="walk"?(de.rotation.x=Math.sin(N*Math.PI*4+j*Math.PI)*.3,de.rotation.z=-se*.22):G==="sleep"?(de.position.set(se*.56,.62,.28),de.rotation.z=-se*.65,de.rotation.x=-.25):G==="eat"?(de.position.set(se*.31,.77+.1*ge,.88-.1*ge),de.rotation.z=-se*1.6,de.rotation.x=-.1):G==="happy"?de.rotation.z=se*(.75+Math.sin(N*7)*.15):G==="jump"&&(de.rotation.z=se*Ve*.65)}),T.forEach((de,j)=>{let se=j===0?-1:1,le=N*Math.PI*4+j*Math.PI,he=Math.tanh(Math.cos(N*Math.PI/2)*4),oe=(N*2+j*.5)%1,Fe=oe>.6?(oe-.6)/.4:0,Le=oe<.6?.09-.18*oe/.6:-.09+.18*(.5-.5*Math.cos(Fe*Math.PI));de.position.set(se*.405+(G==="walk"?Le*he:0),.14+(G==="walk"?Math.sin(Fe*Math.PI)*.075:0),.21),de.scale.set(.207,G==="sleep"?.105:.14,.28),de.rotation.x=Ve>.1?-.18:0,de.rotation.z=G==="walk"?Math.sin(le)*.06:G==="happy"?Math.sin(N*7+j*Math.PI)*.12:0}),Ou($,G,N),Nu($,G,N),Iu($,G,N),Uu($,G,N),D}let $={root:i,body:e,skin:h,eyes:v,arms:S,feet:T,mouth:p,smile:M,open:_,food:x,extras:A,newProps:R,setState:C,pose:O};return O(0),$}(()=>{let i="pingo-flutuante";if(document.getElementById(i)){document.getElementById(i).dispatchEvent(new Event("pingo-toggle"));return}let e=document.createElement("div");e.id=i,e.dataset.version="275.8",e.style.cssText="position:fixed;inset:0;z-index:2147483646;pointer-events:none;",document.documentElement.append(e);let t=e.attachShadow({mode:"open"});t.innerHTML='<style>:host{all:initial}canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.hit{position:absolute;width:116px;height:146px;pointer-events:auto;touch-action:none;border:0;background:transparent;cursor:grab;border-radius:45%;padding:0}.hit:focus-visible{outline:2px solid #5caa90}.panel{position:fixed;right:16px;bottom:18px;width:265px;max-height:80vh;overflow:auto;background:#fffdf5;color:#24483b;border:1px solid #c8ddcb;box-shadow:0 12px 45px #18382d25;border-radius:20px;padding:18px;pointer-events:auto;font:13px system-ui}.panel[hidden]{display:none}h3{margin:0 0 13px;font-size:16px}button,select{font:12px system-ui;border:1px solid #c9dbca;border-radius:10px;padding:9px;background:#edf5e9;color:#356149;cursor:pointer}select{width:100%;margin:9px 0}label{display:block;margin:13px 0;font-size:12px}input{accent-color:#68b59d}p{font-size:11px;color:#7c9384;line-height:1.6}.row{display:flex;gap:7px;flex-wrap:wrap}</style><canvas></canvas><button class="hit" title="Pingo: arraste para mover; dois cliques para abrir o painel" aria-label="Pingo: dois cliques para abrir o painel"></button><section class="panel" hidden><h3>Pingo, por aqui \u{1F49A}</h3><div class="row"><button data-action="walk">Passear</button><button data-action="eat">Comer</button><button data-action="sleep">Dormir</button></div><select aria-label="Anima\xE7\xE3o do Pingo"></select><label><input class="roam" type="checkbox" checked> Passear pela tela inteira</label><label>Velocidade <input class="speed" type="range" min="15" max="75" value="35"></label><p>Arraste o Pingo para coloc\xE1-lo onde quiser. O passeio respeita as bordas. Outras \xE1reas da p\xE1gina continuam clic\xE1veis.</p><div class="row"><button class="pause">Pausar</button><button class="close-panel">Fechar painel</button><button class="remove">Remover Pingo</button></div></section>';let n=t.querySelector("canvas"),s=t.querySelector(".hit"),r=t.querySelector(".panel"),a=t.querySelector("select"),o=t.querySelector(".roam");r.insertAdjacentHTML("beforeend",Ru());let l=document.createElement("style");l.textContent=Cu+":host *{box-sizing:border-box}.panel{width:285px;max-height:86vh}.speech{position:fixed;max-width:250px;padding:12px 15px;background:#fffdf5;color:#365e4b;box-shadow:0 5px 22px #264e3825;border:1px solid #cde1cf;border-radius:17px;font:12px/1.6 system-ui;pointer-events:none}.speech[hidden]{display:none}.speech.important{border-color:#dab975;background:#fff2d8}",l.textContent+=Su+fu,t.append(l);let c,u,m,h=null,d,g=()=>{},v=0,f=Mu(r,{say:(...W)=>{v=performance.now()+16e3,Ce.say(...W)},onReply:(W,q)=>{q!=="chat"&&Ce.act(/difícil|preocupa|sinto muito/i.test(W)?"listen":/dúvida|verificar|confirmar/i.test(W)?"think":"nod",{care:!1})},onClientReady:W=>m=W,onClientState:W=>{h=W,d&&(d.title=W.label+(W.enabled?" \u2014 clique na flor para pausar":" \u2014 clique na flor para acompanhar"),d.setAttribute("aria-label",d.title),d.setAttribute("aria-pressed",String(W.enabled)))},onChatReady:W=>c=W,onScreenReady:W=>u=W,onChatDispose:W=>g=W,openConnection:()=>{r.hidden&&H(),f.select("chat")}}),p=document.createElement("div");p.className="speech",p.hidden=!0,p.setAttribute("role","status"),p.setAttribute("aria-live","polite"),t.append(p);let b=document.createElement("button");b.className="pingo-grass",b.type="button",b.title="Clique na grama para conversar com o Pingo",b.setAttribute("aria-label","Abrir conversa na grama do Pingo"),b.innerHTML='<svg viewBox="0 0 240 90" aria-hidden="true"><defs><radialGradient id="lawn"><stop stop-color="#a6d67b"/><stop offset="1" stop-color="#6da94e"/></radialGradient></defs><ellipse cx="120" cy="56" rx="115" ry="30" fill="#426d3725"/><path d="M8 48Q12 27 39 25L38 13 49 26Q66 15 83 23L91 7 97 22Q126 13 150 22L160 9 161 24Q183 18 202 32L216 22 212 37Q238 42 230 58Q217 81 127 82Q33 84 12 64Z" fill="url(#lawn)"/><path d="m32 51 3-12 5 9m23 12 2-13 5 10m29-23 2-11 5 10m55 26 3-13 5 10m24-13 4-13 3 10m-76 22 3-10 4 8" fill="none" stroke="#4b853e" stroke-width="2.5" stroke-linecap="round" opacity=".65"/><path d="m47 32 3-8 4 7m78 11 3-10 5 8m45 20 3-8 5 7" fill="none" stroke="#d0e8a4" stroke-width="2" stroke-linecap="round"/><circle cx="48" cy="58" r="2.5" fill="#fff2bd"/><circle cx="192" cy="43" r="2.5" fill="#fff2bd"/></svg>',t.insertBefore(b,s);let M=document.createElement("form");M.hidden=!0,M.className="quick-chat",M.setAttribute("aria-label","Conversar perto do Pingo"),M.innerHTML='<input aria-label="Perguntar ao Pingo" placeholder="Pergunte ao Pingo\u2026" maxlength="1200" required><button type="submit" title="Enviar pergunta" aria-label="Enviar pergunta ao Pingo">\u2191</button><button type="button" class="quick-reader" title="Ler p\xE1gina ou conversa AjaModular" aria-label="Ler p\xE1gina ou conversa AjaModular">\u2315</button><button type="button" class="quick-settings" title="Abrir painel" aria-label="Abrir configura\xE7\xF5es do Pingo">\u2699</button>',t.append(M),M.querySelector(".quick-settings").onclick=()=>H(),M.querySelector(".quick-reader").onclick=()=>u.open(),b.onclick=()=>{M.hidden=!M.hidden,M.hidden||(r.hidden=!0,M.querySelector("input").focus())},s.ondblclick=W=>{W.preventDefault(),M.hidden=!0,H()},s.onkeydown=W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),M.hidden=!0,H())},M.onsubmit=async W=>{if(W.preventDefault(),c?.busy)return;let q=M.querySelector("input"),ee=q.value.trim();if(!ee)return;let ce=M.querySelector("[type=submit]");ce.disabled=!0,q.value="";try{await c.ask(ee)}finally{ce.disabled=!1,v=performance.now()+16e3}};let _=document.createElement("style");_.textContent=".pingo-grass{position:fixed;width:min(240px,100vw);height:90px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;filter:drop-shadow(0 7px 8px #284d2220);z-index:0}.pingo-grass svg{display:block;width:100%;height:100%}.pingo-grass:hover{filter:brightness(1.05) drop-shadow(0 7px 8px #284d2220)}.pingo-grass:focus-visible{outline:2px solid #397f5d;outline-offset:3px;border-radius:50%}canvas{z-index:1}.hit{z-index:2}.panel{z-index:6}.speech{z-index:5}.quick-chat{z-index:4;position:fixed;display:flex;gap:5px;align-items:center;width:252px;max-width:calc(100vw - 20px);padding:7px;background:#fffffff5;border:1px solid #d5e9dd;border-radius:18px;box-shadow:0 8px 30px #234c3820;pointer-events:auto;font:12px system-ui}.quick-chat[hidden]{display:none}.quick-chat input{width:0;flex:1;min-width:0;border:0;outline:0;background:transparent;color:#325e4b;padding:7px;font:12px system-ui}.quick-chat:focus-within{border-color:#6bb69b;box-shadow:0 0 0 3px #6bb69b20,0 8px 30px #234c3820}.quick-chat button{padding:0;width:29px;height:29px;border:0;border-radius:10px;background:#3e856a;color:white;font-size:18px}.quick-chat .quick-reader,.quick-chat .quick-settings{background:#eff6f1;color:#6b8d7a;font-size:16px}.quick-chat button:disabled{opacity:.45}.speech{max-height:210px;overflow:auto;pointer-events:auto;white-space:pre-wrap;overflow-wrap:anywhere}",t.append(_),d=document.createElement("button"),d.className="client-watch-badge",d.type="button",d.title=(h?.label||"Acompanhar cliente")+" \u2014 clique na flor para pausar ou retomar",d.setAttribute("aria-label",d.title),d.innerHTML='<svg viewBox="0 0 42 52" aria-hidden="true"><ellipse cx="21" cy="47" rx="12" ry="3" fill="#315a3622"/><path d="M21 45Q25 31 21 20" fill="none" stroke="#478b4e" stroke-width="3" stroke-linecap="round"/><path d="M22 38Q8 38 9 29Q20 28 22 38M23 32Q34 32 35 24Q24 22 23 32" fill="#78b756" stroke="#5c9b49" stroke-width="1"/><g class="flower-head"><g fill="#ffadd1" stroke="#e98bb8" stroke-width=".7"><ellipse cx="21" cy="11" rx="6" ry="8"/><ellipse cx="29" cy="16" rx="8" ry="6" transform="rotate(-25 29 16)"/><ellipse cx="26" cy="24" rx="6" ry="8" transform="rotate(-30 26 24)"/><ellipse cx="16" cy="24" rx="6" ry="8" transform="rotate(30 16 24)"/><ellipse cx="13" cy="16" rx="8" ry="6" transform="rotate(25 13 16)"/></g><circle cx="21" cy="18" r="6.5" fill="#ffd970"/><circle cx="19" cy="16" r="2" fill="#fff3b6" opacity=".8"/></g></svg>',d.setAttribute("aria-pressed",String(!!h?.enabled)),d.hidden=!/(^|\.)pure\.cloud$/i.test(location.hostname),d.onclick=()=>m?.toggle(),t.append(d);let S=document.createElement("style");S.textContent=".client-watch-badge{position:fixed;z-index:3;pointer-events:auto;width:42px;height:52px;padding:0;border:0;border-radius:50%;background:transparent;cursor:pointer;filter:drop-shadow(0 2px 2px #31592b20);transition:filter .25s,transform .25s;transform-origin:50% 90%}.client-watch-badge svg{display:block;width:100%;height:100%;overflow:visible}.client-watch-badge:hover{transform:rotate(-7deg) scale(1.1);filter:brightness(1.08)}.client-watch-badge:focus-visible{outline:2px solid #377d5a;outline-offset:3px}.client-watch-badge[hidden]{display:none}.client-watch-badge .flower-head{transform-origin:21px 25px;transition:transform .4s}.client-watch-badge[aria-pressed=false]{filter:saturate(.4)}.client-watch-badge[aria-pressed=false] .flower-head{transform:rotate(24deg)}@media(prefers-reduced-motion:reduce){.client-watch-badge,.client-watch-badge .flower-head{transition:none}}",t.append(S);let T;try{T=new mo({canvas:n,alpha:!0,antialias:!0})}catch{g(),e.remove(),alert("O Pingo precisa de WebGL2 neste navegador.");return}T.setPixelRatio(Math.min(devicePixelRatio,1.6)),T.setClearColor(0,0),T.outputColorSpace=Ft,T.toneMapping=Qs;let w=new li,x=new Zn(-1,1,1,-1,.1,100);x.position.z=20,w.add(new Ys("#fff9e9","#a8cfc4",1.6));let A=new Ki("#fff7e8",3.5);A.position.set(-3,5,7),w.add(A);let R=new Ki("#c9eaff",2);R.position.set(3,3,-4),w.add(R);let L=new rs(T),D=new bo,P=L.fromScene(D,.04);w.environment=P.texture,D.dispose(),L.dispose();let C=Bu(),O=uu(C),$=new yo,B=wu(C),V=new ft;V.add(C.root),w.add(V);let N=58,G=0,Z=0,ae=innerWidth-100,fe=innerHeight-110,Ve={x:ae,y:fe},ze=0,We=0,te=0,ne=matchMedia("(prefers-reduced-motion: reduce)").matches,me=!0,Oe=!0,ge="walk",Re=null,de=!1,j=!0,se=0,le=null,he=-20,oe=(W,q,ee)=>Math.min(Math.max(W,q),Math.max(q,ee));function Fe(){ae=oe(ae,Math.min(120,innerWidth/2),innerWidth-120),fe=oe(fe,125,innerHeight-65),Ve.x=oe(Ve.x,Math.min(120,innerWidth/2),innerWidth-120),Ve.y=oe(Ve.y,125,innerHeight-65)}function Le(){Ve={x:Math.min(120,innerWidth/2)+Math.random()*Math.max(0,innerWidth-240),y:125+Math.random()*Math.max(0,innerHeight-190)},te=ze+6+Math.random()*7}let Ce=Pu(C,r,{onState(W,q){ge=W,a.value=W,me=Oe&&["walk","run","sneak","moonwalk"].includes(W),o.checked=Oe,q&&(ne=!1,t.querySelector(".pause").textContent="Pausar"),me&&Le()},onBubble(W,q){q&&W&&f.select("reminders"),p.textContent=W,p.hidden=!W,p.classList.toggle("important",q)}}),qe=du(r.querySelector("[data-page=care]"),O,{onTransform:W=>{Ce.act("proud",{care:!1}),Ce.say("Agora estou em "+W+"! \u2727",7)}}),U=r.querySelector("[data-page=care]");U.querySelector(".needs").before(U.querySelector(".pingo-look"));function it(W){Ce.act(W)}let $e=document.createElement("option");$e.value="idle",$e.textContent="Repousar",a.append($e);for(let[W,q]of So){let ee=document.createElement("option");ee.value=W,ee.textContent=q,a.append(ee)}a.value="walk";let I=document.createElement("input");I.className="animation-search",I.placeholder="Buscar entre 275 anima\xE7\xF5es\u2026",I.setAttribute("aria-label","Buscar anima\xE7\xE3o"),a.before(I);let y=[...a.options].map(W=>({value:W.value,label:W.textContent}));I.oninput=()=>{let W=ce=>ce.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,""),q=W(I.value),ee=a.value;if(a.replaceChildren(),q){let ce=document.createElement("option");ce.value="",ce.textContent="Selecione um resultado",ce.disabled=!0,ce.selected=!0,a.append(ce)}for(let ce of y.filter(Te=>W(Te.label).includes(q))){let Te=document.createElement("option");Te.value=ce.value,Te.textContent=ce.label,a.append(Te)}[...a.options].some(ce=>ce.value===ee)&&(a.value=ee)},a.onchange=()=>it(a.value),t.querySelectorAll("[data-action]").forEach(W=>W.onclick=()=>it(W.dataset.action)),o.checked=me,o.onchange=()=>{Oe=o.checked,me=Oe,me&&it("walk")},t.querySelector(".pause").textContent=ne?"Continuar":"Pausar";let H=()=>{r.hidden=!r.hidden,r.hidden||(r.style.right="auto",r.style.bottom="auto",r.style.left=oe(ae>innerWidth/2?ae-360:ae+85,14,innerWidth-Math.min(350,innerWidth-24)-12)+"px",r.style.top=oe(fe-320,12,innerHeight-Math.min(r.scrollHeight,innerHeight-24)-16)+"px")};e.addEventListener("pingo-toggle",H),t.querySelector(".close-panel").onclick=()=>r.hidden=!0,t.querySelector(".pause").onclick=W=>{ne=!ne,W.target.textContent=ne?"Continuar":"Pausar"};let J=W=>{Ce.setPointer(oe((W.clientX-ae)/220,-1,1),oe((W.clientY-fe)/200,-1,1)),Re||B.move(x,W.clientX/innerWidth*2-1,-W.clientY/innerHeight*2+1,ze)>=0&&ze-he>10&&(Ce.say("Bate aqui! \u{1F49A}",5),he=ze)};addEventListener("pointermove",J,{passive:!0}),s.onpointerenter=()=>de=!0,s.onpointerleave=()=>de=!1;function Q(){removeEventListener("pointermove",J),g(),qe(),Ce.dispose(),P.dispose(),j=!1,cancelAnimationFrame(se),T.dispose(),C.root.traverse(W=>{if(W.geometry?.dispose(),W.material)for(let q of Array.isArray(W.material)?W.material:[W.material])q.dispose()}),e.remove()}t.querySelector(".remove").onclick=Q,s.onpointerdown=W=>{s.setPointerCapture(W.pointerId),Re={dx:W.clientX-ae,dy:W.clientY-fe,startX:W.clientX,startY:W.clientY},le=null,$.start(W.clientX,W.clientY,performance.now())},s.onpointermove=W=>{if(!Re)return;ae=W.clientX-Re.dx,fe=W.clientY-Re.dy,Fe();let q=$.move(W.clientX,W.clientY,performance.now());q&&(le=q,Ce.act(q,{care:!1}),Ce.say(q==="rainbow"?"Ops\u2026 saiu um arco-\xEDris! Vamos mais devagar? \u{1F308}":"Ui\u2026 fiquei enjoado. Me leva mais devagar?",8))},s.onpointerup=W=>{if(!Re)return;let q=Math.hypot(W.clientX-Re.startX,W.clientY-Re.startY);if(Re=null,$.end(),q>=6&&!le){let ee=Eu(ae,fe,innerWidth,innerHeight);Ce.act(ee.liked?"proud":"disappointed",{care:!1}),Ce.say(ee.text,9)}},s.onpointercancel=()=>{Re=null,$.end()},Ce.player.set("walk",0),Le(),Fe();function ue(W){if(!j||!e.isConnected){j&&Q();return}let q=Math.min(We?(W-We)/1e3:0,.05);if(We=W,(innerWidth!==G||innerHeight!==Z)&&(G=innerWidth,Z=innerHeight,T.setSize(G,Z,!1),x.left=-G/(2*N),x.right=G/(2*N),x.top=Z/(2*N),x.bottom=-Z/(2*N),x.updateProjectionMatrix(),Fe()),ne||(ze+=q),Ce.setInspecting(!r.hidden||t.activeElement===M.querySelector("input")),Ce.update(q,ze,!ne),!ne){if(me&&!Re&&!de&&r.hidden&&t.activeElement!==M.querySelector("input")&&!c?.busy&&performance.now()>v){Math.hypot(Ve.x-ae,Ve.y-fe)<8&&Le();let Te=Ve.x-ae,_e=Ve.y-fe,xe=Math.hypot(Te,_e),Ne=Number(t.querySelector(".speed").value)*(ge==="run"?1.7:ge==="sneak"?.55:1),ke=Math.min(xe,Ne*q);xe>0&&(ae+=Te/xe*ke,fe+=_e/xe*ke)}["walk","run","sneak","moonwalk"].includes(ge)&&(C.root.position.x=0,me&&(C.body.rotation.y=Math.tanh(Ve.x-ae)*.2))}O.update(q),ne||B.apply(q,ze,ge,!!Re),d.style.left=oe(ae-99,4,innerWidth-46)+"px",d.style.top=oe(fe-3,4,innerHeight-56)+"px",b.style.left=oe(ae-120,0,innerWidth-240)+"px",b.style.top=oe(fe-31,0,innerHeight-90)+"px";let ee=oe(ae>innerWidth/2?ae-325:ae+70,10,innerWidth-262),ce=oe(fe-85,12,innerHeight-64);M.style.left=ee+"px",M.style.top=ce+"px",M.style.visibility=r.hidden?"visible":"hidden",p.style.left=ee+"px",p.style.top=oe(ce-(p.offsetHeight||80)-12,10,innerHeight-(p.offsetHeight||80)-10)+"px",V.position.set((ae-G/2)/N,(Z/2-fe)/N,0),s.style.left=ae-58+"px",s.style.top=fe-125+"px",T.render(w,x),se=requestAnimationFrame(ue)}se=requestAnimationFrame(ue)})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
