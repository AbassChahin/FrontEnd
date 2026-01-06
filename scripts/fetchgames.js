
async function getGames() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/game/allgames");

        if (!response.ok) {
            throw new Error("Bad Response " + response.status);
        }

        const games = await response.json();
        const gameGrid = document.querySelector(".game-grid");

        // Clear any potential cards already present
        gameGrid.innerHTML = "";

        games.forEach(game => {
            const newCard = document.createElement("div");
            newCard.classList.add("game-card");

            newCard.innerHTML = `
                    <img src="http://localhost:8080/${game.imagePath}" onerror="this.src='images/Game.png'" alt="${game.title}">
                    <div class="info-container">
                        <h3>${game.title}</h3>
                        <p>$${game.salePrice}</p>
                        <button>Get Game</button>
                    </div>
            
            `;

            gameGrid.appendChild(newCard);
        });

        for (let i = 0; i < games.length; i++) {
            console.log(games[i]);
        }



    } catch (error) {
        console.error("Error:", error);
    }
}

getGames();