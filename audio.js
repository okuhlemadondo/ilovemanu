const audio = document.querySelector('audio');
const playPauseButton = document.getElementById('#audio-button');
const stopButton = document.getElementById('#stop-button');
const icon = document.getElementById('#icon');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.src = 'assets/images/icons8-pause-ios-17-filled/icons8-pause-50.png'; // Pause icon
        playPauseButton.setAttribute('aria-label', 'Pause');
    } else {
        audio.pause();
        icon.src = 'assets/images/icons8-play-ios-17-filled/icons8-play-50.png'; // Play icon
        playPauseButton.setAttribute('aria-label', 'Play');
    }
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the start
    icon.src = 'assets/images/icons8-play-ios-17-filled/icons8-play-50.png'; // Reset to play icon
    playPauseButton.setAttribute('aria-label', 'Play');
});
