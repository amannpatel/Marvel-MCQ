import chalk, { colorNames } from "chalk";
import readlineSync from "readline-sync";

// storing custom chalk colors in variable to be used.
const headingText = chalk.bold.white.bgCyan;
const correctText = chalk.bold.green;
const wrongText = chalk.strikethrough.red;
const scoreText = chalk.bold.cyan;
const answerText = chalk.italic.magenta;
const questionText = chalk.white.bgBlack;
const questionNumberText = chalk.cyan;

console.log(headingText("***** MARVEL MCQ CONTEST *****"));
console.log(scoreText("Your score is 10"));
const userName = questionText(
  readlineSync.question(chalk.bold.magenta("What should I call you? "))
);
console.log(
  correctText(`That's a lovely name ${userName}, let's begin the Quiz!!\n`)
);
console.log(`${headingText("**** Rules & Instructions ****")}`);
console.log(
  chalk.bold.yellow(
    `1. ${userName}, There are 10 Questions on Technology and all are Compulsory to attend.\n2. You will get 2 points on each Right Answer.\n3. One Point will be a deducted for each Wrong Answer.\n4. Type only the answer from the options without the serial number.`
  )
);
console.log(chalk.bold.underline(`ALL THE BEST ${userName} :)\n`));

const leaderboard = [
  { name: "Nisha", score: " 18" },
  { name: "Gracy", score: " 10" },
  { name: "Sonu", score: "15" },
];

console.log(chalk.yellowBright.underline("LeaderBoard:"));
console.log(chalk.cyanBright("Name       Score"));
for (let i = 0; i < leaderboard.length; i++) {
  console.log(
    chalk.greenBright(leaderboard[i].name, "   ", leaderboard[i].score)
  );
}

// Array of questions.
const questionList = [
  {
    question: 'Who is known as the "God of Thunder" in the Marvel Universe?',
    answer: "Thor",
    options: ["Iron Man", "Thor", "Black Widow", "Captain America"],
  },
  {
    question:
      'Which Marvel character is also known as the "Merc with a Mouth"?',
    answer: "Deadpool",
    options: ["Wolverine", "Spider-Man", "Deadpool", "Doctor Strange"],
  },
  {
    question:
      'Which character is the arch-nemesis of Spider-Man and often referred to as the "Green Goblin"?',
    answer: "Norman Osborn",
    options: ["Doctor Octopus", "Venom", "Norman Osborn", "Sandman"],
  },
  {
    question:
      'What is the real name of the mutant hero "Wolverine" in the Marvel Universe?',
    answer: "Logan",
    options: ["Logan", "Tony Stark", "Steve Rogers", "Bruce Banner"],
  },
  {
    question:
      "What is the name of the African nation ruled by T'Challa, also known as the Black Panther?",
    answer: "Wakanda",
    options: ["Wakanda", "Zamunda", "Genovia", "Elbonia"],
  },
  {
    question:
      "Which of the following Marvel characters is a brilliant scientist and the alter ego of the Hulk?",
    answer: "Bruce Banner",
    options: ["Thor", "Iron Man", "Bruce Banner", "Black Panther"],
  },
  {
    question:
      "What is the alias of Natasha Romanoff, a former Russian spy and Avenger?",
    answer: "Black Widow",
    options: ["Black Widow", "Scarlet Witch", "Storm", "Rogue"],
  },
  {
    question:
      'Who is the archer superhero who is a member of the Avengers and often goes by the name "Hawkeye"?',
    answer: "Hawkeye",
    options: ["Hawkeye", "Falcon", "Ant-Man", "Vision"],
  },
  {
    question:
      "Which character from the X-Men series has the ability to control and manipulate metal objects with his mind?",
    answer: "Magneto",
    options: ["Cyclops", "Professor X", "Magneto", "Gambit"],
  },
  {
    question:
      "What is the real name of the character who becomes the web-slinging superhero known as Spider-Man?",
    answer: "Peter Parker",
    options: ["Peter Parker", "Eddie Brock", "Miles Morales", "Ben Reilly"],
  },
];

// The main game logic
let score = 0;
function play(question, options, answer, questionNumber) {
  console.log(`${questionNumberText(`\nQuestion ${questionNumber + 1}`)}`);
  console.log(questionText(question));

  options.forEach((option, index) => {
    console.log(
      `${questionNumberText(`${index + 1}.`)} ${questionText(option)}`
    );
  });
  const userAnswer = readlineSync.question("");

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score += 2;
    console.log(
      `${correctText("You got it right!")}\n${headingText(
        "####################"
      )}`
    );
    console.log(chalk.cyan("The score is: " + score));
  } else {
    score--;
    console.log(
      `${wrongText(`${userAnswer}, is incorrect!`)}\n${answerText(
        `The correct answer would be ${answer}\n${headingText(
          "####################"
        )}`
      )}`
    );
    console.log(chalk.cyan("The score is: " + score));
  }
}

// Looping through each of the question present and calling play function.
for (let i = 0; i < questionList.length; i++) {
  play(
    questionList[i].question,
    questionList[i].options,
    questionList[i].answer,
    i
  );
}

// final message to the player
console.log("\n");
console.log(
  chalk.cyanBright.italic.underline(
    "Congratulations,",
    userName,
    "your Total Score is: ",
    score
  )
);
console.log(
  chalk.whiteBright.italic(
    "Thanks for Solving the Quiz,if you want to see your name on the Leader Board then Please take the Screenshot of the Score and Contact Aman from the Contact section."
  )
);
