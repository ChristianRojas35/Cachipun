//Variables
let cantidadJuegos; //define el numero de juegos por partida.
let opcionUsuario; //define la elección del usuario (Piedra, Papel, Tijera) en formato texto.
let opcionComputadora;//define la opción random de la computadora.
let jugadaUsuario;//define la elección del usuario convertida a entero.
let jugadaComputadora;//define el valor random de la computadora asignado al string correspondiente.

let jugadasGanadasUsuario = 0;//define la cantidad de juegos que ha ganado el usuario 
let jugadasGanadasComputadora = 0;//define la cantidad de juegos que ha ganado la computadora


cantidadJuegos = parseInt(prompt("Ingresa cantidad de partidas"));//define la cantidad de veces que se repetira la iteración

for(let i = 0 ; i < cantidadJuegos ; i++) { //estructura del for
    console.log("Ciclo: " + i);
    opcionUsuario = prompt("Ingresa tu jugada: Piedra, Papel o Tijeras");
    console.log("opcionUsuario desde el prompt: " + opcionUsuario);
    switch (opcionUsuario.toLocaleLowerCase()) {
        case "piedra":
            jugadaUsuario = 0;
            break;
        case  "papel":
            jugadaUsuario = 1;
            break;
        case "tijera": 
        case "tijeras":
            jugadaUsuario = 2;
            break;
        default:
            jugadaUsuario = 3;
            break;
    }

    jugadaComputadora = Math.floor(Math.random()*3);

    switch (jugadaComputadora)
    {
        case 0:
            opcionComputadora = "Piedra"
            break;
        case 1:
            opcionComputadora = "Papel"
            break;
        case 2:
            opcionComputadora = "Tijera"
            break;

    }

    if(jugadaUsuario === 3) {
        alert("Opcion ingresada invalida");
    }
    else if((jugadaComputadora == 0 && jugadaUsuario == 0) || (jugadaComputadora == 1 && jugadaUsuario == 1) || (jugadaComputadora == 2 && jugadaUsuario == 2))
    {
        console.log("opcionComputadora: " + opcionComputadora);
        console.log("opcionUsuario: " + opcionUsuario);
        alert("Este juego es un EMPATE, Has escogido: " + opcionUsuario + " y la computadora ha escogido: " + opcionComputadora);
    }
    //Computadora gana
    else if((jugadaComputadora == 0 && jugadaUsuario == 2) ||
     (jugadaComputadora == 1 && jugadaUsuario == 0) || 
     (jugadaComputadora == 2 && jugadaUsuario == 1))
     {
        console.log("opcionComputadora: " + opcionComputadora);
        console.log("opcionUsuario: " + opcionUsuario);
        jugadasGanadasComputadora ++;
        alert("Este juego lo ha ganado la COMPUTADORA, , Has escogido: " + opcionUsuario + " y la computadora ha escogido: " + opcionComputadora);
     }
     //Usuario gana
     else if((jugadaComputadora == 0 && jugadaUsuario == 1) ||
     (jugadaComputadora == 1 && jugadaUsuario == 2) || 
     (jugadaComputadora == 2 && jugadaUsuario == 0))
     {
        console.log("opcionComputadora: " + opcionComputadora);
        console.log("opcionUsuario: " + opcionUsuario);
        jugadasGanadasUsuario ++;
        alert("Este juego lo ha ganado el USUARIO, , Has escogido: " + opcionUsuario + " y la computadora ha escogido: " + opcionComputadora);
     }
}

console.log("jugadasGanadasUsuario: " + jugadasGanadasUsuario);
console.log("jugadaComputadora: " + jugadaComputadora);

if(jugadasGanadasUsuario > jugadasGanadasComputadora) {
    alert("El usuario ha ganado la partida");
}
else if (jugadasGanadasUsuario < jugadasGanadasComputadora) {
    alert("La computadora ha ganado la partida HAHA");
}
else if (jugadasGanadasUsuario == jugadasGanadasComputadora  && typeof(jugadaComputadora) == "number" && typeof(jugadaUsuario) == "number") {
    alert("Esta partida ha sido un empate u.u");
}
else  {
    console.log("type jugadaComputadora: " + typeof(jugadaComputadora));
    console.log("type jugadaUsuario: " + typeof(jugadaUsuario));
    alert("Has ingresado un valor invalido, sigue las instrucciones");
}