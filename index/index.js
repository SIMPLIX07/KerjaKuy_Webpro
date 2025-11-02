document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById('login');
    const btnSign = document.getElementById('daftar');

    btnLogin.addEventListener('click', async function () {
        let userConfirm = confirm("Login Sebagai Perusahaan/User");

        if (userConfirm){
            window.location.href = "../LoginPelamar/login.html"
        }else{
            window.location.href = "../LoginPerusahaan/login.html"
        }

    });
    btnSign.addEventListener('click', async function () {
        let userConfirm = confirm("Sign Up Sebagai Perusahaan/User");

        if (userConfirm){
            window.location.href = "../SignupPelamar/signPelamar.html"
        }else{
            window.location.href = "../LoginPerusahaan/login.html"
        }

    });
    
});
