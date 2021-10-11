import { renderProduct } from '../render-product.js';
import { products } from '../products.js';

const test = QUnit.test;

test('renderProduct should return HTML element', (expect) => {
    const expected =
        '<div class="product-card" style="background-color: rgb(103, 164, 238);"><h2>Wildflower Honey</h2><img src="./assets/product-photos/wildflower-honey.jpeg"><p>2oz jar of wildflower honey from Sauvie Island.</p><p>Category: Products</p><p>$6.00</p><button value="1">Add to Cart</button></div>';

    const honey = products[0];

    const actual = renderProduct(honey).outerHTML;

    expect.equal(actual, expected);
});
