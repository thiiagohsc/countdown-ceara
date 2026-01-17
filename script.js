const targetDate = new Date("2026-02-11T00:00:00").getTime();
const maxDays = 365;

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;
  const past = now - targetDate;

  const circleLength = 2 * Math.PI * 50;

  if (difference <= 0) {
    document.getElementById("days").innerHTML = `Evento começou há ${Math.floor(past / (1000 * 60 * 60 * 24))} dias`;
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";

    document.querySelectorAll("circle.fg").forEach(c => {
      c.style.strokeDashoffset = circleLength;
    });
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `${days} dias`;
  document.getElementById("hours").innerHTML = `${hours} horas`;
  document.getElementById("minutes").innerHTML = `${minutes} minutos`;
  document.getElementById("seconds").innerHTML = `${seconds} segundos`;

  document.getElementById("circle-days").style.strokeDashoffset = circleLength * (1 - days / maxDays);
  document.getElementById("circle-hours").style.strokeDashoffset = circleLength * (1 - hours / 24);
  document.getElementById("circle-minutes").style.strokeDashoffset = circleLength * (1 - minutes / 60);
  document.getElementById("circle-seconds").style.strokeDashoffset = circleLength * (1 - seconds / 60);
}

function updateCurrentTime() {
  const now = new Date();
  const format = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });
  document.getElementById("now-time").innerHTML = format.format(now);
}

setInterval(updateCountdown, 1000);
setInterval(updateCurrentTime, 1000);
updateCountdown();
updateCurrentTime();

// Tema dinâmico
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Som ambiente
const audio = document.getElementById("ambient-audio");
const btnAudio = document.getElementById("toggle-audio");

btnAudio.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnAudio.textContent = "Parar Som";
  } else {
    audio.pause();
    btnAudio.textContent = "Som Ambiente";
  }
});
