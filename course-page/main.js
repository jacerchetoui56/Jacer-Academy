const indexes = document.querySelectorAll(".page-index a")
const scrolltotop = document.querySelector(".scrolltop")
window.onscroll = () =>{
    if(window.scrollY >= 1500) scrolltotop.classList.add("show")
    else scrolltotop.classList.remove("show")
    if(window.scrollY>=0 && window.scrollY<900){
        indexes[0].classList.add("selected")
        indexes[1].classList.remove("selected")
        indexes[2].classList.remove("selected")
    }
    else if(window.scrollY>=900 && window.scrollY<1350){
        indexes[0].classList.remove("selected")
        indexes[1].classList.add("selected")
        indexes[2].classList.remove("selected")
    }
    else {
        indexes[0].classList.remove("selected")
        indexes[1].classList.remove("selected")
        indexes[2].classList.add("selected")
    }
}


scrolltotop.addEventListener('click',()=>{
    window.scrollTo({top:0 , behavior : "smooth"})
})
