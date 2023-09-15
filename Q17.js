"use strict";
// // Seeing the World: Think of at least five places in the world you’d like to visit.
// 	• Store the locations in a array. Make sure the array is not in alphabetical order.
// 	• Print your array in its original order.
// 	• Print your array in alphabetical order without modifying the actual list.
// 	• Show that your array is still in its original order by printing it.
// 	• Print your array in reverse alphabetical order without changing the order of the original list.
// 	• Show that your array is still in its original order by printing it again.
// 	• Reverse the order of your list. Print the array to show that its order has changed.
// 	• Reverse the order of your list again. Print the list to show it’s back to its original order.
Object.defineProperty(exports, "__esModule", { value: true });
var favPlaceInWorld = ["Lahore", "Makkah", "Manchester", "Las Vegas", "HongKong"];
console.log("Origional Order", favPlaceInWorld);
// Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order");
console.log([...favPlaceInWorld].sort());
console.log(favPlaceInWorld);
// array in reverse alphabetical order without changing
console.log("Reverse alphabetical order");
console.log([...favPlaceInWorld].sort().reverse());
console.log(favPlaceInWorld);
//Reverse the order of your list. Print the array to show that its order has changed.//
console.log("\nReverse Order");
favPlaceInWorld.reverse();
console.log(favPlaceInWorld);
// back to its original order
console.log("\nBack To Originale Order");
favPlaceInWorld.reverse();
console.log(favPlaceInWorld);
