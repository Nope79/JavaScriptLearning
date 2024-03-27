let palabras = ['HOLA', 'CODEFORCES', 'ITSUR', 'PROGRAMACION', 'CABALLO', 'SELVA', 'GUITARRA', 'BLOODBORNE', 'PROLETARIADO', 'GULAG'];
let numeroAleatorio = Math.floor(Math.random() * 10);

let play = palabras[numeroAleatorio];

let entrada = "";
console.log(`Ingresa una palabra con letras mayúsculas. Tienes 3 intentos para adivinar la palabra. PISTA: La palabra tiene ${play.length} letras. ¡Buena Suerte :)!`);
entrada = prompt();

if(entrada === play){

    console.log("¡GENIAL! !HAS CONSEGUIDO ADIVINAR LA PALABRA A LA PRIMERA!");
}else{

    console.log(`No te preocupes. Te daré otra pista: La palabra inicia con la letra ${play[0]}. ¡Tienes dos intentos más!`);
    entrada = prompt();

    if(entrada === play){

        console.log("Bien hecho, has adivinado la palabra en el segundo intento.");
    }else{

        console.log(`Oh, has fallado otra vez... No importa, te daré una pista nuevamente: La palabra termina con la letra ${play[play.length-1]}. ¡ESTE ES TU ÚLTIMO INTENO!`);
        entrada = prompt();

        if(entrada === play){

            console.log("¡EN BUENA HORA, LO HAS CONSEGUIDO EN LA ÚLTIMA OPORTUNIDAD!");
        }else{

            console.log("No te preocupes, lo consegirás en una próxima ronda :). la palabra era: " + play + "...");
        }
    }
}
