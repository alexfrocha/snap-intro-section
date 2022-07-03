let collapses = document.querySelectorAll('.collapse')
let dropsContent = document.querySelectorAll('.drop-content')
let grayPattern = document.querySelector('.gray-pattern')
let menuBtn = document.querySelector('.menu')
let nav = document.querySelector('.navbar')

function removerTodosDropsAtivos() {
    collapses.forEach((e) => {
        e.classList.remove('active')
    })
    dropsContent.forEach((e) => {
        e.classList.add('none')
    })
}

for(let i = 0; i < collapses.length; i++) {
    collapses[i].addEventListener('click', () => {
        removerTodosDropsAtivos()
        collapses[i].classList.add('active')
        dropsContent[i].classList.remove('none')
    })
}

let elementosQuePodemClicar = [...dropsContent, ...collapses]
    .map(el => el.children[0])

document.addEventListener('click', (e) => {
    console.log(e.target)
    if(!elementosQuePodemClicar.includes(e.target)) removerTodosDropsAtivos()
})

function fecharNav() {
    nav.classList.remove('active')
    grayPattern.classList.remove('active')
    menuBtn.classList.remove('active')
}

menuBtn.addEventListener('click', (e) => {
    if(menuBtn.classList.contains('active')) return fecharNav()
    menuBtn.classList.add('active')
    nav.classList.add('active')
    grayPattern.classList.add('active')
})

grayPattern.addEventListener('click', fecharNav)