const cancelarProposta = document.getElementById('btn-voltar-proposta');

cancelarProposta.addEventListener('click', ()=> {

    localStorage.removeItem("proposta");
    window.location.href = "plataforma.html"

})