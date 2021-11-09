var boxCartao = document.getElementById("cartao").style;
var boxPix = document.getElementById("pix").style;
var boxBoleto = document.getElementById("boleto").style;
var valores = Object.values(document.getElementsByClassName("preco")).map(e => e.innerHTML).reduce((a, c) => a + parseFloat(c.replaceAll("R$ ", "").replaceAll(".", "").replaceAll(",", ".")), 0)
document.getElementsByClassName("soma-total")[0].innerHTML = formatar(valores);

var arte1 = "existe"
var arte2 = "existe"

function pix() {

    if (boxBoleto.display == "none" && boxCartao.display == "none") {
        boxPix.display = "";
        return false;
    }
    boxBoleto.display = "none";
    boxCartao.display = "none";

}

function boleto() {

    if (boxPix.display == "none" && boxCartao.display == "none") {
        boxBoleto.display = "";
        return false;
    }
    boxPix.display = "none";
    boxCartao.display = "none";

}

function cartao() {

    if (boxPix.display == "none" && boxBoleto.display == "none") {
        boxCartao.display = "";
        return false;
    }
    boxPix.display = "none";
    boxBoleto.display = "none";

}

function formatar(reais) {
    return reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function dataMask(value) {
    value = value || window.event;
    var key = value.keyCode || value.which;
    number = String.fromCharCode(key)

    const maskedValue = number
      .replace(/\D/g,"")
      .replace(/(\d{2})(\d)/,'$1/$2')
      console.log(maskedValue.substring(0,5))
      return maskedValue.substring(0,5);
}

function clicar_botao1() {
    document.getElementById("arte1").style.display = "none";
    arte1 = "não existe"
    valor()
}

function clicar_botao2(){
    document.getElementById("arte2").style.display = "none";
    arte2 = "não existe"
    valor()  
}

function valor() {
    if (arte1=="existe" && arte2=="existe") {
        document.getElementsByClassName("soma-total")[0].innerHTML = formatar(3000)
    } 
    if(arte1!="existe" && arte2=="existe") {
        document.getElementsByClassName("soma-total")[0].innerHTML = formatar(2000)
    }
    if(arte1=="existe" && arte2!="existe") {
        document.getElementsByClassName("soma-total")[0].innerHTML = formatar(1000)
    }
    if(arte1!="existe" && arte2!="existe") {
        document.getElementsByClassName("soma-total")[0].innerHTML = formatar(0)
    }
}

function talvez_deletar_arte1(){
    document.getElementById("talvez-deletar1").style.display = "none";
    document.getElementById("delet1").style.display = "inline";
}

function talvez_deletar_arte2(){
    document.getElementById("talvez-deletar2").style.display = "none";
    document.getElementById("delet2").style.display = "inline";
}

function nao_clicar_botao1() {
    document.getElementById("talvez-deletar1").style.display = "inline";
    document.getElementById("delet1").style.display = "none";
}
function nao_clicar_botao2() {
    document.getElementById("talvez-deletar2").style.display = "inline";
    document.getElementById("delet2").style.display = "none";
}
document.getElementById("cartao").addEventListener("keypress", dataMask);