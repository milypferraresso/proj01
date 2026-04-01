let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (ex: 1.75):"));
let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    alert("Abaixo do peso");
}else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal");
}else if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso");
}else {
    alert("Obesidade");
}
