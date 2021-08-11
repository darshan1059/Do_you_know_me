var readlineSync = require("readline-sync");
var score = 0;

var highScores = [
  {
    name: "Akash",
    score: 3,
  },

  {
    name: "Prakash",
    score: 1,
  },
]

var questions = [{
  question: "Where do i live ? ",
  answer: "Rajnandgaon"
}, {
  question: "Where do i work earlier? ",
  answer: "Tcs"
}, {
  question: "Do you know my favourite sport ? ",
  answer: "Basketball"
}, {
  question: "Who is my favourite superhero ? ",
  answer: "Ironman"
}, {
  question: "What is my favourite dish ? ",
  answer: "paneerchilly"
}
]

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName +"!" + " Lets play quiz on Darshan? ");
  var userAns = readlineSync.question("Are you ready ? Enter yes or no: ");
  if (userAns === "yes") {
    game();
    showScores();
    highScore();
  }
  else {
    console.log("Thanks for coming Goodbye !");
    return;
  }
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score = score + 1;

  } else {
    console.log("You are wrong!");

  }

  console.log("current score is: ", score);
  console.log("-------------------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You have scored: ", score);
}

function highScore() {
  var currentScore = score;
  for (var i = 0; i < highScores.length; i++) {
    if (currentScore > highScores[i].score) {
      var newHighScore = currentScore;

    }
    else {
      console.log("\n");
      console.log("Thanks For Participating..!! ");
      return;
    }
    

  }
  
  console.log("Hurraaay! You have made new highscore and ur score is: ", newHighScore);
  console.log("\n");
  console.log("Kindly send me your highscore screenshot, so that i can update it on my database 👇");
  highScores.map(score => console.log(score.name, " : ", score.score));
  console.log("Thanks For Participating..!! ");

}
welcome();
