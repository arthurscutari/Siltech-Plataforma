//Custos fixos.
const deducaoImposto = 0.06
const contribuição = 0.42
const comissaoVenda = 0.05
const taxaCartão = 0
const inflacao = 0.1
const custoRetorno = 550
const consumoEscolha = document.getElementById('consumo-proposta')
const consumoPlaca = document.getElementById('consumo-placa')
const consumokwh = document.getElementById('consumo-kwh')
const quantidadePlaca = document.getElementById('quantidade-placa-proposta')
const hspPlataforma = document.getElementById('input-hsp')
const moduloPlataforma = document.getElementById('modulo-proposta') 

function geracaoEnergia() {

const moduloPlataforma = document.getElementById('modulo-proposta').value

    
    if (moduloPlataforma === "575Wp Tier 1"){

        const placas = Number(quantidadePlaca.textContent)
        return (Number((hspPlataforma.textContent * 575 * 30 * 0.8) / 1000)) * placas
    }
     if (moduloPlataforma === "585Wp Tier 1"){
                const placas = Number(quantidadePlaca.textContent)

        return (Number((hspPlataforma.textContent * 585 * 30 * 0.8) / 1000)) * placas
    }
     if (moduloPlataforma === "610Wp Tier 1"){
                const placas = Number(quantidadePlaca.textContent)

              return (Number((hspPlataforma.textContent * 610 * 30 * 0.8) / 1000)) * placas

    }
     if (moduloPlataforma === "700Wp Tier 1"){
                const placas = Number(quantidadePlaca.textContent)

             return (Number((hspPlataforma.textContent * 700 * 30 * 0.8) / 1000)) * placas

    }

}

function calcularPlaca() {

    if (consumoEscolha.value == "1") {

    const energiaGenarada = document.getElementById('modulo-proposta')
    let energia = 0
      if (energiaGenarada.value === '575Wp Tier 1'){
        energia = 575
      }
      if (energiaGenarada.value === '585Wp Tier 1'){

        energia = 585
      }
      if (energiaGenarada.value === '610Wp Tier 1'){

        energia = 610
      }
      if (energiaGenarada.value === '700Wp Tier 1'){

        energia = 700
      }
        const consumo = Number(consumokwh.value)
        const hsp = document.getElementById('input-hsp').textContent
        const eficiencia = 0.8
        const geracaoMensal = Number(hsp * energia * 30 * eficiencia) / 1000
        const resultado =  Math.ceil(consumo / geracaoMensal)
        quantidadePlaca.textContent =  resultado
    }

    else if (consumoEscolha.value == "2") {

        quantidadePlaca.textContent = consumoPlaca.value
    }
  
}

consumoEscolha.addEventListener(
    'change',
    calcularPlaca
)

consumokwh.addEventListener(
    'input',
    calcularPlaca
)

consumoPlaca.addEventListener(
    'input',
    calcularPlaca
)

const qtdPlacas = document.getElementById('quantidade-placa-proposta')
const hsp = document.getElementById('input-hsp')
const confirmarProposta = document.getElementById('btn-confirmar-plataforma')
const botaoGerarPdf = document.getElementById('btn-gerar-plataforma')

confirmarProposta.addEventListener('click', gerarProposta)
const colaboradorAtivo = document.getElementById('usuario-ativo')



//Espaço para Variavels de campo. Seleção dos inputs
const nomePlataforma = document.getElementById('nome-proposta')
const celularPlataforma = document.getElementById('celular-proposta')
const canalPlataforma = document.getElementById('canal-proposta')
const testePlataforma = document.getElementById('teste-proposta')
const instalacaoPlataforma = document.getElementById('instalacao-proposta')
const localizacaoPlataforma = document.getElementById('input-cidade')
const telhadoPlataforma = document.getElementById('telhado-proposta')
const inversorPlataforma = document.getElementById('inversor-proposta')

