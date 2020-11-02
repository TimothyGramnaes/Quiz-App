const quizData = [
    {
        question: 'Is Oko Broko?',
        a: 'kind of?',
        b: 'naah, simic needs more cards like this',
        c: 'Very much so!',
        d: 'I like Uro more',
        correct: 'c'
    } , {
        question: 'What is best in life?',
        a: 'Turn one: fetch, shock, thoughtseize',
        b: 'The day Oko got banned in modern',
        c: 'The day Uro gets banned in modern',
        d: 'The day they reprint fetch-lands in a reasonably priced set',
        correct: 'a, b, c, d'
    } , {
        question: 'What about Uro?',
        a: 'stupid and lame',
        b: 'Worse than Oko',
        c: 'Ban it, ban it now!',
        d: 'I kinda like it'
        correct: 'c',
    } , {
        question: 'Another question?',
        a: 'another answer',
        b: 'the correct answer',
        c: 'the wrong answer',
        d: 'the close answer',
        correct: 'b'
    
    } , {
        question: 'Iron Maiden?',
        a: 'jag gillar bara bajs',
        b: 'Brave new world?',
        c: 'Knappast en klassiker',
        d: 'Jag har hört dom!',
        correct: 'd'
    };
];


const questionEl = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = quizData currentQuizData.question;

    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;


    currentQuestion++;
}