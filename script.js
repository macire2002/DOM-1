document.addEventListener("DOMContentLoaded", () => {
  const totalPriceElement = document.querySelector(".total");

  // Fonction pour mettre à jour le total
  function updateTotal() {
    let total = 0;
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      const unitPrice = parseFloat(
        card.querySelector(".unit-price").textContent
      );
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += unitPrice * quantity;
    });
    totalPriceElement.textContent = `${total} $`;
  }

  // Gérer les boutons pour chaque produit
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const trashBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");
    const quantityEl = card.querySelector(".quantity");

    // Bouton +
    plusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityEl.textContent);
      quantityEl.textContent = quantity + 1;
      updateTotal();
    });

    // Bouton -
    minusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityEl.textContent);
      if (quantity > 0) {
        quantityEl.textContent = quantity - 1;
        updateTotal();
      }
    });

    // Bouton 🗑️ => remettre la quantité à 0
    trashBtn.addEventListener("click", () => {
      quantityEl.textContent = 0;
      updateTotal();
    });

    // Bouton ❤️ => aimer/désaimer
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("liked");
      heartBtn.style.color = heartBtn.classList.contains("liked")
        ? "red"
        : "black";
    });
  });

  // Initialisation du total au démarrage
  updateTotal();
});
