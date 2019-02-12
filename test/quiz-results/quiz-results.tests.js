import scoreLandscapeQuestion from '../../src/result-calculate/score-landscapes.js';
import evaluateScoreCard from '../../src/result-calculate/scorecard.js';

const test = QUnit.test;
QUnit.module('quiz results');

function quizResult(answers){
    const scorecard = { cannon: 0, mtHood: 0, sedona: 0, redwoods: 0 };
    scoreLandscapeQuestion(answers.landscape, scorecard);
    const result = evaluateScoreCard(scorecard);

    return result;
}

test('takes landscape answer values, and calculates result', function(assert) {
    const answers = {
        landscape: 'ocean'
    };
    const result = quizResult(answers);
    assert.equal(result, 'Cannon Beach');
});