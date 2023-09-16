// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magicianNames: string[] = ["Zeeshan Ghani", "Adnan Khalil", "Asif Ali", "Junaid Sabri", "Mohsin"]
function show_magicians(magicians: string[]) {
    for (var magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]) {
    var greatMagicians: string[] = [];

    for (var magician of magicians) {
        greatMagicians.push(magician, "the Great");
    }
    return greatMagicians;
}

var greatMagicianNames = make_great(magicianNames);
show_magicians(magicianNames);
console.log(greatMagicianNames);


