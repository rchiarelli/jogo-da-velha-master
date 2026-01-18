document.addEventListener('DOMContentLoaded', function() {
    
    let quadrados = document.querySelectorAll(".quadrados");
    let jogadorAtual = "X"
    
    let traco = document.querySelector(".traco")
    
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
            
            if (quadrados[0].firstElementChild.textContent === "X" && quadrados[1].firstElementChild.textContent === "X" && quadrados[2].firstElementChild.textContent === "X" || quadrados[0].firstElementChild.textContent === "O" && quadrados[1].firstElementChild.textContent === "O" && quadrados[2].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(223px, -380px)"
                
            } else if (quadrados[3].firstElementChild.textContent === "X" && quadrados[4].firstElementChild.textContent === "X" && quadrados[5].firstElementChild.textContent === "X" || quadrados[3].firstElementChild.textContent === "O" && quadrados[4].firstElementChild.textContent === "O" && quadrados[5].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(220px, -230px)"
                console.log("Vitória X")
                
            } else if (quadrados[6].firstElementChild.textContent === "X" && quadrados[7].firstElementChild.textContent === "X" && quadrados[8].firstElementChild.textContent === "X" || quadrados[6].firstElementChild.textContent === "O" && quadrados[7].firstElementChild.textContent === "O" && quadrados[8].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(223px, -80px)"
                
            } else if (quadrados[0].firstElementChild.textContent === "X" && quadrados[3].firstElementChild.textContent === "X" && quadrados[6].firstElementChild.textContent === "X" || quadrados[0].firstElementChild.textContent === "O" && quadrados[3].firstElementChild.textContent === "O" && quadrados[6].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(63px, -237px) rotate(90deg)"
            } else if (quadrados[1].firstElementChild.textContent === "X" && quadrados[4].firstElementChild.textContent === "X" && quadrados[7].firstElementChild.textContent === "X" || quadrados[1].firstElementChild.textContent === "O" && quadrados[4].firstElementChild.textContent === "O" && quadrados[7].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(217px, -237px) rotate(90deg)"
                
            } else if (quadrados[2].firstElementChild.textContent === "X" && quadrados[5].firstElementChild.textContent === "X" && quadrados[8].firstElementChild.textContent === "X" || quadrados[2].firstElementChild.textContent === "O" && quadrados[5].firstElementChild.textContent === "O" && quadrados[8].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(370px, -237px) rotate(90deg)"
                
            } else if (quadrados[2].firstElementChild.textContent === "X" && quadrados[4].firstElementChild.textContent === "X" && quadrados[6].firstElementChild.textContent === "X" || quadrados[2].firstElementChild.textContent === "O" && quadrados[4].firstElementChild.textContent === "O" && quadrados[6].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                console.log("Vitória X")
                
            } else if (quadrados[0].firstElementChild.textContent === "X" && quadrados[4].firstElementChild.textContent === "X" && quadrados[8].firstElementChild.textContent === "X" || quadrados[0].firstElementChild.textContent === "O" && quadrados[4].firstElementChild.textContent === "O" && quadrados[8].firstElementChild.textContent === "O") {
                
                traco.style.display = "initial"
                traco.style.transform = "translate(220px, -232px) rotate(45deg)"
                
            } else {
                console.log(`Jogador ${jogadorAtual}, faça sua jogada`)
            }
        });
    };
});