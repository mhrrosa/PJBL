function atualizar() {

    src = "";
    dados = JSON.parse(window.localStorage.getItem("dados_produtos"));
    try {
        for (var i = 0; i < dados.length; i++) {
            src = dados[i][3];
            document.getElementById("gerar").innerHTML += "<div class=card-externo id=" + i + ">\n\
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
                                <div id=produtoid class=box-adicionar-carrinho>\n\
                                    <button id=" + i + " class=adicionar-carrinho>\n\
                                        <img class=carrinho src=../imagens/carrinho.png>\n\
                                            Adicionar ao carrinho\n\
                                    </button>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
                            ";
        }
    } catch (error) {

    }

}

function VerificaId() {
    $("#produtoid").find("button").click(function() {
        console.log($(this).attr("id"));
    });
};

window.onload = function() {
    atualizar();
    gerarCardDinamico();
};


var count = "";

var artes = [
    [1, "A Noite Estrelada", "A pintura retrata a paisagem da janela do quarto do artista Van Gogh enquanto esteve no hospício de Saint-Rémy-de-Provence, sendo considerada uma das obras mais significativas do artista holandês.", "50Mi"],

    [2, "Mona Lisa", "Mona Lisa também conhecida como A Gioconda ou ainda Mona Lisa del Giocondo é a mais notável e conhecida obra de Leonardo da Vinci, um dos mais eminentes homens do Renascimento italiano.", "790Mi"],

    [3, "O grito", "O Grito é uma série de quatro pinturas do norueguês Edvard Munch, 1893. A obra representa uma figura andrógina num momento de profunda angústia e desespero. O plano de fundo é a doca do fiorde de Oslo ao pôr do sol", "120Mi"],

    [4, "Abaporu", "Abaporu é uma pintura a óleo da artista brasileira Tarsila do Amaral. É uma das principais obras do período antropofágico do movimento modernista no Brasil.", "40Mi"]
];

function gerarCardDinamico() {


    for (let i = 0; i < artes.length; i++) {


        count += '<div class=card-alinhar>';
        count += '<div class=card-externo>';
        count += '<div class=card-interno>';
        count += '<div class=carousel slide>';
        count += '<img class=img-cadastro src=../imagens/artes/' + i + '.png' + ' > ';
        count += '</div>';
        count += '<div class=infos id="id_infos">';
        count += '<h2 class=titulo-arte">' + artes[i][1] + '</h2>';
        count += '<hr class=separador-card>';
        count += '<h2 class=descricao-titulo> sobre </h2>';
        count += '<div class=box-descricao>';
        count += '<p class=descricao-card>' + artes[i][2] + '</p>';
        count += '</div>';
        count += '<h2 class=preco>' + artes[i][3] + '</h2>';
        count += '</div>';
        count += '</div>';
        count += '<div class=box-adicionar-carrinho>';
        count += '<button class=adicionar-carrinho><img class=carrinho src=../imagens/carrinho.png alt="">Adicionar ao carrinho</button>';
        count += '</div>';
        count += '</div>';
        count += '</div>';
    }

    document.getElementById("gerarcards").innerHTML = count;
}