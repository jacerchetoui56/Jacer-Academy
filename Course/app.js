const body = document.querySelector("body")
const sell = document.querySelector("#sell")
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



window.onscroll = () =>{
    if(document.documentElement.scrollTop > 900) scrolltotop.classList.add("show")
    else scrolltotop.classList.remove("show")
}

scrolltotop.addEventListener('click',()=>{
    window.scrollTo({top:0 , behavior : "smooth"})
})