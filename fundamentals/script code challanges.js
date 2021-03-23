'use strict';
// #### first challenge ######
//claculate who's Body musclar is better
 function calculateBMI (mass, height){
    return mass/(height*height);
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//  const BMI_Mark = massMark/(heightMark * heightMark);
//  const BMI_John = massJohn/ heightJohn **2;
//  const markHigherBMI = BMI_Mark > BMI_John;

 const BMI_Mark = calculateBMI(massMark,heightMark);
 const BMI_John = calculateBMI(massJohn,heightJohn);
//  const markHigherBMI = BMI_Mark > BMI_John;

//  console.log(BMI_Mark,BMI_John,markHigherBMI);


 //code challange #2
if(BMI_Mark > BMI_John)
    console.log(`Mark's BMI ${BMI_Mark} is higher than John's ${BMI_John}!`);
else
    console.log(`John's BMI ${BMI_John} is higher than John's ${BMI_Mark}!`);


//code challange #3
// which team got more score

const minimumScore = 100;

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 123;

let dolphinsAverageScore = calculateAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let koalasAverageScore = calculateAverage(koalasScore1, koalasScore2, koalasScore3);

function calculateAverage(score1, score2,score3){
    return (score1 + score2 + score3)/3;
}

function scoreResult(team1Average, team2Average){
    if (team1Average > team2Average && team1Average > 100){
        return 'dolphins is the winners';
    }else if (team2Average > team1Average && team2Average > 100){
        return 'koalas is the winners';
    }else if (team1Average == team2Average == 100){
        return 'draw';
    }else{
        return 'no winner';
    }
}
console.log(calculateAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3), calculateAverage(koalasScore1,koalasScore2, koalasScore3));
console.log(scoreResult(dolphinsAverageScore, koalasAverageScore));

console.log(true && false && !false);


//coding challange #4
//claculate tip for steven
const bill = 50;

let tip = calculatTipValue(bill);

function calculatTipValue(bill){
    if (bill >= 50 && bill <= 300){
        return bill * (15/100);
    }else{
        return bill * (20/100)
    }
}

console.log(`Steven, you should pay ${tip} as a tip`);

// tip claculator with arrays challange
var bills = [125,555,44];
var tips = [calculatTipValue(bills[0]), calculatTipValue(bills[1]),calculatTipValue(bills[2])];
var tipss = calcTipsArr(bills);

function calcTipsArr(arrOfBills){
    // console.log("ssss");
    var i;
    var arrofTips = [];
    for(i = 0; i < arrOfBills.length; i++){
        console.log(arrOfBills[i]);
        arrofTips.push(calculatTipValue(arrOfBills[i]));
        // console.log(arrofTips + 'insid fun');
    }

    return arrofTips;
}
console.log(tips);
console.log(tipss);

// object coding challange #1
const jonas = {
    firstName : 'Jonas',
    lastName : 'SCH',
    birthYear : 1991,
    job : 'teacher',
    hasDriverLicense : false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
        return this.summary;
    }

}

// let ObjchallangeOutput = `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriverLicense ? 'a' : 'no'} driver's license`;

console.log(jonas.getSummary());


//object coding challange #2 
//who's BMI better
const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass :78,
    height :1.69,
    calculateBMI : function(){
        return this.BMI = this.mass / this.height ** 2
    }
};

const john = {
    firstName : 'John',
    lastName : 'Smith',
    mass :92,
    height :1.95,
    calculateBMI : function(){
        return this.BMI = this.mass / this.height ** 2
    }
}

function getBestBMI (johnBMI, markBMI){
    if (johnBMI > markBMI){
        return `John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`;
    }else{
        return `Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`;
    }
}

console.log(getBestBMI(john.calculateBMI(),mark.calculateBMI()));