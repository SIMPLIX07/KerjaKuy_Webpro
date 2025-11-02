document.getElementById("next").addEventListener("click", async function(event){
    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let usn = document.getElementById("usn").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let skills = document.getElementById("skills").value.trim();

    if (!fullname || !usn || !pass || !skills) {
        alert("Semua field harus diisi!");
        return;
    }

    try {
        let response = await fetch("../dataPengguna/daftarUser.json");
        if(!response.ok){
            alert("Gagal membaca daftarUser.json");
            return;
        }
        let data = await response.json();

        let existingUser = data.find(u => u.username === usn);
        if(existingUser){
            alert("Username sudah digunakan, silakan gunakan username lain");
            return;
        }
        let localData = JSON.parse(localStorage.getItem("daftarUser")) || [];
        const newUser = {
            id: Date.now().toString(),
            username: usn,
            password: pass,
            namaLengkap: fullname,
            keahlian: skills.split(",").map(s => s.trim()),
            lamaran: []
        };

        localData.push(newUser);
        localStorage.setItem("daftarUser", JSON.stringify(localData));

        alert("Registrasi berhasil! Data tersimpan di localStorage.");
        window.location.href = "../HomePelamar/index.html";

    } catch(err){
        console.error(err);
        alert("Terjadi kesalahan saat memproses registrasi.");
    }
});
