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

function checkGen() {
    fetch("./json/pokemon.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        displayTiles(1, 151, data, 1);
        displayTiles(152, 251, data, 2);
        displayTiles(252, 386, data, 3);
        displayTiles(387, 493, data, 4);
        displayTiles(494, 649, data, 5);
        displayTiles(650, 721, data, 6);
        displayTiles(722, 809, data, 7);
        displayTiles(810, 890, data, 8);
    })
}
checkGen();



function displayTiles(start, end, data, tileNr) {
    let tiles = document.getElementById("tile" + tileNr);
    for (let index = start - 1; index < end; index++) {
        let pokemon = data[index];
        let gender = "male";

        let tile = document.createElement('div');
        tile.className = 'tile';
        let sprite = document.createElement('img');
        sprite.className = 'tileFoto';
        sprite.src = "images/sprites/regular/" + pokemon.id + ".png";
        tile.style.borderColor = "blue";
        tile.appendChild(sprite);
        tiles.appendChild(tile);

        if (pokemon.genderForm) {
            gender = "female";
            let tile = document.createElement('div');
            tile.className = 'tile';
            let sprite = document.createElement('img');
            sprite.className = 'tileFoto';
            sprite.src = "images/sprites/regular/" + pokemon.id + "-f.png";
            tile.style.borderColor = "red";
            tile.appendChild(sprite);
            tiles.appendChild(tile);
            if (readCookie(pokemon.id + gender) == "true") {
                tile.style.backgroundColor = "green";
                sprite.style.filter = "grayscale(0%)"
            } else {
                tile.style.backgroundColor = "lightgray";
                sprite.style.filter = "grayscale(100%)"
            }
            sprite.addEventListener('click', function () {
                if (readCookie(pokemon.id + gender) == null) {
                    createCookie(pokemon.id + gender, true);
                    tile.style.backgroundColor = "green";
                    sprite.style.filter = "grayscale(0%)"
                } else if (readCookie(pokemon.id + gender) == "true") {
                    createCookie(pokemon.id + gender, false);
                    tile.style.backgroundColor = "lightgray";
                    sprite.style.filter = "grayscale(100%)"
                } else if (readCookie(pokemon.id + gender) == "false") {
                    createCookie(pokemon.id + gender, true);
                    tile.style.backgroundColor = "green";
                    sprite.style.filter = "grayscale(0%)"
                }
            })
        }
        if (pokemon.regionForm) {
            if (pokemon.region.alola) {
                let tile = document.createElement('div');
                tile.className = 'tile';
                let sprite = document.createElement('img');
                sprite.className = 'tileFoto';
                sprite.src = "images/sprites/regular/" + pokemon.id +"-a.png";
                tile.style.borderColor = "purple";
                tile.appendChild(sprite);
                tiles.appendChild(tile);

                sprite.addEventListener('click', function () {
                    if (readCookie(pokemon.id + gender) == null) {
                        createCookie(pokemon.id + gender, true,30);
                        tile.style.backgroundColor = "green";
                        sprite.style.filter = "grayscale(0%)"
                    } else if (readCookie(pokemon.id + gender) == "true") {
                        createCookie(pokemon.id + gender, false,30);
                        tile.style.backgroundColor = "lightgray";
                        sprite.style.filter = "grayscale(100%)"
                    } else if (readCookie(pokemon.id + gender) == "false") {
                        createCookie(pokemon.id + gender, true,30);
                        tile.style.backgroundColor = "green";
                        sprite.style.filter = "grayscale(0%)"
                    }
                })

                if (readCookie(pokemon.id + gender) == "true") {
                    tile.style.backgroundColor = "green";
                    sprite.style.filter = "grayscale(0%)"
                } else {
                    tile.style.backgroundColor = "lightgray";
                    sprite.style.filter = "grayscale(100%)"
                }
            }
            if (pokemon.region.galar) {
                let tile = document.createElement('div');
                tile.className = 'tile';
                let sprite = document.createElement('img');
                sprite.className = 'tileFoto';
                sprite.src = "images/sprites/regular/" + pokemon.id +"-g.png";
                tile.style.borderColor = "purple";
                tile.appendChild(sprite);
                tiles.appendChild(tile);

                sprite.addEventListener('click', function () {
                    if (readCookie(pokemon.id + gender) == null) {
                        createCookie(pokemon.id + gender, true);
                        tile.style.backgroundColor = "green";
                        sprite.style.filter = "grayscale(0%)"
                    } else if (readCookie(pokemon.id + gender) == "true") {
                        createCookie(pokemon.id + gender, false);
                        tile.style.backgroundColor = "lightgray";
                        sprite.style.filter = "grayscale(100%)"
                    } else if (readCookie(pokemon.id + gender) == "false") {
                        createCookie(pokemon.id + gender, true);
                        tile.style.backgroundColor = "green";
                        sprite.style.filter = "grayscale(0%)"
                    }
                })

                if (readCookie(pokemon.id + gender) == "true") {
                    tile.style.backgroundColor = "green";
                    sprite.style.filter = "grayscale(0%)"
                } else {
                    tile.style.backgroundColor = "lightgray";
                    sprite.style.filter = "grayscale(100%)"
                }
            }
        }




        if (pokemon.alternateForm) {
            for (let index = 1; index <= pokemon.forms; index++) {

                let tile = document.createElement('div');
                tile.className = 'tile';
                let sprite = document.createElement('img');
                sprite.className = 'tileFoto';
                sprite.src = "images/sprites/regular/" + pokemon.id + "-" + index + ".png";
                tile.style.borderColor = "yellow";
                tile.appendChild(sprite);
                tiles.appendChild(tile);

                sprite.addEventListener('click', function () {
                    if (readCookie(pokemon.id + gender) == null) {
                        createCookie(pokemon.id + gender, true);
                        tile.style.backgroundColor = "green";
                        sprite.style.filter = "grayscale(0%)"
                    } else if (readCookie(pokemon.id + gender) == "true") {
                        createCookie(pokemon.id + gender, false);
                        tile.style.backgroundColor = "lightgray";
                        sprite.style.filter = "grayscale(100%)"
                    } else if (readCookie(pokemon.id + gender) == "false") {
                        createCookie(pokemon.id + gender, true);
                        tile.style.backgroundColor = "green";
                        sprite.style.filter = "grayscale(0%)"
                    }
                })

                if (readCookie(pokemon.id + gender) == "true") {
                    tile.style.backgroundColor = "green";
                    sprite.style.filter = "grayscale(0%)"
                } else {
                    tile.style.backgroundColor = "lightgray";
                    sprite.style.filter = "grayscale(100%)"
                }
            }
        }



        sprite.addEventListener('click', function () {
            if (readCookie(pokemon.id + gender) == null) {
                createCookie(pokemon.id + gender, true);
                tile.style.backgroundColor = "green";
                sprite.style.filter = "grayscale(0%)"
            } else if (readCookie(pokemon.id + gender) == "true") {
                createCookie(pokemon.id + gender, false);
                tile.style.backgroundColor = "lightgray";
                sprite.style.filter = "grayscale(100%)"
            } else if (readCookie(pokemon.id + gender) == "false") {
                createCookie(pokemon.id + gender, true);
                tile.style.backgroundColor = "green";
                sprite.style.filter = "grayscale(0%)"
            }
        })

        if (readCookie(pokemon.id + gender) == "true") {
            tile.style.backgroundColor = "green";
            sprite.style.filter = "grayscale(0%)"
        } else {
            tile.style.backgroundColor = "lightgray";
            sprite.style.filter = "grayscale(100%)"
        }





    }


}