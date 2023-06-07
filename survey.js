const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const collectAnswers = function (questionIndex) {
  if (questionIndex >= questions.length) {
    displayProfile();
    rl.close();
    return;
  }

  rl.question(questions[questionIndex] + " ", (answer) => {
    profile[questionIndex] = answer;
    collectAnswers(questionIndex + 1);
  });
};

const displayProfile = function () {
  console.log(`\nProfile Summary:\n`);
  console.log(`Name: ${profile[0]}`);
  console.log(`Activity: ${profile[1]}`);
  console.log(`Listening to: ${profile[2]}`);
  console.log(`Favorite Meal: ${profile[3]}`);
  console.log(`Favorite Food: ${profile[4]}`);
  console.log(`Favorite Sport: ${profile[5]}`);
  console.log(`Superpower: ${profile[6]}`);
};

collectAnswers(0);
