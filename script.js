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

        const minScore = Math.min(...compatibilityScores);
        const maxScore = Math.max(...compatibilityScores);
        const compatibilityDiff = maxScore - minScore;
        const overallScore = ((compatibilityDiff / 4) * 25).toFixed(2);
        overallSummary.textContent = `Overall Compatibility Score: ${overallScore}%`;

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
