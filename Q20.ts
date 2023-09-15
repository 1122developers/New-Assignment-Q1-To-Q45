// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//Define key type for array
type studentstype = {studentName:String, studentClass: Number, sutdentGetTransportFecility: boolean, studentInrolmentYear: number};

// creat a empty array to store object
var studentsData=[];
// creat objects to store in array
var student1:studentstype={
    studentName:"Zeeshan",
    studentClass : 6,
    sutdentGetTransportFecility : false,
    studentInrolmentYear : 2022    
}
var student2:studentstype={
    studentName : "Amjad",
    studentClass : 9,
    sutdentGetTransportFecility : true,
    studentInrolmentYear : 2001}
var student3:studentstype={
    studentName:"Ali",
    studentClass:8,
    sutdentGetTransportFecility:false,
    studentInrolmentYear:2002}

studentsData.push(student1)
studentsData.push(student2)
studentsData.push(student3)
console.log(studentsData);


