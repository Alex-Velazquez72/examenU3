console.log("Hola 2")
// Haga un formulario que convierta de grados Celsius a grados Fahrenheit. Para ello,
// tendré que multiplicar por 9/5 y sumar 32. Tenga en cuenta que 30 grados Celsius
// son 86 grados Fahrenheit.

let celsius = prompt("Introduce la temperatura en grados Celsius:");

celsius = parseFloat(celsius);

if (celsius || celsius === 0) {
    let fahrenheit = (celsius * 9 / 5) + 32;

    alert(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
} else {
    alert("Introduce un numero valido");
}
