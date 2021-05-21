var readlineSync = require("readline-sync");
var score = 0;

var highScores = [
  {
    name: "Suresh",
    score: 3,
  },

  {
    name: "Ramesh",
    score: 1,
  },
]

var questions = [{
  question: "Where do i live ? ",
  answer: "Rajnandgaon"
}, {
  question: "Where do i work ? ",
  answer: "Tcs"
}, {
  question: "Do you know my favourite sport ? ",
  answer: "Basketball"
}, {
  question: "Do you know my favourite superhero ? ",
  answer: "Ironman"
}, {
  question: "Do you know my favourite dish ? ",
  answer: "paneerchilly"
}
]

function welcome() {
  var userName = readlineSync.question("What's your name? ",{hideEchoBack: true});

  console.log("Welcome " + userName +"!" + " Lets play quiz about Darshan? ");
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
    console.log("Yor are right!");
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
    //console.log(currentScore> highScores[i].score);
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
  console.log("Kindly send me your highscore screenshot, so that i can update it on my database ");
  console.log("Thanks For Participating..!! ");

}
welcome();
