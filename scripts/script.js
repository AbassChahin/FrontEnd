
// Get buttons
const epicGamesButton = document.querySelector("#epicgames");
const steamGamesButton = document.querySelector("#steamgames");


// Add event listeners and make buttons active when clicked
epicGamesButton.addEventListener("click", () => {
    const isActive = epicGamesButton.classList.toggle("active");

    if (isActive) {
        filterCardsByPlatform("#EPIC");
    } else {
        filterCardsByPlatform("All");
    }
})

steamGamesButton.addEventListener("click", () => {
    const isActive = steamGamesButton.classList.toggle("active");

    if (isActive) {
        filterCardsByPlatform("#STEAM");
    } else {
        filterCardsByPlatform("All");
    }
})

function filterCardsByPlatform(platformId) {
    const cards = document.querySelectorAll(".game-card");

    if (platformId == "All") {
        cards.forEach(card => {
            card.style.display = "block";
        })
    } else {
        cards.forEach(card => {
            const match = card.querySelector(platformId);
            if (match) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    }
}

// Get Search Bar
const searchBar = document.querySelector(".searchbar");

// Add event listener on input change
searchBar.addEventListener("input", (e) => {
    searchGames(e.target.value);
});

// Search Games
function searchGames(input) {
    const cards = document.querySelectorAll(".game-card");
    const searchText = input.toLowerCase();

    cards.forEach(card => {
        const infoContainer = card.querySelector(".info-container");
        const title = infoContainer.querySelector("h3")?.textContent.toLowerCase();

        if (title && title.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    })
}