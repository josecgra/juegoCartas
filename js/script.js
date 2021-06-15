// array de cartas
const arrayCartas = [
    {
      name: 'fries',
      img: 'img/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'img/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'img/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'img/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'img/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'img/hotdog.png'
    },
    {
      name: 'fries',
      img: 'img/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'img/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'img/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'img/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'img/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'img/hotdog.png'
    }
  ]


  // barajamos las cartas utilizando un valor aleatorio entre -0.5 y 0.5
  arrayCartas.sort(function () {
    return 0.5 - Math.random();
  });

// obtener el tablero y el resultado desde JS utilizando querySelector
...
...


// crearemos tres arrays vacios
// * cartasElegidas donde tendremos los nombres de las cartas seleccionadas
// * cartasElegidasId donde tendremos los id's del array de cartas
// * cartasDescubiertas que contendra los nombres de las cartas que hemos logrado descubrir coincidencia
...
...
...

// Funcion que creara nuestro tablero
// * bucle for que recorra el array de cartas
// * por cada iteracion creara un elemento en el DOM de imagen (img)
// * le incorporara el atributo src con la imagen blank.png
// * le incorporara el atributo datos-id donde ira el indice del bucle for
// * a la carta le incluira un evento para que cuando se le haga clic llame a la funcion levantarCarta
// * finalmente agregaremos al tablero la carta
function crearTablero(){
    for (let i = 0; i < arrayCartas.length; i++) {
        ...
        ...
        ...
        ...
        ...
    }
}

// verificamos coincidencia
function comprobarCoincidencia() {
    // obtenemos en una variable "cartas" todas las imagenes del dom (usa querySelectorAll con el selector que corresponda)
    ...
    
    // obtenemos en dos variables "opcionUnoId" y "opcionDosId" los indices de las dos cartas elegidas
    ...
    ...
    

    // comprobamos que la carta no sea la misma (mismo ID), si es asi volvemos a tapar las cartas con la imagen blank.png y enviamos una alerta
    if (opcionUnoId == opcionDosId) {
        ...
        ...
        ...
    } // si la carta clicada no fue la misma verificamos que sus nombres sean los mismos (name) e informamos que hubo una coincidencia
      // ademas incluiremos el array de cartasElegidas en cartasDescubiertas, pondremos las cartas en blanco (white.png) y les borraremos su evento de click
    else if (cartasElegidas[0] === cartasElegidas[1]) {
        ...
        ...
        ...
        ...
        ...
        ...
    } else { // sino clicamos la misma carta ni tampoco hubo coincidencia entonces hemos fallado, taparemos con blank.png e informaremos con alerta
        ...
        ...
        ...
    }

    // vaciaremos los arrays de cartasElegidas y cartasElegidasId. y Actualizamos en el resultado el nº de cartas descubiertas
    // validaremos que si el nº de cartasDescubiertas es el mismo que el array de cartas dividido por 2 ya habremos encontrado todas las coincidencias informando
    // con una alerta
    ...
    ...
    ...
    ...
    ...

}


// Funcion que realizara la logica al levantar una carta
// * obtendrá el id de la carta (datos-id)
// * incorporará el nombre al array de cartasElegidas
// * incorporará el id de la carta al array de cartasElegidasId
// * descubrirá la carta mostrando la imagen obtenida del array de cartas
// * si el numero de cartas elegidas es igual a 2 esperará medio segundo y ejecutara la funcion comprobarCoincidencia
function levantaCarta() {
  ...
  ...
  ...
  ...
  if (cartasElegidas.length === 2) {
    ...
  }
}

crearTablero();
