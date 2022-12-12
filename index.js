// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.splice(0,0, "Bob");
}
function destructivelyRemoveLastCat() {
    cats.splice(-1);
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(allcats) {
    return allcats = ([...cats, "Broom"]);
}
function prependCat(cats1) {
    return cats1 = (["Arnold", ...cats]);
}
function removeLastCat(catslast) {
    return catslast = (cats.slice(0,cats.length -1));
}
function removeFirstCat(catsfirst) {
    return catsfirst = (cats.slice(1));
}