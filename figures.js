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
console.group("Circulos")
const PI = Math.PI;
function circunferencia(radio, PI) {
  let diametro = radio * 2;
  return diametro * PI;
}


// console.log("El radio del Circulo es: " + radioCirculo + "cm");
// console.log("El diametro del Circulo es: " + diametroCirculo + "cm");
// console.log("PI: " + PI);


// console.log("El perimetro del Circulo es: " + circunferencia + "cm");

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
  const lado = input.value;
  const area = areaCuadrado(lado);
  alert("El área es: " + area);
}