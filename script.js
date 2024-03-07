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

function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 2000); // Remove the popup after 2 seconds
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

    if (answersPerson1.length !== answersPerson2.length) {
        showPopup('Answers arrays must have the same length.');
        return;
    }

    try {
        const compatibilityPercentage = calculateCompatibility(answersPerson1, answersPerson2);
        resultDiv.textContent = `Compatibility: ${compatibilityPercentage}%`;
        showPopup(`Compatibility: ${compatibilityPercentage}%`);

        // Display compatibility scores for each question
        const compatibilityScores = [];
        for (let i = 0; i < answersPerson1.length; i++) {
            const questionScore = Math.abs(answersPerson1[i] - answersPerson2[i]);
            compatibilityScores.push(`Question ${i + 1}: ${questionScore}`);
        }
        document.getElementById('compatibilityScore1').textContent = compatibilityScores.join(', ');
    } catch (error) {
        showPopup(error.message);
    }
});

quizFormPerson2.addEventListener('submit', function(event) {
    event.preventDefault();
    const answersPerson1 = Array.from(quizFormPerson1.elements)
        .filter(element => element.tagName === 'SELECT')
        .map(select => parseInt(select.value));

    const answersPerson2 = Array.from(quizFormPerson2.elements)
        .filter(element => element.tagName === 'SELECT')
        .map(select => parseInt(select.value));

    if (answersPerson1.length !== answersPerson2.length) {
        showPopup('Answers arrays must have the same length.');
        return;
    }

    try {
        const compatibilityPercentage = calculateCompatibility(answersPerson1, answersPerson2);
        resultDiv.textContent = `Compatibility: ${compatibilityPercentage}%`;
        showPopup(`Compatibility: ${compatibilityPercentage}%`);

        // Display compatibility scores for each question
        const compatibilityScores = [];
        for (let i = 0; i < answersPerson1.length; i++) {
            const questionScore = Math.abs(answersPerson1[i] - answersPerson2[i]);
            compatibilityScores.push(`Question ${i + 1}: ${questionScore}`);
        }
        document.getElementById('compatibilityScore2').textContent = compatibilityScores.join(', ');
    } catch (error) {
        showPopup(error.message);
    }
});
