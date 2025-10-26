document.addEventListener("DOMContentLoaded", function () {
    const buttonLamar = document.querySelector('.button');

    buttonLamar.addEventListener('click', function () {
        alert("Lamaran Anda sudah dikirim");
        window.location.href ="../LamaranAnda/lamaran.html"
    });
});
