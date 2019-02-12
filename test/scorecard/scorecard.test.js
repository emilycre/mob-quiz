QUnit.module('evaluate score');

const test = QUnit.test;

function evaluateScoreCard(scorecard) {
    if(scorecard.cannon > scorecard.mtHood
        && scorecard.cannon > scorecard.sedona
        && scorecard.cannon > scorecard.redwoods) {
        return 'Cannon Beach';
    }
}

test('if Cannon Beach has highest value, return Cannon Beach', function(assert) {
    const result = evaluateScoreCard({ cannon: 10, mtHood: 0, sedona: 0, redwoods: 0 });
    assert.equal(result, 'Cannon Beach');
});

