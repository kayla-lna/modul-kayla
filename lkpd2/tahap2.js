class Rekening {
    #saldo; // atribut privat

    constructor() {
        this.#saldo = 0; // saldo awal
    }

    setor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            console.log("Setor berhasil: +" + jumlah);
        } else {
            console.log("Jumlah setor harus lebih dari 0");
        }
    }

    tarik(jumlah) {
        if (jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log("Tarik berhasil: -" + jumlah);
        } else {
            console.log("Saldo tidak cukup");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

// Contoh penggunaan
const rek = new Rekening();
rek.setor(1000);          // Setor berhasil: +1000
rek.tarik(500);           // Tarik berhasil: -500
rek.tarik(700);           // Saldo tidak cukup
console.log(rek.getSaldo()); // Output: 500
