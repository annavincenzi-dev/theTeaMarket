let navWrap = document.querySelector("#navWrap")



// ROTAZIONE FOGLIA ALLO SCROLL
let leafImg = document.querySelector("#leafImg")

window.addEventListener("scroll", ()=>{
    leafImg.style.transform = `rotate(${window.scrollY}deg)`
})



//NAVBAR CHE INTERAGISCE ALLO SCROLL E SPARISCE AL FOOTER
window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 700 && window.scrollY < 1050){
        navWrap.classList.add("navScrolled")
        navWrap.classList.remove("opacity-0")
    } else if(window.scrollY > 1050){
        navWrap.classList.add("opacity-0")
    } else{
        navWrap.classList.remove("navScrolled")
    }
})