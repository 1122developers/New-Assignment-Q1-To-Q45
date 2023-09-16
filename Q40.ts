// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianName:String []= ["Zeeshan Ghani", "Adnan Khalil", "Asif Ali", "Junaid Sabri", "Mohsin"]
function show_magicians(magician:string[]) 
{
    for (let index = 0; index < magicianName.length; index++) {
        const element = magicianName[index];
        console.log(element);        
    }
    };
show_magicians(magicianName);