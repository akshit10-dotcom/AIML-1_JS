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
// var person2=new Object();
// person2.name="Akshit";
// person2.age=32;
// person2.isMarried=true;
// person2.address={};
// person2.address.street="nagar road";
// person2.address.flat=33;
// console.log(person2)
// Object is unordered collection of data while array is ordered
// Array is a special type of object
// var myinfo=new array();
// var myinfo1=array();
// console.log(myinfo,myinfo1);
// let collection=[
//     {},
//     [],
//     true,
//     "john",
//     function(){},
//     98398288294,
//     undefined,
//     null,
//     new String("abc"),
//     new Date(),
// ];
// console.log(collection)
// collection.teacherName = "John Max";
// collection.phoneNo = 4732075984;
// console.log(collection)
// var trainerinfo=["Akshit",18,"Ghaziabad",{isMarried:false}];
// console.log(trainerinfo[trainerinfo.length-1]);
// DOM document oject model it enables  js  to  dyamically access manipulate and update content
// Window object is object of the browser which is always at the top of the hierarchy
// Document object - if there is a need to access any element in an html page, we always start with accessing the document object
// Document object is the property of the window object
// DOM manipulation in js
// const result = document.getElementById("para");
// console.log(result);
// result.innerHTML = "my self";
// result.title = "myname";
const result2 = document.getElementsByClassName("myClass");
result2.innerHTML = "hii";