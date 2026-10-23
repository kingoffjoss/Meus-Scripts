const key='pingo-reminder-owner-v1';
export function acquireLease(storage,owner,now=Date.now()){if(!storage)return true;try{const old=JSON.parse(storage.getItem(key)||'null');if(old&&old.owner!==owner&&Number.isFinite(old.until)&&old.until>now)return false;storage.setItem(key,JSON.stringify({owner,until:now+6000}));return JSON.parse(storage.getItem(key)||'null')?.owner===owner;}catch{return true;}}
export function releaseLease(storage,owner){try{if(JSON.parse(storage?.getItem(key)||'null')?.owner===owner)storage.removeItem(key);}catch{}}
