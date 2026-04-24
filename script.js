console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer
let questions = [
    {
        question: "What is the capital of Arizona?",
        option1: "Phoenix",
        option2: "Tucson",
        option3: "Denver",
        option4: "Santa Fe",
        answer: "Phoenix"
    },
    {
        question: "What is 20 + 20 + 20 + 7?",
        option1: "69",
        option2: "420",
        option3: "67",
        option4: "47",
        answer: "67"
    }
];


// TODO: Declare an empty array that will hold the user's answers
let userAnswers = [];

// TODO: Declare a variable to keep track of which question (index) we are on
let qIndex = 0;

function showNextQuestion() {
    // Check answers
    if (qIndex >= questions.length) {
        checkAnswers();
        return;
    }
    // TODO: Get the current question
    let question = questions[qIndex];
    console.log(question);
    
    // TODO: Set the text of the question element
    let questionElem = document.getElementById("question");
    questionElem.innerText = question.question;

    // TODO: Set the text of each option element
    let option1 = document.getElementById("option1text");
    option1.innerText = question.option1;

    let option2 = document.getElementById("option2text");
    option2.innerText = question.option2;

    let option3 = document.getElementById("option3text");
    option3.innerText = question.option3;

    let option4 = document.getElementById("option4text");
    option4.innerText = question.option4;
}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();

    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let question = questions[qIndex];

    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked) {
        userAnswers.push(question.option1);
        option1.checked = false;
    } else if (option2.checked) {
        userAnswers.push(question.option2);
        option2.checked = false;
    } else if (option3.checked) {
        userAnswers.push(question.option3);
        option3.checked = false;
    } else if (option4.checked) {
        userAnswers.push(question.option4);
        option4.checked = false;
    }
    else {
        alert("Please select an option gng.");
        return;
    }
   

    // TODO: Add one to the question index
    qIndex++;

    // TODO: Load the next question
    showNextQuestion();
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct
    let numCorrect = 0;
    for (let i = 0; i < userAnswers; i++) {
        let userAnswer = userAnswers[i];
        let question = questions[i];
        if (userAnswer == question.answer) {
            numCorrect++;
        }

 }
    }

    // TODO: Show an alert to the user with how many they got right out of the total
    alert("You got " + numCorrect + " out of " + questions.length + " correct!");

    // TODO: Reset and start over
     qIndex = 0;
     userAnswers = [];
     showNextQuestion();
}