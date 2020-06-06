'use strict';

/**
 * store variable containing questions, answers, and app state
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      id: 1,
      question: 'Aside from Stan Lee, which actor has appeared in the most MCU films?',
      answers: [
        'Chris Evans',
        'Scarlett Johansson',
        'Robert Downey, Jr.',
        'Samuel L. Jackson'
      ],
      correctAnswer: 'Robert Downey, Jr',
      correctAnswerIndex: 2,
      image: "./images/rob-downey.jpg",
      info: "As of Avengers: Infinity War, Robert Downey Jr. has appeared in 9 MCU movies. After Avengers: Endgame, he'll have played Tony Stark 10 times. Samuel L. Jackson is close behind with 6 appearances."
    },

    {
      id: 2,
      question: 'What movie did Thanos first appear in?',
      answers: [
        'Avengers: Infinity War',
        'Guardians of the Galaxy',
        'Avengers: Age of Ultron',
        'Marvel\'s The Avengers'
      ],
      correctAnswer: 'Marvel\'s The Avengers',
      correctAnswerIndex: 3,
      image: "./images/thanos.jpg",
      info: "He appears in a mid-credits scene."
    },

    {
      id: 3,
      question: 'How many Infinity Stones are there in the MCU?',
      answers: [
        'Five',
        'Six',
        'Seven',
        'Infinite',
      ],
      correctAnswer: 'Six',
      correctAnswerIndex: 1,
      image: "./images/infinity-stone.jpg",
      info: "There are six Infinity Stones: Space (Blue), Mind (Yellow), Power (Purple), Time (Green), Reality (Red) and Soul (Orange)."
    },

    {
      id: 4,
      question: 'What is the name of Jane\'s sidekick played by Kat Dennings in Thor?',
      answers: [
        'Darcy Lewis',
        'Wanda Maximoff',
        'Maria Rodriguez',
        'Monica Rambeau'
      ],
      correctAnswer: 'Darcy Lewis',
      correctAnswerIndex: 0,
      image: "./images/darcy-lewis.jpg",
      info: "Darcy Lewis is a close friend and co-worker of Jane Foster."
    },

    {
      id: 5,
      question: 'Who trained Matt Murdock on Daredevil?',
      answers: [
        'Rock',
        'Paper',
        'Scissors',
        'Stick'
      ],
      correctAnswer: 'Stick',
      correctAnswerIndex: 3,
      image: "./images/daredevil.jpg",
      info: "Stick first appears in his self-titled episode of Season One of Daredevil.[9] He approaches Matt Murdock shortly after his father is killed, leaving him orphaned at the age of ten, and begins to train him."
    },

    {
      id: 6,
      question: 'What is the name of Iron Man’s assistant?',
      answers: [
        'Emma Frost',
        'Pepper Potts',
        'Carol Danvers ',
        'Jennifer Walters'
      ],
      correctAnswer: 'Pepper Potts',
      correctAnswerIndex: 1,
      image: "./images/pepper-potts.jpg",
      info: "Virginia \"Pepper\" Potts is the CEO of Stark Industries. Originally working as Tony Stark's personal assistant, she would take care of his schedule etc."
    },

    {
      id: 7,
      question: 'What’s the name of Peter Parker’s ex girlfriend before he dated Mary Jane?',
      answers: [
        'Kisha Peterson',
        'Jessica Drew',
        'Sarah Galvin',
        'Gwen Stacy'
      ],
      correctAnswer: 'Gwen Stacy',
      correctAnswerIndex: 3,
      image: "./images/spider-man.jpg",
      info: "Peter Parker met Gwen while both were studying as undergraduates at Empire State University, their relationship began almost immediately after Peter stopped going out with Mary Jane Watson."
    },

    {
      id: 8,
      question: 'What metal alloy has Wolverine\'s skeleton been reinforced with?',
      answers: [
        'Titanium',
        'Vibranium',
        'Adamantium',
        'Mythril'
      ],
      correctAnswer: 'Adamantium',
      correctAnswerIndex: 2,
      image: "./images/wolverine.jpg",
      info: "Marvel Comics' adamantium has an extremely stable molecular structure that prevents it from being further molded even if the temperature is high enough to keep it in its liquefied form."
    },

    {
      id: 9,
      question: 'Who is Quicksilver\'s father?',
      answers: [
        'Magneto',
        'Tony Stark',
        'Bruce Wayne',
        'Charles Francis Xavier'
      ],
      correctAnswer: 'Magneto',
      correctAnswerIndex: 0,
      image: "./images/quicksilver.jpg",
      info: "Magneto was the father of the Scarlet Witch and Quicksilver, with entire storylines and comic book series built around the relationship."
    },

    {
      id: 10,
      question: 'What superhero was Storm married to?',
      answers: [
        'Wolverine',
        'Gambit',
        'Mystique',
        'Black Panther'
      ],
      correctAnswer: 'Black Panther',
      correctAnswerIndex: 3,
      image: "./images/storm.jpg",
      info: "One of the highest profile romantic relationships in Marvel  history, with the ruler of Wakanda and one of the most powerful mutants in the world eventually getting married only for the marriage to be annulled five years later."
    },

    {
      id: 11,
      question: 'Hey look, it\'s Gambit! What\'s his real name?',
      answers: [
        'Louis Soulier',
        'Remy Etienne LeBeau',
        'Jacques Toussaint',
        'Kurt Wagner'
      ],
      correctAnswer: 'Remy Etienne LeBeau',
      correctAnswerIndex: 1,
      image: "./images/gambit.jpg",
      info: "Admit it, mon ami, we actu'ly make a pretty good team... when we ain't tryin' t'kill each other.    -Gambit"
    },
  ],
  questionNumber: 0,
  questionAnswered: false,
  answeredCorrectly: false,
  score: 0
};

function startPageTemplate() {
  return `
    <div id="start-page" class="flex-container">
      <div class="flex-item">
        <h1>Nick & Minh's <br> Marvel Quiz</h1>
      </div>
    
      <div class="flex-item">
        <button id="button">Start Quiz</button>
      </div>
    </div>  
  `;
}

function questionsPageTemplate(questionObj) {
  return `
    <div id="question-page">
      <div class="flex-container top">
        <div class="flex-item">
          <span>Q. ${questionObj.id} of ${store.questions.length}</span>
        </div>
        <div class="flex-item">
          <span>Score ${store.score}/${questionObj.id - 1}</span>
        </div>
      </div>

      <div class="flex-container middle">
        <img
          src="${questionObj.image}"
          class="flex-item"></img>
        <h3 class="flex-item">${questionObj.question}</h3>
      </div>

      <form method="POST" id="answer-form" action="#">
        <div class="flex-container list">
          <ul class="flex-item">
            <li>
              <input type="radio" name="answer" id="answer1" value="${questionObj.answers[0]}" required>
              <label for="answer1">${questionObj.answers[0]}</label>
            </li>
            <li>
              <input type="radio" name="answer" id="answer2" value="${questionObj.answers[1]}">
              <label for="answer2">${questionObj.answers[1]}</label>
            </li>
            <li>
              <input type="radio" name="answer" id="answer3" value="${questionObj.answers[2]}">
              <label for="answer3">${questionObj.answers[2]}</label>
            </li>
            <li>
              <input type="radio" name="answer" id="answer4" value="${questionObj.answers[3]}">
              <label for="answer4">${questionObj.answers[3]}</label>
            </li>
          </ul>
        </div>

        <div class="flex-container bottom">
          <button class="flex-item" type="submit">Submit</button>
        </div>
      </form>
    </div>
  `;
}

function feedbackPageTemplate(isCorrect, questionNum) {
  let buttonLabel = (questionNum + 1 === store.questions.length) ? 'Check Results' : 'Next Question';

  let questionObj = store.questions[questionNum];
  let feedbackString = (isCorrect) ? 'Correct!' : 'Incorrect!';

  if (isCorrect)
    store.score += 1;

  return `
    <div id="feedback-page">
      <div class="flex-container top">
        <span class="flex-item">Q.${questionObj.id} of ${store.questions.length}</span>
        <span class="flex-item">Score: ${store.score}/${questionObj.id}</span>
      </div>

      <div class="flex-container middle">
        <img
          src="${questionObj.image}"
          class="flex-item"></img>
        <div class="flex-item">
          <h3>${feedbackString}</h3>
          <p>The correct answer is ${questionObj.correctAnswer}.</p>
          <p>${questionObj.info}</p>
        </div>
      </div>

      <div class="flex-container bottom">
        <button>${buttonLabel}</button>
      </div>
    </div>
  `;
}

function resultsPageTemplate() {
  return `
    <div id="results-page" class="flex-container">
      <div class="flex-item">
        <h2>Results</h2>
      </div>
      <div class="flex-item">
        <h3>You answered ${store.score} out of ${store.questions.length} questions correctly!</h3>
        <p>To take the quiz again, click the button below.</p>
      </div>


      <div class="flex-item">
        <button>Take Quiz Again</button>
      </div>
    </div>
  `
}



function renderPage(pageTemplate) {
  $('main').html(pageTemplate);
}

function resetStateVariables() {
  store.questionNumber = 0;
  store.questionAnswered = false;
  store.answeredCorrectly = false;
  store.score = 0;
}

function handleStartButtonClick() {
  resetStateVariables();
  $('#start-page').on('click', '#button', function () {
    renderPage(questionsPageTemplate(store.questions[0]));
    handleQuestionSubmitButtonClick();
  });
}

function handleQuestionSubmitButtonClick() {
  $('#answer-form').on('submit', function (event) {
    event.preventDefault();
    let playerAnswer = $(this).closest("#answer-form").find("input[name='answer']:checked").val();
    //$('main').html('<p>goodbye</p>');
    console.log('playerAnswer = ' + playerAnswer);
    console.log('questionNumber = ' + store.questions[store.questionNumber]);
    console.log('isCorrect = ' + isCorrect);


    let isCorrect = checkPlayerAnswer(store.questions[store.questionNumber], playerAnswer);

    renderPage(feedbackPageTemplate(isCorrect, store.questionNumber));
    handleFeedbackPageButtonClick();
  });
}



function handleFeedbackPageButtonClick() {
  $('button').click(function (event) {
    if (store.questionNumber + 1 === store.questions.length) {
      alert('quiz over!');
      renderPage(resultsPageTemplate());
      handleResultsPageButtonClick();
    }
    else {
      store.questionNumber += 1;
      renderPage(questionsPageTemplate(store.questions[store.questionNumber]));
      handleQuestionSubmitButtonClick();
    }
  });
}

function handleResultsPageButtonClick() {
  $('button').click(function() {
    renderPage(startPageTemplate);
    handleStartButtonClick();
  })
}

/**
 * Function to check player's answer
 * @param {object} object
 * @param {string} string
 * @returns {bool} bool
 */
function checkPlayerAnswer(question, playerAnswer) {
  if (question.correctAnswer === playerAnswer) {
    console.log("Answer is correct");
    return true;
  }
  else {
    console.log("Answer is incorrect");
    return false;
  }
}

function master() {
  renderPage(startPageTemplate);
  handleStartButtonClick();
  //   renderQuestionPage(store.questions[0]);
  //   handleQuestionPage(store.questions[i]);
}

$(master);

/**
* To Do List
* Clean up  let playerAnswer = $(this).closest("#answer-form").find("input[name='answer']:checked").val();
* Minimize calls to the store variable
* Results page conditional based on score result
**/

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)