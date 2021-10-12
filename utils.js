import { cart } from '../data/cart-data.js';
import { products } from '../data/products.js';

export const tableBody = document.getElementById('table-body');

export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

// export function createDomElements() {

// }

export function domRender(tBody) {
    for (let cartItem of cart) {
        const productData = findById(cartItem.id, products);

        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent = productData.name;
        const tdPrice = document.createElement('td');
        tdPrice.textContent = productData.price;
        const tdQty = document.createElement('td');
        tdQty.textContent = cartItem.qty;
        const tdTotal = document.createElement('td');
        tdTotal.textContent = `$${cartItem.qty * productData.price}.00`;

        tr.append(tdName, tdPrice, tdQty, tdTotal);
        tBody.appendChild(tr);
    }

    updateOrderTotal();

    return tBody;
}

export function calcOrderTotal(cart, products) {
    let orderTotal = 0;
    for (let item of cart) {
        const product = findById(item.id, products);
        orderTotal = orderTotal + product.price * item.qty;
    }
    return orderTotal;
}

export function updateOrderTotal() {
    const orderTotalText = document.getElementById('order-total');
    orderTotalText.textContent = `$${calcOrderTotal(cart, products)}.00`;
}
