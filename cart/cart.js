import {
    findById,
    renderLineItem,
    updateOrderTotal,
    getCart,
    clearCart,
    getProducts,
} from '../utils.js';

const products = getProducts();

const cart = getCart();
const tbody = document.getElementById('table-body');
const placeOrder = document.querySelector('.place-order');

for (let cartItem of cart) {
    const productData = findById(cartItem.id, products);

    const tr = renderLineItem(cartItem, productData);

    tbody.appendChild(tr);
}

updateOrderTotal();

placeOrder.addEventListener('click', () => {
    clearCart();
    window.location.replace('..');
});
