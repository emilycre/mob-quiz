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

export default evaluateScoreCard;