let cantidadPartidas
let jugadaUsuario
let jugadaComputadora
let jugadaComparativa


cantidadPartidas = parseInt(prompt("Ingresa cantidad de partidas"));

for(let i = 0 ; i < cantidadPartidas ; i++) {
    console.log("Ciclo: " + i);
    jugadaUsuario = prompt("Ingresa tu jugada: Piedra, Papel o Tijeras");
    switch (jugadaUsuario.toLocaleLowerCase()) {
        case "piedra":
            jugadaComparativa = 0;
            break;
        case  "papel":
            jugadaComparativa = 1;
            break;
        case "tijera", "tijeras":
            jugadaComparativa = 2;
            break;
        default:
            jugadaComparativa = 3;
            break;
    }

    jugadaComputadora = Math.floor(Math.random()*3);

    if(jugadaComparativa == 3) {
        console.log("jugadaComputadora: " + jugadaComputadora);
        console.log("jugadaComparativa: " + jugadaComparativa);
        console.log("Opcion ingresada invalida");
    }
    else if((jugadaComputadora == 0 && jugadaComparativa == 0) || (jugadaComputadora == 1 && jugadaComparativa == 1) || (jugadaComputadora == 2 && jugadaComparativa == 2))
    {
        
        alert("Esto es un empate");
    }
    //Computadora gana
    else if((jugadaComputadora == 0 && jugadaComparativa == 1) ||
     (jugadaComputadora == 1 && jugadaComparativa == 2) || 
     (jugadaComputadora == 2 && jugadaComparativa == 0))
     {
        console.log("jugadaComputadora: " + jugadaComputadora);
        console.log("jugadaComparativa: " + jugadaComparativa);
        alert("Computadora gana");
     }
     //Usuario gana
     else if((jugadaComputadora == 0 && jugadaComparativa == 2) ||
     (jugadaComputadora == 1 && jugadaComparativa == 0) || 
     (jugadaComputadora == 2 && jugadaComparativa == 1))
     {
        console.log("jugadaComputadora: " + jugadaComputadora);
        console.log("jugadaComparativa: " + jugadaComparativa);
        alert("Usuario gana juego");
     }
}