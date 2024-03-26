// Perfil de Red Social
// Master79. 24-03-2024

// Información del usuario

let nametag = 'papucraft123';
let nombre_completo = 'Pablo Carranza Laponte';
let edad = 23;
let is_student = true;

// Dirección

let dir = {

    calle : 'Plaza de toros',
    ciudad: 'YuririaPundaro',
    estado: 'Guanajuato, lugar de las macetas con flores',
    codigo_postal: 36960
};

// Hobbies

let hobbies = ['Bailar', 'Salir a caminar a las 3am', 'Cazar churruminos'];

// Texto personalizado

let texto_personalizado = `Hola, mi nombre es ${nombre_completo}, quizás me conozcas por mi nametag ${nametag} jajaja.
Soy estudiante del ITSUR y tengo ${edad} años de edad.
Yo vivo en la calle ${dir.calle}, soy de la ciudad llamada ${dir.ciudad}, ubicada en ${dir.estado}.
Mis hobbies son: ` + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2] + ".";

console.log(texto_personalizado);