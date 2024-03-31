// usuario ingresa usuario y contraseña
// validar usuario y contraseña
// si existe, mostrar usuario y timeline
// si no existe, mostrar mensaje de error de datos

const usersDatabase=[
    {username:"andres",password:"123",},
    {username:"caro",password:"456",},
    {username:"mariana",password:"789",},
];

const usersTimeline=[
    {username:"Estefany",timeline:"Me encata Javascript!",},
    {username:"Oscar",timeline:"Bebeloper es lo mejor!",},
    {username:"Mariana",timeline:"A mi me gusta más el café que el té",},
    {username:"Andres",timeline:"Yo hoy no quiero trabajar",},
];

let us = prompt("Ingrese su nombre de usuario =D");
let pas = prompt("Ingrese su contraseña =D");
let bandera = false;

for(usuario of usersDatabase){

    if(usuario.username === us && usuario.password === pas){

        bandera = true;
        break;
    }
}

if(bandera === true){

    for(usuario of usersTimeline){

        console.log(usuario.username + " DICE: " + usuario.timeline);
    }
}else{

    console.log("Intente nuevamente...");
}