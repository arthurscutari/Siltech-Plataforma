//Código para mostrar inputs
const escolhaConsumo = document.getElementById('consumo-proposta');
const divPlacas = document.getElementById('div-consumo-placa')
const divKwh = document.getElementById('div-consumo-kwh')


escolhaConsumo.addEventListener('change', () =>{


    if (escolhaConsumo.value == 0) {
        divKwh.classList.add('hidden')
        divPlacas.classList.add('hidden')
        
    }
    if (escolhaConsumo.value == 1) {
        divKwh.classList.remove('hidden')
        divPlacas.classList.add('hidden')
        
    }
     if (escolhaConsumo.value == 2) {
        divPlacas.classList.remove('hidden')
        divKwh.classList.add('hidden')
       
    }
})

const expansao = document.getElementById("expansao");
const alvo = document.getElementById("div-input-expansao");

expansao.addEventListener("change", function () {

    

    if (expansao.checked) {
        alvo.classList.remove('hidden')
    }
    else {
        alvo.classList.add('hidden')
    }

})

const usuarioAtivo = localStorage.getItem('usuarioAtivo')

const nomeUsuario = document.getElementById('usuario-ativo')

const nomeColaborador = document.getElementById('colaborador-ativo')

if (usuarioAtivo === '1') {

    nomeUsuario.textContent = "Arthur Alvarez"

    nomeColaborador.textContent = "Programador"

}
if (usuarioAtivo === '2') {

    nomeUsuario.textContent = "Gabriel Sato"

    nomeColaborador.textContent = "Administrador"

}
if (usuarioAtivo === '3') {

    nomeUsuario.textContent = "Alef Ferreira"

    nomeColaborador.textContent = "SDR"

}
if (usuarioAtivo === '4') {

    nomeUsuario.textContent = "Pedro Brito"

    nomeColaborador.textContent = "SDR"

}

const divCanal = document.getElementById('div-canal-vendas')
const checar = document.getElementById('teste-proposta')



checar.addEventListener('click', () => {
    divCanal.classList.toggle('hidden')
})