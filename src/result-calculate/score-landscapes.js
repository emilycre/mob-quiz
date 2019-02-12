

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { cannon: 0, mtHood: 0, sedona: 0, redwoods: 0 };
});

function scoreLandscapeQuestion(landscapeAnswer, scorecard) {
    if(landscapeAnswer === 'ocean') {
        scorecard.cannon += 2;
        scorecard.redwoods += 1;
    }
    else if(landscapeAnswer === 'mountains') {
        scorecard.mtHood += 2;
        scorecard.sedona += 1;
    }
    else if(landscapeAnswer === 'desert') {
        scorecard.sedona += 4;
    }
    else if(landscapeAnswer === 'forest') {
        scorecard.cannon += 2;
        scorecard.mtHood += 2;
        scorecard.redwoods += 4;
    }

    else return 'Muncie, IN.';
}

export default scoreLandscapeQuestion