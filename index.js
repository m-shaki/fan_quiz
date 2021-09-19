var readlineSync=require("readline-sync");
const chalk = require("chalk");

var username=readlineSync.question(console.log("Hi May i have your "+chalk.inverse.bold("name\n ")));

console.log(chalk.redBright("\nWelcome to Money Heist fan quiz " )+ chalk.black.bgRed.bold(username)+"\n");

var yn=readlineSync.question(console.log(
  "Only a true Money Heist fan can ace this quiz , so are you ready? press "+chalk.inverse(" Y ")+"or"+chalk.inverse(" N ")+"\n"
));


if(yn.toLowerCase()=="y"){
  console.log(chalk.blueBright.bold("\nGOOD LUCK!\n"));
  console.log(chalk.black.bgRed.bold("SELECT AN ANSWER FOR EACH QUESTION AS OPTION NUMBER\n")); 
}
else{
  console.log(chalk.black.bgRed.bold("\ntoo bad we could have had a lot of fun\n"));
  process.exit();
};

var score=0;

var questions=[
  {
    question:"1.How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain?\n\
    1.8\
    2.9\
    3.10",
    answer:"1",
  },
  {
    question:"2.Inspector Raquel’s mother suffers from what medical condition? \n\
    1.Alzheimer’s Disease\
    2.Paranoid Schizophrenia\
    3.Post-Traumatic Stress Disorder",
    answer:"1",
  },
  {
    question:"3.How much currency does the gang print at the Royal Mint?\n\
    1.879 million euros\
    2.926 million euros\
    3.984 million euros",
    answer:"3",
  },
  {
    question:"4.The Professor’s first name is eventually revealed. What is it?\n\
    1. Andrés\
    2.Aníbal\
    3.Sergio",
    answer:"3",
  },
  {
    question:"5.Before giving up on society and turning to a life of crime, what was Moscow’s occupation?\n\
    1.Hacker\
    2.Soldier\
    3.Miner",
    answer:"3",
  },
  {
    question:"6.The show is actually called La Casa de Papel, which literally translates to what?\n\
    1.The Paper House\
    2.The Outcasts\
    3.The House of Outcasts",
    answer:"1",
  },
  {
    question:"7.In which country does Raquel track the Professor after the first heist?\n\
    1.Philippines\
    2.Thailand\
    3.China",
    answer:"1",
  },
  {
    question:"8.“Let the matriarchy begin”: Whose words are these?\n\
    1.Tokyo\
    2.Nairobi\
    3.Raquel",
    answer:"2",
  },
  {
    question:"9.Which continent is *not* represented with a nickname among the robbers?\n\
    1. Africa\
    2.Asia\
    3.Oceania",
    answer:"3",
  },
  {
    question:"10.What is the name of Berlin’s girlfriend who comes to visit at the Monastery?\n\
    1.Maniana\
    2.Selena\
    3.Tatiana",
    answer:"3",
  },
];

function quiz(question,answer){

  var useranswer=readlineSync.question(console.log(chalk.yellow.bold("\n"+question+"\n")));


  if(useranswer===answer){
    console.log(chalk.green("your answer is correct"))
    score++;
  }
  else{
    console.log(chalk.red("your answer is wrong sorry the correct answer is "+chalk.green(answer)));
    
  }
  console.log(chalk.blueBright("\nyour score is "+chalk.black.bgWhite.bold(score)));

}

for(var i=0;i<questions.length;i++){

  quiz(questions[i].question,questions[i].answer);
}

console.log(chalk.blueBright.underline("\nyour final score is "+chalk.black.bgWhite.bold(score)));

var highscore=[
  {
    name:"rejas",
    score:10
  },
  {
    name:"shamnan",
    score:9,
  },
  {
    name:"rashi",
    score:7,
  },
];


console.log(chalk.bgYellow.bold("\n\n\t\t HIGH SCORES "));

console.table(highscore);

console.log(chalk.inverse.bold("\nIf You have beaten the highscore please text me the screenshot and i will update it\nTHANK YOU FOR PLAYING "));
