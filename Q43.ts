// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwitch(...items:string) {
    console.log("Sandwich Items:");
    if (items.length === 0){
        console.log("You ordered an empty item Sandwich, Pleas select some exiting items");        
    }
    else {
        console.log("You ordered a Sandwich with following items");
        for (let item of items)
        {
            console.log(item);            
        }
        
    }}
    makeSandwitch("Cheese", "Lettuce", "Bread");
    makeSandwitch("Tomato", "Mayo");
    makeSandwitch();