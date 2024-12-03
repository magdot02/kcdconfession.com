const confessionsContainer = document.getElementById('confessions-container');
const confessionForm = document.getElementById('confession-form');
const confessionInput = document.getElementById('confession-input');

// Initialize an empty array to store confessions
let confessions = [];

// Function to display confessions
function displayConfessions() {
    confessionsContainer.innerHTML = '';
    confessions.forEach((confession) => {
        const confessionElement = document.createElement('div');
        confessionElement.className = 'confession';
        confessionElement.textContent = confession;
        confessionsContainer.appendChild(confessionElement);
    });
}

// Function to add a new confession
function addConfession(confession) {
    confessions.push(confession);
    displayConfessions();
}

// Event listener for form submission
confessionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const confession = confessionInput.value.trim();
    if (confession !== '') {
        addConfession(confession);
        confessionInput.value = '';
    }
});

// Load existing confessions from local storage (if available)
if (localStorage.getItem('confessions')) {
    confessions = JSON.parse(localStorage.getItem('confessions'));
    displayConfessions();
}

// Save confessions to local storage when the page is closed
window.addEventListener('beforeunload', () => {
    localStorage.setItem('confessions', JSON.stringify(confessions));
});
