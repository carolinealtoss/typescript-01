let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular')!;
let resultado = document.getElementById('resultado')!;
let texto = document.getElementById('texto') as HTMLInputElement;

function calcular(n1: number, n2: number) {
    return n1 + n2;
}

botao.addEventListener('click', function() {
    texto.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});