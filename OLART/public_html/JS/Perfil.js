


function atualizar() {
    src = "";
    dados = JSON.parse(window.localStorage.getItem("dados_produtos"));
    usuarioLogado = JSON.parse(window.localStorage.getItem("usuarioLogado"));
        for (var i = 0; i < dados.length; i++) {
            if (dados[i][10] == usuarioLogado[0][0]){
                src = dados[i][3];
                document.getElementById("cards").innerHTML += "<div class=card-externo id="+i+">\n\
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
                console.log(i);
            }
        }

}
function inserirValores(){
     dados = JSON.parse(window.localStorage.getItem("dados_usuarios"));   
     for (var i = 0; i < dados.length; i++) {
            if (dados[i][4] == usuarioLogado[0][0]){
                console.log('entrou');
                document.getElementById("input-name").value = dados[i][0];
                document.getElementById("input-sobrenome").value = dados[i][1];
                document.getElementById("input-email").value = dados[i][2];
                document.getElementById("input-usuario").value = dados[i][4];
                document.getElementById("input-senha").value = dados[i][5];
                document.getElementById("input-cidade").value = dados[i][6];
                document.getElementById("input-cpf").value = dados[i][8];
                
                
            }
            else{
                alert('erro ao carregar dados do usuario');
            }
        }
}

function atualizarDados(){
        var imagem = document.getElementById("upload").files[0].name;
    window.localStorage.setItem("dados_produtos", JSON.stringify(imagem));
}
window.onload = function() {
    atualizar();
    inserirValores();
};

