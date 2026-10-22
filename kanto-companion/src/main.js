import {createKantoRenderer,animalNames} from './animal-renderer.js';
import {spawnBuddy} from './widget.js';
const launch=(pet)=>spawnBuddy({pet:[0,1,2].includes(pet)?pet:undefined,name:animalNames[pet]||'Alpaca',panel:'https://github.com/kingoffjoss/Meus-Scripts/tree/main/kanto-companion',panelLabel:'Arquivos'});
window.KantoAnimals={version:'0.5.0',createKantoRenderer,launch};
if(!document.currentScript?.hasAttribute('data-dashboard')){const choice=window.__kantoAnimalChoice;delete window.__kantoAnimalChoice;launch(choice);}
