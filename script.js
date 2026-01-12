document.addEventListener('DOMContentLoaded', function(){
    console.log('Carregado');
});

const jogadorX = 'X'
const jogadorO = 'O'

let areaJogo = document.getElementsByClassName("area-item")

console.log(areaJogo);

let mouseAcima = function onmouseover(){
    console.log('mouse passando');
};

let clicouAqui = function (){
    console.log("clicado")
}

areaJogo.addEventListener("mousemove", mouseAcima());

areaJogo.addEventListener("click", clicouAqui());
