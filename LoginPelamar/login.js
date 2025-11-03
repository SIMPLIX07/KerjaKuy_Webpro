$("#next").on("click", function () {
    let usn = $("#usn").val();
    let pass = $("#pass").val();

    if ($.trim(usn) === "" || $.trim(pass) === "") {
        alert("Username atau password tidak boleh kosong");
        return;
    }

    $.getJSON("../dataPengguna/daftarUser.json", function (data) {
        let user = data.find(u => u.username === usn && u.password === pass);

        if (user) {
            window.location.href = "../HomePelamar/index.html";
        } else {
            alert("User tidak ditemukan, pastikan menginputkan data yang benar");
        }
    });
});
