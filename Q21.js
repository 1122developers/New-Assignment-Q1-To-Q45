"use strict";
/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program*/
function Cars(name, company, color) {
    return {
        name,
        company,
        color,
    };
}
var carsType = [
    Cars("Vagnor", "Suzuki", "Black"),
    Cars("City", "Honda", "White"),
    Cars("GLI", "Corola", "Silver Grey"),
];
var invalidIndex = 10;
console.log("cars at index", invalidIndex, carsType[invalidIndex]);
carsType.forEach((Cars) => {
    console.log("Name=", Cars.name, "company=", Cars.company, "color", Cars.color);
});
