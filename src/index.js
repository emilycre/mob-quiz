
import quizResult from '../src/result-calculate/quiz-result.js';

const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        landscape: formData.get('landscape')
    };

    const result = quizResult(answers);
    console.log(result);
});