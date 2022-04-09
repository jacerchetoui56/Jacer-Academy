// !--------summary indexing-----
const indexes = document.querySelectorAll(".page-index a")
const scrolltotop = document.querySelector(".scrolltop")
// !------------ follower indexing-----
const follower = document.querySelectorAll(".follower > div")
const course = document.querySelectorAll(".course > div")

window.onscroll = () =>{
    console.log(window.scrollY)
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
    //------ course indexing --
    //2250-6930-7940
    if(window.scrollY >=2250 && window.scrollY<6700){
        follower[0].classList.add("show")
        follower[1].classList.remove("show")
        follower[2].classList.remove("show")
    }
    else if(window.scrollY >=6700 && window.scrollY<7610){
        follower[0].classList.remove("show")
        follower[1].classList.add("show")
        follower[2].classList.remove("show")
    }
    else if(window.scrollY >=7610){
        follower[0].classList.remove("show")
        follower[1].classList.remove("show")
        follower[2].classList.add("show")
    }
    
}


scrolltotop.addEventListener('click',()=>{
    window.scrollTo({top:0 , behavior : "smooth"})
})


