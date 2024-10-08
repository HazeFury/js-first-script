// EXERCICE 1 :
// On vous donne un tableau contenant des nombres.
// On souhaite répartir les nombres pairs dans un tableau et
// les nombre impairs dans un autre tableau.

const arrayOfnumber = [22, 65, 14, 85, 4, 71, 26, 99, 10, 58, 20, 41, 69];

// Etape 1
const evenArray = [];
const oddArray = [];

// Etape 2
for (let i = 0; i < arrayOfnumber.length; i++) {
  // Etape 3
  if (arrayOfnumber[i] % 2 === 0) {
    evenArray.push(arrayOfnumber[i]);
  } else {
    oddArray.push(arrayOfnumber[i]);
  }
}

// console.log("nombre pair : ", evenArray);
// console.log("nombre impair : ", oddArray);

// EXERCICE 2 :
// On vous donne une chaine de caractère contenant divers caractères.
// On souhaite incrémenter un score à chaque fois que le caractère "a" est
// présent dans cette chaine de caractère.

const string = "ça fait le café mais bon c'est un peu rotor quand même";
let score = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === "e") {
    score++;
  }
}
console.log(score);

// le code ici

// EXERCICE 3
// Votre personnage à 100 points de vie.
// Il engage le combat avec un adversaire
// A chaque il encaisse des dégats
// On souhaite faire un programme pour réaliser un combat dans lequel
// le personnage se bat tant qu'il a des points de vie
