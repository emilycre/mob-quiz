QUnit.module('landscape score');
const test = QUnit.test;

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


test('if user selects ocean, increment Cannon Beach by 2', function(assert) {
    scoreLandscapeQuestion('ocean', scorecard);
    assert.deepEqual(scorecard, { cannon: 2, mtHood: 0, sedona: 0, redwoods: 1 });
});

test('if user selects mountain, increment Mt Hood by 2 and sedona by 1', function(assert) {
    scoreLandscapeQuestion('mountains', scorecard);
    assert.deepEqual(scorecard, { cannon: 0, mtHood: 2, sedona: 1, redwoods: 0 });
});

test('if user selects desert, increment Sedona by 4', function(assert) {
    scoreLandscapeQuestion('desert', scorecard);
    assert.deepEqual(scorecard, { cannon: 0, mtHood: 0, sedona: 4, redwoods: 0 });
});

test('if user selects forest, increment redwoods by 4, cannon beach by 2, mt hood by 2', function(assert) {
    scoreLandscapeQuestion('forest', scorecard);
    assert.deepEqual(scorecard, { cannon: 2, mtHood: 2, sedona: 0, redwoods: 4 });
});
