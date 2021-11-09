function atualizar() {
    src = "";

    dados = JSON.parse(window.localStorage.getItem("dados_produtos"));
    usuarioLogado = JSON.parse(window.localStorage.getItem("usuarioLogado"));
    try {
        for (var i = 0; i < dados.length; i++) {
            if (dados[i][10] == usuarioLogado[0][0]) {
                src = dados[i][3];
                console.log("teste");
                document.getElementById("cards").innerHTML += "<div class=card-externo id=" + i + ">\n\
                               <div class=card-externo>\n\
                                <div class=card-interno>\n\
                                  <div>\n\
                                       <img class=img-cadastro src=" + "../imagens/" + src + " id=imagem1/>\n\
                                   </div>\n\
                                    <div class=infos>\n\
                                        <h2 class=titulo-arte id=ti>" + dados[i][0] + "</h2>\n\
                                        <hr class=separador-card>\n\
                                        <h2 class=descricao-titulo>Sobre</h2>\n\
                                    <div class=box-descricao>\n\
                                        <p class=descricao-card>" + dados[i][1] + "\n\
                                        </p>\n\
                                    </div>\n\
                                    <h2 class=preco>" + "R$ " + dados[i][2] + "</h2>\n\
                                 </div>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                                ";

            }
        }
    } catch (error) {

    }
}

$(function() {
    $('#upload').change(function() {
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = function() {
            $('#img').attr('src', fileReader.result)
            document.getElementById('upload').remove()
            document.getElementsByClassName('imagem')[0].remove()
        }
        fileReader.readAsDataURL(file)
    })
})

function inserirValores() {
    dados = JSON.parse(window.localStorage.getItem("dados_usuarios"));
    for (var i = 0; i < dados.length; i++) {
        document.getElementById("input-name").value = dados[i][0];
        document.getElementById("input-sobrenome").value = dados[i][1];
        document.getElementById("input-email").value = dados[i][2];
        document.getElementById("input-telefone").value = dados[i][3];
        document.getElementById("input-usuario").value = dados[i][4];
        document.getElementById("input-senha").value = dados[i][5];
        document.getElementById("input-cidade").value = dados[i][6];
        document.getElementById("input-bairro").value = dados[i][7];
        document.getElementById("input-cpf").value = dados[i][8];
    }
}
usuarios = [];

function atualizarDados() {
    aux = [];
    var nome = document.getElementById("input-name").value;
    var sobrenome = document.getElementById("input-sobrenome").value;
    var email = document.getElementById("input-email").value;
    var telefone = document.getElementById("input-telefone").value;
    var usuario = document.getElementById("input-usuario").value;
    var senha = document.getElementById("input-senha").value;
    var cidade = document.getElementById("input-cidade").value;
    var bairro = document.getElementById("input-bairro").value;
    var cpf = document.getElementById("input-cpf").value;

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
    console.log(JSON.stringify(usuarios))
    var imagem = document.getElementById("upload").files[0].name;
    window.localStorage.setItem("dados_produtos", JSON.stringify(imagem));
}

window.onload = function() {
    atualizar();
    inserirValores();
};