const jogo = ["pedra", "papel", "tesoura"];
const escolhaUsuario = prompt("Digite a sua escolha: Pedra, Papel ou Tesoura?").toLowerCase();
const escolhaPrograma = jogo[Math.floor(Math.random() * jogo.length)];

  alert("O programa escolheu " + escolhaPrograma + ".");

if (escolhaUsuario === escolhaPrograma){
    alert("Empate!");
}else if(
  (escolhaUsuario === "pedra" && escolhaPrograma === "tesoura")||
  (escolhaUsuario === "papel" && escolhaPrograma === "pedra")||
  (escolhaUsuario === "tesoura" && escolhaPrograma === "papel")
){
    alert("Você ganhou!");
}else{
   alert("Você perdeu!");
}

