// Lista com jogos que podem ser recomendados ao visitante.
const jogos = [
    "Minecraft — para quem gosta de criatividade e exploração.",
    "GTA V — para quem curte ação e mundo aberto.",
    "Fortnite — para quem gosta de competição e partidas online.",
    "Red Dead Redemption 2 — para quem procura aventura e história.",
    "Rocket League — para quem gosta de futebol e velocidade."
];

// Busca o botão e o parágrafo onde a recomendação será exibida.
const botaoSorteio = document.getElementById("botao-sorteio");
const resultado = document.getElementById("resultado");

// Executa esta função quando o visitante clicar no botão.
botaoSorteio.addEventListener("click", function () {
    // Math.random() gera um número aleatório; Math.floor() arredonda para baixo.
    const indice = Math.floor(Math.random() * jogos.length);

    // Mostra no parágrafo o jogo escolhido pelo índice sorteado.
    resultado.textContent = "🎮 " + jogos[indice];
});
