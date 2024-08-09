
//trocar fundo
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img//
    const img = document.querySelector ("#profile Img")
    
    //subistituir a imagem
    if (html.classList.contains ('light')) {
        //se tiver a light mode , adc a img light
        img.setAttribute ('src', "./assets/avatar-light.png")
    } else {
    //se tiver sem light mode, manter img normal
        img.setAttribute ('src', './assets/avatar.png')

        }


//pegar a tag img//
const alt = document.querySelector ("#profile Img")
    
//subistituir a alt
if (html.classList.contains ('light')) {
    //se tiver a light mode , adc a img light
    img.setAttribute ('alt', 'Foto de Marcos Farias em uma escada, usando camisa social branca, fundo desfocado e óculos escuro.')
} else {
//se tiver sem light mode, manter img normal
    img.setAttribute ('alt', 'Foto de Marcos Farias em uma escada, usando camisa social branca.')

    }





}