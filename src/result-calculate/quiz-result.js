import scoreLandscapeQuestion from '../../src/result-calculate/score-landscapes.js';
import evaluateScoreCard from '../../src/result-calculate/scorecard.js';

function quizResult(answers){
    const scorecard = { cannon: 0, mtHood: 0, sedona: 0, redwoods: 0 };
    scoreLandscapeQuestion(answers.landscape, scorecard);
    const result = evaluateScoreCard(scorecard);

    return result;
}

export default quizResult;