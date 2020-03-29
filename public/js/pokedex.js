
let dex = document.getElementById("dex");
let counter = 0;
let box = document.createElement('div');
box.className = "box";
checkDex();

// checkboxes
function checkDex() {
    fetch("./pokemon.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        let regularDex = document.getElementById('regularCheck').checked;
        let shinyDex = document.getElementById('shinyCheck').checked;
        let bothDex = document.getElementById('bothCheck').checked;
        let gender = document.getElementById('genderCheck').checked;
        let region = document.getElementById('regionCheck').checked;

        let type = "regular";
        if (shinyDex) {
            type = "shiny";
        } else if (regularDex) {
            type = "regular";
        }


        box.textContent = "";
        displayDex(data, gender, type, region, bothDex);
    });
}


function displayPokemon(element, type, extra) {
    let foto = document.createElement('img');
    foto.className = "sprite";
    foto.src = "images/sprites/" + type + "/" + element.id + extra + ".png";
    foto.addEventListener('click', function () {
        
        let info = document.getElementById('info');
        let dex = document.getElementById('dex');
        let name = document.createElement('p');
        let btn = document.createElement('button');
        let fotoInfo = document.createElement('img');
        btn.textContent = 'close';
        btn.addEventListener('click',function() {
            info.textContent ="";
            info.style.width = "0%";
            dex.style.width = "100%";
        });
        info.textContent = "";
        fotoInfo.src = foto.src;
        name.textContent = element.name;
        name.style.fontSize = "40px";
        info.style.width = "20%";
        dex.style.width = "80%";
        


        info.appendChild(name);
        info.appendChild(fotoInfo);
        info.appendChild(btn);
    });


    box.appendChild(foto);
}

// display pokemon
function displayDex(data, gender, type, region, bothDex) {

    data.forEach(element => {

        if (bothDex) {
            displayPokemon(element, "regular", "");
            displayPokemon(element, "shiny", "");
            if (gender) {
                if (element.genderForm) {
                    displayPokemon(element, "regular", "-f");
                    displayPokemon(element, "shiny", "-f");
                }
            }
            if (region) {
                if (element.regionForm) {
                    if (element.region.alola) {
                        displayPokemon(element, "regular", "-a");
                        displayPokemon(element, "shiny", "-a");
                    }
                    if (element.region.galar) {
                        displayPokemon(element, "regular", "-g");
                        displayPokemon(element, "shiny", "-g");
                    }
                }
            }
        } else {
            displayPokemon(element, type, "");
            if (gender) {
                if (element.genderForm) {
                    displayPokemon(element, type, "-f");
                }
            }
            if (region) {
                if (element.regionForm) {
                    if (element.region.alola) {
                        displayPokemon(element, type, "-a")
                    }
                    if (element.region.galar) {
                        displayPokemon(element, type, "-g")
                    }
                }
            }
        }
    });
    dex.appendChild(box);
}