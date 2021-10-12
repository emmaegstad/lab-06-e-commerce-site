import { renderProduct } from '../render-product.js';
import { products } from '../data/products.js';
import { findById } from '../utils.js';
import { domRender } from '../utils.js';

const test = QUnit.test;

test('renderProduct should return HTML element', (expect) => {
    const expected =
        '<div class="product-card" style="background-color: rgb(103, 164, 238);"><h2>Wildflower Honey</h2><img src="./assets/product-photos/wildflower-honey.jpeg"><p>2oz jar of wildflower honey from Sauvie Island.</p><p>Category: Products</p><p>$6.00</p><button value="1">Add to Cart</button></div>';

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

test('domRender should return HTML element', (expect) => {
    const tableBody = document.createElement('tbody');
    const expected =
        '<tbody><tr><td>Wildflower Honey</td><td>6</td><td>5</td><td>$30.00</td></tr></tbody>';

    const actual = domRender(tableBody).outerHTML;

    expect.equal(actual, expected);
});
