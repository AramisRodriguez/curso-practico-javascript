
/* 

console.log({
    n1,
    n2,
    n3,
});

El console.log() con {} dentro sirve para mandar a consola varias variables u otros como si fuese un objeto y nos retorna como si fuese un objero con sus propiedades con sus valores.

*/

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function valorCupon(input) {
    if (input === "descuento15") {
        return 15;
    } else if (input === "descuento30") {
        return 30;
    }
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const valorDescuento = valorCupon(discountValue);

    const resultP = document.getElementById("ResultP");

    const precioConDescuento = calcularPrecioConDescuento(priceValue, valorDescuento);
    resultP.innerText = `El precio con descuento es $${precioConDescuento}.`;
}