
document.addEventListener('DOMContentLoaded',()=>{

const article=document.getElementById('product-grid');


product.forEach(p => {
    
let productCard = `
<div class="product-card">
    <img src="${p.image}" alt="${p.title}" />

    <h2>${p.title}</h2>

    <p class="price">$${p.price}</p>

    <p class="desc">
        ${p.description}
    </p>

    <p class="category">Category: ${p.category}</p>

    <div class="rating">⭐ ${p.rating.rate} (${p.rating.count} reviews)</div>

    <button>Add to Cart</button>
</div>`;

    article.innerHTML+=productCard;
})
  
})