const form = document.querySelector(".contact-form");
form.addEventListener("submit", async function(event) {
    event.preventDefault();
    await sendMessage();
});

async function sendMessage() {
    const submitButton = document.querySelector("#submit");
    submitButton.disabled = true;

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log(name);
    console.log(email);
    console.log(message);

    const requestBody = {
        "name": name,
        "email": email,
        "message": message
    }

    try {
        const response = await fetch("/api/v1/game/addmessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error("Bad Response " + response.status);
        }

        const data = await response.json();
        console.log("Server response:", data);

        const successMessage = document.querySelector("#successMessage");
        successMessage.style.display = "block";
        form.reset();
    } catch (error) {
        const errorMessage = document.querySelector("#failureMessage");
        errorMessage.style.display = "block";
        console.error("Error sending message:", error);
    } finally {
        submitButton.disabled = false;
    }
}

function successMessage() {

}