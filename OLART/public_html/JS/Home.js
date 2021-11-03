
function atualizar() {
    src = "";
    dados = JSON.parse(window.localStorage.getItem("dados_produtos"));
    for (var i = 0; i < dados.length; i++) {
        src = dados[i][3];
        document.getElementById("teste").innerHTML += "<div class=card-externo id="+i+">\n\
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
                                <button id="+i+" class=adicionar-carrinho>\n\
                                    <img class=carrinho src=../imagens/carrinho.png>\n\
                                        Adicionar ao carrinho\n\
                                </button>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
                        ";
        console.log(i);
    }
VerificaId();
}
function VerificaId(){
   $("#produtoid").find("button").click(function(){
      console.log($(this).attr("id"));
   });
};

window.onload = function() {
    atualizar();
};