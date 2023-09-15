// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// 	• Start with your program from Exercise 14. Add a print statement at the end of your program stating 	the name of the guest who can’t make it.
// 	• Modify your list, replacing the name of the guest who can’t make it with the name of the  new person 	you are inviting.
// 	• Print a second set of invitation messages, one for each person who is still in your list.

var guestList:string [] = ["Zeeshan Ghani", "Adnan Khalil", "Asif Ali Bhutta"];
var guestWhoCantMakeIt:string = "Zeeshan Ghani"
console.log(guestWhoCantMakeIt," can't make it to dinner");
var newGuest:string = "Junaid Sabri"
let indexOfguestwhoCantMakeIt:number = guestList.indexOf(guestWhoCantMakeIt)
//console.log(indexOfguestwhoCantMakeIt);
if (indexOfguestwhoCantMakeIt !==-1) {
    guestList[indexOfguestwhoCantMakeIt] = newGuest
}
console.log(guestList[0]);
console.log("Second set of invitation message");
guestList.forEach((guest:string) => {
    console.log(`Dear ${guest}, Your are invited to Diner`);
    
});

export{};