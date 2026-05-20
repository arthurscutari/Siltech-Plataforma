const proposta = JSON.parse(
    localStorage.getItem("proposta")
);

console.log(proposta);


const nomeProposta = document.getElementById('nome-proposta')
const localProposta = document.getElementById('local-proposta')
const qtdPlacaProposta = document.getElementById('qtd-placa-proposta')
const areaProposta = document.getElementById('area-proposta')
const problemaProposta = document.getElementById('problema-proposta')
const solucaoProposta = document.getElementById('solucao-proposta')
const valorFinalProposta = document.getElementById('valor-final-proposta')
const valorEconomiaProposta = "30000"
const inversorProposta = document.getElementById('inversor-proposta')
const telhadoProposta = document.getElementById('telhado-proposta')


nomeProposta.textContent = proposta.nome
localProposta.textContent = proposta.local
qtdPlacaProposta.textContent = proposta.placas
areaProposta.textContent = proposta.area
problemaProposta.textContent = "R$ " + proposta.problema
solucaoProposta.textContent = "R$ " + proposta.reducao
valorFinalProposta.textContent = proposta.valorFinal
inversorProposta.textContent = proposta.inversor
telhadoProposta.textContent = proposta.telhado
