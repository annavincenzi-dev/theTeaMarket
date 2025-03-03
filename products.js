


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
        div.classList.add("col-6", "col-lg-4")
        div.innerHTML = `<img src= "./media/product.png" class="w-25 m-3 p-0" alt="">
                    <h3 class="productTitleCustom titleFont accColor">${element.name}</h3>
                    <p class="productSubtitleCustom textFont parColor m-0">$${element.price}/hg, ${element.type}</p>`
    
        productsWrapper.appendChild(div)   
                 
    })

}


createCards(data)

// FINE CREAZIONE CARD


//FILTRO PER CATEGORIA
let btnTypes = document.querySelector("#btnTypes")
let allTypes = data.map((element)=> element.type)
let types = Array.from(new Set(allTypes))
types.forEach((type)=>{
    let div = document.createElement("div")
    div.classList.add("form-check")
    div.innerHTML = `<input class="form-check-input mx-1" type="radio" name="flexRadioDefault"           id="${type}" checked>
    <label class="form-check-label titleFont parColor" for="${type}">${type}</label>`
    btnTypes.appendChild(div)
})

let radioButtons = document.querySelectorAll(".form-check-input")

function filterByCategory(){
    let nodeToArray = Array.from(radioButtons) //trasformo il node in un array

    let foundChecked = nodeToArray.find((button)=> button.checked == true)
    
        if(foundChecked.id == "All"){
        createCards(data)
    }     else     {
        let filtered = data.filter((element) => element.type == foundChecked.id)
        createCards(filtered)
}}





radioButtons.forEach((button)=>{

    button.addEventListener("input", ()=>{
        filterByCategory()
    })



})



})