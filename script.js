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

//sans regex
const codePostalSansRegex = prompt(" entrer le code postal")
if(String(codePostalSansRegex).length != 5 ||  !Number(codePostalSansRegex)){
    console.log("error")
} else {
    console.log("succès")
}

// avec regex
const codePostalAvecRegex = prompt(" entrer le code postal")
const numberRegex = /^[\d+]{5}$/;  //peut contenir que des chiffres et le nombre de caractere precis
if(numberRegex.test(codePostalAvecRegex)){
    console.log("succès")
} else {
    console.log("error")
}

// Exercice 3

const motEntree = prompt("Veillez entrer un mot")
const motSansVoyelle = motEntree.replace(/[aeiou]/gi, '');
console.log("le mot sans les voyelles est " +motSansVoyelle);
//bonus
const a = 1
const e = 2
const i= 3
const o = 4
const u = 5
const  motSansVoyelleA = motEntree.replace(/[a]/gi, a)
const  motSansVoyelleAE = motSansVoyelleA.replace(/[e]/gi, e)
const  motSansVoyelleAEI = motSansVoyelleAE.replace(/[i]/gi, i)
const  motSansVoyelleAEIO = motSansVoyelleAEI.replace(/[o]/gi, o)
const  motSansVoyelleAEIOU = motSansVoyelleAEIO.replace(/[u]/gi, u)
console.log("Le nouveau mot apres avoir remplacé les voyelles par des caracteres est " +motSansVoyelleAEIOU)
