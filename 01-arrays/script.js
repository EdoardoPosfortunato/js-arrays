const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]

console.log(`Nome Insegnante e Posizione`)

for (let i = 0; i < teachers.length; i++) {

  console.log(`${teachers[i]} è l'insegnante in posizione ${i}`);

}


// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

console.log(`Chi è l'insegnante in posizione 4?`)
const fourthTeacher = teachers[4];
console.log(fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

console.log(`Cambio il quinto con Patrick`)
teachers[4] = "Patrick"
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop();
console.log(lastTeacher);
console.log(teachers);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = teachers.shift();
console.log(firstTeacher);
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push('Vanessa')
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift('Sarah')
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

console.log("È presente Fabio?")

/* const isFabioPresent = teachers.some(checkName);
                         function checkName(name) {
                           return name === "Fabio"
 }; */

let isFabioFind
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio"){
    isFabioFind = true;
    } 
}
console.log(`Prova con ciclo for: ${isFabioFind}`); //

const isFabioPresent = teachers.includes('Fabio');
console.log(`Prova con ciclo for: ${isFabioPresent}`);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

// const lewisIndex = teachers.findIndex(checkName);
// function checkName(name) {
//   return name === "Lewis"
// };

const lewisIndex = teachers.indexOf('Lewis');
console.log("In che posozione si trova Lewis?")
console.log(lewisIndex);


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString

// const teachersString = teachers.toString();
const teachersString = teachers.join(" - ");
console.log(teachersString)

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

// const isTeachersEmpty = null; 

const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty) // metodo giusto

if (teachers.length === 0){
  console.log('Non è una string')
} else {
  console.log('è una stringa')
}

