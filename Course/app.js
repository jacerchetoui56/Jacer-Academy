const body = document.querySelector("body")
const sell = document.querySelector("#sell")
const toplogolight = document.querySelector(".lightlogo")
const toplogodark = document.querySelector(".darklogo")
const scrolltotop = document.querySelector(".scrolltop")
const home = document.querySelector("#home")
const burger = document.querySelector(".burger")
const links = document.querySelector("header .links")

document.addEventListener("click", function(event) {
	if (event.target.closest(".links")) return;
    else if(event.target.closest(".burger")){
        links.classList.toggle("slide-burger")
        burger.classList.toggle("slide-burger")
        body.classList.toggle("blur")
    }
	else {
        links.classList.remove("slide-burger")
        body.classList.remove("blur")
        burger.classList.remove("slide-burger")
    }
});




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
    if(window.scrollY > 1700){
        scrolltotop.classList.add("show")
    }
    else scrolltotop.classList.remove("show")
    
}

function startCounting(el){
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) clearInterval(count)
    }, 2000 / goal);
}
