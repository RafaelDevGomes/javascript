function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = 11
    // let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#FFD166'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#E09F3E'
        //boa tarde
    } else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#0B132B'
        //boa noite
    }
}


