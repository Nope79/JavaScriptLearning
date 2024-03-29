function mix(cartas){

    // DECLARAMOS UN ARREGLO QUE GUARDARÁ LAS CARTAS MEZCLADAS
    let cartas_mezcladas = [];

    // MIENTRAS EL MAZO ORDENADO TENGA CARTAS SEGUIRÁ MEZCLANDO LAS CARTAS
    while(cartas.length > 0){

        // GENERAMOS UN NUMERO ALEATORIO ENTRE EL 0 Y EL TAMAÑO DEL MAZO DE CARTAS ORDENADAS.
        let indice_x = Math.floor(Math.random() * cartas.length);
        // GENERAMOS UNA CARTA CON EL INDICE ALEATORIO QUE OBTUVIMOS.
        let carta_x = cartas[indice_x];
        
        // METEMOS LA CARTA EN EL MAZO DONDE GUARDAREMOS LAS CARTAS MEZCLADAS
        cartas_mezcladas.push(carta_x);
        // REMOVEMOS DEL MAZO ORDENADO LA CARTA QUE PUSIMOS EN EL MAZO MEZCLADO
        cartas.splice(indice_x, 1);
    }
    
    // DEVOLVEMOS EL MAZO DE CARTAS MEZCLADO
    return cartas_mezcladas;
};

function new_player(mixed){

    // CREAMOS UN ARREGLO DE JUGADORES (SON OBJETOS)
    let jugadores = [];

    // PREGUNTAMOS CUANTOS JUGADORES JUGARÁN PARA LUEGO CREAR ESE NUMERO DE JUGADORES EN UN CICLO
    let total_jugadores = 6;//parseInt(prompt("Ingrese el número de jugadores que habrá en la partida."));
    
    // POR CADA JUGADOR, LE ASIGNAREMOS UN ID Y LAS CARTAS QUE OBTIENE DEL MAZO MEZCLADO, ESTA FUNCIÓN ESTÁ MAS ABAJO
    for(let i = 1; i <= total_jugadores; i++){

        let id = "Jugador " + i;

        // AQUI SE CREA EL OBJETO, SE LE ASIGNA EL ID Y LAS CARTAS, QUE DEPENDERÁN DIRECTAMENTE DE LA FUNCIÓN REPART
        let jugador_x ={

            jugador: id,
            cartas: repart(mixed)
        };

        // ANTES DE FINALIZAR LA ITERACIÓN AÑADIMOS AL ARREGLO DE JUGADORES QUE DECLARAMOS EN ESTA FUNCIÓN, EL OBJETO JUGADOR_X QUE ACABAMOS DE CREAR
        jugadores.push(jugador_x);
    }

    // RETORNAMOS EL ARREGLO DE JUGADORES
    return jugadores;
};

// FUNCIÓN QUE SIRVE PARA REPARTIR CARTAS.
function repart(mixed){

    // CREAMOS UN ARREGLO PARA LAS CARTAS QUE VAMOS A REPARTIRLE A UN JUGADOR.
    let cartas_jug = [];

    // AQUI ASIGNAMOS X CARTAS AL ARREGLO, EN ESTE CASO, 5
    for(let i = 0; i < 5; i++){

        // SE AGREGA AL ARREGLO LA ÚLTIMA CARTA DEL MAZO MEZCLADO
        cartas_jug.push(mixed[mixed.length-1]);
        // SE QUITA DEL MAZO MEZCLADO LA ÚLTIMA CARTA QUE ESTABA EN EL
        mixed.pop();
    }

    // RETORNAMOS EL ARREGLO DE CARTAS QUE SE LE REPARTIRÁ A UN SOLO JUGADOR
    return cartas_jug;
};

// MOSTRAMOS EL ARREGLO DE OBJETOS CON ESTA FUNCIÓN
function show_players(players){

    for(jugador of players){

        ("----------------------------------------------------------");

        for(j in jugador){

            console.log(jugador[j]);
        }
        console.log("----------------------------------------------------------");
    }
};

// DECLARAMOS TODO LO NECESAARIO PARA USAR LAS FUNCIONES.
// MEZCLAMOS, CREAMOS LOS JUGADORES Y LOS MOSTRAMOS.
let cartas = [

    "1♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "10♠️", "11♠️", "12♠️",
    "1♣️", "2♣️", "3♣️", "4♣️", "5♣️", "6♣️", "7♣️", "8♣️", "9♣️", "10♣️", "11♣️", "12♣️",
    "1♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "10♥️", "11♥️", "12♥️",
    "1♦️", "2♦️", "3♦️", "4♦️", "5♦️", "6♦️", "7♦️", "8♦️", "9♦️", "10♦️", "11♦️", "12♦️"
];

let mixed = mix(cartas);

let jug = new_player(mixed);

show_players(jug);