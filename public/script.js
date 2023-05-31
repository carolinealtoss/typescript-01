var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
var texto = document.getElementById('texto');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    texto.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
