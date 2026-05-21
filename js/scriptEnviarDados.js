
const enviarDados = document.getElementById('btn-gerar');

//Espaço para Variavels de campo.
const nomePlataforma = "Arthur"
const celularPlataforma = "11997050620"
const canalVendaPlataforma = "Google"
const propostaTestePlataforma = "Sim"
const localizacaoPlataforma = "São Paulo"
const instalacaoPlataforma = "Bifásico"
const telhadoPlataforma = "Fibrocimento"
const inversorPlataforma = "1x 6kw"
const promocaoPlataforma = 0
const consumoKwhPlataforma = "700"
const quantidadePlacasPlataforma = 10
const expansaoPlacasPlataforma = 0
const moduloPlataforma = "610Wp Tier 1"
const hspPlataforma = "4.45"
const kwhPlataforma = "0.95"

//

const valorInstalacaoTipoFormulario = instalacaoTipo()
const geracaoEnergia = parseFloat((hpsProposta) * 610 * 30 * 0.8/1000)
const custoMercadoriaVendida = (custoEquipamento().valorTotal + estrutura() + homologacao() + instalacao() + retorno ) - 884

//variaveis de custo fixos

const deducaoImposto = 0.06
const contribuição = 0.42
const comissaoVenda = 0.05
const taxaCartão = 0

function valorEnergia (){

        if (valorKwh.value !== "") {

            return parseFloat(valorKwh.value);
        }
        else {

            return 0.95
        }

}
function instalacaoTipo() {

    if (instalacaoProposta === "Bifásico"){

        return 70
    }
    if(instalacaoProposta === "Trifásico")
    {
        return 110
    }
}
function custoEquipamento() {

    const inversor3kw = 1800
    const inversor6kw = 2800

    const potencia3kw = 3
    const potencia6kw = 6
   
    if (quantidadePlacas >= 4 && quantidadePlacas <= 8) {

        valorPlaca = 825
        return {
        valorTotal: inversor3kw + (valorPlaca * qtdPlaca),
        potenciaTotal: potencia3kw
        }
    }
     if (quantidadePlacas >= 9 && quantidadePlacas <= 15) {

        valorPlaca = 800
        return {
        valorTotal: inversor6kw + (valorPlaca * quantidadePlacas),
        potenciaTotal: potencia6kw
        }
    }
    if (quantidadePlacas >= 16 && quantidadePlacas <= 23) {

        valorPlaca = 775
        return {
        valorTotal: inversor6kw + inversor3kw + (valorPlaca * quantidadePlacas),
        potenciaTotal: potencia6kw + potencia3kw
        }
    }
    if (quantidadePlacas >= 24 && quantidadePlacas <= 30) {

        valorPlaca = 750
        return {
        valorTotal: (inversor6kw * 2) + (valorPlaca * quantidadePlacas),
        potenciaTotal: inversor6kw * 2
        }

    }
    if (quantidadePlacas >= 31 && quantidadePlacas <= 45) {

        valorPlaca = 750
        return {
        valorTotal: (inversor6kw * 3) + (valorPlaca * quantidadePlacas),
        potenciaTotal: potencia6kw *3}
    }
    if (quantidadePlacas >= 46 && quantidadePlacas <= 60) {

        valorPlaca = 750
        return {
        valorTotal: (inversor6kw * 4) + (valorPlaca * quantidadePlacas),
        potenciaTotal: potencia6kw *4} 
    }

}
function homologacao() {

    
    if (custoEquipamento().potenciaTotal <= 10) return 450
    if (custoEquipamento().potenciaTotal <= 20) return 650
    if (custoEquipamento().potenciaTotal <= 50) return 800
    if (custoEquipamento().potenciaTotal <= 75) return 1000
}
function instalacao() {

    if ( quantidadePlacas <= 13) {
         return quantidadePlacas * 205
    }
    if ( quantidadePlacas <= 26) {
         return quantidadePlacas * 180
    }
    if ( quantidadePlacas <= 32) {
         return quantidadePlacas * 165
    }
    if ( quantidadePlacas <= 48) {
         return quantidadePlacas * 155
    }
    if ( quantidadePlacas <= 62) {
         return quantidadePlacas * 125
    }

}
function estrutura(){

    if (telhadoProposta === "Cerâmico") {
        return 0
    }
    if (telhadoProposta === "Fibrocimento") {
        return 0
    }
    if (telhadoProposta === "Laje") {
        return 3000
    }
    if (telhadoProposta == "Metálico") {
        return 0
    }

}
function problemaProposta () {

    return geracaoEnergia * quantidadePlacas * valorKwh
}

enviarDados.addEventListener('click', (e) => {

    
    e.preventDefault()
    const proposta = {

    nome:nome,
    placas:quantidadePlacas,
    local:localizacao,
    area:quantidadePlacas * 3,
    problema:problemaProposta(),
    solucao:problemaProposta() - instalacaoTipo(),
    equipamento:custoEquipamento().valorTotal,
    telhado:estrutura(),
    homologacao: homologacao(),
    instalacao: instalacao(),
    telhado:estrutura(),
    cmv: custoMercadoriaVendida,
    valorFinal:(custoMercadoriaVendida / (1-(0.42+deducaoImposto+comissaoVenda+taxaCartão))),
    inversor:inversor,
    reducao:valorInstalacaoTipoFormulario
    }

    localStorage.setItem(
        "proposta",
        JSON.stringify(proposta)
    );

    window.location.href = "proposta.html"
    console.log(proposta)

});


