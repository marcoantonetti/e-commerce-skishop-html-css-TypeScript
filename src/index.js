"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var objects_js_1 = require("./objects.js");
var containerGrid = document.querySelector('.main__product-container-grid');
// This function populates the grid gallery with multiple products layouts
var populateGrid = function (gallery) {
    gallery.forEach(function (product) {
        createProductLayout(product);
    });
};
var navBarLinks = document.querySelector('.header__nav-bar-ul-left');
var linksList = __spreadArray([], navBarLinks.querySelectorAll('.header__link'), true);
console.log(__spreadArray([], navBarLinks.querySelectorAll('.header__link'), true));
populateGrid(objects_js_1.BindingsList);
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
function createProductLayout(product) {
    // Elements creation
    var flexContainer = document.createElement('div');
    var image = document.createElement('img');
    var title = document.createElement('h3');
    var subtitle = document.createElement('h3');
    var price = document.createElement('p');
    var overlay = document.createElement('div');
    var shopCart = document.createElement('a');
    var detail = document.createElement('a');
    // Elements class attribute
    flexContainer.className = 'main__product-item-grid main__product-flex-container';
    image.className = 'main__flex-child-img';
    title.className = 'main__flex-child-title';
    subtitle.className = 'main__flex-child-subtitle';
    price.className = 'main__flex-child-price';
    overlay.className = 'main__flex-child-overlay';
    shopCart.className = 'fa-solid fa-cart-plus';
    detail.className = 'fa-solid fa-magnifying-glass';
    //Elements text attribute
    title.textContent = product.brand;
    subtitle.textContent = product.model;
    price.textContent = '$' + product.price.toString();
    //Elements aditional attributes
    image.src = product.image;
    image.alt = product.brand + product.model;
    shopCart.href = '#';
    detail.href = '#';
    // Apending all elements to have the proper HTML structure    
    containerGrid === null || containerGrid === void 0 ? void 0 : containerGrid.appendChild(flexContainer);
    flexContainer.appendChild(image);
    flexContainer.appendChild(title);
    flexContainer.appendChild(subtitle);
    flexContainer.appendChild(price);
    flexContainer.appendChild(overlay);
    overlay.appendChild(shopCart);
    overlay.appendChild(detail);
}
// Code for HamburguerButton click event. When clicked, it toggles header__nav-bar-ul-left active class
var hamburguerButton = document.querySelector('.header__hamburguer-button');
var navBar = document.querySelector('.header__nav-bar-ul-left');
hamburguerButton === null || hamburguerButton === void 0 ? void 0 : hamburguerButton.addEventListener('click', function (e) {
    e.preventDefault();
    navBar === null || navBar === void 0 ? void 0 : navBar.classList.toggle('active');
    hamburguerButton.classList.toggle('active');
});
var searchBar = document.querySelector('.header__search-bar-toggle');
var glassLogo = document.querySelector('.fa-magnifying-glass');
glassLogo === null || glassLogo === void 0 ? void 0 : glassLogo.addEventListener('click', function () {
    searchBar === null || searchBar === void 0 ? void 0 : searchBar.classList.toggle('active');
    console.log('sd');
});


