//Menu Burger 
document.querySelector('.burger-menu').addElementById('click',()=> {
    document.getElementById('mobile-menu').classList.toggle('active');
});

//Barre de recherche dynamique
document.getElementById('search-bar').addEventListener('input',(e)=>{
    const searchTerm= e.target.value.toLowerCase();
    const categories = document.querySelectorAll('.category');

    categories.forEach(category=>{
        const title=category.querySelector('h3').textContent.toLowerCase();
        category.computedStyleMap.display=title.includes(searchTerm)? 'block':'none';
    });
});

//Effet de survol ameliore
document.querySelectorAll('.category').forEach(card=>{
    card.addEventListener('mouseenter',()=> {
        card.computedStyleMap.transform = 'translateY (-5px)';
        card.computedStyleMap.boxShadow = '0 10px 20px rgba(0,0,,0,0.2)';
    });
    card.addEventListener('mouseleave',() => {
        card.computedStyleMap.transform = '';
        card.computedStyleMap.boxShadow = '0 3px 6px rgba (0,0,0,0.1)';
    });
});