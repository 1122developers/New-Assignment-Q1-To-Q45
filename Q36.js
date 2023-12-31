"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("----------------------------------------------------------------------------------");
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log("Creating a", size, "sized shirt with the message: ", message);
}
make_shirt();
console.log("--------------------------------------------------------------------------------");
make_shirt("Medium");
console.log("---------------------------------------------------------------");
make_shirt("Small", "TypeScript IS The Future OF WEB");
console.log("---------------------------------------------------------------");
