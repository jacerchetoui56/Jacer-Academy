const body = document.querySelector("body")
const scrolltotop = document.querySelector(".scrolltop")
const home = document.querySelector("#home")
const burger = document.querySelector(".burger")
const links = document.querySelector("header .links")
const contactRef = document.querySelector("header .links .contact-ref")

document.addEventListener("click", function(event) {
    event.stopImmediatePropagation()
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
        links.classList.remove("slide-burger")
        body.classList.remove("blur")
        burger.classList.remove("slide-burger")

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



const next = document.querySelector(".left")
const previous = document.querySelector(".right")
const cards = document.querySelectorAll("#courses .card")
let j=0
next.addEventListener('click',()=>{ 
    cards[j].classList.add("show")
    cards[j].style.opacity = '1'
    for(let i=0;i<3;i++){
        if(i!=j) cards[i].classList.remove('show')
    }
    if(j<2) j++
    else j=0
})
previous.addEventListener('click',()=>{ 
    if(j>0) j--
    else j=2
    cards[j].classList.add("show")
    for(let i=0;i<3;i++){
        if(i!=j) cards[i].classList.remove('show')
    }
    if(j>0) j--
    else j=2
})

