// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return cats.concat("Broom");
}
let copyOfCats = [...cats];
function prependCat(name) {
    return(copyOfCats = ["Arnold", ...cats]);
}
function removeLastCat() {
    return(cats.slice(0, 2));
}
function removeFirstCat() {
    return(cats.slice(1, 3));
}