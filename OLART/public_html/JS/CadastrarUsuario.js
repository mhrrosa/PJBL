/* global usuarios */

usuarios = [];

function cadastrar() {
    aux = [];
    
    var nome = document.getElementById("inputNome").value;
    var sobrenome = document.getElementById("inputSobrenome").value;
    var email = document.getElementById("inputEmail").value;
    var telefone = document.getElementById("inputTelefone").value;
    var usuario = document.getElementById("inputUsuario").value;
    var senha = document.getElementById("inputSenha").value;
    var cidade = document.getElementById("inputCidade").value;
    var bairro = document.getElementById("inputBairro").value;
    var cpf = document.getElementById("inputCpf").value;
    
    if (usuario === ""){
        alert('Por favor, digite um usuario');
    }
    else if(senha === ""){
        alert('Por favor, digite uma senha');
    }
    else{
        aux.push(nome);
        aux.push(sobrenome);
        aux.push(email);
        aux.push(telefone);
        aux.push(usuario);
        aux.push(senha);
        aux.push(cidade);
        aux.push(bairro);
        aux.push(cpf);

        usuarios.push(aux);
        window.localStorage.setItem("dados_usuarios", JSON.stringify(usuarios));
        window.open('../index.html','_self');
    }
}