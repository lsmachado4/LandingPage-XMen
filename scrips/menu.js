// ? Menu Responsivo

let show = true

const menuContainer = document.querySelector(".container__menu")
const menuToggle = menuContainer.querySelector('.container__menu__toggle__selector')

menuToggle.addEventListener("click", () =>{
    menuContainer.classList.toggle("on", show)
    show = !show
})