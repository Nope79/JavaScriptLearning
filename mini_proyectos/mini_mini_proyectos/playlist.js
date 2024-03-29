// Hacer una playlist con un arreglo y funciones shift & unshift

let playlist = [];

function show(){

    console.log(`Usted cuenta con las siguientes canciones:`);

    for(cancion of playlist){

        console.log(`${cancion}.`);
    }
}

function add(){

    try {

        let entrada = parseInt(prompt("Ingrese la cantidad de canciones que desea agregar..."));
    
        for(let i = 0; i < entrada; i++){

            let cancion = prompt("Ingrese el nombre de la canción...");
            console.log(`¡La canción ${cancion} ha sido añadida a su playlist exitosamente!`);
            playlist.unshift(cancion);
        }

        show();
    } catch (error) {

        console.log("Ha ocurrido un error al ingresar los datos :(");
    }
};

function remove(){

    try {

        if(playlist.length > 0){

            console.log(`Usted ha eliminado la canción que estaba al inicio de su playlist: ${playlist[0]}.`);
            playlist.shift();
        }else{

            console.log(`Usted no puede eliminar nada más de su playlist.`);
        }
    } catch (error) {

        console.log("Ha ocurrido un error al ingresar los datos :(");
    }
}

let opcion = parseInt(prompt(`Ingrese 1 para añadir una canción a su playlist. Ingrese 2 para eliminar canciones de su playlist.`))

while(opcion === 1 || opcion === 2){

    if(opcion === 1){

        add();
    }else{

        remove();
    }

    opcion = parseInt(prompt(`Ingrese 1 para añadir una canción a su playlist. Ingrese 2 para eliminar canciones de su playlist.`))
}