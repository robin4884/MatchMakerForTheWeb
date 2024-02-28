function calculateCompatibility(answers1, answers2) {
    if (answers1.length !== answers2.length) {
        throw new Error('Answers arrays must have the same length.');
    }

    const totalQuestions = answers1.length;
    let compatibilityScore = 0;

    for (let i = 0; i < totalQuestions; i++) {
        compatibilityScore += Math.abs(answers1[i] - answers2[i]);
    }

    const maxScore = totalQuestions * 4; // Assuming 1-5 scale for each question
    const compatibilityPercentage = ((maxScore - compatibilityScore) / maxScore) * 100;
    return compatibilityPercentage.toFixed(2); // Round to 2 decimal places
}

const quizFormPerson1 = document.getElementById('quizFormPerson1');
const quizFormPerson2 = document.getElementById('quizFormPerson2');
const resultDiv = document.getElementById('result');

quizFormPerson1.addEventListener('submit', function(event) {
    event.preventDefault();
    const answersPerson1 = Array.from(quizFormPerson1.elements)
        .filter(element => element.tagName === 'SELECT')
        .map(select => parseInt(select.value));

    const answersPerson2 = Array.from(quizFormPerson2.elements)
        .filter(element => element.tagName === 'SELECT')
        .map(select => parseInt(select.value));

    const compatibilityPercentage = calculateCompatibility(answersPerson1, answersPerson2);
    resultDiv.textContent = `Compatibility: ${compatibilityPercentage}%`;

    // Display compatibility scores for each question
    const compatibilityScores = [];
    for (let i = 0; i < answersPerson1.length; i++) {
        const questionScore = Math.abs(answersPerson1[i] - answersPerson2[i]);
        compatibilityScores.push(`Question ${i + 1}: ${questionScore}`);
    }
    document.getElementById('compatibilityScore1').textContent = compatibilityScores.join(', ');
});

quizFormPerson2.addEventListener('submit', function(event) {
    event.preventDefault();
    const answersPerson1 = Array.from(quizFormPerson1.elements)
        .filter(element => element.tagName === 'SELECT')
        .map(select => parseInt(select.value));

    const answersPerson2 = Array.from(quizFormPerson2.elements)
        .filter(element => element.tagName === 'SELECT')
        .map(select => parseInt(select.value));

    const compatibilityPercentage = calculateCompatibility(answersPerson1, answersPerson2);
    resultDiv.textContent = `Compatibility: ${compatibilityPercentage}%`;

    // Display compatibility scores for each question
    const compatibilityScores = [];
    for (let i = 0; i < answersPerson1.length; i++) {
        const questionScore = Math.abs(answersPerson1[i] - answersPerson2[i]);
        compatibilityScores.push(`Question ${i + 1}: ${questionScore}`);
    }
    document.getElementById('compatibilityScore2').textContent = compatibilityScores.join(', ');
});