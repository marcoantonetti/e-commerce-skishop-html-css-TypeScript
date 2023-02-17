"use strict";
exports.__esModule = true;
var obj = require("./objects");
var containerGrid = document.querySelector('.main__product-container-grid');
// This function populates the grid gallery with multiple products layouts
var populateGrid = function (gallery) {
    gallery.forEach(function (product) {
        createProductLayout(product);
    });
};
populateGrid(obj.BindingsList);
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
var createProductLayout = function (product) {
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
    title.textContent = product.brand || 'no terrain found';
    subtitle.textContent = product.model;
    price.textContent = '$' + product.price.toString();
    //Elements aditional attributes
    image.src = '/images/bindings/union-force (1).jpg';
    image.alt = product.brand + product.model;
    shopCart.href = '#';
    detail.href = '#';
    // Apending all elements to have a proper HTML structure    
    containerGrid === null || containerGrid === void 0 ? void 0 : containerGrid.appendChild(flexContainer);
    flexContainer.appendChild(image);
    flexContainer.appendChild(title);
    flexContainer.appendChild(price);
    flexContainer.appendChild(overlay);
    overlay.appendChild(shopCart);
    overlay.appendChild(detail);
};
// let inputJob = document.createElement('input')
// inputJob.type = 'text'
// inputJob.setAttribute('name', `jobs${buttonCount}`)
// inputJob.setAttribute('id', `jobs${buttonCount}`)
// inputJob.setAttribute('placeholder', 'jobs')
// div.appendChild(inputJob)
