let navWrap = document.querySelector("#navWrap")
let navDropdown = document.querySelector(".dropdown-menu")



// ROTAZIONE FOGLIA ALLO SCROLL
let leafImg = document.querySelector("#leafImg")

window.addEventListener("scroll", ()=>{
    leafImg.style.transform = `rotate(${window.scrollY}deg)`
})



//NAVBAR CHE INTERAGISCE ALLO SCROLL E SPARISCE AL FOOTER
window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 700 && window.scrollY < 1000){
        navWrap.classList.add("navScrolled")
        navWrap.classList.remove("opacity-0")
    } else if(window.scrollY > 1000){
        navWrap.classList.add("opacity-0")
    } else{
        navWrap.classList.remove("navScrolled")
        navDropdown.classList.add("navScrolled")
    }
})


//NUMERI CHE CRESCONO

//CATTURO I NUMERI DALL'HTML

let farmsN = document.querySelector("#farms")
let workersN = document.querySelector("#workers")
let varietiesN = document.querySelector("#varieties")



function numberIncrease(finalNum, element, speed) {
    let counter = 0
    let interval = setInterval(()=>{

        if(counter < finalNum) {
            counter++
            element.innerHTML = counter
        } else {
            clearInterval(interval)
        }
    
    
    }, speed)  
}

numberIncrease(147, farmsN, 17)
numberIncrease(2000, workersN, 2)
numberIncrease(120, varietiesN, 20)

let isStarted = false

let observer = new IntersectionObserver((entries)=>{
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isStarted==false){
            numberIncrease(147, farmsN, 60)
            numberIncrease(2000, workersN, 1)
            numberIncrease(120, varietiesN, 60)
            isStarted = true
        }
 
    })
}
)

observer.observe(farmsN)
