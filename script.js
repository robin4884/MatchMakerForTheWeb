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

        const maxScore = 5; // Maximum possible score for a question
        const totalQuestions = compatibilityScores.length;
        const sameAnswersPenalty = totalQuestions * maxScore; // Maximum penalty for all same answers
        const scoreSum = compatibilityScores.reduce((acc, score) => acc + score, 0);
        const avgScore = scoreSum / totalQuestions;
        const compatibilityScore = ((maxScore * totalQuestions - scoreSum) / (maxScore * totalQuestions - sameAnswersPenalty)) * 100;
        overallSummary.textContent = `Overall Compatibility Score: ${compatibilityScore.toFixed(2)}%`;

        let message = "";
        if (compatibilityScore >= 80) {
            message = "You are super compatible!";
        } else if (compatibilityScore >= 60) {
            message = "You are quite compatible!";
        } else if (compatibilityScore >= 40) {
            message = "You are moderately compatible.";
        } else {
            message = "You might not be very compatible.";
        }

        closingRemark.textContent = message;
        alert(message + " Congratulations, this is your compatibility!");
    }
});
