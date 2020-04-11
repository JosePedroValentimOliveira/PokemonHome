let tiles = document.getElementById("tiles");
let genName = document.getElementsByClassName("genName")[0];

let all = document.getElementById("all");




  
function checkGen() {
    let gen1 = document.getElementById("gen1").checked;
    let gen2 = document.getElementById("gen2").checked;
    let gen3 = document.getElementById("gen3").checked;
    let gen4 = document.getElementById("gen4").checked;
    let gen5 = document.getElementById("gen5").checked;
    let gen6 = document.getElementById("gen6").checked;
    let gen7 = document.getElementById("gen7").checked;
    let gen8 = document.getElementById("gen8").checked;
    tiles.textContent = "";
    fetch("./json/pokemon.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
            if (gen1) {
                displayTiles(1, 151, data);
                genName.textContent = "Generation 1";
            } else if (gen2) {
                displayTiles(152, 251, data);
                genName.textContent = "Generation 2";;
            } else if (gen3) {
                displayTiles(252, 386, data);
                genName.textContent = "Generation 3";;
            } else if (gen4) {
                displayTiles(387, 493, data);
                genName.textContent = "Generation 4";
            } else if (gen5) {
                displayTiles(494, 649, data);
                genName.textContent = "Generation 5";
            } else if (gen6) {
                displayTiles(650, 721, data);
                genName.textContent = "Generation 6";
            } else if (gen7) {
                displayTiles(722, 809, data);
                genName.textContent = "Generation 7";
            } else if (gen8) {
                displayTiles(810, 890, data);
                genName.textContent = "Generation 8";
            }
        })
    }





    function displayTiles(start, end, data) {
        for (let index = start - 1; index < end; index++) {
            let pokemon = data[index];

            let tile = document.createElement('div');
            tile.className = 'tile';
            let sprite = document.createElement('img');
            sprite.className = 'tileFoto';
            sprite.src = "images/sprites/regular/" + pokemon.id + ".png";
            
            
            
            let infoBox = document.createElement('div');
            infoBox.className = 'infoBox';
            let name = document.createElement('p');
            let nr = document.createElement('p');
            nr.className = "id";
            name.textContent = pokemon.name;
            nr.textContent = "#"+pokemon.id;
            let typing = document.createElement('div');
            let type1 = document.createElement('img');
            let type2 = document.createElement('img');

            if(pokemon.type.length == 2){
                type1.src = "images/sprites/type/" + pokemon.type[0] + ".gif";
                type2.src = "images/sprites/type/" + pokemon.type[1] + ".gif";
                
            }
            else{
                type1.src = "images/sprites/type/" + pokemon.type[0] + ".gif";
                
                
            }
            
            sprite.onmouseover = function () {
                sprite.src = "images/sprites/shiny/" + pokemon.id + ".png";
            };
            sprite.onmouseleave = function () {
                sprite.src = "images/sprites/regular/" + pokemon.id + ".png";
            };

            
            typing.appendChild(type1);
            typing.appendChild(type2);
            infoBox.appendChild(nr);
            infoBox.appendChild(name);
            infoBox.appendChild(typing);
            tile.appendChild(sprite);
            tile.appendChild(infoBox);
            tiles.appendChild(tile);
        }
            
    }



   
    

    