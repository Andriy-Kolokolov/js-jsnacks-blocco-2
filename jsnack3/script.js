let arrayNames = ["Stefano", "Vincenzo", "Paolo", "Andrea", "Irene", "Henri", "Gianluca", "Alessio", "Davide"];
let arrayLastNames =["Minardi", "Rossi", "Spinelli", "Caiazzo", "Ferrari", "Lazzari", "Falco", "Kapidani", "Falcone"];

let arrayFakeNames = [];

for (let i = 0; i < arrayNames.length; i++) {
    arrayFakeNames[i] = arrayNames[i] + " " + arrayLastNames[i];
}
console.log(arrayFakeNames)
