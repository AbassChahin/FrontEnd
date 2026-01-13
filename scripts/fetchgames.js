
async function getGames() {
    try {
        const gameGrid = document.querySelector(".game-grid");

        // Clear any potential cards already present
        gameGrid.innerHTML = "";


        const response = await fetch("http://localhost:8080/api/v1/game/allgames");

        if (!response.ok) {
            const newCard = document.createElement("div");
            newCard.classList.add("game-card");

            newCard.innerHTML = `
                    <div class="oops-error">
                        <img src="images/error-logo.png" alt="">
                        <h2>Oops! Something went wrong!</h2>
                        <p>Please check again later!</p>
                    </div>
            `;
            gameGrid.appendChild(newCard);
            throw new Error("Bad Response " + response.status);
        }

        const games = await response.json();
        games.forEach(game => {
            const newCard = document.createElement("div");
            newCard.classList.add("game-card");

            newCard.innerHTML = `
                    <img src="http://localhost:8080/${game.imagePath}" onerror="this.src='images/Game.png'" alt="${game.title}">
                    <div class="info-container" id="${game.platform}">
                        <h3>${game.title}</h3>
                        <p>$${game.salePrice}</p>
                        <button onclick="window.open('${game.referenceURL}', '_blank');">Get Game</button>
                    </div>
            
            `;

            gameGrid.appendChild(newCard);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getGames();