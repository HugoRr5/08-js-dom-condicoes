function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora=data.getHours()
    msg.innerHTML =  'Agora sao ${hora}horas.'
    if(hora >= 0 && hora < 12){
       //BOM DIA 
       img.src ='foto do dia '
       document.body.style.background = 'foto'
    }else if(hora >= 12 && hora <= 18){
       //BOA TARDE
       img.src ='foto do tarde '
       document.body.style.background = 'foto'

    } else {
        //BOA NOITE
        img.src ='foto do noite'
        document.body.style.background = 'foto'

    }
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.d=getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length==0 || fano.value > ano){
        Window.alert('verifique os dados e tente novamente ')

    }else {
        var fsex = document.getElementsByTagName('radsex')
        var idade =ano - Number(fano.value)
        res.innerHTML='idade calculada:$(idade)'
        var genero =''
        var img = document.createElement('img')
        if(fsex[0].checked){
            genero='homem'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','foto')
            }else if (idade <21){
            //jovem
            img.setAttribute('src','foto')
            }
            else if (idade < 50){
              // velho
              img.setAttribute('src','foto')
            }else {
                // idoso
                img.setAttribute('src','foto')
            }

        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','foto')
            }else if (idade <21){
                img.setAttribute('src','foto')
            //jovem
            }
            else if (idade < 50){
                img.setAttribute('src','foto')
              // velho
            }else {
                img.setAttribute('src','foto')
                // idoso
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = 'Detectamos $(genero) com $(idade) anos.'
        res.appendChild(img)
    }
    }
    