function gerarId() {

    return Math.floor(100000 + Math.random() * 900000)

}
function lucroQuinze () {

    return economiaAnual * (((1 + inflacao) ** 15) - 1) / inflacao
}
function economiaAnual() {

    return (geracaoEnergia() * custoEnergia() * 12) - (solucao()*12) 
} 
function custoMercadoriaVendida() {

    return (custoEquipamento().valorTotal + custoEstrutura() + custoHomologacao() + custoInstalacao() + custoRetorno )
}
function custoEstrutura(){

    if (telhadoPlataforma.value === "Cerâmico") {
        return 0
    }
    if (telhadoPlataforma.value === "Fibrocimento") {
        return 0
    }
    if (telhadoPlataforma.value === "Laje") {

        return 3000
    }
    if (telhadoPlataforma.value ===  "Metálico") {
        return 0
    }

}
function custoEquipamento() {

    const inversor3kw = 1800
    const inversor6kw = 2800

    const potencia3kw = 3
    const potencia6kw = 6

    
    const expansao = expansaoPlaca()
    const placaTotal = Number(quantidadePlaca.textContent) + Number(expansaoPlaca())

    if (placaTotal >= 4 && placaTotal <= 8) {

        let valorPlaca = 825
        return {
        valorTotal: inversor3kw + (valorPlaca * placaTotal),
        potenciaTotal: potencia3kw,
        inversor:"1x 3kw"
        }
    }
     if (placaTotal >= 9 && placaTotal <= 15) {

        let valorPlaca = 800
        return {
        valorTotal: inversor6kw + (valorPlaca * placaTotal),
        potenciaTotal: potencia6kw,
        inversor:"1x 6kw"
        }
    }
    if (quantidadePlaca.textContent >= 16 && quantidadePlaca.textContent <= 23) {

         let valorPlaca = 775
        return {
        valorTotal: inversor6kw + inversor3kw + (valorPlaca * quantidadePlaca.textContent),
        potenciaTotal: potencia6kw + potencia3kw,
        inversor:"1x 6kw + 1x 3kw"
        }
    }
    if (quantidadePlaca.textContent >= 24 && quantidadePlaca.textContent <= 30) {

        let valorPlaca = 750
        return {
        valorTotal: (inversor6kw * 2) + (valorPlaca * quantidadePlaca.textContent),
        potenciaTotal: potencia6kw * 2,
        inversor:"2x 6kw"
        }

    }
    if (quantidadePlaca.textContent >= 31 && quantidadePlaca.textContent <= 45) {

         let valorPlaca = 750
        return {
        valorTotal: (inversor6kw * 3) + (valorPlaca * quantidadePlaca.textContent),
        potenciaTotal: potencia6kw *3,
        inversor:"3x 6kw"
    }
    }
    if (quantidadePlaca.textContent >= 46 && quantidadePlaca.textContent <= 60) {

        let valorPlaca = 750
        return {
        valorTotal: (inversor6kw * 4) + (valorPlaca * quantidadePlaca.textContent),
        potenciaTotal: potencia6kw *4,
          inversor:"4x 6kw"
    } 
    }

}
function expansaoPlaca(){

    const expansaoPlacasPlataforma = document.getElementById('qtd-expansao-proposta')

    if (expansaoPlacasPlataforma.value > 0){

        return expansaoPlacasPlataforma.value
    }
    else {

        return 0
    }
}
function custoEnergia (){

    const kwhPlataforma = document.getElementById('valor-kwh-proposta')

        if (kwhPlataforma.value !== "") {

            return parseFloat(kwhPlataforma.value);
        }
        else {

            return 0.95
        }

}
function custoHomologacao() {

    
    if (custoEquipamento().potenciaTotal <= 10) {

        return 450
    }
    if (custoEquipamento().potenciaTotal <= 20){
        return 650
    } 
    if (custoEquipamento().potenciaTotal <= 50) {
        return 800
    }
    if (custoEquipamento().potenciaTotal <= 75) {
        
        return 1000
    }
}
function custoInstalacao() {

    const placa = Number(quantidadePlaca.textContent)

    if ( placa <= 13) {
         return placa * 205
    }
    if ( placa  <= 26) {
         return placa * 180
    }
    if ( placa  <= 32) {
         return placa * 165
    }
    if ( placa  <= 48) {
         return placa * 155
    }
    if ( placa  <= 62) {
         return placa * 125
    }

}   
function solucao() {

    const instalacaoPlataforma = document.getElementById('instalacao-proposta')

    if (instalacaoPlataforma.value === "Bifásico"){

        return 70
    }
    if(instalacaoPlataforma.value === "Trifásico")
    {
        return 110
    }
}
function valorEnergiaSemSiltech () {

    return geracaoEnergia() * custoEnergia()
}
function custoFinalProposta () {
    
    return custoMercadoriaVendida() /( 1 -(0.42 + deducaoImposto + comissaoVenda))
} 
function propostaTeste(){

    const teste = document.getElementById('teste-proposta')
    if (teste.checked){

        return "Sim"
    }
    else {

        return "Não"
    }
}

//Espaço para Variaveis de resumo

