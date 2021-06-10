let imputAdultos = document.getElementById("adultos");
let imputCrincas = document.getElementById("criancas");
let imputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

  console.log("calculando...1..2..3..4");
  /* let resultado = document.getElementById("resultado"); */ /* ????????? */
  let adultos = imputAdultos.value;
  let crincas = imputCrincas.value;
  let duracao = imputDuracao.value;

  let qtdTotalBolo = (boloPP(duracao) * adultos) + (boloPP(duracao) / 2 * crincas);
  let qtdTotalSalgado = (salgadosPP(duracao) * adultos) + (salgadosPP(duracao) / 2 * crincas);
  let qtdTotalBebida = (bebidasPP(duracao) * adultos) + (bebidasPP(duracao) / 2 * crincas);

  /* alert("teste"); */ /* ?????? */
  /* alert($qtdTotalBolo); */ /* ?????????? */
  resultado.innerHTML = `<p>${qtdTotalBolo} teste</p>`; /* faltam os arredondamentos com Math */
  resultado.innerHTML += `<p>${qtdTotalSalgado} teste</p>`;
  resultado.innerHTML += `<p>${qtdTotalBebida} teste</p>`;
}

function boloPP(duracao) {
  if (duracao >= 6) {
    return 500;
  } else {
    return 300;
  }


}
function salgadosPP(duracao) {
  if (duracao >= 6) {
    return 50;
  } else {
    return 30;
  }


}

function bebidasPP(duracao) {


  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }

}