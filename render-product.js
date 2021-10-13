export function renderProduct(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.style.backgroundColor = `#${product.background}`;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const img = document.createElement('img');
    img.src = product.img;

    const productDesc = document.createElement('p');
    productDesc.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}.00`;

    const productButton = document.createElement('button');
    productButton.textContent = 'Add to Cart';
    productButton.classList.add('product-button');
    productButton.id = product.id;

    const qtyAdded = document.createElement('p');
    qtyAdded.classList.add('qty-added');
    qtyAdded.textContent = '0';

    productCard.append(
        productName,
        img,
        productDesc,
        productPrice,
        productButton,
        qtyAdded
    );
    return productCard;
}
