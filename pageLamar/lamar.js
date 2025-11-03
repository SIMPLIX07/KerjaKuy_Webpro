document.addEventListener("DOMContentLoaded", async function () {
    const companyContainer = document.getElementById("companyContainer");
    const jobContainer = document.getElementById("jobContainer");

    const response = await fetch("../daftarPerusahaan/dataPerusahaan.json");
    const dataPerusahaan = await response.json();

    const perusahaan = dataPerusahaan.perusahaan[0];
    const lowongan = perusahaan.lowongan[0];

    companyContainer.innerHTML = `
        <div class="seluruh">
            <img src="asset/logoPerusahaan.png" alt="">
            <div class="profile">
                <label id="perusahaan">${perusahaan.nama}</label>
                <label id="posisi">${lowongan.judul}</label>
            </div>
        </div>
    `;

    jobContainer.innerHTML = `
    <div class="top">
        <div class="tengah">
            <img src="asset/gaji.png" alt="">
            <label>${lowongan.gaji.mata_uang} ${lowongan.gaji.min.toLocaleString()} - ${lowongan.gaji.max.toLocaleString()}</label>
        </div>
        <div class="tengah">
            <img src="asset/waktu.png" alt="">
            <label>${lowongan.tipe_pekerjaan}</label>
        </div>
        <div class="tengah">
            <img src="asset/lokasi.png" alt="">
            <label>${perusahaan.lokasi}</label>
        </div>
    </div>

    <div class="middle">
        <h2>Deskripsi Pekerjaan</h2>
        <ul class="list">
            ${lowongan.deskripsi_pekerjaan.map(d => `<li>${d}</li>`).join('')}
        </ul>
    </div>

    <div class="bottom">
        <h2>Syarat</h2>
        <ul class="list">
            ${lowongan.syarat.map(s => `<li>${s}</li>`).join('')}
        </ul>
    </div>

    <div class="actionButtons">
        <a href="../HomePelamar/index.html">
            <button class="button backBtn">Back</button>
        </a>
        <button class="button">Lamar</button>
    </div>
`;


    const buttonLamar = document.querySelector('.button');
    buttonLamar.addEventListener('click', async function () {
        const usernameUser = document.getElementById("username").textContent;
        const lamaranBaru = {
            perusahaan: perusahaan.nama,
            posisiLamaran: lowongan.judul,
            status: "proses"
        };

        const resUser = await fetch("https://68ed07c5eff9ad3b14044b1a.mockapi.io/api/v1/userPelamar");
        const users = await resUser.json();
        const user = users.find(u => u.username === usernameUser);
        if (!user) { alert("User tidak ditemukan"); return; }
        if (!user.lamaran) { user.lamaran = []; }
        user.lamaran.push(lamaranBaru);

        await fetch(`https://68ed07c5eff9ad3b14044b1a.mockapi.io/api/v1/userPelamar/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        alert(`Lamaran ke "${lowongan.judul}" berhasil dikirim`);
    });
});
