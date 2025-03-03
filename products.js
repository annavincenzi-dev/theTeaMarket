


fetch("./products.json").then((r)=>r.json()).then((data)=>{

    //CREO LE MIE CARD RELATIVE AI PRODOTTI DI PRODUCTS.JSON
    
    let productsWrapper = document.querySelector("#productsWrapper")

    function createCards(array){

    array.forEach((element)=>{
    
        let div = document.createElement("div")
        div.setAttribute("data-aos","fade-in")
        div.setAttribute("data-aos-duration","2500")
        div.classList.add("col-6", "col-lg-4")
        div.innerHTML = `<img src= "./media/product.png" class="w-25 m-3 p-0" alt="">
                    <h3 class="productTitleCustom titleFont accColor">${element.name}</h3>
                    <p class="productSubtitleCustom textFont parColor m-0">$${element.price}/hg</p>`
    
        productsWrapper.appendChild(div)   
                 
    })

}


createCards(data)

// FINE CREAZIONE CARD



})