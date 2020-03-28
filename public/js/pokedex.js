let dex = document.getElementById("dex");
let counter = 0;
let box = document.createElement('div');
box.className = "box";
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let boxNr = document.getElementById('boxNr');


// back and next buttons
function back() {
    counter--;
    if (counter < 0) {
        counter = 0;
    } else {
        box.textContent = "";
        displayPokemon();
    }
};

function next() {
    box.textContent = "";
    counter++;
    displayPokemon();
};

prevBtn.addEventListener('click', back);
nextBtn.addEventListener('click', next);
fetch("./pokemon.json").then(function (resp) {
    return resp.json();
}).then(function (data) {displayRegular(data);});


// checkboxes
function checkDex() {
    fetch("./pokemon.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        let regularCheck = document.getElementById('regularCheck').checked;
        let shinyCheck = document.getElementById('shinyCheck').checked;
        box.textContent ="";
        if (regularCheck && shinyCheck) {
            displayBoth(data);
        } else if (regularCheck) {
            displayRegular(data)
        } else if (shinyCheck) {
            displayShiny(data)
        }
    });}

    // display pokemon


    function displayShiny(data) {
        data.forEach(element => {
            
            let foto = document.createElement('img');
            foto.className = "sprite";
            foto.src = "images/sprites/shiny/" + element.id + ".png";
            box.appendChild(foto);
            if (element.genderForm) {
                let foto = document.createElement('img');
                foto.className = "sprite";
                foto.src = "images/sprites/shiny/" + element.id + "-f.png";
                box.appendChild(foto);
            }

            if (element.regionForm) {
                if (element.region.alola) {
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/shiny/" + element.id + "-a.png";
                    box.appendChild(foto);
                }
            
                if (element.region.galar) {
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/shiny/" + element.id + "-a.png";
                    box.appendChild(foto);
                }
            }
        });
        dex.appendChild(box);
    };

    function displayBoth(data) {
        let foto = document.createElement('img');
                foto.className = "sprite";
                foto.src = "images/sprites/regular/" + element.id + ".png";
                box.appendChild(foto);
                let foto = document.createElement('img');
            foto.className = "sprite";
            foto.src = "images/sprites/shiny/" + element.id + ".png";
            box.appendChild(foto);

            if (element.genderForm) {
                let foto = document.createElement('img');
                foto.className = "sprite";
                foto.src = "images/sprites/regular/" + element.id + "-f.png";
                box.appendChild(foto);
                let foto = document.createElement('img');
                foto.className = "sprite";
                foto.src = "images/sprites/shiny/" + element.id + "-f.png";
                box.appendChild(foto);
            }
    
        }

            if (element.regionForm) {
                if (element.region.alola) {
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/regular/" + element.id + "-a.png";
                    box.appendChild(foto);
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/shiny/" + element.id + "-a.png";
                    box.appendChild(foto);
                }
            
                if (element.region.galar) {
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/regular/" + element.id + "-a.png";
                    box.appendChild(foto);
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/shiny/" + element.id + "-a.png";
                    box.appendChild(foto);
                }
    };

    function displayRegular(data) {

        data.forEach(element => {
           
                let foto = document.createElement('img');
                foto.className = "sprite";
                foto.src = "images/sprites/regular/" + element.id + ".png";
                box.appendChild(foto);
                if (element.genderForm) {
                    let foto = document.createElement('img');
                    foto.className = "sprite";
                    foto.src = "images/sprites/regular/" + element.id + "-f.png";
                    box.appendChild(foto);
                }

                if (element.regionForm) {
                    if (element.region.alola) {
                        let foto = document.createElement('img');
                        foto.className = "sprite";
                        foto.src = "images/sprites/regular/" + element.id + "-a.png";
                        box.appendChild(foto);
                    }
                
                    if (element.region.galar) {
                        let foto = document.createElement('img');
                        foto.className = "sprite";
                        foto.src = "images/sprites/regular/" + element.id + "-a.png";
                        box.appendChild(foto);
                    }
                }
            }
        

    );
dex.appendChild(box);
};