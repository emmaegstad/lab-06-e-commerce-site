export function renderProduct(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const img = document.createElement('img');
    img.src = product.img;

    const productDesc = document.createElement('p');
    productDesc.textContent = product.description;

    const productCat = document.createElement('p');
    productCat.textContent = product.category;

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;

    const productButton = document.createElement('button');
    productButton.value = product.id;

    productCard.append(
        productName,
        img,
        productDesc,
        productCat,
        productPrice,
        productButton
    );
    return productCard;
}
