"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianNames = ["Zeeshan Ghani", "Adnan Khalil", "Asif Ali", "Junaid Sabri", "Mohsin"];
function show_magicians(magicians) {
    for (var magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var magician of magicians) {
        greatMagicians.push(magician, "the Great");
    }
    return greatMagicians;
}
var greatMagicianNames = make_great(magicianNames);
show_magicians(greatMagicianNames);
