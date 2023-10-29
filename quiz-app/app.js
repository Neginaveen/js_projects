const questions = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'

    },
    {
        'que': 'When was js launched?',
        'a': '1900',
        'b': '2000',
        'c': '2001',
        'd': '2005',
        'correct': 'b'

    },
    {
        'que': 'What does CSS stands for ?',
        'a': 'hyper text narkup language',
        'b': 'cascading style sheet',
        'c': 'jason object otation',
        'd': 'helicoptor boat not here',
        'correct': 'a'

    }
]
let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById('quesBox')
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }

    console.log(optionInputs);


    // reset();
    const data = questions[index]
    quesBox.innerText = ` ${index + 1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.getElementById('box').innerHTML = `<h3> Thank you for playing the Quiz </h3>
    <h2> ${right} /${total} are correct </h2>`
}


loadQuestion();