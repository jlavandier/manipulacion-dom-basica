// //  💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional.

// const tiposDeSuscripciones = {
//   free: 'Solo puedes tomar los cursos gratis',
//   basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
//   expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
//   expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
// };

// function conseguirTipoSuscripcion(suscripcion) {
//   if (tiposDeSuscripciones[suscripcion]) {
//       console.log(tiposDeSuscripciones[suscripcion]);
//       return;
//   }

//   console.warn('Ese tipo de suscripción no existe')
// }

// conseguirTipoSuscripcion('')


const h1 = document.querySelector('h1');
const form  = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//   event.preventDefault()
//   const sumaInputs = input1.value + input2.value
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  // event.preventDefault()
  const sumaInputs = input1.value + input2.value
  pResult.innerText = "Resultado: " + sumaInputs;
}


// cambiar el color con el tab


input1.addEventListener('focus', enfocadoEnElBoton)

function enfocadoEnElBoton(event) {
  event.target.style.background = 'pink'
}

input1.addEventListener('blur', fueraDelBoton)

function fueraDelBoton(event) {
  event.target.style.background = ''
}

// input2.addEventListener('focus', (cambiarColorFocus) => {
//   cambiarColorFocus.target.style.background = 'pink'
// })
