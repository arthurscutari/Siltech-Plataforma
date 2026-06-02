const sairPlataforma = document.getElementById('btn-sair-plataforma')


sairPlataforma.addEventListener('click', () => {

    window.location.href = "index.html"
    localStorage.removeItem('usuarioAtivo')
})

const divProposta = document.getElementById('div-proposta')
const divDashboard = document.getElementById('div-dashboard')

const containerProposta = document.getElementById('container-proposta')
const containerDashboard = document.getElementById('container-dashboard')

const iconProposta = document.getElementById('icon-proposta-nav')
const textProposta  = document.getElementById('text-proposta-nav')

const iconDashboard = document.getElementById('icon-dashboard-nav')
const textDashboard  = document.getElementById('text-dashboard-nav')

divDashboard.addEventListener('click',()=>{

    containerDashboard.classList.remove('hidden')
    containerProposta.classList.add('hidden')

    iconProposta.classList.remove('selecionadoTag')
    textProposta.classList.remove('selecionadoTag')
    divProposta.classList.remove('selecionado')

    iconDashboard.classList.add('selecionadoTag')
    textDashboard.classList.add('selecionadoTag')
    divDashboard.classList.add('selecionado')
})

divProposta.addEventListener('click',()=>{

    containerProposta.classList.remove('hidden')
    containerDashboard.classList.add('hidden')

    iconProposta.classList.add('selecionadoTag')
    textProposta.classList.add('selecionadoTag')
    divProposta.classList.add('selecionado')

    iconDashboard.classList.remove('selecionadoTag')
    textDashboard.classList.remove('selecionadoTag')
    divDashboard.classList.remove('selecionado')


})