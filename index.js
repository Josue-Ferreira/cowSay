const person = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I'm ${person.name} from ${person.campus} campus`,
    e : "oO",
    T : "U"
}));