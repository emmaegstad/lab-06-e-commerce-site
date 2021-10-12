import { findById, renderLineItem, updateOrderTotal } from '../utils.js';
import { cart } from '../data/cart-data.js';
import { products } from '../data/products.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart) {
    const productData = findById(cartItem.id, products);

    const tr = renderLineItem(cartItem, productData);

    tbody.appendChild(tr);
}

updateOrderTotal();
