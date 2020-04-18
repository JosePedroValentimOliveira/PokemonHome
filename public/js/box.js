let dex = document.getElementById("dex");
let counter = 0;
let box;
fetch('/json/pokemon.json').then(function (resp) {
    return resp.json();
}).then(function(data) {
  

    for (let index = 0; index < 718; index++) {

        let pokemon = data[index];
      
        if (index == 0 || counter == 29) {
            counter = 0;

            box = document.createElement('div');
            box.className = "box";
            let foto = document.createElement('img');
            foto.className = "sprite";

            foto.src = "images/sprites/regular/" + pokemon.id + ".png";

            box.appendChild(foto);
            dex.appendChild(box);

        } else {
            let foto = document.createElement('img');
            foto.className = "sprite";

            foto.src = "images/sprites/regular/" + pokemon.id + ".png";

            box.appendChild(foto);
            dex.appendChild(box);
            counter++;
        }
    }
})