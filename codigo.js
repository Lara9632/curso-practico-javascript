// Codigo del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}


// Codigo del triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}



// Codigo del circulo
const PI = Math.PI;
function perimetroCirculo(radio, PI) {
  let diametro = radio * 2;
  return diametro * PI;
}

function areaCirculo(radio, PI) {
  return PI * (radio * radio);
}

function onClickCalcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = input.value;
  const perimetro = perimetroCuadrado(lado);
  resultado = document.getElementById("Area-PerimetroCuad");
  resultado.innerText = "El perimetro es: " + perimetro;
}

function onClickCalcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado =  parseInt(input.value);
  const area = areaCuadrado(lado);
  resultado = document.getElementById("Area-PerimetroCuad");
  resultado.innerText = "El área es: " + area;
}


function onClickCalcularPerimetroTriangulo() {
  const inputLado = document.getElementById("InputLadoTriangulo");
  const lado = parseInt(inputLado.value);

  const inputBase = document.getElementById("InputBaseTriangulo");
  const base = parseInt(inputBase.value);

  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const altura = parseInt(inputAltura.value);

  const perimetro = perimetroTriangulo(lado, lado, base);
  resultado = document.getElementById("Area-PerimetroCir");
  resultado.innerText =  "El perimetro es: " + perimetro;
}

function onClickCalcularAreaTriangulo() {
  const inputLado = document.getElementById("InputLadoTriangulo");
  const lado = parseInt(inputLado.value);

  const inputBase = document.getElementById("InputBaseTriangulo");
  const base = parseInt(inputBase.value);

  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const altura = parseInt(inputAltura.value);

  const area = areaTriangulo(base, altura);
  resultado = document.getElementById("Area-PerimetroT");
  resultado.innerText =  "El área es: " + area;
}


function onClickCalcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = parseInt(input.value);
  const PI = Math.PI;

  const perimetro = perimetroCirculo(radio, PI);const resultado = document.getElementById("Area-PerimetroCir");
  resultado.innerText = "El perimetro es: " + perimetro;
}

function onClickCalcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = parseInt(input.value);
  const PI = Math.PI;

  const area = areaCirculo(radio, PI);
  const resultado = document.getElementById("Area-PerimetroCir");
  resultado.innerText = "El área es: " + area;
}

// Función para calcular la altura de un triángulo Isósceles
function alturaTrianguloIso(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base){
    const altura = Math.sqrt(lado1**2 - (base**2 / 4));
    return altura;
  }
  else {
    console.error("No es un triángulo isósceles")
  }
}

function onClickCalcularAlturaTrianguloIso() {
  const inputLado = document.getElementById("InputLadoTrianguloIso");
  const lado = parseInt(inputLado.value);

  const inputBase = document.getElementById("InputBaseTrianguloIso");
  const base = parseInt(inputBase.value);

  const altura = alturaTrianguloIso(lado, lado, base);
  const resultado = document.getElementById("AlturaT");
  resultado.innerText = "La altura es: " + altura;
}



// 2do Taller Inicio

function calcularDescuento(precio, descuento) {
  return precio * (100 - descuento) / 100;
}

function onClickCalcularElDescuento() {
  const inputPrecio = document.getElementById("InputPrecio");
  const precio = inputPrecio.value;

  const inputDescuento = document.getElementById("InputDescuento");
  const descuento = inputDescuento.value;

  const precioVenta = calcularDescuento(precio, descuento);
  const resultado = document.getElementById("FinalPrice");
  resultado.innerText = "El precio con descuento es: $" + precioVenta;
}

// Codigo de taller 3
const lista1 = [
  100,
  200,
  300,
  500,
  20000000
];


let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
  sumaLista1 = sumaLista1 + lista1[i];
}


// Promedio
function calcularPromedio(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
  sumaLista = sumaLista + lista[i];
}
  // const sumaLista = lista.reduce(
  //   function (valorAcumulado = 0, nuevoElemento) {
  //     return valorAcumulado + nuevoElemento; // funciona similar al ciclo for
  //   }
  // );

  return sumaLista / lista.length;
}


// Mediana
const lista2 = [
  300,
  200,
  20000000,
  900,
  100,
  300
];



function calcMediana(lista) {
  lista.sort(function compareNumbers(a, b) {
  return a - b;
}
);
  const mitadLista = parseInt(lista.length / 2);
  let mediana = 0;
  console.log("Lista ordenada: " + lista);
  if (lista.length % 2 === 0) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista]; 
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    
    return "La mediana es " + mediana;

  } else {
    mediana = lista[mitadLista];
    return "La mediana es " + mediana;
}
}

// Moda
const lista3 = [1,2,3,4,5,6,7,8,9,9,8,7,67,7,6,5,45,3,5,6,76,7,6,5,4,34,2,3,4,54,5,6,7,7,7,88,6,5,34,5,56,6,4,3,5,6,44,6,4,4];

function calcModa(lista) {
  const listaCount = {};

  lista.map(
    function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  );

  const listaArray = Object.entries(listaCount).sort(
    function (a, b) {
      return a[1] - b[1];
    }
  );

  const moda = listaArray[listaArray.length - 1];
  return "La moda es: " + moda[0] + " con " + moda[1] + " repeticiones";
}



// Analisis
const salariosCol = colombia.map(
  function (persona) {
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);


const medianaCol = calcMediana(salariosColSorted);

// mediana del top 10%

const spliceStart = parseInt((salariosColSorted.length * 90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;
const top10Col = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = calcMediana(top10Col);

console.log(medianaCol, medianaTop10Col);
