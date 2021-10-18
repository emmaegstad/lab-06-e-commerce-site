import { renderProduct } from './render-product.js';
import { addItem, updateQtyCount, getProducts } from './utils.js';

const products = getProducts();

const productList = document.querySelector('.product-list');

for (let product of products) {
    const productCard = renderProduct(product);
    productList.append(productCard);
}

const addButtons = document.querySelectorAll('.product-button');

for (let button of addButtons) {
    button.addEventListener('click', (ev) => {
        addItem(button.id);
        updateQtyCount(ev.target.parentElement);
    });
}
