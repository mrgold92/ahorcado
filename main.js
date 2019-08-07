$(function () {
    rayas();
    abecedario();
    intentos();
});

var palabras = [
    "casa",
    "coche",
    "elefante",
    "sombrilla",
    "playa",
    "montaña",
    "siete",
    "cuaderno",
    "boligrafo",
    "despertador"
];

var pistas = [
    "Sitio donde vives",
    "Objeto que sirve para moverte de un lado a otro",
    "Animal con trompra",
    "Sirve para protegerte del sol en verano",
    "Sitio donde puedes construir castillos de arena",
    "Sitio donde puedes hacer senderismo",
    "Número anterior al ocho",
    "Objeto donde puedes escribir",
    "Objeto con el que puedes escribir",
    "Te despierta por las mañanas"
];

var aleatorio = Math.floor(Math.random() * palabras.length);
var palabra_escogida = palabras[aleatorio];
var pista_escogida = "Pista: " + pistas[aleatorio];

var intent = 5;
var g = [];

function rayas() {
    for (let i = 0; i <= palabra_escogida.length - 1; i++) {
        g.push("-");
    }
    $("#letras").text(g.join(" "));
    $("#pistas").text(pista_escogida);
}

function mostrarRayas() {
    for (let i = 0; i < g.length; i++) {
        $("#letras").text(g.join(" "));
    }
}

var abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

function abecedario() {
    var a = "";
    var myDiv = document.createElement("ul");

    for (let i = 0; i < abc.length; i++) {
        var li = document.createElement("li");

        var a = document.createElement("a");
        a.href = "#";
        a.setAttribute("onclick", 'comprobar("' + abc[i] + '")');
        var al = document.createTextNode(abc[i]);
        a.appendChild(al);
        li.appendChild(a);
        myDiv.appendChild(li);

        $(myDiv).appendTo("#abc");
    }
}

function comprobar(letra) {
    var letra_escogida = ["-"];

    for (let i = 0; i < abc.length; i++) {
        if (abc[i] === letra) {
            abc.splice(i, 1);
        }

    }
    $("#abc").html("");
    abecedario();
    letra_escogida.push(letra);

    jugar(letra);
}

function jugar(letra) {
    var p = 0;
    var c = 0;
    var no = 0;
    var f = 0;

    for (let i = 0; i < palabra_escogida.length; i++) {
        if (palabra_escogida.charAt(i).toUpperCase() == letra) {
            p = i;
            g[p] = letra;
            mostrarRayas();
            f += 1;
        }
    }
    for (let i = 0; i < g.length; i++) {
        if (g[i] != "-") {
            no++
        }
    }

    if (no == palabra_escogida.length) {
        fin();
    }

    if (f === 0) {
        intent--;
        intentos();
    }
}

function intentos() {
    if (intent == 0) {
        $("#intentos").text("Intentos: " + intent);
        gameOver();
    } else {
        $("#intentos").text("Intentos: " + intent);
    }
}

function gameOver() {
    g = [];
    $("#abc").text("");
    $(".abc").css("display", "none");
    $(".mensajes").css("display", "flex");
    $(".mensajes").css("background-color", "rgb(138,22,22)");
    $("#mensajes").text("Lo sentimos, la palabra correcta era: " + palabra_escogida);
}

function fin() {
    g = [];
    $("#abc").text("");
    $(".abc").css("display", "none");
    $(".mensajes").css("display", "flex");
    $(".mensajes").css("background-color", "#268b3c");
    $("#mensajes").text("Fin del juego. Enhorabuena");
}

function again() {
    location.reload();
}