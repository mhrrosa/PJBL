
/* global usuarios */

usuarios = [];

function cadastrar(){
    aux = [];
    var nomeProduto = document.getElementById("inputTitle").value;
    var descricao = document.getElementById("textareaDescricao").value;
    var preco = document.getElementById("inputPreco").value;
    var imagem = document.getElementById("upload").value;
    var estado = document.getElementById("selectEstado").value;
    var cidade = document.getElementById("inputCidade").value;
    var cep = document.getElementById("inputCep").value;
    var nomectt = document.getElementById("inputNomectt").value;
    var emailctt = document.getElementById("inputEmailctt").value;
    var telefonectt = document.getElementById("inputTelefonectt").value;
    
    aux.push(nomeProduto);
    aux.push(descricao);
    aux.push(preco);
    aux.push(imagem);
    aux.push(estado);
    aux.push(cidade);
    aux.push(cep);
    aux.push(nomectt);
    aux.push(emailctt);
    aux.push(telefonectt);
    
    usuarios.push(aux);
    window.localStorage.setItem("dados_usuario",JSON.stringify(usuarios));
    document.getElementById("inputTitle").value = "";
    document.getElementById("textareaDescricao").value = "";
    return usuarios;
}
