// Stack de libros

let librero = [];

let entrada = prompt(`ELIJA LAS OPCIONES QUE QUIERE REALIZAR:
1.- INSERTAR UN NUEVO LIBRO.
2.- ELIMINAR EL ÚLTIMO LIBRO QUE INSERTÓ.
3.- REVISAR EL STACK DE LIBROS.
4.- SALIR DEL PROGRAMA.`);

console.log(entrada.type);

while(entrada !== "4"){

    switch(entrada){

        case "1":

        console.log("Usted ha elegido la opción de añadir un nuevo libro.");
        let libro = prompt(`Ingrese el nombre del libro que desea añadir...`);
        librero.push(libro);
        console.log(`Usted ha añadido el libro ${librero[librero.length-1]}.`);
        break;

        case "2":

        console.log("Usted ha elegido la opción de eliminar el último libro.")
        console.log(`usted ha eliminado el libro ` + librero.pop() + ".");
        break;

        case "3":

        console.log("Usted ha elegido la opción de ver los libros en su librero.")
        console.log(`A continuación, se mostrarán los libros que tiene en su librero...`);
        for(let i = 0; i < librero.length; i++){

            console.log(`${i+1}.- ${librero[i]}`);
        }
        break;
    }

    entrada = prompt(`ELIJA LAS OPCIONES QUE QUIERE REALIZAR:
    1.- INSERTAR UN NUEVO LIBRO.
    2.- ELIMINAR EL ÚLTIMO LIBRO QUE INSERTÓ.
    3.- REVISAR EL STACK DE LIBROS.
    4.- SALIR DEL PROGRAMA.`);
}

console.log("Gracias por usar mi programa =D. Tenga un buen día.");