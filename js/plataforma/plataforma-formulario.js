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

const usuarios = {
    1: {
        nome: 'Arthur Alvarez',
        cargo: 'Desenvolvedor'
    },
    2: {
        nome: 'Alex Coelho',
        cargo: 'Diretor Comercial'
    },
    3: {
        nome: 'Pedro Henrique',
        cargo: 'Diretor Operacional'
    },
    4: {
        nome: 'Gabriel Sato',
        cargo: 'Diretor Administrativo / Financeiro'
    },
    5: {
        nome: 'Alef Ferreira',
        cargo: 'SDR'
    },
    6: {
        nome: 'Pedro Brito',
        cargo: 'SDR'
    }
}

const usuarioAtivo = localStorage.getItem('usuarioAtivo')

const usuario = usuarios[usuarioAtivo]

if (usuario) {

    document.querySelectorAll('.usuario-ativo')
        .forEach(el => el.textContent = usuario.nome)

    document.querySelectorAll('.colaborador-ativo')
        .forEach(el => el.textContent = usuario.cargo)

}
const divCanal = document.getElementById('div-canal-vendas')
const checar = document.getElementById('teste-proposta')



checar.addEventListener('click', () => {
    divCanal.classList.toggle('hidden')
})