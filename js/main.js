// selection des éléments
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Ouvrir et fermer
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active")
    menuBtn.classList.toggle('fa-bars')
    menuBtn.classList.toggle('fa-x')
})

// Fermer si on click en dehors
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
        menuBtn.classList.add('fa-bars');
        menuBtn.classList.remove('fa-x');
    }
});

const menuPanier = document.getElementById("cartMenu");
const closeCart = document.getElementById("closeCart");
const voirPanierBtns = document.querySelectorAll(".voir-panier");
const buyBtns = document.querySelectorAll(".buy-btn");
const cartContent = document.getElementById("cartContent");

let panier = [];

// Ouvrir le panier
function openCart() {
    cartMenu.classList.add("actived");
}

// Fermer le panier
function closeCartMenu() {
    cartMenu.classList.remove("actived");
}

cartIcon.onclick = openCart;
closeCart.onclick = closeCartMenu;

voirPanierBtns.forEach(btn => {
    btn.onclick = openCart;
});

// Ajouter produit
buyBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const nom = btn.dataset.name;
        const prix = btn.dataset.price;

        panier.push({ nom, prix });

        afficherPanier();
        openCart();
    });
});

// Afficher panier
function afficherPanier() {

    cartContent.innerHTML = "";

    if (panier.length === 0) {
        cartContent.innerHTML = `
            <p class="empty">Votre panier est vide.</p>
        `;

        return;
    }

    panier.forEach((produit, index) => {

        cartContent.innerHTML += `
            <div class="cart-item">
                <h3>${produit.nom}</h3>
                <p>${produit.prix}</p>
                <button onclick="supprimerProduit(${index})">
                    Supprimer
                </button>
            </div>
        `;
    });
}

// Supprimer produit
function supprimerProduit(index) {

    panier.splice(index, 1);
    afficherPanier();
}
