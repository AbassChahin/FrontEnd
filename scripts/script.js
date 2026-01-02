
// Show filter buttons as active when clicked
const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(
    button => {
        button.addEventListener("click", function() {
            button.classList.toggle("active");
    });
});