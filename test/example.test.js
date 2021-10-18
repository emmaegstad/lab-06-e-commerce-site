import { cart } from '../banana/cart-data.js';
import { renderProduct } from '../render-product.js';
import {
    findById,
    renderLineItem,
    calcOrderTotal,
    getCart,
    addItem,
    clearCart,
    getProducts,
} from '../utils.js';

const test = QUnit.test;
const products = getProducts();

test('renderProduct should return HTML element', (expect) => {
    const expected =
        '<div class="product-card" style="background-color: rgb(103, 164, 238);"><h2>Wildflower Honey</h2><img src="./assets/product-photos/wildflower-honey.jpeg"><p>2oz jar of wildflower honey from Sauvie Island.</p><p>$6.00</p><button class="product-button" id="1">Add to Cart</button><p class="qty-added">0</p></div>';

    const honey = products[0];

    const actual = renderProduct(honey).outerHTML;

    expect.equal(actual, expected);
});

test('findById should return the product with matching ID', (expect) => {
    const expected = {
        name: 'Wildflower Honey',
        img: './assets/product-photos/wildflower-honey.jpeg',
        description: '2oz jar of wildflower honey from Sauvie Island.',
        category: 'Products',
        price: 6,
        id: '1',
        background: '67a4ee',
    };

    const actual = findById('1', products);

    expect.deepEqual(actual, expected);
});

test('renderLineItem should return HTML element', (expect) => {
    const expected =
        '<tr><td>Wildflower Honey</td><td>6</td><td>5</td><td>$30.00</td></tr>';

    const actual = renderLineItem(cart[0], findById('1', products)).outerHTML;

    expect.equal(actual, expected);
});

test('calcOrderTotal should tally line item totals', (expect) => {
    const expected = 42;

    const actual = calcOrderTotal(cart, products);

    expect.equal(actual, expected);
});

test('getCart should return the cart if it exists', (expect) => {
    //arrange
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '2', qty: 1 },
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    //act
    const cart = getCart();

    //assert
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty array if no cart exists', (expect) => {
    //arrange
    localStorage.removeItem('CART');
    const fakeCart = [];

    //act
    const cart = getCart();

    //assert
    expect.deepEqual(cart, fakeCart);
});

test('addItem should increment the quantity if item in cart', (expect) => {
    // arrange
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '3', qty: 4 },
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    // act
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 },
    ];
    // assert
    expect.deepEqual(cart, expected);
});

test('addItem should add an item if not already there', (expect) => {
    //arrange
    localStorage.removeItem('CART');

    const expected = [{ id: '1', qty: 1 }];

    //act
    addItem('1');
    const cart = getCart();

    //assert
    expect.deepEqual(cart, expected);
});

test('clearCart should remove cart items', (expect) => {
    //arrange
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '3', qty: 4 },
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    //act
    clearCart();
    const cart = getCart();
    const expected = [];

    //assert
    expect.deepEqual(cart, expected);
});
