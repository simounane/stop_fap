// /mon_journal_de_progression/static/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const startDate = new Date('2024-05-01T00:00:00'); // Début de l'abstinence
        const endDate = new Date('2024-06-01T00:00:00'); // Objectif d'abstinence

        const now = new Date();
        const elapsedTime = now - startDate;
        const remainingTime = endDate - now;

        document.getElementById('elapsed-time').innerText = formatTime(elapsedTime);
        document.getElementById('remaining-time').innerText = formatTime(remainingTime);
    }

    function formatTime(ms) {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
    }

    setInterval(updateTime, 1000);
    updateTime();
});

document.getElementById('get-quote').addEventListener('click', function() {
    fetch('/get-quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('motivational-quote').innerText = data.quote;
        });
});
