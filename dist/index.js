import { snowboardsList, BindingsList, helmetsList, BootsList, GogglesList } from "./objects.js";
const containerGrid = document.querySelector('.main__product-container-grid');
const populateGrid = (gallery) => {
    gallery.forEach((product) => {
        createProductLayout(product);
        console.log('asd');
    });
};
const getURLandPopuplate = (url) => {
    let regexList = [/snowboards.html$/, /bindings.html$/, /helmets.html$/, /boots.html$/, /goggles.html$/];
    let productList = [snowboardsList, BindingsList, helmetsList, BootsList, GogglesList];
    regexList.forEach((regex, index) => {
        if (regex.test(url)) {
            populateGrid(productList[index]);
        }
    });
};
getURLandPopuplate(window.location.href);
function createProductLayout(product) {
    const flexContainer = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const subtitle = document.createElement('h3');
    const price = document.createElement('p');
    const overlay = document.createElement('div');
    const shopCart = document.createElement('a');
    const detail = document.createElement('a');
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
const hamburguerButton = document.querySelector('.header__hamburguer-button');
const navBar = document.querySelector('.header__nav-bar-ul-left');
hamburguerButton === null || hamburguerButton === void 0 ? void 0 : hamburguerButton.addEventListener('click', (e) => {
    e.preventDefault();
    navBar === null || navBar === void 0 ? void 0 : navBar.classList.toggle('active');
    hamburguerButton.classList.toggle('active');
});
const searchBar = document.querySelector('.header__search-bar-toggle');
const glassLogo = document.querySelector('.fa-magnifying-glass');
glassLogo === null || glassLogo === void 0 ? void 0 : glassLogo.addEventListener('click', () => {
    console.log('as');
    searchBar === null || searchBar === void 0 ? void 0 : searchBar.classList.toggle('active');
});
//# sourceMappingURL=index.js.map