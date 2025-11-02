document.addEventListener("DOMContentLoaded", function () {
    const buttonLamar = document.querySelector('.button');

    buttonLamar.addEventListener('click', async function () {
        let usernameUser = document.getElementById("username").textContent

        let lamaranBaru = {
            perusahaan: document.getElementById("perusahaan").textContent,
            posisiLamaran: document.getElementById("posisi").textContent,
            status: "proses"
        }
        let response = await fetch("https://68ed07c5eff9ad3b14044b1a.mockapi.io/api/v1/userPelamar");
        let users = await response.json();

        let user = users.find(u => u.username === usernameUser);

        if(!user){
            alert("User tidak ditemukan")
            return
        }

        if(!user.lamaran){
            user.lamaran = [];
        }

        user.lamaran.push(lamaranBaru)
        await fetch(`https://68ed07c5eff9ad3b14044b1a.mockapi.io/api/v1/userPelamar/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        alert("Lamaran berhasil di kirim")

    });
});
