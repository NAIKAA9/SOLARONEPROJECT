document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const roofType = document.getElementById('roofType').value;
    const roofSize = document.getElementById('roofSize').value;
    const energyUsage = document.getElementById('energyUsage').value;
    const shadingIssues = document.getElementById('shadingIssues').value;

    // Normally, you would send this data to a server here.
    // For demonstration, we'll just show a message.
    const responseMessage = `Thank you, ${name}! Your request for a solar quote has been submitted. We will contact you shortly at ${address}.`;
    document.getElementById('responseMessage').textContent = responseMessage;

    // Clear form fields
    document.getElementById('quoteForm').reset();
});
