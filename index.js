const niveisEscalao = [10, 20, 50, 80, 90, 100];
const niveisRank = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

let resultadoPontos = parseInt(valorPartida(20,20));

function valorPartida(quantVitorias = 0, quantDerrotas = 0) {

  let somatorio = quantVitorias - quantDerrotas;
  return somatorio;
   
}

function direcionamentoRank() {

  for (let i = 0; i < 7; i++) {

    if (resultadoPontos <= niveisEscalao[0]) {

      return `O Herói tem saldo de ${resultadoPontos} está no nínvel de ${niveisRank[0]}`;


    }
    else if (resultadoPontos > niveisEscalao[i] && resultadoPontos <= niveisEscalao[i+1] ) {

      console.log (2);


      return `O Herói tem saldo de ${resultadoPontos} está no nínvel de ${niveisRank[i+1]}`;


    }
    else if (resultadoPontos >= (niveisEscalao[5] + 1)) {


      return `O Herói tem saldo de ${resultadoPontos} está no nínvel de ${niveisRank[niveisRank.length - 1]}`;


    }

  }
   
}

console.log (direcionamentoRank());