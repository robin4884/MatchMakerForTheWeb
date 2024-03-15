document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizForm');
    const questionSummary = document.getElementById('questionSummary');
    const overallSummary = document.getElementById('overallSummary');
    const closingRemark = document.getElementById('closingRemark');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset summaries
        questionSummary.innerHTML = '';
        overallSummary.innerHTML = '';
        closingRemark.innerHTML = '';

        let totalScore = 0;
        let maxScore = 0;
        let errorMessage = '';

        // Loop through each question
        for (let i = 1; i <= 2; i++) {
            const q = document.getElementById('q' + i);
            const selectedValue = parseInt(q.value);
            const questionText = q.previousElementSibling.innerText;

            if (isNaN(selectedValue) || selectedValue < 1 || selectedValue > 5) {
                errorMessage += `Please answer question ${i}: "${questionText}"\n`;
                continue;
            }

            totalScore += selectedValue;
            maxScore += 5;
            questionSummary.innerHTML += `<p>Question ${i}: "${questionText}" - Compatibility Score: ${selectedValue}/5</p>`;
        }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        const overallScore = Math.round((totalScore / maxScore) * 100);

        overallSummary.innerHTML = `<p>Overall Compatibility Score: ${overallScore}%</p>`;

        if (overallScore >= 80) {
            closingRemark.innerHTML = `<p>Wow, you're incredibly compatible! You must be great friends!</p>`;
        } else if (overallScore >= 60) {
            closingRemark.innerHTML = `<p>You're quite compatible! Your friendship is off to a good start!</p>`;
        } else if (overallScore >= 40) {
            closingRemark.innerHTML = `<p>There's some compatibility, but there's room for improvement!</p>`;
        } else {
            closingRemark.innerHTML = `<p>There's not much compatibility. Maybe you need to get to know each other better!</p>`;
        }
    });
});
