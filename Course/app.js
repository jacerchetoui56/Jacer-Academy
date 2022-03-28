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

// !---------------- increasing numbers

const stats = document.querySelector("#stats")
const values = document.querySelectorAll("#stats .value")
let start = false ;

window.onscroll = ()=>{
    if(window.scrollY>=stats.offsetTop - 250){
        if(!start) values.forEach((val) => startCounting(val))
        start=true
    }
}

function startCounting(el){
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) clearInterval(count)
    }, 2000 / goal);
}
