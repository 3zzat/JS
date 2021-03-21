// #### first challenge ######
 function calculateBMI (mass, height){
    return BMI = mass/(height*height);
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

