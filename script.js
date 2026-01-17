document.addEventListener('DOMContentLoaded', function() {
    
    let quadrados = document.querySelectorAll(".quadrados")
    
    for (let quadrado of quadrados) {
        quadrado.addEventListener("click", function() {
            if (quadrado.firstElementChild.textContent === "" || quadrado.firstElementChild.textContent === "O") {
                quadrado.firstElementChild.textContent = "X"
            } else if (quadrado.firstElementChild.textContent === "" || quadrado.firstElementChild.textContent === "X") {
                quadrado.firstElementChild.textContent = "O"
            }
        });
    }
});