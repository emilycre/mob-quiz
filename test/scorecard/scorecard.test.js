QUnit.module('evaluate score');
import evaluateScoreCard from '../../src/result-calculate/scorecard.js';
const test = QUnit.test;

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