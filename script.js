document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById("quizForm");
    const questionSummary = document.getElementById("questionSummary");
    const overallSummary = document.getElementById("overallSummary");
    const closingRemark = document.getElementById("closingRemark");

    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();
        displayCompatibilitySummary();
    });

    function displayCompatibilitySummary() {
        const compatibilityScores = [];
        const questionSelects = Array.from(document.querySelectorAll(".questionSelect"));
        questionSummary.textContent = ""; // Clear previous summary
        questionSelects.forEach((select, index) => {
            const score = parseInt(select.value);
            compatibilityScores.push(score);
            const questionNumber = index + 1;
            questionSummary.textContent += `Question ${questionNumber}: ${score}\n`;
        });

        const maxDiff = 4; // Maximum difference between two scores
        const scoreSum = compatibilityScores.reduce((acc, score) => acc + score, 0);
        const avgScore = scoreSum / compatibilityScores.length;
        const overallScore = ((maxDiff - avgScore) / maxDiff) * 100;
        overallSummary.textContent = `Overall Compatibility Score: ${overallScore.toFixed(2)}%`;

        let message = "";
        if (overallScore >= 80) {
            message = "You are super compatible!";
        } else if (overallScore >= 60) {
            message = "You are quite compatible!";
        } else if (overallScore >= 40) {
            message = "You are moderately compatible.";
        } else {
            message = "You might not be very compatible.";
        }

        closingRemark.textContent = message;
        alert(message + " Congratulations, this is your compatibility!");
    }
});
