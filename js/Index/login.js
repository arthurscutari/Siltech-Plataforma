const usuario = document.getElementById('input-usuario-login')
const senha = document.getElementById('input-senha-login')
const botaoAcessar = document.getElementById('btn-acessar');
const pError = document.getElementById('p-error');

const mostrarSenha = document.getElementById('mostrar-senha')
let usuarioAtivo = 0

botaoAcessar.addEventListener('click', (e) => 

{
    e.preventDefault()
  if(usuario.value === "arthurscutari" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '1')

    window.location.href = "plataforma.html"
}
   else if(usuario.value === "alex@siltechsolar.com.br" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '2')

    window.location.href = "plataforma.html"
}
else if(usuario.value === "pedro@siltechsolar.com.br" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '3')

    window.location.href = "plataforma.html"
}
else if(usuario.value === "gabriel.sato@siltechsolar.com.br" && senha.value === "admin123") {

    localStorage.setItem('usuarioAtivo', '4')

    window.location.href = "plataforma.html"
}
   else if(usuario.value === "alaf.ferreira@siltechsolar.com.br" && senha.value === "sdr012026") {

    localStorage.setItem('usuarioAtivo', '5')

    window.location.href = "plataforma.html"
}
   else if(usuario.value === "pedro.brito@siltechsolar.com.br" && senha.value === "sdr022026") {

    localStorage.setItem('usuarioAtivo', '6')

    window.location.href = "plataforma.html"
}
else if (usuario.value === "" && senha.value === ""){

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

