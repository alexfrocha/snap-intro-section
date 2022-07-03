let collapses = document.querySelectorAll('.collapse')
let dropsContent = document.querySelectorAll('.drop-content')


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
    .forEach((item) => outrosElementos.push(item.children))

let outrosElementos = []

document.addEventListener('click', (e) => {
    outrosElementos.forEach((item) => {
        console.log(item.className)
        if(e.target.classList.contains(item.className)) removerTodosDropsAtivos()
    })
})