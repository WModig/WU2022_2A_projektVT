const nav = document.getElementById('linksparent')
const burger = document.getElementById('burger')
function toggleMenu() {

    nav.classList.toggle('linksparent-active')
    burger.classList.toggle('crossed_line')

}

burger.addEventListener('click', toggleMenu)