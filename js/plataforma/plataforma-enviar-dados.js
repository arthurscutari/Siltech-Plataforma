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


const btnGerarPDF = document.getElementById('btn-gerar-plataforma')
const confirmarProposta = document.getElementById('btn-confirmar-plataforma')
confirmarProposta.addEventListener('click', gerarProposta)

function gerarProposta(e) {
   e.preventDefault()
     if (!validarFormulario()) {

        console.log('Formulário inválido')
        return
    }

    const proposta = {

        colaborador: colaboradorAtivo.textContent, 
        data:new Date().toLocaleDateString('pt-BR'),
        id:gerarId(),
        nome:nomePlataforma.value,
        celular:celularPlataforma.value,
        canal:canalPlataforma.value,
        teste:propostaTeste(),
        localizacao:localizacao(),
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
    //Código para enviar os dados para o BD
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
   console.log(nomeResumo)

  
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
    
    btnGerarPDF.classList.remove('esconder');

}



btnGerarPDF.addEventListener('click', () =>{

    window.location.href = "proposta.html"

   
})
