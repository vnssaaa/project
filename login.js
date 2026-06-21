const formMasuk = document.getElementById("formMasuk");
const inputUsernameMasuk = document.getElementById("namaPenggunaMasuk");
const inputSandiMasuk = document.getElementById("sandiMasuk");
const tombolMasuk = document.getElementById("tombolMasuk");
const errUsernameMasuk = document.getElementById("errNamaPenggunaMasuk");
const errSandiMasuk = document.getElementById("errSandiMasuk");
 
const polaSandiMasuk = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
 
function tampilkanError(elemenError, pesan) {
    elemenError.textContent = pesan;
    elemenError.style.display = "block";
}
 
function sembunyikanError(elemenError) {
    elemenError.textContent = "";
    elemenError.style.display = "none";
}
 
 
function validasiUsernameMasuk() {
    const nilai = inputUsernameMasuk.value.trim();
 
    if (nilai.length === 0) {
        tampilkanError(errUsernameMasuk, "Username wajib diisi.");
        return false;
    }
    if (nilai.includes(" ")) {
        tampilkanError(errUsernameMasuk, "Username tidak boleh mengandung spasi.");
        return false;
    }
    if (nilai.length < 3) {
        tampilkanError(errUsernameMasuk, "Username minimal 3 karakter.");
        return false;
    }
 
    sembunyikanError(errUsernameMasuk);
    return true;
}
 
function validasiSandiMasuk() {
    const nilai = inputSandiMasuk.value.trim();
 
    if (nilai.length === 0) {
        tampilkanError(errSandiMasuk, "Password wajib diisi.");
        return false;
    }
    if (nilai.length < 8) {
        tampilkanError(errSandiMasuk, "Password minimal 8 karakter.");
        return false;
    }
    if (!polaSandiMasuk.test(nilai)) {
        tampilkanError(errSandiMasuk, "Kombinasikan huruf besar, kecil, angka, dan simbol.");
        return false;
    }
 
    sembunyikanError(errSandiMasuk);
    return true;
}
 
function perbaruiTombolMasuk() {
    const semuaValid = validasiUsernameMasuk() && validasiSandiMasuk();
    tombolMasuk.disabled = !semuaValid;
}
 
inputUsernameMasuk.addEventListener("input", perbaruiTombolMasuk);
inputSandiMasuk.addEventListener("input", perbaruiTombolMasuk);
 
formMasuk.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama_valid = validasiUsernameMasuk();
    const pass_valid = validasiSandiMasuk();
    if (nama_valid && pass_valid) {
        localStorage.setItem("namaPengguna", inputUsernameMasuk.value.trim());
        window.location.href = "index.html";
    }
    else {
        console.log("Invalid Username and Password");
    }
});
 
perbaruiTombolMasuk();