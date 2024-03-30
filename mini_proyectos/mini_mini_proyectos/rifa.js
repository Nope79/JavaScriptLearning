// ` DE UNA LISTA DE PERSONAS, MOSTRAR A LA QUE HA GANADO UNA RIFA
function add_gente(){

    let total = 10;
    let arreglo_personas = [];

    for(let i = 1; i <= total; i++){

        let nombre = "Nombre" + i;
        let persona = {

            nombre: nombre,
            ticket: i
        };

        console.log(i);

        arreglo_personas.push(persona);
    }

    return arreglo_personas;
};

function show_gente(arreglo_personas){

    for(persona of arreglo_personas){

        for(atributo in persona){

            console.log(persona[atributo]);
        }
    }
};

let participantes = add_gente();

//show_gente(participantes);

let papu = participantes.find(persona => persona.ticket === 44);

if(papu){

    console.log(papu.nombre + " " + papu.ticket);
}else{

    console.log("No existe un ganador con ese ticket...");
}

