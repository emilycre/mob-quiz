const test = QUnit.test;
QUnit.module('quiz results');
import quizResult from '../../src/result-calculate/quiz-result.js';

test('takes landscape answer values, and calculates result', function(assert) {
    const answers = {
        landscape: 'ocean'
    };
    const result = quizResult(answers);
    assert.equal(result, 'Cannon Beach');
});