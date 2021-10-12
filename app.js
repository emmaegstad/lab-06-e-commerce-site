import { renderProduct } from './render-product.js';
import { products } from './data/products.js';

const productList = document.querySelector('.product-list');

for (let product of products) {
    const productCard = renderProduct(product);
    productList.append(productCard);
}
