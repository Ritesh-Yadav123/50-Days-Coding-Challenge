
window.addEventListener('DOMContentLoaded',()=>{

const article=document.getElementById('product-grid');
let bgCount=document.getElementById("bag-count");



product.forEach(p => {
    
let productCard = `
<div class="product-card">
    <img src="${p.image}" alt="${p.title}" />

    <h2>${p.title}</h2>

    <p class="price">₹${p.price*100}</p>

    <p class="desc">
        ${p.description}
    </p>

    <p class="category">Category: ${p.category}</p>

    <div class="rating">⭐ ${p.rating.rate} (${p.rating.count} reviews)</div>
    <span id="wishlist">&#10084;</span>
    <button>Add to Cart</button>
</div>`;

    article.innerHTML+=productCard;
})


if(bgCount.innerText==0){
    bgCount.style.display='none';
}
else{
    bgCount.style.display='';
}


})