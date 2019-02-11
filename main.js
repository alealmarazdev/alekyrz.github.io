let piedra = {
  numero: 1,
  identificador: document.getElementById("piedra")
}
let papel = {
  numero: 2,
  identificador: document.getElementById("papel")
}
let tijera = {
  numero: 3,
  identificador: document.getElementById("tijera")
}
let lagarto = {
  numero: 4,
  identificador: document.getElementById("lagarto")
}
let spock = {
  numero: 5,
  identificador: document.getElementById("spock")
}


// let submit = document.getElementById("botton");
let youWin = document.getElementById("youWin");
// let youLose = document.getElementById("youLose");
// let tie = document.getElementById("tie");
// let hidden = document.getElementById("hidden");
// let row_choose = document.getElementById("row_choose");
// let row_resultado = document.getElementById("row_resultado");


const game = (player) => {
  let computer = Math.floor((Math.random() * 5) + 1);
  console.log(computer)
  let resultado;
  if (player === piedra && computer === tijera.numero) {
    resultado = "youWin";

  } else if (player === piedra && computer === papel.numero) {
    resultado = "youLose";
  } else if (player === piedra && computer === spock.numero) {
    resultado = "youLose";
  } else if (player === piedra && computer === lagarto.numero) {
    resultado = "youWin";

  } else if (player === papel && computer === tijera.numero) {
    resultado = "youLose";
  } else if (player === papel && computer === piedra.numero) {
    resultado = "youWin";
  } else if (player === papel && computer === spock.numero) {
    resultado = "youWin";
  } else if (player === papel && computer === lagarto.numero) {
    resultado = "youLose";

  } else if (player === tijera && computer === papel.numero) {
    resultado = "youWin";
  } else if (player === tijera && computer === piedra.numero) {
    resultado = "youLose";
  } else if (player === tijera && computer === spock.numero) {
    resultado = "youLose";
  } else if (player === tijera && computer === lagarto.numero) {
    resultado = "youWin";

  } else if (player === spock && computer === piedra.numero) {
    resultado = "youWin";
  } else if (player === spock && computer === tijera.numero) {
    resultado = "youWin";
  } else if (player === spock && computer === papel.numero) {
    resultado = "youLose";
  } else if (player === spock && computer === lagarto.numero) {
    resultado = "youLose";

  } else if (player === lagarto && computer === piedra.numero) {
    resultado = "youLose";
  } else if (player === lagarto && computer === tijera.numero) {
    resultado = "youLose";
  } else if (player === lagarto && computer === papel.numero) {
    resultado = "youWin";
  } else if (player === lagarto && computer === spock.numero) {
    resultado = "youWin";
  } else {
    resultado = "empate";
  }
  document.getElementById("resultado").innerHTML = '<img class="resultado" src="img/' + resultado + '.png">';
};


const main = () => {
  piedra.identificador.addEventListener('click', () => {
    game(piedra);
  })
  tijera.identificador.addEventListener('click', () => {
    game(tijera);
  })
  papel.identificador.addEventListener('click', () => {
    game(papel);
  })
  lagarto.identificador.addEventListener('click', () => {
    game(lagarto);
  })
  spock.identificador.addEventListener('click', () => {
    game(spock);
  })

}


main()