const number = document.getElementById("number");
const outTabuada = document.getElementById("outTabuada");



const calcularTabuada = () => {
    const numberValue = parseFloat(number.value)

    if (isNaN(numberValue)){
        outTabuada.innerHTML = `Digite um valor válido!`
        return;
    }

    let tabuada = "";

    for(let i = 1; i <= 10; i++){
        let resultado = numberValue * i;

        tabuada += `${numberValue} x ${i} = ${resultado} <br>`;
    }
    outTabuada.innerHTML = tabuada;
}

const limparCalculo = () => {
    outTabuada.innerHTML = "";
    outArea.innerHTML = "";
    outCircunferencia.innerHTML = "";
    
}

const base = document.getElementById("base")
const altura = document.getElementById("altura")

const calcularArea = () => {
    const baseValue = parseFloat(base.value)
    const alturaValue = parseFloat(altura.value)

    if (isNaN(baseValue) || isNaN(alturaValue)){
        outArea.innerHTML = `Digite um valor válido!`
        return;
    }

    let area = (baseValue * alturaValue)/2
    outArea.innerHTML = `A área do triângulo cuja a base ${baseValue} e altura ${alturaValue}
    é ${area}`;
}

const raio = document.getElementById("raio")

const calcularAreaCircunferencia = () => {
    const raioValue = parseFloat(raio.value)

    if (isNaN(raioValue)){
        outCircunferencia = `Digite um valor válido!`
        return;
    }

    let pi = Math.PI;

    let areaCircunferencia = (raioValue ** 2) * pi;

    outCircunferencia.innerHTML = `A área da circuferência cujo o raio é ${raioValue} é ${areaCircunferencia}`;
}
