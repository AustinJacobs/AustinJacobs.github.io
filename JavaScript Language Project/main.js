function buildQuiz() {
    // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [{
        question: "Who are the only two characters who appear in every Star Wars movie??",
        answers: {
            a: "Luke Skywalker & Darth Vader",
            b: "Master Yoda & Obi-Wan Kenobi",
            c: "C3PO & R2-D2"
        },
        correctAnswer: "c"
    },
    {
        question: "Who played Princess Leia?",
        answers: {
            a: "Emma Watson",
            b: "Nicole Kidman",
            c: "Carrie Fisher"
        },
        correctAnswer: "c"
    },
    {
        question: "Who created Star Wars?",
        answers: {
            a: "Lucas Joyner",
            b: "George Clooney",
            c: "Steven Spielberg",
            d: "George Lucas"
        },
        correctAnswer: "d"
    },
    {
        question: "In what year the original Star Wars film was first released?",
        answers: {
            a: "1997",
            b: "1977",
            c: "2000",
            d: "1999"
        },
        correctAnswer: "b"
    },
    {
        question: "How old was Yoda when he died?",
        answers: {
            a: "25",
            b: "799",
            c: "185",
            d: "900"
        },
        correctAnswer: "d"
    },
    {
        question: "Which movie is the one where Luke finds out Vader is his father?",
        answers: {
            a: "The Empire Strikes Back",
            b: "Attack of the Clones",
            c: "Return of the Jedi",
            d: "The Force Awakens"
        },
        correctAnswer: "a"
    },
    {
        question: "Who originally played Han Solo?",
        answers: {
            a: "John Wayne",
            b: "Jim Carrey",
            c: "Tom Cruise",
            d: "Harrison Ford"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the cause of Yoda’s death?",
        answers: {
            a: "Old Age",
            b: "Drowning",
            c: "A lightsaber duel",
            d: "Sickness"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is known as “the Chosen One”?",
        answers: {
            a: "Luke Skywalker",
            b: "Anakin Skywalker",
            c: "General Grievous",
            d: "Han Solo"
        },
        correctAnswer: "b"
    },
    {
        question: "Darth Vader's chestpiece has some writing on it. What language is it in, and what does it translate to?",
        answers: {
            a: 'English. It translates to, "He is the greatest of them all."',
            b: 'German. It translates to, "No one shall be greater than I."',
            c: 'Arabic. It translates to, "The Sith shall prevail."',
            d: 'Ancient Hebrew. It translates to, "His deeds will not be forgiven, until he merits."'
        },
        correctAnswer: "d"
    },
    {
        question: "Who killed Qui-Gon Jinn?",
        answers: {
            a: "Darth Tankeus",
            b: "Darth Sidious",
            c: "Darth Maul",
            d: "Darth Invisible"
        },
        correctAnswer: "c"
    },
    {
        question: "Who played Mace Windu?",
        answers: {
            a: "Stephen L. Houston",
            b: "Will Smith",
            c: "Denzel Washington",
            d: "Samuel L. Jackson"
        },
        correctAnswer: "d"
    },
    {
        question: "What kind of vehicle did Rey live in?",
        answers: {
            a: "A Star Destroyer",
            b: "A Republic Outpost",
            c: "An AT-AT",
            d: "A Mos Eisley Speeder"
        },
        correctAnswer: "c"
    },
    {
        question: "Where do Luke and Obi-Wan meet Han and Chewie?",
        answers: {
            a: "Mos Eisley",
            b: "Serberus",
            c: "Kamino",
            d: "They didn't meet."
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the mentor of Luke Skywalker?",
        answers: {
            a: "Darth Vader",
            b: "Obi-Wan Kenobi",
            c: "Darth Anakin Landwalker",
            d: "Han Solo"
        },
        correctAnswer: "b"
    },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);