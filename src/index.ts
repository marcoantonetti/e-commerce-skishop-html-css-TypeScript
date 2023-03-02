import { Snowboard, Binding, Helmet, Boot, Goggle } from "./objects.js";
import { snowboardsList, BindingsList, helmetsList, BootsList, GogglesList } from "./objects.js";


const containerGrid = document.querySelector<HTMLDivElement>('.main__product-container-grid')

// This function populates the grid gallery with multiple products layouts
const populateGrid = (gallery: Binding[]) =>{
    
    gallery.forEach((product) => {
        
        createProductLayout(product)
        
    })
}

populateGrid(BindingsList)


// This function created an HTML structure such as this one. Which can be seen in the html file

/*<div class="main__product-item-grid main__product-flex-container">
                
            <img class='main__flex-child-img' src="/images/bindings/union-force (1).jpg" alt="binding"></img>
            <h3 class='main__flex-child-title'>Union Binding</h3>
            <p class="main__flex-child-price">$600</p>


            <div class="main__overlay">
                <a href='#' style="--i: 1;" class="fa-solid fa-cart-plus"></a>
                <a href='#' style="--i: 2;" class="fa-solid fa-magnifying-glass"></a>
            </div>

</div>*/

function createProductLayout  (product: Binding) {

    // Elements creation
    const flexContainer:HTMLDivElement       = document.createElement('div')
    const image:        HTMLImageElement     = document.createElement('img')
    const title:        HTMLHeadingElement   = document.createElement('h3')
    const subtitle:     HTMLHeadingElement   = document.createElement('h3')
    const price:        HTMLParagraphElement = document.createElement('p')
    
    const overlay:      HTMLDivElement       = document.createElement('div')
    const shopCart:     HTMLAnchorElement    = document.createElement('a')
    const detail:       HTMLAnchorElement    = document.createElement('a')


    // Elements class attribute
    flexContainer.className = 'main__product-item-grid main__product-flex-container'
    image.className    = 'main__flex-child-img'
    title.className    = 'main__flex-child-title'
    subtitle.className = 'main__flex-child-subtitle'
    price.className    = 'main__flex-child-price'

    overlay.className  = 'main__flex-child-overlay'
    shopCart.className = 'fa-solid fa-cart-plus'
    detail.className   = 'fa-solid fa-magnifying-glass'

    //Elements text attribute
    title.textContent = product.brand;
    subtitle.textContent = product.model
    price.textContent = '$' + product.price.toString()

    //Elements aditional attributes
    image.src = product.image
    image.alt = product.brand + product.model

    shopCart.href = '#'
    detail.href = '#'

    // Apending all elements to have the proper HTML structure    
    containerGrid?.appendChild(flexContainer)
    flexContainer.appendChild(image)
    flexContainer.appendChild(title)
    flexContainer.appendChild(subtitle)
    flexContainer.appendChild(price)
    flexContainer.appendChild(overlay)

    overlay.appendChild(shopCart)
    overlay.appendChild(detail)

}

// Code for HamburguerButton click event. When clicked, it toggles header__nav-bar-ul-left active class
const hamburguerButton = document.querySelector<HTMLSpanElement>('.header__hamburguer-button')
const navBar = document.querySelector<HTMLUListElement>('.header__nav-bar-ul-left')

hamburguerButton?.addEventListener('click', (e) => {
    e.preventDefault()

    navBar?.classList.toggle('active')


})





