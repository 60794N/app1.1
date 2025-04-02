const t1=document.getElementById("t1");
const imgl=document.querySelector('#img');
const namen=document.getElementById("pokemon-name");
const idi=document.getElementById("pokemon-id");
const weight=document.getElementById("weight");
const types=document.querySelector('#types');
const hp=document.querySelector('#hp');
const attack=document.querySelector('#attack');
const defense=document.querySelector('#defense');
const spAttack=document.querySelector('#special-attack');
const spDefense=document.querySelector('#special-defense');
const speed=document.querySelector('#speed');
const height=document.querySelector('#height');
 
const input=document.getElementById("search-input");
const button=document.getElementById("search-button");
const pikachu=/pikachu/i;
button.addEventListener("click",async ()=>{const query=input.value.trim().toLowerCase();if(query==="Red"){alert("Pokémon not found")}else if(query==="94"){await pokemonId("94")}else if(query==="pikachu"){await pokemonId("pikachu")}else{pokemonId(query);}})
async function pokemonId(id){
  try
  {const ids=await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`);
  if(!ids.ok)
  {throw new Error("Pokémon not found");}
  const fds=await ids.json(); update(fds);}
catch(error){alert(error.message);}
}
  
 function update(data){
     namen.innerHTML = "";
  idi.innerHTML = "";
  weight.innerHTML = "";
  height.innerHTML = "";
  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  spAttack.innerHTML = "";
  spDefense.innerHTML = "";
  speed.innerHTML = "";
  types.innerHTML = "";
  imgl.innerHTML = "";
   namen.innerHTML=data.name.toUpperCase();
idi.innerHTML="#"+data.id;
weight.innerHTML="Weight: "+data.weight;
height.innerHTML="Height: " +data.height;
hp.innerHTML=data.stats[0].base_stat;
attack.innerHTML=data.stats[1].base_stat;
defense.innerHTML=data.stats[2].base_stat;
spAttack.innerHTML=data.stats[3].base_stat;
spDefense.innerHTML=data.stats[4].base_stat;
speed.innerHTML=data.stats[5].base_stat;
 

const im= data.sprites.front_default;
const i=document.createElement("img");
i.src=im;
i.id="sprite";
imgl.appendChild(i);
data.types.forEach((a)=>{const divP=document.createElement("div");
divP.innerHTML=a.type.name.toUpperCase();
types.appendChild(divP);
})}
