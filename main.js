console.log("loaded");

const myBuzzer = document.getElementById("buzzer");
console.log(myBuzzer);


function playSound() {
    const audio = new Audio('buzzer.mp3');
    console.log("ouch");
    audio.play();
    confetti();
}