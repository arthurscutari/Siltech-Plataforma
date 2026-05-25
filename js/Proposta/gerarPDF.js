const containerEnviarDados = document.getElementById('container-enviar')

const baixarPdf = document.getElementById('btn-baixar-proposta')

baixarPdf.addEventListener('click', (e)=>{

    e.preventDefault();

    containerEnviarDados.classList.add("hidden")

    setTimeout(() => {

        window.print()

        containerEnviarDados.classList.remove("hidden")

    }, 100)

})