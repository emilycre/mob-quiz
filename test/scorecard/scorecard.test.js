QUnit.module('evaluate score');

const test = QUnit.test;

function evaluateScoreCard(scorecard) {
    if(scorecard.cannon > scorecard.mtHood
        && scorecard.cannon > scorecard.sedona
        && scorecard.cannon > scorecard.redwoods) {
        return 'Cannon Beach';
    }
    else if(scorecard.mtHood > scorecard.cannon
        && scorecard.mtHood > scorecard.sedona
        && scorecard.mtHood > scorecard.redwoods) {
        return 'Mt Hood';
    }
    else if(scorecard.sedona > scorecard.cannon
        && scorecard.sedona > scorecard.mtHood
        && scorecard.sedona > scorecard.redwoods) {
        return 'Sedona';
    }
    else if(scorecard.redwoods > scorecard.cannon
        && scorecard.redwoods > scorecard.mtHood
        && scorecard.redwoods > scorecard.sedona) {
        return 'Redwoods';
    }
    else return 'Go to Muncie, IN!';
}

test('if Cannon Beach has highest value, return Cannon Beach', function(assert) {
    const result = evaluateScoreCard({ cannon: 10, mtHood: 0, sedona: 0, redwoods: 0 });
    assert.equal(result, 'Cannon Beach');
});

test('if Mt Hood has highest value, return Mt Hood', function(assert) {
    const result = evaluateScoreCard({ cannon: 0, mtHood: 10, sedona: 0, redwoods: 0 });
    assert.equal(result, 'Mt Hood');
});

test('if Sedona has highest value, return Sedona', function(assert) {
    const result = evaluateScoreCard({ cannon: 0, mtHood: 0, sedona: 10, redwoods: 0 });
    assert.equal(result, 'Sedona');
});

test('if Redwoods has highest value, return Redwoods', function(assert) {
    const result = evaluateScoreCard({ cannon: 0, mtHood: 0, sedona: 0, redwoods: 10 });
    assert.equal(result, 'Redwoods');
});