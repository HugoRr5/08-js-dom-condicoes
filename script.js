function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora=data.getHours()
    msg.innerHTML =  'Agora sao ${hora}horas.'
    if(hora >= 0 && hora < 12){
       //BOM DIA 
       img.src ='foto do dia '
       document.body.style.background = ''
    }else if(hora >= 12 && hora <= 18){
       //BOA TARDE
       img.src ='foto do tarde '
       document.body.style.background = ''

    } else {
        //BOA NOITE
        img.src ='foto do tarde'
        document.body.style.background = ''

    }
}

