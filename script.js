function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if(idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
           if(idade >= 0 && idade < 10) {
            img.setAttribute('src', 'mulhercrianca.png')
           } else if(idade < 21) {
            img.setAttribute('src', 'mulherjovem.png')
           } else if(idade < 50) {
            img.setAttribute('src', 'mulher.png')
           } else {
            img.setAttribute('src', 'mulheridosa.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` <p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)

    }
}