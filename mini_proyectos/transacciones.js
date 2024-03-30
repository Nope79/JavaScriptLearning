let transacciones = [
    {id: 1, precio: 234, descripcion: "Un nuevo visor."},
    {id: 2, precio: 45000, descripcion: "Donitas"},
    {id: 3, precio: 899, descripcion: "Cascos gamer."},
    {id: 4, precio: 320, descripcion: "Kit de electrónica."},
    {id: 5, precio: -6999, descripcion: "Pisapapeles(Xbox series x)."},
    {id: 6, precio: -599, descripcion: "Un pokemón."},
    {id: 7, precio: -10, descripcion: "Par de dulces."},
    {id: 8, precio: -234, descripcion: "Un viejo visor."}
];

function show(transacciones){

    console.log("-----------------------------------------------------------------------------------------------");

    for(ind of transacciones){

        console.log(ind);

        for(at in ind){
    
            console.log(ind[at]);
        }

        console.log("-----------------------------------------------------------------------------------------------");
    }
};

show(transacciones);

// Balance
let suma = transacciones.reduce((acumulador, valor_actual) => acumulador + valor_actual.precio, 0);
console.log("Balance: " + suma);

// Mayor bien
let mayor_transaccion = transacciones.reduce((maximo, valor_actual) => {
    return Math.abs(valor_actual.precio) > Math.abs(maximo) ? valor_actual : maximo;
}, transacciones[0].precio);
console.log("Transacción de mayor peso: " + JSON.stringify(mayor_transaccion));
// Compras
let compras = transacciones.filter(transacciones => transacciones.precio < 0);
console.log("Transacciones negativas:");
console.log(compras);

// Encontrar por descripción
console.log("Buscando un elemento con la descripción proporcionada...");
let trs = transacciones.find(num => num.descripcion === "Un pokemón.");
if(trs !== undefined && trs !== null){

    console.log(trs);
}else{

    console.log("NO SE HA ENCONTRADO NINGUNA TRANSACCIÓN CON ESA DESCRIPCIÓN...");
}

// BUSCAR CANTIDAD Y DESPLEGAR EL INDEX

function buscar_por_indice(transacciones_a, cantidad){

    let inx = transacciones_a.findIndex(transaccion => transaccion.precio === cantidad);
    return inx;
};

console.log("Buscando un índice con la cantidad proporcionada...");
let inx = buscar_por_indice(transacciones, -599);
if(inx > 0){

    console.log("El índice del elemento es el " + inx + ".");
}else{

    console.log("No se ha encontrado ninguna transacción que tenga ese valor.");
}

// AÑADIR DESCRIPCIÓN SEGÚN ES UNA COMPRA O BIEN.

console.log("Actualización de la descripción de las transacciones...");
transacciones.forEach(transaccion =>{

    if(transaccion.precio > 0){

        transaccion.descripcion = "INCOME: " + transaccion.descripcion;
    }else{

        transaccion.descripcion = "EXPENSE: " + transaccion.descripcion;
    }
});

show(transacciones);