// Exercice 1

const currentYear = 2022;
let personOneBirth = prompt("saisissez la première date de naissance :");
let personTwoBirth = prompt("saisissez la seconde date de naissance :");

let personOneAge = currentYear - personOneBirth;
let personTwoAge = currentYear - personTwoBirth;
let nbreYear;

if (personOneAge > personTwoAge) {
    nbreYear = personOneAge - 2*personTwoAge;
}
else {
    nbreYear = personTwoAge - 2*personOneAge;
}

alert(`l'année est ${currentYear - nbreYear}`);

// Exercice 2

// Sans RegEx
let postalCode = prompt("Saisissez votre code postal :");

if(postalCode.length == 5) {

}