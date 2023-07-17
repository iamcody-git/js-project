let userName ;
let age;

document.getElementById("submit").onclick = function(){
    userName = document.getElementById("uname").value;
    age=document.getElementById("age").value;
    // console.log('My name is ' + userName);
    // console.log("My age is " + age);
    console.log("my name is  " + userName + " and " +  "i am " +  age  + "years old");
}

// this is for pop up window
// let userName=window.prompt("what's your name?");
// console.log(userName);

