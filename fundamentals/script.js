/*    // variable declaration
   //note constant declared in upper case 
   let js = 'amazing';
   //simple if statement
//    if(js === 'amazing')
//     alert('JS is FUN!');


//example on dynamic typing
let javaScriptIsFun = true;

console.log(typeof javaScriptIsFun);

javaScriptIsFun = 'JS can be tricky';
console.log(typeof javaScriptIsFun + ' ' + javaScriptIsFun );

//note let keyword is block scoped while var keyword function scoped

// #### first challenge ######
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//  const BMI_Mark = massMark/(heightMark * heightMark);
//  const BMI_John = massJohn/ heightJohn **2;
//  const markHigherBMI = BMI_Mark > BMI_John;

 const BMI_Mark = calculateBMI(massMark,heightMark)
 const BMI_John = massJohn/ heightJohn **2;
 const markHigherBMI = BMI_Mark > BMI_John;

 console.log(BMI_Mark,BMI_John,markHigherBMI);

 function calculateBMI (mass, height){
     return BMI = mass/(height*height);
 }


 */

