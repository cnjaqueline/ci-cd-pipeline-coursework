document.addEventListener('DOMContentLoaded', () => {
    const somaForm = document.getElementById('somaForm');
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const resultado = document.getElementById('resultado');

    somaForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const num1 = parseFloat(numero1.value) || 0;
        const num2 = parseFloat(numero2.value) || 0;
        const soma = num1 + num2;
        resultado.textContent = `Resultado: ${soma}`;
    });
});