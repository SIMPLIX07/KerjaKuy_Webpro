// Contoh data dummy lamaran
const dataLamaran = [
  {
    posisi: "UI/UX Designer",
    perusahaan: "PT. Nebula",
    status: "ditolak",
    pesan: "Mohon maaf, anda belum diterima di perusahaan Nebula. Tetap semangat!"
  },
  {
    posisi: "Frontend Developer",
    perusahaan: "PT. Solaria Tech",
    status: "diproses",
    pesan: "Lamaran anda sedang diproses oleh tim HRD Solaria Tech."
  },
  {
    posisi: "Mobile Engineer",
    perusahaan: "PT. KodingKuy",
    status: "diterima",
    pesan: "Selamat! Anda diterima sebagai Mobile Engineer di PT. KodingKuy!"
  }
];

// Render card ke halaman
const container = document.getElementById("cardsContainer");

dataLamaran.forEach(lamaran => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="status ${lamaran.status}"></div>
    <div class="card-body">
      <h5 class="card-title">${lamaran.posisi}</h5>
      <p class="card-perusahaan">${lamaran.perusahaan}</p>
      <p class="card-text">${lamaran.pesan}</p>
    </div>
  `;
  container.appendChild(card);
});
