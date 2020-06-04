'use strict';

/**
 * store variable containing questions, answers, and app state
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      id: cuid(),
      question: 'Aside from Stan Lee, which actor has appeared in the most MCU films?',
      answers: [
        'Chris Evans',
        'Scarlett Johansson',
        'Robert Downey, Jr.',
        'Samuel L. Jackson'
      ],
      correctAnswer: 'Robert Downey, Jr.',
      correctAnswerIndex: 2,
      image: "/images/rob-downey.jpg",
      info: "As of Avengers: Infinity War, Robert Downey Jr. has appeared in 9 MCU movies. After Avengers: Endgame, he'll have played Tony Stark 10 times. Samuel L. Jackson is close behind with 6 appearances."
    },

    {
      id: cuid(),
      question: 'What movie did Thanos first appear in?',
      answers: [
        'Avengers: Infinity War',
        'Guardians of the Galaxy',
        'Avengers: Age of Ultron',
        'Marvel\'s The Avengers'
      ],
      correctAnswer: 'Marvel\'s The Avengers',
      correctAnswerIndex: 3,
      image: "/images/thanos.jpg",
      info: "He appears in a mid-credits scene."
    },

    {
      id: cuid(),
      question: 'How many Infinity Stones are there in the MCU?',
      answers: [
        'Five',
        'Six',
        'Seven',
        'Infinite',
      ],
      correctAnswer: 'Six',
      correctAnswerIndex: 1,
      image: "/images/infinity-stone.jpg",
      info: "There are six Infinity Stones: Space (Blue), Mind (Yellow), Power (Purple), Time (Green), Reality (Red) and Soul (Orange)."
    },

    {
      id: cuid(),
      question: 'What is the name of Jane\'s sidekick played by Kat Dennings in Thor?',
      answers: [
        'Darcy Lewis',
        'Wanda Maximoff',
        'Maria Rodriguez',
        'Monica Rambeau'
      ],
      correctAnswer: 'Darcy Lewis',
      correctAnswerIndex: 0,
      image: "/images/darcy-lewis.jpg",
      info: "Darcy Lewis is a close friend and co-worker of Jane Foster."
    },

    {
      id: cuid(),
      question: 'Who trained Matt Murdock on Daredevil?',
      answers: [
        'Rock',
        'Paper',
        'Scissors',
        'Stick'
      ],
      correctAnswer: 'Stick',
      correctAnswerIndex: 3,
      image: "/images/daredevil.jpg",
      info: "Stick first appears in his self-titled episode of Season One of Daredevil.[9] He approaches Matt Murdock shortly after his father is killed, leaving him orphaned at the age of ten, and begins to train him."
    },

    {
      id: cuid(),
      question: 'What is the name of Iron Man’s assistant?',
      answers: [
        'Emma Frost',
        'Pepper Pots',
        'Carol Danvers ',
        'Jennifer Walters'
      ],
      correctAnswer: 'Pepper Pots',
      correctAnswerIndex: 1,
      image: "/images/pepper-potts.jpg",
      info: "Virginia \"Pepper\" Potts is the CEO of Stark Industries. Originally working as Tony Stark's personal assistant, she would take care of his schedule etc."
    },

    {
      id: cuid(),
      question: 'What’s the name of Peter Parker’s ex girlfriend before he dated Mary Jane?',
      answers: [
        'Kisha Peterson',
        'Jessica Drew',
        'Sarah Galvin',
        'Gwen Stacy'
      ],
      correctAnswer: 'Gwen Stacy',
      correctAnswerIndex: 3,
      image: "/images/spider-man.jpg",
      info: "Peter Parker met Gwen while both were studying as undergraduates at Empire State University, their relationship began almost immediately after Peter stopped going out with Mary Jane Watson."
    },

    {
      id: cuid(),
      question: 'What metal alloy has Wolverine\'s skeleton been reinforced with?',
      answers: [
        'Titanium',
        'Vibranium',
        'Adamantium',
        'Mythril'
      ],
      correctAnswer: 'Adamantium',
      correctAnswerIndex: 2,
      image: "/images/wolverine.jpg",
      info: "Marvel Comics' adamantium has an extremely stable molecular structure that prevents it from being further molded even if the temperature is high enough to keep it in its liquefied form."
    },

    {
      id: cuid(),
      question: 'Who is Quicksilver\'s father?',
      answers: [
        'Magneto',
        'Tony Stark',
        'Bruce Wayne',
        'Charles Francis Xavier'
      ],
      correctAnswer: 'Magneto',
      correctAnswerIndex: 0,
      image: "/images/quicksilver.jpg",
      info: "Magneto was the father of the Scarlet Witch and Quicksilver, with entire storylines and comic book series built around the relationship."
    },

    {
      id: cuid(),
      question: 'What superhero was Storm married to?',
      answers: [
        'Wolverine',
        'Gambit',
        'Mystique',
        'Black Panther'
      ],
      correctAnswer: 'Black Panther',
      correctAnswerIndex: 3,
      image: "/images/storm.jpg",
      info: "One of the highest profile romantic relationships in Marvel  history, with the ruler of Wakanda and one of the most powerful mutants in the world eventually getting married only for the marriage to be annulled five years later."
    },

    {
      id: cuid(),
      question: 'Hey look, it\'s Gambit! What\'s his real name?',
      answers: [
        'Louis Soulier',
        'Remy Etienne LeBeau',
        'Jacques Toussaint',
        'Kurt Wagner'
      ],
      correctAnswer: 'Remy Etienne LeBeau',
      correctAnswerIndex: 1,
      image: "/images/gambit.jpg",
      info: "Admit it, mon ami, we actu'ly make a pretty good team... when we ain't tryin' t'kill each other.    -Gambit"
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  questionAnswered: false,
  score: 0
};

function startPageTemplate() {
  return `
    <div id="start-page" class="flex-container">
      <div class="flex-item">
        <h1>Nick & Minh's <br> Marvel Quiz</h1>
      </div>
    
      <div class="flex-item">
        <button>Start Quiz</button>
      </div>
    </div>  
  `
}

function questionsPage() {

}

function feedBackPage(){};

function renderPage(pageTemplate){
  $('main').html(pageTemplate());
}

function firstQuestionPage(){};

function handleStartButtonClick(){
  // renderFirstQuestionPage();
};

function master() {
  renderPage(startPageTemplate);
  handleStartButtonClick();
  //   renderQuestionPage(store.questions[0]);
  //   handleQuestionPage(store.questions[i]);
}

$(master);







//test

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