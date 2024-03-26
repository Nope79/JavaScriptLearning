// CREAR OBJETOS CON UNA FUNCION

function pokemon(id, name, mote, type, level, trainer){

    this.id = id;
    this.name = name;
    this.mote = mote;
    this.type = type;
    this.level = level;
    this.trainer = trainer;
    this.attack = [];

    this.add_attack = function(attack){

        console.log(`¡${this.name} ha aprendido ${attack}!`);
        this.attack.push(attack);
    };

    this.exchange = function(trainer){

        console.log(`${this.trainer} ha intercambiado a ${this.name} con ${trainer}`);
        this.trainer = trainer;
    };

    this.rename = function(mote){

        console.log(`Has renombrado a ${this.mote} con el mote de ${mote}`);
        this.mote = mote;
    };

    this.upp_level = function(){

        console.log(`¡${this.mote} ha subido un nivel!`);
        console.log(`Su nivel actual es de ` + ++this.level);
    };

    this.describe = function(){

        console.log("FICHA TÉCNICA:");

        console.log(`ID: ${this.id}`);
        console.log(`NOMBRE: ${this.name}`);
        console.log(`MOTE: ${this.mote}`);
        console.log(`TIPO: ${this.type}`);
        console.log(`NIVEL: ${this.level}`);
        console.log(`ENTRENADOR: ${this.trainer}`);
        console.log(`ATAQUES: ` + this.attack.join(", "));
        console.log("---------------------------------------------------------------------------------------------------");
    };
};

let poke1 = new pokemon(1020, "Charizard", "Charizard", "Fuego/Volador", 37, "Nope");

poke1.add_attack("Cuchillada");
poke1.add_attack("Lanzallamas");
poke1.add_attack("Vuelo");
poke1.add_attack("Giro Fuego");
poke1.describe();

let poke2 = new pokemon(8932, "Venosaur", "Florecita", "Planta/Veneno", 24, "Morty");

poke2.describe();

poke2.add_attack("Látigo Cepa");
poke2.add_attack("Tacleada");
poke2.add_attack("Polvo Veneno");
poke2.add_attack("Hoja Afilada");
poke2.upp_level();
poke2.upp_level();
poke2.upp_level();
poke2.exchange("Brook");
poke2.rename("Devora_Almas");

poke2.describe();

let poke3 = new pokemon(1223, "Totodile", "TotoGod", "Agua", 12, "Nope");

poke3.add_attack("Tacleada");
poke3.add_attack("Pistola Agua");
poke3.add_attack("Arañazo");

poke3.describe();

poke3.upp_level();
poke3.upp_level();
poke3.upp_level();
poke3.upp_level();

poke3.add_attack("Rayo Burbuja");

poke3.describe();

