const buttons = document.querySelectorAll("#courses .buttons")
const card = document.querySelectorAll("#courses .card")



for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseover',()=>{
        buttons[i].classList.add("aos-init")
        buttons[i].classList.add("aos-animate")
    })
    card[i].addEventListener('mouseout',()=>{
        buttons[i].classList.remove("aos-animate")
        buttons[i].classList.remove("aos-init")
    })
}



