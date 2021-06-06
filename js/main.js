const celulas = document.querySelectorAll(".celula");
const player1_X = "X";
const player2_O = "O";
let checarVez = true;

const combinacoes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  
];
document.addEventListener("click", (event) => {
  if (event.target.matches(".celula")) {
    jogar(event.target.id);
  }
});
function jogar(id) {
  const celula = document.getElementById(id);
  turno = checarVez? player1_X : player2_O; //se checarVez for verdadeiro o turno recebe x senão o
  celula.textContent = turno;
  celula.classList.add(turno);
  checarVencedor(turno);
}

function checarVencedor(turno) {
  const vencedor = combinacoes.some((comb) => { //some - se tiver 
    return comb.every((index) => {
      return celulas[index].classList.contains(turno);
    });
  });
  if (vencedor) {
    encerrarJogo(turno);
  } else if(checarEmpate()){
    encerrarJogo();
  } else {
    checarVez = !checarVez;
  }
}
function checarEmpate() {
  let x = 0;
  let o = 0;
  for (index in celulas) {
    if (!isNaN(index)) {
      if (celulas[index].classList.contains(player1_X)) {
      x++
      }
      if (celulas[index].classList.contains(player2_O)) {
      o++;
      }
    }
    
  }
  return x + o === 9 ? true : false;
}
function encerrarJogo(vencedor = null) { // será substituido para null se o vencedor não tiver nenhum valor atribuido a ele
  
  if (vencedor) {
    if (vencedor == player1_X) {
      alert("O vencedor foi Player 1 - X");
      location.reload();
    } else{
      alert("O vencedor foi Player 2 - O");
      location.reload();
    }
  }
    else {
    alert("Empatou");
    location.reload();
  }
  
  
}