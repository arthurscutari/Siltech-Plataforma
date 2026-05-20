
//Código para calcular mostrar inputs
const escolhaConsumo = document.getElementById('consumo-form__proposta');
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
    