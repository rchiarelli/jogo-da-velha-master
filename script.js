document.addEventListener('DOMContentLoaded', function() {
    
    let quadrados = document.querySelectorAll(".quadrados");
    let jogadorAtual = "X"
    
    for (let quadrado of quadrados) {
        quadrado.addEventListener("click", function() {
            if (quadrado.firstElementChild.textContent === "") {
                quadrado.firstElementChild.textContent = jogadorAtual
                if (jogadorAtual === "X") {
                    jogadorAtual = "O"
                    console.log(`Vez do jogador ${jogadorAtual}`)
                } else {
                    jogadorAtual = "X"
                    console.log(`Vez do jogador ${jogadorAtual}`)
                }
            };
            
            if (quadrados[2].firstElementChild.textContent === "X" && quadrados[4].firstElementChild.textContent === "X" && quadrados[6].firstElementChild.textContent === "X" || quadrados[2].firstElementChild.textContent === "O" && quadrados[4].firstElementChild.textContent === "O" && quadrados[6].firstElementChild.textContent === "O") {
                let traco = document.querySelector(".traco")
                traco.style.display = "initial"
                console.log("Vitória X")
            }
        });
    };
});