const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Filter image cards based on the clicked button
const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Initially hide all cards
    filterableCards.forEach(card => {
        card.style.display = "none";

        // Display a card only if it matches the selected filter button
        // or all is selected
        if (e.target.dataset.name === card.dataset.name || e.target.dataset.name === "all"){
            card.style.display = "block";
        }
    });

}

// Add a click event to each button
filterButtons.forEach(button => {
    button.addEventListener("click", filterCards)
});