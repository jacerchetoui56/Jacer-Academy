// !--------summary indexing-----
const indexes = document.querySelectorAll(".page-index a")
const scrolltotop = document.querySelector(".scrolltop")
// !------------ follower indexing-----
const follower = document.querySelectorAll(".follower > div")
const course = document.querySelectorAll(".course > div")

window.onscroll = () =>{
    if(window.scrollY >= 1500) scrolltotop.classList.add("show")
    else scrolltotop.classList.remove("show")
    if(window.scrollY>=0 && window.scrollY<900){
        indexes[0].classList.add("selected")
        indexes[1].classList.remove("selected")
        indexes[2].classList.remove("selected")
        links.classList.remove("show")

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
    //------ course indexing --
    //2250-6930-7940
    if(window.scrollY >=course[0].offsetTop && window.scrollY<course[1].offsetTop-100){
        follower[0].classList.add("show")
        follower[1].classList.remove("show")
        follower[2].classList.remove("show")
    }
    else if(window.scrollY >=course[1].offsetTop-100 && window.scrollY<course[2].offsetTop-100){
        follower[0].classList.remove("show")
        follower[1].classList.add("show")
        follower[2].classList.remove("show")
    }
    else if(window.scrollY >=course[2].offsetTop-100){
        follower[0].classList.remove("show")
        follower[1].classList.remove("show")
        follower[2].classList.add("show")
    }
    
}


scrolltotop.addEventListener('click',()=>{
    window.scrollTo({top:0 , behavior : "smooth"})
})

const burger = document.querySelector("header i")
const links = document.querySelector("header .links ul")

burger.addEventListener('click',()=>{
    links.classList.toggle("show")
})

