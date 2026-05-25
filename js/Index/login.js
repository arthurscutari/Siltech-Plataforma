const usuario = document.getElementById('input-usuario-login')
const senha = document.getElementById('input-senha-login')
const botaoAcessar = document.getElementById('btn-acessar');
const pError = document.getElementById('p-error');

const mostrarSenha = document.getElementById('mostrar-senha')

botaoAcessar.addEventListener('click', (e) => 

{
    e.preventDefault()
    if(usuario.value === "arthurscutari" && senha.value === "admin123") {

        window.location.href = "plataforma.html"
    }
    if(usuario.value === "gabrielsato" && senha.value === "admin123") {

        window.location.href = "plataforma.html"
    }
    else if( usuario.value === "" && senha.value === ""){

        pError.classList.remove('apagar')
    }
    else {
                pError.classList.remove('apagar')


    }
})

mostrarSenha.addEventListener('click', ()=>{

    if (senha.type === "password"){

         senha.type = "text"
        mostrarSenha.className = "bi bi-eye icon-input-login"
    }
    else {

        mostrarSenha.className = "bi bi-eye-slash icon-input-login"
            senha.type = 'password' 
    }
   
})