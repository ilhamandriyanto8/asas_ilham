

const btnBuka = document.getElementById("btnBukaUndangan");
const targetSection = document.getElementById("waktu-tempat");

if (btnBuka && targetSection) {
  btnBuka.addEventListener("click", () => {
    document.body.classList.remove("locked");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
}

const bgMusic = document.getElementById("bgMusic");
const btnMusik = document.getElementById("btnMusik");
let isPlaying = false;

function updateMusikUI(playing) {
  isPlaying = playing;
  if (btnMusik) {
    btnMusik.textContent = playing ? "♫ Musik: On" : "♪ Musik: Off";
    btnMusik.classList.toggle("is-playing", playing);
  }
}

async function playMusik() {
  if (!bgMusic) return;
  try {
    await bgMusic.play();
    updateMusikUI(true);
  } catch (err) {
   
    updateMusikUI(false);
  }
}

function pauseMusik() {
  if (!bgMusic) return;
  bgMusic.pause();
  updateMusikUI(false);
}


if (btnBuka && targetSection) {
  btnBuka.addEventListener("click", () => {
    document.body.classList.remove("locked");
    targetSection.scrollIntoView({ behavior: "smooth" });
    playMusik();
  });
}

k
if (btnMusik) 
  btnMusik.addEventListener("click", () => {
    if (isPlaying) {
      pauseMusik();
    } else {
      playMusik();
    }
  });


const targetDate = new Date("November 29, 2026 10:00:00").getTime();

const timerInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(timerInterval);
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.innerHTML = "<h2>Acara Telah Dimulai!</h2>";
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
  if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
  if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);


const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

async function salinRekening(elementId, tombol) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const angka = el.textContent.replace(/\s+/g, "");

  try {
    await navigator.clipboard.writeText(angka);
  } catch (e) {
    const temp = document.createElement("input");
    temp.value = angka;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }

  const teksAwal = tombol.textContent;
  tombol.textContent = "✓ Berhasil Disalin";
  tombol.classList.add("copied");

  setTimeout(() => {
    tombol.textContent = teksAwal;
    tombol.classList.remove("copied");
  }, 2000);
}


const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama")?.value.trim() || "-";
    const status = document.getElementById("status")?.value.trim() || "-";
    const jumlah = document.getElementById("jumlah")?.value.trim() || "-";
    const pesanUcapan = document.getElementById("pesan")?.value.trim() || "-";
    const nomorWA = "6281381967395";

    const teksPesan =
      `Halo, berikut konfirmasi RSVP saya:\n` +
      `Nama: ${nama}\n` +
      `Status: ${status}\n` +
      `Jumlah Tamu: ${jumlah}\n` +
      `Ucapan: ${pesanUcapan}`;

    window.location.href = `https://wa.me/${nomorWA}?text=${encodeURIComponent(teksPesan)}`;
  });
}