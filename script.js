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
        const questionSelects = Array.from(document.querySelectorAll(".questionSelect"));
        const totalQuestions = questionSelects.length / 2; // Assuming both friends have answered the same number of questions

        const scores1 = questionSelects.slice(0, totalQuestions).map(select => parseInt(select.value));
        const scores2 = questionSelects.slice(totalQuestions).map(select => parseInt(select.value));

        const correctAnswers = scores1.reduce((acc, score, index) => (score === scores2[index] ? acc + 1 : acc), 0);
        const compatibilityScore = (correctAnswers / totalQuestions) * 100;

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
