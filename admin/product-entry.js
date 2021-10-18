import { addProduct, removeProduct } from '../utils.js';

const productForm = document.getElementById('product-entry');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(productForm);

    const newProduct = {
        name: data.get('name'),
        img: data.get('img'),
        description: data.get('description'),
        category: data.get('category'),
        price: Number(data.get('price')),
        id: data.get('id'),
        background: data.get('background'),
    };

    addProduct(newProduct);
    alert('New product added!');

    productForm.reset();
});

//render HTML function
// product name, x button
//loop through products, adding each existing one to remove list
//event listener on buttons that remove corresponding item
