"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
    • Make a list of five or more usernames called current_users.
    • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
    • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
    • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 	accepted.*/
var cur_Users = ["Hassan", "Sardar", "Zohan", "Shahaan", "Sohail"];
var addNew_Users = ["Hassan", "adnan", "Ghani", "zohan", "ali"];
function checkUserName(cur_Users, addNew_Users) {
    var lowercasedcur_Users = cur_Users.map(user => user.toLowerCase());
    for (var newUsers of addNew_Users) {
        var lowercasedaddNew_Users = addNew_Users.toL;
    }
}
// var num1:Number[] = [1,2,3,4,5,6,7,8,9,10];
//     console.log(num1);  
// var num1:Number[] = num1.map[i=>0,];
