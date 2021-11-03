var boxCartao = document.getElementById("cartao").style;
var boxPix = document.getElementById("pix").style;
var boxBoleto = document.getElementById("boleto").style;

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