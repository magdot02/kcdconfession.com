document.getElementById('confessionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const confessionInput = document.getElementById('confessionInput');
    const confessionText = confessionInput.value;

    if (confessionText) {
        const confessionDisplay = document.getElementById('confessionDisplay');
        const newConfession = document.createElement('li');
        newConfession.textContent = confessionText;
        confessionDisplay.appendChild(newConfession);

        confessionInput.value = ''; // Clear the input field
    }
});
