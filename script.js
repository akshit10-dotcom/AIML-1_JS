// var a=10;
// var b=20;
// var linebreak="<br/>";

// document.write("(a==b)=>");
// result=(a==b);
// document.write(result);
// document.write(linebreak);
// document.write("(a!=b)=>");
// result=(a!=b);
// document.write(result);
// document.write(linebreak);
// var count;
// document.write("Starting loop"+"<br/>");
// for(count=0;count<10;count++){
//     document.write("Current Count:"+count);
//     document.write("<br/>");
// }
// document.write("Loop stopped");
// const person={
//     fname:"Ajay",
//     iname:"Singh",
//     age:25
// };
// for(let x in person){
//     console.log("person details:"+x+":"+person.x)
// }
// +person[x] is used for accessing value or person.x
// var count=0;
// document.write("Starting loop");
// while(count<10){
//     document.write("Current Count:"+count+"<br/>");
//     count++;
// }
// var age=20;
// if(age>18){
//     document.write("<b>You are eligible to cast the vote</b>");
// }
// let age=20;
// if(age>=18){
//     console.log("You are an adult.");
// }
// else{
//     console.log("You are a minor");
// }
// var grade='A';
// switch(grade){
//     case 'A':console.log("Good job");
//     break;
//     case'B':console.log("Pretty good<br/>");
//     break;
//     default:console.log("Unknown grade<br/>")
// }
// function myfunction(){
//     alert("Hello World")
// }{
// var res=mul(12,30);
// function mul(x,y){
//     return x*y;
// }
// console.log(res);
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// arrow function
// var add2=(a,b)=>{
//     console.log(a+b);
// }
// add2(102,20);
// for single line parameters
// var add3=(a,b)=> console.log(a+b);
// add3(10,20);
// var person={
//     name:"John Max",
//     age:30,
//     isMarried:true,
//     address:{
//         street:"Vijay Nagar",
//         flat:201
//     }
// };
// console.log(person);
// for(let x in person){
//     console.log("person details":+x+":"+person[x])
// }
var person2=new Object();
person2.name="Akshit";
person2.age=32;
person2.isMarried=true;
person2.address={};
person2.address.street="nagar road";
person2.address.flat=33;
console.log(person2)