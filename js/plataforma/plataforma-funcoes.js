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
function gerarId() {

    return Math.floor(100000 + Math.random() * 900000)

}
function lucroQuinze () {

    return economiaAnual() * (((1 + inflacao) ** 15) - 1) / inflacao
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
    return {
    valorTotal: 0,
    potenciaTotal: 0,
    inversor: "Não definido"
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

    if (instalacaoPlataforma.value === "Bifásico") {
        return 70
    }

    if (instalacaoPlataforma.value === "Trifásico") {
        return 110
    }

    return 0
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
function localizacao(){

    const campoTeste = document.getElementById('teste-proposta')
    const campoLocalizacao = document.getElementById('input-cidade')
    if( campoTeste.checked) {

        return "Teste"
    }
    else {
        return campoLocalizacao.value
    }
}