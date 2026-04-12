window.addEventListener('DOMContentLoaded', () => {

    const article = document.getElementById('product-grid');
    let bgCount = document.getElementById("bag-count");
    let cart = [];

    let cartStr=localStorage.getItem('Cart');

    cart=cartStr?JSON.parse(cartStr):[];

    displayBagIcon();

    product.forEach(p => {
        let productCard = `
        <div class="product-card">
            <img src="${p.image}" alt="${p.title}" />
            <h2>${p.title}</h2>
            <p class="price">₹${p.price * 100}</p>
            <p class="desc">${p.description}</p>
            <p class="category">Category: ${p.category}</p>
            <div class="rating">⭐ ${p.rating.rate} (${p.rating.count} reviews)</div>
            <span id="wishlist">&#10084;</span>
            <button class="addToCart" data-id="${p.id}">Add to Cart</button>
        </div>`;
        article.innerHTML += productCard;
    });

    function displayBagIcon(){
        bgCount.innerText=cart.length;
        if (bgCount.innerText == 0) {
        bgCount.style.display = 'none';
    } else {
        bgCount.style.display = '';
    }

    }


    let addToCartBtn = document.getElementsByClassName("addToCart");

    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener('click', (e) => {
            cart.push(e.currentTarget.dataset.id);
            console.log(e.currentTarget.dataset.id);
            // console.log(cart);
            localStorage.setItem('Cart',JSON.stringify(cart));
            displayBagIcon();
        });
    }

});