const celular = document.getElementById('celular-proposta')
const kwh = document.getElementById('consumo-kwh')
const placas = document.getElementById('consumo-placa')
const valorKwh = document.getElementById('valor-kwh-proposta')
celular.addEventListener('input', () => {

    // remove tudo que não for número
    celular.value = celular.value.replace(/\D/g, '')
})
kwh.addEventListener('input', () => {

    // remove tudo que não for número
    kwh.value = kwh.value.replace(/\D/g, '')
})
placas.addEventListener('input', () => {

    // remove tudo que não for número
    placas.value = placas.value.replace(/\D/g, '')

})
