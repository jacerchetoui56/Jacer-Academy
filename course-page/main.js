const indexes = document.querySelectorAll(".page-index a")

window.onscroll = () =>{
    if(window.scrollY>=0 && window.scrollY<590){
        indexes[0].classList.add("selected")
        indexes[1].classList.remove("selected")
        indexes[2].classList.remove("selected")
    }
    else if(window.scrollY>=590 && window.scrollY<1350){
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
