
/*

console.group("nombreGrupo")
    código dentro...
console.End();

Esto sirve para agrupar y separar código en la consola.




//Código del Cuadrado

console.group("Cuadrados")

//Lado del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

//Perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");

//Area del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");

console.groupEnd();


//Código del Triangulo

console.group("Triangulo");

//Lados de triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo =5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");

//Perimetro del triangulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");

//Area del triangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");

console.groupEnd();


//Código del Circulos

console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");

// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");

// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");

//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");

console.groupEnd();

*/


/*

// Funciones que encapsulan las funcionalidades de cuadrado

function perimetroCuadrado(lado) {
    return lado > 0 ? lado * 4 : 'Ingresar un valor válido'
}

function areaCuadrado(lado) {
    return lado > 0 ? lado * lado : 'Ingresar un valor válido'
}

// Funciones que encapsulan las funcionalidades de triángulo

function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 > 0 & lado2 > 0 & base > 0 ? lado1 + lado2 + base : 'Ingresar valores válido'
}

function areaTriangulo(altura, base) { 
    return altura > 0 & base > 0 ? (base * altura)/2 : 'Ingresar valores válido'
}

// Funciones que encapsulan las funcionalidades de círculo

function diametroCirculo(radio) {
    return radio > 0 ? radio * 2 : 'Ingresar un valor válido'
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return radio > 0 ? diametro * Math.PI  : 'Ingresar un valor válido'
}

function areaCirculo(radio) {
    return radio > 0 ? (radio * radio) * Math.PI : 'Ingresar un valor válido'
}




Quiero hacer una aclaración que puede ser de gran ayuda para todos:

Recuerden que todo lo que entra en un formulario es tipo string, el input type=“number” lo que hace es que 
solamente reciba caracteres tipo número. Pero no significa que lo que entra JS lo tome como Number en las 
funciones.

Para ello se debe hacer coerción de lo que queda en los values o hacer la coerción en las funciones mismas 
al definirlas.

Si esto no se hace, el resultado va a ser muy diferente a lo esperado. Por ejemplo la función de perimetro 
de triángulo. Si ponemos que estos valores trianglePerimeter(5, 5, 5); al llamar la función el resultado 
será 555

*/


// Aquí interactuamos con el HTML

const PI = Math.PI;

function areaCuadrado(lado) {
    return lado * lado;
}

function areaTrianguloIsosceles(base, altura) {
    return (base * altura) / 2;
}

function areaCirculo(radio) {
    return PI * (radio * radio);
}


function calcularAreaCuadrado() {
    let input = document.getElementById("InputCuadrado");
    let value = Number(input.value);

    let area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area}cm^2`);
}


function calcularAreaTrianguloIsosceles() {
    let input = document.getElementById("InputBaseTriangulo");
    let valueBase = Number(input.value);
    let input2 = document.getElementById("InputAlturaTriangulo");
    let valueAltura = Number(input2.value);

    let area = areaTrianguloIsosceles(valueBase, valueAltura);
    alert(`El área del triangulo es: ${area}cm^2`);
}


function calcularAreaCirculo() {
    let input = document.getElementById("InputCirculo");
    let value = Number(input.value);

    let area = areaCirculo(value);
    alert(`El área de círculo es: ${area}cm^2`);
}

