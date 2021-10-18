// import { products } from './banana/products.js';

const products = getProducts();
const cart = getCart();

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

export function getCart() {
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id) {
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem) {
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function clearCart() {
    localStorage.removeItem('CART');
}

export function updateQtyCount(parentElement) {
    const elSpan = parentElement.querySelector('.qty-added');
    let qtyCount = Number(elSpan.textContent);
    elSpan.textContent = qtyCount + 1;
}

export function getProducts() {
    let lsProducts = localStorage.getItem('PRODUCTS');
    const productList = JSON.parse(lsProducts);

    if (!productList) {
        const productsString = JSON.stringify(products);
        localStorage.setItem('PRODUCTS', productsString);
    }
    return productList || products;
}

export function addProduct(newProduct) {
    let products = getProducts();
    products.push(newProduct);
    let productString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productString);
}

// ------------------------

// export function removeProduct(id) {
//     let products = getProducts();
//     products.pop(id);
//     let productString = JSON.stringify(products);
//     localStorage.setItem('PRODUCTS', productString);
// }

// export function renderProductRm(product) {
//     const lineItem = document.createElement('div');
//     lineItem.classList.add('rm-product__item');
//     const productName = document.createElement('p');
//     productName.classList.add('rm-product__name');
//     productName.textContent = product.name;
//     const rmButton = document.createElement('button');
//     rmButton.classList.add('rm-product__button');
//     rmButton.textContent = 'x';
//     rmButton.id = product.id;
//     lineItem.append(productName, rmButton);
//     return lineItem;
// }
