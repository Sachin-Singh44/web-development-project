function submitSurvey(event) {
    event.preventDefault();

    // Retrieve user responses
    var q1Response = document.querySelector('input[name="q1"]:checked');
    // Retrieve responses for other questions

    // Check if all questions are answered
    if (q1Response) {
        // Display user responses (you can modify this part based on your requirements)
        alert("Survey submitted!\n\nResponses:\n1. " + q1Response.value);
    } else {
        alert("Please answer all questions.");
    }
}
