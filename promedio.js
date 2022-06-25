/*

Resumen 😃
Media o promedio aritmético: Consiste en sumar cada numero y dividirlo por la cantidad de numero que hay.

(20 + 30 + 40) = 90 / 3 = 30
Este no es tan optimo ya que si ingresa algo a lo que se le llama “dato atípico” los resultados no serian muy acertados.

.
Mediana: Este consiste en tener un numero de elementos numéricos, lo primero que debes de hacer es ordenarlos en forma ascendente:

Si el numero de datos que hay en el “arreglo” es impar escogemos el numero de la mitad: Si fueran 15 posiciones escogemos la posición 8
Si el numero de datos que hay en el “arreglo” es par escogemos el valor de las dos posiciones del centro y las dividimos en dos: Si fuera 16 escogemos la posición 8 y 9 y la dividimos entre 2
Este proceso es mucho mas optimo que la media ya que los datos atípicos no afectaran demasiado el valor final.
.
Moda: Este es el dato que mas se repite en un conjunto de datos si tenemos el siguiente arreglo [10,9,8,10,8,10,8,7,9] y vemos que dos números se repiten la misma cantidad de veces, simplemente se ponen los dos [8,10].
Este tipo de proceso es muy funcional cuando no solo queremos hablar de tipos de datos numéricos, tambien pueden ser cadenas de texto y demás.




[■,■,■,■].map(■→●) ⇒ [●,●,●,●]
[■,●,■,▲].filter(■→true) ⇒ [■,■]
[■,●,■,▲].find(●→true) ⇒ ●
[■,●,■,▲].findIndex(●→true) ⇒ 1
[■,●,■,▲].fill(●) ⇒ [●,●,●,●]
[■,●,■,▲].some(●→true) ⇒ true
[■,●,■,▲].every(●→true) ⇒ false

*/

function calcularMediaAritmetica(lista) {

    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //      sumaLista = sumaLista + lista[i];
    // }

    let sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;

    return promedioLista;

}

