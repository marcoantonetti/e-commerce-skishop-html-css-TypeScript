import { BindingsList } from "./objects.js";
var containerGrid = document.querySelector('.main__product-container-grid');
var populateGrid = function (gallery) {
    gallery.forEach(function (product) {
        createProductLayout(product);
    });
};
populateGrid(BindingsList);
function createProductLayout(product) {
    var flexContainer = document.createElement('div');
    var image = document.createElement('img');
    var title = document.createElement('h3');
    var subtitle = document.createElement('h3');
    var price = document.createElement('p');
    var overlay = document.createElement('div');
    var shopCart = document.createElement('a');
    var detail = document.createElement('a');
    flexContainer.className = 'main__product-item-grid main__product-flex-container';
    image.className = 'main__flex-child-img';
    title.className = 'main__flex-child-title';
    subtitle.className = 'main__flex-child-subtitle';
    price.className = 'main__flex-child-price';
    overlay.className = 'main__flex-child-overlay';
    shopCart.className = 'fa-solid fa-cart-plus';
    detail.className = 'fa-solid fa-magnifying-glass';
    title.textContent = product.brand;
    subtitle.textContent = product.model;
    price.textContent = '$' + product.price.toString();
    image.src = product.image;
    image.alt = product.brand + product.model;
    shopCart.href = '#';
    detail.href = '#';
    containerGrid === null || containerGrid === void 0 ? void 0 : containerGrid.appendChild(flexContainer);
    flexContainer.appendChild(image);
    flexContainer.appendChild(title);
    flexContainer.appendChild(subtitle);
    flexContainer.appendChild(price);
    flexContainer.appendChild(overlay);
    overlay.appendChild(shopCart);
    overlay.appendChild(detail);
}
//# sourceMappingURL=index.js.map