let dex = document.getElementById("dex");
let counter = 0;
let box = document.createElement('div');
box.className = "box";
let knopTerug = document.getElementById('prev');
let knopNa = document.getElementById('next');
let boxNr = document.getElementById('boxNr');
displayPokemon();

function Terug() {

    counter--;
    if (counter < 0) {
        counter = 0;
    } else {
        box.textContent = "";
        displayPokemon();
    }

};

function Na() {
    box.textContent = "";
    counter++;
    displayPokemon();



};
knopTerug.addEventListener('click', Terug);
knopNa.addEventListener('click', Na);

function displayPokemon() {
    let boxnr = counter + 1;
    boxNr.textContent = "Box " + boxnr;

    for (let i = 1 + (counter * 30); i <= 30 + (counter * 30); i++) {


        let foto = document.createElement('img');
        foto.className = "sprite";

        foto.src = "images/sprites/gen3/0" + i + ".png";
        box.appendChild(foto);

    }
    dex.appendChild(box);
}