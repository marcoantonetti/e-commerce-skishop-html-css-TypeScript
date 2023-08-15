import { Snowboard, Binding, Helmet, Boot, Goggle } from "./objects.js";
import { snowboardsList, BindingsList, helmetsList, BootsList, GogglesList } from "./objects.js";


const containerGrid = document.querySelector<HTMLDivElement>('.main__product-container-grid')

console.log('as')

// This function populates the grid gallery with multiple products layouts (grid items)
const populateGrid = (gallery: Binding[] | Snowboard[] | Goggle[] | Boot[] | Helmet[] ) =>{
    
    gallery.forEach((product) => {
        createProductLayout(product)
        console.log('as')

        
    })
}




// This takes the current url as a parameter and calls the populateGrid function based on said url.
const verticalAd = document.querySelector('.main__aside-vertical-ad');
const getURLandPopuplate = (url:string) => {
    
    // Eliminar vertical ad solo en esta pagina. Mucho lio con css.
       if(/store-info.html$/.test(url) || /form__input/.test(url) || /newsletter/.test(url)){ 
        verticalAd.classList.toggle('display')
    }
    // Regex read: url ending with the following regex
    let regexList = [ /snowboards.html$/,/bindings.html$/, /helmets.html$/, /boots.html$/,/goggles.html$/,
                      /snowboards$/,/bindings$/, /helmets$/, /boots$/,/goggles$/ ] 
    
    let productList = [snowboardsList, BindingsList, helmetsList, BootsList, GogglesList]
    
    regexList.forEach((regex, index) => {

        console.log('hola')
        
        if(regex.test(url)){         // If the current url ends with one of the regex.
            
            populateGrid(productList[index])
    


            
        }
        
        
    })
    
}// window.location.href returns a string of the current url
getURLandPopuplate(window.location.href)

console.log(window.location.href)

// This function creates an HTML structure such as this one. This will be the product layout of the grid items.
function createProductLayout  (product: Binding | Snowboard | Helmet | Goggle | Boot) {
    
        /*<div class="main__product-item-grid main__product-flex-container">
    
    <img class='main__flex-child-img' src="/images/bindings/union-force (1).jpg" alt="binding"></img>
    <h3 class='main__flex-child-title'>Union Binding</h3>
                <p class="main__flex-child-price">$600</p>
    
    
                <div class="main__overlay">
                    <a href='#' style="--i: 1;" class="fa-solid fa-cart-plus"></a>
                    <a href='#' style="--i: 2;" class="fa-solid fa-magnifying-glass"></a>
                </div>
    
    </div>*/
    
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
    hamburguerButton.classList.toggle('active')


})


// Code for search glass icon event. When clicked it toggles a search bar

const searchBar = document.querySelector<HTMLInputElement>('.header__search-bar-toggle');
const glassLogo = document.querySelector<HTMLLIElement>('.fa-magnifying-glass');

glassLogo?.addEventListener('click', () => {
    console.log('as')
    searchBar?.classList.toggle('active')

})




// Code for carousel slider on store-info.html
// I work with data sets so that this code can work with any carousel on this or future pages
const buttons = document.querySelectorAll<HTMLElement>('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
       
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button
                             .closest<HTMLElement>('[data-carousel]')
                             .querySelector<HTMLElement>('[data-slides]')

        const activeSlide = slides.querySelector<HTMLElement>('.active')
    
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        activeSlide.classList.toggle('active')

        // This conditionals make a loop. So that clicking next on the last picture goes to the first and viceversa
        if (newIndex < 0 ) {newIndex = slides.children.length -1}
        if(newIndex >= slides.children.length) {newIndex = 0}

        slides.children[newIndex].classList.toggle('active');

        
    })


})
