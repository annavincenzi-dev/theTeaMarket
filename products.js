//EFFETTI NAVBAR 
let navWrap = document.querySelector("#navWrap")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0 && window.scrollY < 2000){
        navWrap.classList.add("navScrolled")
        navWrap.classList.remove("opacity-0")
    } else if(window.scrollY > 2000){
        navWrap.classList.add("opacity-0")
    } else{
        navWrap.classList.remove("navScrolled")
        navDropdown.classList.add("navScrolled")
    }
})

fetch("./products.json").then((r)=>r.json()).then((data)=>{

    //CREO LE MIE CARD RELATIVE AI PRODOTTI DI PRODUCTS.JSON
    
    let productsWrapper = document.querySelector("#productsWrapper")

    function createCards(array){
    
    productsWrapper.innerHTML= `<div class="col-6 col-lg-4" data-aos="fade-in"
            data-aos-duration="2500">
                <h2 class="titleFont titleColor title2Custom">OUR TEA</h2>
                <p class="subtitle2Style textFont parColor m-0">Every leaf has is own story.</p>
            </div>`
    array.forEach((element)=>{
    
        let div = document.createElement("div")
        div.setAttribute("data-aos","fade-in")
        div.setAttribute("data-aos-duration","2500")
        div.classList.add("col-6", "col-lg-4", "position-relative")
        div.innerHTML = `<i class="bi bi-star position-absolute likeIcon"></i>
                    <img src= "./media/product.png" class="w-25 m-3 p-0 prodImg" alt="">
                    <h3 class="productTitleCustom titleFont accColor">${element.name}</h3>
                    <p class="productSubtitleCustom textFont parColor m-0">$${element.price}/hg, ${element.type}</p>`
    
        productsWrapper.appendChild(div)   
                 
    })

    let stars = document.querySelectorAll(".likeIcon")


    let starsArray = Array.from(stars)

    starsArray.forEach((star)=>{
    
    star.addEventListener("click", ()=>{
        star.classList.toggle("bi-star")
        star.classList.toggle("bi-star-fill")
    })
})
}

createCards(data)


// FINE CREAZIONE CARD

//SELEZIONE PREFERITI




//FILTRO PER CATEGORIA
let btnTypes = document.querySelector("#btnTypes")
let allTypes = data.map((element)=> element.type)
let types = Array.from(new Set(allTypes))
types.forEach((type)=>{
    let div = document.createElement("div")
    div.classList.add("form-check")
    div.innerHTML = `<input class="form-check-input mx-1" type="radio" name="flexRadioDefault"           id="${type}">
    <label class="form-check-label titleFont parColor" for="${type}">${type}</label>`
    btnTypes.appendChild(div)
})

let radioButtons = document.querySelectorAll(".form-check-input")

function filterByCategory(array){
    let nodeToArray = Array.from(radioButtons) //trasformo il node in un array

    let foundChecked = nodeToArray.find((button)=> button.checked == true)
    
        if(foundChecked.id == "All"){
        return array
    }     else     {
        let filtered = data.filter((element) => element.type == foundChecked.id)
        return filtered
}}





radioButtons.forEach((button)=>{

    button.addEventListener("input", ()=>{
        globalFilter()
    })





})

//FINE FILTRO PER CATEGORIA




//FILTRO PER PREZZO CON RANGEBAR
let priceInput = document.querySelector("#priceRangeInput")
let priceLabel = document.querySelector("#priceRangeLabel")

let prices = data.map( (element)=> element.price )
let max = Math.max(...prices)
let min = Math.min(...prices)
priceInput.min = min
priceInput.max = max
priceInput.value = max
priceLabel.innerText = `$${min} - $${max}`

function filterByPrice(array){
    let filtered = array.filter( (element)=> element.price <= priceInput.value )
    return filtered
}



priceInput.addEventListener( "input", ()=>{
    priceLabel.innerText = `$${min} - $${priceInput.value}`
    globalFilter()
} )

//FINE FILTRO PER PREZZO

//FILTRO PER PAROLA

let inputWord = document.querySelector("#btnSearch")

    function filterByWord(array){
        let filtered = array.filter( (element)=> element.name.toLowerCase().includes(inputWord.value.toLowerCase()) )
        return filtered
    }

    inputWord.addEventListener("input", ()=>{
        globalFilter()
    })




    //GLOBAL FILTER

    function globalFilter(){
        let filteredByType = filterByCategory(data)
        let filteredByPrice = filterByPrice(filteredByType)
        let filteredByName = filterByWord(filteredByPrice)
        createCards(filteredByName)
    }

    
})


