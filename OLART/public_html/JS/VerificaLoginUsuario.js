/* global usuarioLogado */

usuarioLogado = [];

function VerificaLogin(){
    aux = [];
    dados = JSON.parse(window.localStorage.getItem("dados_usuarios"));
    var Usuario = document.getElementById("inputUsuario").value;
    var Senha = document.getElementById("inputSenha").value;
    
    
    for (var i = 0; i < dados.length; i++) {
        if (Usuario == dados[i][4] && Senha == dados[i][5]){
             console.log('deu certo');
             aux.push(Usuario);
             aux.push(Senha);
             usuarioLogado.push(aux);
             window.localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
             window.open('paginas/home.html');
        }
        else{
            alert('Login ou Senha invalidos');
        }
                
    }
    
}


