let dex = document.getElementById("dex");
let counter = 1;
let box, boxes = 9;


    for (let index = 1; index <= 246; index++) {

        if (index == 1 || counter == 30) {
            counter = 1;

            box = document.createElement('div');
            box.className = "box";
            let foto = document.createElement('img');
            foto.className = "sprite";

            foto.src = "images/sprites/gen 2/0" + index + ".png";

            box.appendChild(foto);
            dex.appendChild(box);

        }
        else {
            let foto = document.createElement('img');
            foto.className = "sprite";

            foto.src = "images/sprites/gen 2/0" + index + ".png";

            box.appendChild(foto);
            dex.appendChild(box);
            counter++;
        }




    


}