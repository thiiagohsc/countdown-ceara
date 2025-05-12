const targetDate = new Date("2025-06-19T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("days").innerHTML = "Hora do embarque!";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
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
}

setInterval(updateCountdown, 1000);
updateCountdown();