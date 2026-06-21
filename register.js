const formDaftar = document.getElementById("formDaftar");
const inputUsername = document.getElementById("namaPengguna");
const inputEmail = document.getElementById("emailDaftar");
const inputHp = document.getElementById("noHp");
const inputSandi = document.getElementById("sandiDaftar");
const tombolDaftar = document.getElementById("tombolDaftar");
 
const errUsername = document.getElementById("errNamaPengguna");
const errEmail = document.getElementById("errEmailDaftar");
const errHp = document.getElementById("errNoHp");
const errSandi = document.getElementById("errSandiDaftar");
 
const polaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const polaSandi = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
 
function tampilkanError(elemenError, pesan) {
    elemenError.textContent = pesan;
    elemenError.style.display = "block";
}
 
function sembunyikanError(elemenError) {
    elemenError.textContent = "";
    elemenError.style.display = "none";
}
 
function validasiUsername() {
    const nilai = inputUsername.value.trim();
 
    if (nilai.length === 0) {
        tampilkanError(errUsername, "Username wajib diisi.");
        return false;
    }
    if (nilai.includes(" ")) {
        tampilkanError(errUsername, "Username tidak boleh mengandung spasi.");
        return false;
    }
    if (nilai.length < 3) {
        tampilkanError(errUsername, "Username minimal 3 karakter.");
        return false;
    }
 
    sembunyikanError(errUsername);
    return true;
}
 
function validasiEmail() {
    const nilai = inputEmail.value.trim();
 
    if (nilai.length === 0) {
        tampilkanError(errEmail, "Email wajib diisi.");
        return false;
    }
    if (!polaEmail.test(nilai)) {
        tampilkanError(errEmail, "Format email tidak valid.");
        return false;
    }
 
    sembunyikanError(errEmail);
    return true;
}
 
function validasiHp() {
    const nilai = inputHp.value.trim();
    const hanyaAngka = /^\d+$/;
 
    if (nilai.length === 0) {
        tampilkanError(errHp, "Nomor HP wajib diisi.");
        return false;
    }
    if (!hanyaAngka.test(nilai)) {
        tampilkanError(errHp, "Nomor HP hanya boleh berisi angka.");
        return false;
    }
    if (nilai.length < 10 || nilai.length > 13) {
        tampilkanError(errHp, "Nomor HP harus 10 - 13 digit.");
        return false;
    }
 
    sembunyikanError(errHp);
    return true;
}
 
function validasiSandi() {
    const nilai = inputSandi.value.trim();
 
    if (nilai.length === 0) {
        tampilkanError(errSandi, "Password wajib diisi.");
        return false;
    }
    if (nilai.length < 8) {
        tampilkanError(errSandi, "Password minimal 8 karakter.");
        return false;
    }
    if (!polaSandi.test(nilai)) {
        tampilkanError(errSandi, "Kombinasikan huruf besar, kecil, angka, dan simbol.");
        return false;
    }
 
    sembunyikanError(errSandi);
    return true;
}
 
function perbaruiTombol() {
    const semuaValid =
        validasiUsername() &&
        validasiEmail() &&
        validasiHp() &&
        validasiSandi();
 
    tombolDaftar.disabled = !semuaValid;
}
 
inputUsername.addEventListener("input", perbaruiTombol);
inputEmail.addEventListener("input", perbaruiTombol);
inputHp.addEventListener("input", perbaruiTombol);
inputSandi.addEventListener("input", perbaruiTombol);
 
formDaftar.addEventListener("submit", function (event) {
    event.preventDefault();
 
    const usernameValid = validasiUsername();
    const emailValid = validasiEmail();
    const hpValid = validasiHp();
    const sandiValid = validasiSandi();
 
    if (usernameValid && emailValid && hpValid && sandiValid) {
        localStorage.setItem("namaPengguna", inputUsername.value.trim());
        alert("Registrasi berhasil! Silakan login dengan akun barumu.");
        window.location.href = "login.html";
    }
});
 
perbaruiTombol();