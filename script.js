document.addEventListener("DOMContentLoaded", function() {
    const quizFormPerson1 = document.getElementById("quizFormPerson1");
    const quizFormPerson2 = document.getElementById("quizFormPerson2");
    const questionSummary = document.getElementById("questionSummary");
    const overallSummary = document.getElementById("overallSummary");
    const closingRemark = document.getElementById("closingRemark");

    quizFormPerson1.addEventListener("submit", function(event) {
        event.preventDefault();
        displayCompatibilitySummary("1");
    });

    quizFormPerson2.addEventListener("submit", function(event) {
        event.preventDefault();
        displayCompatibilitySummary("2");
    });

    function displayCompatibilitySummary(personNumber) {
        const compatibilityScores = [];
        const questions = document.querySelectorAll(`#quizFormPerson${personNumber} .question select`);
        questions.forEach((select, index) => {
            const score = parseInt(select.value);
            compatibilityScores.push(score);
            const questionNumber = index + 1;
            const span = document.getElementById(`compatibilityScore${personNumber}`);
            span.textContent = `Compatibility Score: ${score}`;
            questionSummary.innerHTML += `<p>Person ${personNumber}, Question ${questionNumber}: ${score}</p>`;
        });

        const overallScore = compatibilityScores.reduce((acc, val) => acc + val, 0) / (compatibilityScores.length * 5) * 100;
        overallSummary.textContent = `Overall Compatibility Score: ${overallScore.toFixed(2)}%`;

        if (overallScore >= 80) {
            closingRemark.textContent = "You are super compatible!";
        } else if (overallScore >= 60) {
            closingRemark.textContent = "You are quite compatible!";
        } else if (overallScore >= 40) {
            closingRemark.textContent = "You are moderately compatible.";
        } else {
            closingRemark.textContent = "You might not be very compatible.";
        }
    }
});
