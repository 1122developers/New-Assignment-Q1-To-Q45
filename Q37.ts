// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a efault value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string, country:string = "England") {
    console.log("The city", city, "is in", country);
    
}
describe_city("Islmabad", "Pakistan"),
describe_city("Manchester");
describe_city("Riaz", "Saudi Arab");
describe_city("Qandhar", "Afghanistan");
describe_city("New Yourk", "America")