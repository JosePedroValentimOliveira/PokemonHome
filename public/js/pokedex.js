
let dex = document.getElementById("dex");
let counter = 0;
let box = document.createElement('div');
box.className = "box";
checkDex();

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/pokedex";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

// checkboxes
function checkDex() {
    fetch("./json/pokemon.json").then(function (resp) {
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

        if (readCookie(element.id+""+extra) === null) {
            createCookie(element.id+""+extra, true);
            console.log(readCookie(element.id+""+extra))
            foto.style.backgroundColor = "green";
            foto.style.filter = "grayscale(0%)"
        } else if (readCookie(element.id+""+extra) == "true") {
            createCookie(element.id+""+extra, false);
            foto.style.backgroundColor = "lightgray";
            foto.style.filter = "grayscale(100%)"
        } else if (readCookie(element.id+""+extra) == "false") {
            createCookie(element.id+""+extra, true);
            foto.style.backgroundColor = "green";
            foto.style.filter = "grayscale(0%)"
        }

        
    })
    if(readCookie(element.id+""+extra) == "true"){
        foto.style.backgroundColor = "green";
            foto.style.filter = "grayscale(0%)"
    }
    else{
        foto.style.backgroundColor = "lightgray";
            foto.style.filter = "grayscale(100%)"
    }
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