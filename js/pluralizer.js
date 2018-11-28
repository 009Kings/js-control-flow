var thing = "mouse";
var count = 2;
var howManyThing = count + " " + thing;

// if I have time, I want to see if I can make this work
switch (true) {
    case ((count > 1 || count == 0) && (thing === "mouse")):
        thing = "mice";
        howManyThing = count + " " + thing;
        break;
    case (count > 1 || count == 0):
        howManyThing = count + " " + thing + "s";
        break;
}
// if (count > 1) {
//     howManyThing = count + " " + thing + "s";
// }
console.log(thing);
console.log(howManyThing);