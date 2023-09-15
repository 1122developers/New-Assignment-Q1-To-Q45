"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["Banana", "Cheeku", "Mango"];
if (favorite_fruits.includes("Banana")) {
    console.log("I like to eat Banana");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I don't like Apple");
}
if (favorite_fruits.includes("Cheeku")) {
    console.log("I Love To Eat Cheeku");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I enjoy Mango");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I Don't Like Orange");
}
