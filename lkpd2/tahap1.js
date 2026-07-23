// Definisi class Mahasiswa
class Mahasiswa {
    nama; // atribut

    belajar() { // method
        console.log(this.nama + " sedang belajar");
    }
}

// Membuat object dari class Mahasiswa
const mhs = new Mahasiswa();
mhs.nama = "Kayla"; // isi data ke atribut nama
mhs.belajar();     // Output: Budi sedang belajar
