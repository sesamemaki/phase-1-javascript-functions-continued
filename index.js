// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");


function wrapAdjective(flair ="*") {

    return function(parameter="special"){
        return `You are ${flair}${parameter}${flair}!`
    }
}

console.log(wrapAdjective("||")("a dedicated programmer"));

// const button = document.getElementById("button");
// button.addEventListener("click", function(){
//     console.log("razzledazzle")
// })

// function outer(greeting, msg = "Its a fine day to learn") {
//   const innerFunction = function (name, lang = "python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`;
//   };

//   return innerFunction("student", "Javascript");
// }

// console.log(outer("Hello"))

// function outer(greeting, msg = "It's a fine day to learn") {
//   const innerFunction = function (name, lang = "python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`;
//   };
//   return innerFunction;
// }

// console.log(outer("hello")("student", "java"))

// const storedFunction = outer("Hello");
// console.log(storedFunction("student", "Java"))

// const array = ( function (thingtoAdd){
//     const base = 3;
//     return[
//         function(){
//             return base + thingtoAdd;
//         },
//         function(){
//             return base;
//         }
//     ]
// }

// )(6);

// console.log(array[1]())