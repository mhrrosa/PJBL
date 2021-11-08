/* global produtos */

produtos = [];

function cadastrar() {
    aux = [];
    usuarioLogado = JSON.parse(window.localStorage.getItem("usuarioLogado"));

    var nomeProduto = document.getElementById("inputTitle").value;
    var descricao = document.getElementById("textareaDescricao").value;
    var preco = document.getElementById("inputPreco").value;
    var imagem = document.getElementById("upload").files[0].name;
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
    aux.push(usuarioLogado[0][0]);

    produtos.push(aux);
    console.log(produtos);
    window.localStorage.setItem("dados_produtos", JSON.stringify(produtos));
    window.open('../paginas/home.html');
    return produtos;
}