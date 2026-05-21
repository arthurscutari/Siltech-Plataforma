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
const contaSemProposta = document.getElementById('conta-sem-proposta')
const contaComProposta = document.getElementById('conta-com-proposta')
const invenstimentoTabela = document.getElementById('valor-total-proposta')

nomeProposta.textContent = proposta.nome
localProposta.textContent = proposta.local
qtdPlacaProposta.textContent = proposta.placas
areaProposta.textContent = proposta.area
problemaProposta.textContent = proposta.problema.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
solucaoProposta.textContent = proposta.reducao.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
valorFinalProposta.textContent = proposta.valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
inversorProposta.textContent = proposta.inversor
telhadoProposta.textContent = proposta.telhado
contaSemProposta.textContent = proposta.problema.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
contaComProposta.textContent = solucaoProposta.textContent = proposta.reducao.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

invenstimentoTabela.textContent = proposta.valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});