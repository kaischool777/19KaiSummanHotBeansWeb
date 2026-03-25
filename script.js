// Display today's date in the top-right corner
const dateElement = document.getElementById("current-date");

if (dateElement) {
    const today = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-GB', options);
}

