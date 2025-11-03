document.getElementById("next").addEventListener("click", function() {
    let usn = document.getElementById("usn").value;
    let pass = document.getElementById("pass").value;

    if (usn.trim() === "" || pass.trim() === "") {
        alert("Username atau password tidak boleh kosong");
        return;
    }

    fetch("../dataPengguna/daftarUser.json")
        .then(response => response.json())
        .then(data => {
            let user = data.find(u => u.username === usn && u.password === pass);
            if (user) {
                window.location.href = "../HomePelamar/index.html";
            } else {
                alert("User tidak ditemukan, pastikan menginputkan data yang benar");
            }
        });
});
