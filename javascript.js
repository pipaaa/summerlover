window.onload = function() {
    // Countdown logic
    var targetDate = new Date('June 21, 2023').getTime();
    var countdownElement = document.getElementById('countdown');

    setInterval(function() {
        var currentDate = new Date().getTime();
        var timeRemaining = targetDate - currentDate;

        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    }, 1000);

    // Confetti effect
    setInterval(function() {
        var confetti = document.createElement('span');
        confetti.innerHTML = '☀️';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.opacity = Math.random();
        confetti.style.fontSize = Math.random() * 10 + 10 + 'px';

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 5000);
    }, 1000);
};
