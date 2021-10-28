$(function(){
    $('#upload').change(function(){
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = function(){
           $('#img').attr('src', fileReader.result)
            document.getElementById('upload').remove()
            document.getElementsByClassName('imagem')[0].remove()
        }
        fileReader.readAsDataURL(file)
    })
})