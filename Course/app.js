const dark = document.querySelector(".darkmodetoggle")
const body = document.querySelector("body")
const sell = document.querySelector("#sell")
const Dark = document.querySelector(".fa-moon")
const light = document.querySelector(".fa-sun")
const toplogolight = document.querySelector(".lightlogo")
const toplogodark = document.querySelector(".darklogo")
const scrolltotop = document.querySelector(".scrolltop")
const home = document.querySelector("#home")
const burger = document.querySelector(".burger")
const links = document.querySelector("header .links")

burger.addEventListener('click',()=>{
    links.classList.toggle("slide")
    burger.classList.toggle("slide")

})

dark.addEventListener('click',()=>{
    body.classList.toggle("dark")
    sell.classList.toggle("dark")
    dark.classList.toggle("dark")
    toplogodark.classList.toggle("darkmode")
    toplogolight.classList.toggle("darkmode")
    scrolltotop.classList.toggle("dark")
    home.classList.toggle("dark")
})

window.onscroll = () =>{
    if(document.documentElement.scrollTop > 900) scrolltotop.classList.add("show")
    else scrolltotop.classList.remove("show")
}

scrolltotop.addEventListener('click',()=>{
    window.scrollTo({top:0 , behavior : "smooth"})
})