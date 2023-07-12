function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours()
    msg.innerHTML =  `agora sao ${hora} horas.`
    if(hora >= 0 && hora < 12){
       //BOM DIA 
       img.src ='foto-da-manha.png'
       document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
       //BOA TARDE
       img.src ='foto-da-tarde.png '
       document.body.style.background = '#b9846f'

    } else {
        //BOA NOITE
        img.src ='foto-da-noite.png'
        document.body.style.background = '#515154'

    }
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length==0 || fano.value > ano){
        Window.alert('verifique os dados e tente novamente ')

    }else {
        var fsex = document.getElementsByTagName('radsex')
        var idade =ano - Number(fano.value)
        res.innerHTML=`idade calculada:${idade}`
        var genero =''
        var img = document.createElement('img')
        if(fsex[1].checked){
            genero='homem'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','foto-de-menino.png')
            }else if (idade <21){
            //jovem
            img.setAttribute('src','foto-de-adolecenteM.png')
            }
            else if (idade < 50){
              // velho
              img.setAttribute('src','foto-de-adulto.png')
            }else {
                // idoso
                img.setAttribute('src','foto-de-velho.png')
            }

        }else if(fsex[2].checked){
            genero='mulher'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','foto-de-menina.png')
            }else if (idade <21){
                img.setAttribute('src','foto-de-adolecenteF.png')
            //jovem
            }
            else if (idade < 50){
                img.setAttribute('src','foto-de-mulher.png')
              // velho
            }else {
                img.setAttribute('src','foto-de-velha.png')
                // idoso
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
    




