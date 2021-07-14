// Codigo del cuadrado
console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
  return lado * lado;
}


// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triángulo
console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}


// console.log("El área del Triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");
const PI = Math.PI;
function perimetroCirculo(radio, PI) {
  let diametro = radio * 2;
  return diametro * PI;
}

function areaCirculo(radio, PI) {
  return PI * (radio * radio);
}


// console.log("El área del Circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = input.value;
  const perimetro = perimetroCuadrado(lado);
  alert("El perimetro es: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado =  parseInt(input.value);
  const area = areaCuadrado(lado);
  alert("El área es: " + area);
}


function calcularPerimetroTriangulo() {
  const inputLado = document.getElementById("InputLadoTriangulo");
  const lado = parseInt(inputLado.value);

  const inputBase = document.getElementById("InputBaseTriangulo");
  const base = parseInt(inputBase.value);

  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const altura = parseInt(inputAltura.value);

  const perimetro = perimetroTriangulo(lado, lado, base);
  alert("El perimetro es: " + perimetro);
}

function calcularAreaTriangulo() {
  const inputLado = document.getElementById("InputLadoTriangulo");
  const lado = parseInt(inputLado.value);

  const inputBase = document.getElementById("InputBaseTriangulo");
  const base = parseInt(inputBase.value);

  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const altura = parseInt(inputAltura.value);

  const area = areaTriangulo(base, altura);
  alert("El área es: " + area);
}


function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = parseInt(input.value);
  const PI = Math.PI;

  const perimetro = perimetroCirculo(radio, PI);
  alert("El perimetro es: " + perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = parseInt(input.value);
  const PI = Math.PI;

  const area = areaCirculo(radio, PI);
  alert("El área es: " + area);
}

// Función para calcular la altura d eun triángulo Isósceles
function alturaTrianguloIso(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base){
    const altura = Math.sqrt(lado1**2 - (base**2 / 4));
    return altura;
  }
  else {
    console.error("No es un triángulo isósceles")
  }
}

function calcularAlturaTrianguloIso() {
  const inputLado = document.getElementById("InputLadoTrianguloIso");
  const lado = parseInt(inputLado.value);

  const inputBase = document.getElementById("InputBaseTrianguloIso");
  const base = parseInt(inputBase.value);

  const altura = alturaTrianguloIso(lado, lado, base);
  alert("La altura es: " + altura);
}

// function calcularAreaTriangulo() {
//   const inputLado = document.getElementById("InputLadoTrianguloIso");
//   const lado = parseInt(inputLado.value);

//   const inputBase = document.getElementById("InputBaseTrianguloIso");
//   const base = parseInt(inputBase.value);

//   const inputAltura = document.getElementById("InputAlturaTrianguloIso");
//   const altura = parseInt(inputAltura.value);

//   const area = areaTriangulo(base, altura);
//   alert("El área es: " + area);
// }