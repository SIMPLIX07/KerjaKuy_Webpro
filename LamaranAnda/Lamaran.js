document.addEventListener("DOMContentLoaded", async function () {
    const container = document.querySelector(".cards-container");
    const username = document.querySelector(".user-margin").textContent.trim();

    try {
        const response = await fetch("./dataLamaran.json");
        const data = await response.json();

        const user = data.userPelamar.find(u => u.username === username);

        if (!user || !user.lamaran || user.lamaran.length === 0) {
            container.innerHTML = "<p style='text-align:center;'>Kamu belum mengajukan lamaran.</p>";
            return;
        }

        user.lamaran.forEach(lamaran => {
            const card = document.createElement("div");
            card.classList.add("card");

            const status = document.createElement("div");
            status.classList.add("status", lamaran.status.toLowerCase());

            const body = document.createElement("div");
            body.classList.add("card-body");

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = lamaran.posisiLamaran;

            const perusahaanNama = document.createElement("p");
            perusahaanNama.classList.add("card-perusahaan");
            perusahaanNama.textContent = lamaran.perusahaan;

            const pesan = document.createElement("p");
            pesan.classList.add("card-pesan");

            const statusLower = lamaran.status.toLowerCase();
            if (statusLower === "diterima") {
                pesan.textContent = `Selamat, anda diterima di ${lamaran.perusahaan}.`;
            } else if (statusLower === "ditolak") {
                pesan.textContent = `Maaf, anda belum diterima di ${lamaran.perusahaan}. Tetap semangat!`;
            } else if (statusLower === "diproses" || statusLower === "proses") {
                pesan.textContent = `Lamaran anda sedang diproses oleh ${lamaran.perusahaan}, sabar ya.`;
            }

            body.appendChild(title);
            body.appendChild(perusahaanNama);
            body.appendChild(pesan);
            card.appendChild(status);
            card.appendChild(body);
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Gagal memuat data lamaran:", error);
        container.innerHTML = "<p style='text-align:center; color:red;'>Gagal memuat data lamaran.</p>";
    }
});

document.querySelector('.search-button').addEventListener('click', function() {
    const searchValue = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const text = card.querySelector('.card-pesan').textContent.toLowerCase(); 
        const perusahaan = card.querySelector('.card-perusahaan').textContent.toLowerCase();

        if (title.includes(searchValue) || text.includes(searchValue) || perusahaan.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
