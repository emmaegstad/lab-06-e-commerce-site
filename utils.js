import { cart } from '../data/cart-data.js';
import { products } from '../data/products.js';

export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString('en-us', {
        style: 'currency',
        currency: 'USD',
    });
}

export function renderLineItem(cartItem, productData) {
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

    return tr;
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
    orderTotalText.textContent = toUSD(calcOrderTotal(cart, products));
}
