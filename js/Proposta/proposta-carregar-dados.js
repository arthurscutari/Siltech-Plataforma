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
const inversorProposta = document.getElementById('inversor-proposta')
const telhadoProposta = document.getElementById('telhado-proposta')
const contaSemProposta = document.getElementById('conta-sem-proposta')
const contaComProposta = document.getElementById('conta-com-proposta')
const invenstimentoTabela = document.getElementById('valor-total-proposta')
const moduloProposta = document.getElementById('modulo-proposta')
const energiaGeradaProposta = document.getElementById('energia-proposta')
const valorReducao = document.getElementById('valor-reducao-proposta')
const valorEconomiaProposta = document.getElementById('valor-economia-proposta')
const retornoInvestimentoProposta = document.getElementById('retorno-investimeto-proposta')
const nomeAssinaturaProposta = document.getElementById('nome-assinatura-proposta')
const qtdPlacasModuloProposta = document.getElementById('placas-modulo-proposta');
const dataProposta = document.getElementById('data-proposta');
const kitProposta = document.getElementById('kit-proposta');

dataProposta.textContent = new Date().toLocaleDateString('pt-BR'),
nomeAssinaturaProposta.textContent = proposta.nome
nomeProposta.textContent = proposta.nome + ","
localProposta.textContent = proposta.localizacao + " - SP"
qtdPlacaProposta.textContent = proposta.placas
areaProposta.textContent = proposta.area 
moduloProposta.textContent = proposta.modulo
problemaProposta.textContent = proposta.valorSemSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
solucaoProposta.textContent = proposta.valorComSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
valorFinalProposta.textContent = proposta.valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
inversorProposta.textContent = mostrarInversor()
telhadoProposta.textContent = proposta.telhado
contaSemProposta.textContent = proposta.valorSemSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
contaComProposta.textContent = solucaoProposta.textContent = proposta.valorComSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

invenstimentoTabela.textContent = proposta.valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
energiaGeradaProposta.textContent = proposta.energiaGerada.toFixed(0) + " kWh"
valorReducao.textContent =  (proposta.valorSemSiltech - proposta.valorComSiltech ).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

valorEconomiaProposta.textContent = "LUCRO DE  " + proposta.economia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
})+ " EM 15 ANOS" ;
retornoInvestimentoProposta.textContent = proposta.economia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
})
qtdPlacasModuloProposta.textContent = proposta.placas
function mostrarInversor() 
{

    if (proposta.inversor === "1x 3kw") {

        return "01 inversor Huawei - 3kW"
    }
     if (proposta.inversor === "1x 6kw") {

        return "01 inversor Huawei - 6kW"
    }
     if (proposta.inversor === "1x 6kw + 1x 3kw") {

        return "02 Inversores Huawei - 3kW + 6kW"
    }
     if (proposta.inversor === "2x 6kw") {

        return "02 inversores Huawei - 6kW"
     }
     if (proposta.inversor === "3x 6kw") {

        return "03 inversores Huawei - 6kW"
    }
    if (proposta.inversor === "4x 6kw") {

        return "014 inversores Huawei - 6kW"
    }
    

    
}
kitProposta.textContent = proposta.kitPlaca / 1000 + "kWp";