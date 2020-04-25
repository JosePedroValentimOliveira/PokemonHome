let pokemon = [];
let dropdown = document.getElementById('pokemons');
let id = document.getElementById('id');
let sprite = document.getElementById('sprite');


let hp = document.getElementById('hp');;
let attack = document.getElementById('attack');;
let defense = document.getElementById('defense');;
let spAttack = document.getElementById('spAttack');;
let spDefense = document.getElementById('spDefense');;
let speed = document.getElementById('speed');;
function fetchPlusDisplay(){
    fetch("./json/pokemon.json").then((resp) => {
        return resp.json();
    }).then((data) => {
        data.forEach(element => {
            pokemon.push(element);
        });
        
        pokemon.sort((a,b)=>{
            let nameA = a.name.toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });

        pokemon.forEach(element => {
            let option = document.createElement('option');

            option.textContent = element.name;
            option.value = element.name;

            dropdown.options.add(option);
        });
        
        displayStats();
    });
}

function displayStats(){
    let ok = pokemon.filter((pokemon)=>{return pokemon.name == dropdown.value;});
    id.textContent = ok[0].id;
    hp.textContent  = ok[0].base.HP;
    attack.textContent = ok[0].base.Attack;
    defense.textContent= ok[0].base.Defense;
    spAttack.textContent = ok[0].base.SpAttack;
    spDefense.textContent = ok[0].base.SpDefense;
    speed.textContent = ok[0].base.Speed;
    sprite.src = './images/sprites/regular/'+ok[0].id+'.png';

}


fetchPlusDisplay();






