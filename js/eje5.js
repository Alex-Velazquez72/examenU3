console.log("Hola ")
// Haz un formulario que convierta de euros a dólares. Supondremos que un euro son
// 1,10 dólares y que un dólar son 0,91 euros.
let cantidad = prompt("Introduce la cantidad que deseas convertir:");

cantidad = parseFloat(cantidad);

if (cantidad > 0) {
    let tipo = prompt("Escribe (E) para convertir de Euros a Dolares o (D) para convertir de Dolares a Euros:").toUpperCase();

    if (tipo === "E") {
        let resultado = cantidad * 1.10;
        alert(`${cantidad} euros son ${resultado} dolares`);
    } else if (tipo === "D") {
        let resultado = cantidad * 0.91;
        alert(`${cantidad} dolares son ${resultado} euros`);
    } else {
        alert("Opcion no valida, introduce 'E' o 'D'");
    }
} else {
    alert("Introduce un numero valido mayor que 0");
}
