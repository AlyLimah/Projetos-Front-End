const number = document.getElementById("number");
const outTabuada = document.querySelector("#outTabuada");
const outArea = document.querySelector("#outArea");
const outCircunferencia = document.querySelector("#outCircunferencia");

const calcularTabuada = document.querySelector(".calcularTabuada");
const calcularArea = document.querySelector(".calcularArea");
const calcularCircunferencia = document.querySelector(".calcularCircunferencia");
const limparCalculo = document.querySelectorAll(".limparCalculo");



//Calcular Tabuada
calcularTabuada.addEventListener("click", () => {
   const numberValue = parseFloat(number.value)

    if (isNaN(numberValue)){
        outTabuada.innerHTML = "Digite um valor válido!"
        return;
    }

    let tabuada = "";

    for(let i = 1; i <= 10; i++){
        let resultado = numberValue * i;

        tabuada += `${numberValue} x ${i} = ${resultado} <br>`;
    }
    outTabuada.innerHTML = tabuada;

});


const base = document.getElementById("base");
const altura = document.getElementById("altura");
const raio = document.getElementById("raio");

//Calcular Circunferencia
calcularCircunferencia.addEventListener("click", () => {
    const raioValue = parseFloat(raio.value)

    if (isNaN(raioValue)){
        outCircunferencia.innerHTML = "Digite um valor válido!"
        return;
    }
    let pi = Math.PI;

    let areaCircunferencia = (raioValue ** 2) * pi;

    outCircunferencia.innerHTML = `A área da circuferência cujo o raio é ${raioValue} é ${areaCircunferencia}`;

});

//Calcular Área do Triângulo
calcularArea.addEventListener("click", () => {
    const baseValue = parseFloat(base.value)
    const alturaValue = parseFloat(altura.value)

    if (isNaN(baseValue) || isNaN(alturaValue)){
        outArea.innerHTML = "Digite um valor válido!"
        return;
    }

    let area = (baseValue * alturaValue)/2
    outArea.innerHTML = `A área do triângulo cuja a base ${baseValue} e altura ${alturaValue}
    é ${area}`;

});

limparCalculo.forEach(botao => {
    botao.addEventListener("click", () => {
        outTabuada.innerHTML = ""
        outArea.innerHTML = ""
        outCircunferencia.innerHTML = ""
    });
});
