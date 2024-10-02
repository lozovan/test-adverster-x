let soundOn = true;  

function toggleSound() {
    const soundIcon = document.getElementById('sound-icon');
    const audio = document.getElementById('audio'); 
    // Лог для перевірки
    console.log("Sound state before toggle:", soundOn);

    soundOn = !soundOn; 

    if (soundOn) {
        soundIcon.src = '../img/sound/sound-on.png';  
        audio.play().catch(error => {
            console.error("Failed to play the audio:", error);
        });  // Відтворюємо звук
    } else {
        soundIcon.src = '../img/sound/sound-off.png';  
        audio.pause();  // Ставимо звук на паузу
    }

    // Лог після перемикання
    console.log("Sound state after toggle:", soundOn);
}