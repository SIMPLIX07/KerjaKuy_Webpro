document.getElementById("next").addEventListener("click", async function(){
    let usn = document.getElementById("usn").value
    let pass = document.getElementById("pass").value

    if (usn.trim() === "" || pass.trim() === "") {
        alert("Username atau password tidak boleh kosong");
        return;
    }

    let response = await fetch("../dataPengguna/daftarUser.json");
    let data = await response.json();

    let user = data.find(u => u.username === usn && u.password === pass);

    if(user){
        window.location.href = "../HomePelamar/index.html";

    }else{
        alert("User tidak ditemukan, pastikan menginputkan data yang benar")
    }
    
});