const nomeResumo = document.getElementById('nome-resumo')
const celularResumo = document.getElementById('celular-resumo')
const canalResumo = document.getElementById('canal-resumo')
const localizacaoResumo = document.getElementById('localizacao-resumo')
const testeResumo = document.getElementById('teste-resumo')
const instalacaoResumo = document.getElementById('instalacao-resumo')
const telhadoResumo = document.getElementById('telhado-resumo')
const areaResumo = document.getElementById('area-resumo')
const moduloResumo = document.getElementById('modulo-resumo')
const inversorResumo = document.getElementById('inversor-resumo')
const expansaoResumo = document.getElementById('expansao-resumo')
const quantidadePlacaResumo = document.getElementById('placas-resumo')
const hspResumo = document.getElementById('hsp-resumo')
const kwhResumo = document.getElementById('kwh-resumo')
const promocaoResumo = document.getElementById('promocao-resumo')
const equipamentoResumo = document.getElementById('equipamento-resumo')
const estruturaResumo = document.getElementById('estrutura-resumo')
const retornoResumo = document.getElementById('retorno-resumo')
const homologacaoResumo = document.getElementById('homologacao-resumo')
const cmvResumo = document.getElementById('cmv-resumo')
const valorSemSiltechResumo = document.getElementById('valor-sem-resumo')
const valorComSiltechResumo = document.getElementById('valor-com-resumo')
const valorFinalResumo = document.getElementById('valor-final-resumo')
const economiaQuinze = document.getElementById('economia-resumo')
const economiaUm = document.getElementById('economia-1-ano-resumo')
const economiaQuinzeAnual = document.getElementById('economia-15-anos-resumo')
const geracaoEnergiaResumo = document.getElementById('geracao-energia-resumo')

botaoGerarPdf.addEventListener('click', () =>{

    window.location.href = "proposta.html"
})

const btnGerarPDF = document.getElementById('btn-gerar-plataforma')

function gerarProposta() {

    const proposta = {

        colaborador: colaboradorAtivo.textContent, 
        data:new Date().toLocaleDateString('pt-BR'),
        id:gerarId(),
        nome:nomePlataforma.value,
        celular:celularPlataforma.value,
        canal:canalPlataforma.value,
        teste:propostaTeste(),
        localizacao:localizacaoPlataforma.value,
        instalacao:instalacaoPlataforma.value,
        telhado:telhadoPlataforma.value,
        area:Number(quantidadePlaca.textContent * 3),
        modulo: moduloPlataforma.value,
        inversor:custoEquipamento().inversor,
        expansao: expansaoPlaca(),
        placas: qtdPlacas.textContent,
        hsp:hsp.textContent,
        kwh:custoEnergia(),
        promocao: "0",
        equipamento: custoEquipamento().valorTotal,
        estrutura: custoEstrutura(),
        homologacao: custoHomologacao(),
        retorno: custoRetorno,
        cmv: custoMercadoriaVendida(),
        valorSemSiltech: valorEnergiaSemSiltech(),
        valorComSiltech: solucao(),
        economiaAnual:economiaAnual(),
        economia:economiaAnual() * 15,
        valorFinal: custoFinalProposta(),
        energiaGerada:geracaoEnergia()


    }
    localStorage.setItem('proposta', JSON.stringify(proposta))

    fetch("https://script.google.com/macros/s/AKfycbyFmuY-oNvdL4lxxqkfTtCuaVuaYhGjyW_KBQvXLshtX-RJcmWnYWinyik2JA7yAXeNaQ/exec", {

        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(proposta)

    })
    .then(() => {

        console.log("Proposta enviada!")

    })
    .catch((error) => {

        console.log("Erro:", error)

    })
  
    nomeResumo.textContent = proposta.nome
    celularResumo.textContent = proposta.celular
    localizacaoResumo.textContent = proposta.localizacao
    areaResumo.textContent = proposta.area + "m²"
    quantidadePlacaResumo.textContent = proposta.placas
    valorSemSiltechResumo.textContent = proposta.valorSemSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'});
    valorComSiltechResumo.textContent = proposta.valorComSiltech.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL' });
    economiaUm.textContent = proposta.economiaAnual.toLocaleString('pt-BR', {
     style: 'currency',currency: 'BRL'});
    economiaQuinzeAnual.textContent = (proposta.economiaAnual * 15).toLocaleString('pt-BR', {
     style: 'currency', currency: 'BRL'});
    geracaoEnergiaResumo.textContent = proposta.energiaGerada.toFixed(2)

    console.log (proposta)
    
    botaoGerarPdf.classList.remove('esconder');

}

