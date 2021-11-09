/* global usuarioLogado */

usuarioLogado = [];

function VerificaLogin(){
    aux = [];
    dados = JSON.parse(window.localStorage.getItem("dados_usuarios"));
    var Usuario = document.getElementById("inputUsuario").value;
    var Senha = document.getElementById("inputSenha").value;
    
    
    if(Usuario === "" && Senha == "")
        alert('Preencha os campos de usuario e senha');
    else if (Usuario === ""){
        alert('Preencha o campo de Usuario');
    }
    else if (Senha == ""){
        alert('Preencha o campo da Senha');
    }
    else{
        
        try{
            for (var i = 0; i < dados.length; i++) {
                if (Usuario == dados[i][4] && Senha == dados[i][5]){
                     aux.push(Usuario);
                     aux.push(Senha);
                     usuarioLogado.push(aux);
                     window.localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
                     window.open('paginas/home.html','_self');
                }
                else{
                    alert('Login ou Senha invalidos');
                }

            }
        }catch(error){
            alert('Login ou Senha invalidos');
        }

  }
 
 }



