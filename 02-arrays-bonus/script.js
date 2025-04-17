const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed();
console.table(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.warn(`%cNomi più lunghi di 5 caratteri`, `font-weight: bold;`)

const longNames = [];

for (let i = 0; i < teachers.length; i++) {

if (teachers[i].length >= 5) {
    
    longNames.push(teachers[i])
  }
}
console.table(longNames)

// 3. Rimuovi 'Ed' dall'array teachers

console.warn('Eliminiamo Ed')

teachers.splice(teachers.indexOf('Ed'), 1) 
console.table(teachers)

//Inserisci un nume da eliminare dalla lista

/* let name = prompt('Inserisci un nome tra quelli della lista')

teachers.splice(teachers.indexOf(name), 1)
console.log(teachers) */