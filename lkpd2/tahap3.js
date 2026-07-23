class Component {
    constructor(props = {}) {
        this.props = props;
    }

    render() {
        throw new Error("Method render() belum dibuat di class turunannya!");
    }
}

class Produk extends Component {
    #nama;
    #harga;

    constructor(props) {
        super(props);
        this.#nama = props.nama;
        this.#harga = props.harga;
    }

    render() {
        // return teks sesuai format
        return `${this.#nama} - Rp ${this.#harga}`;
    }
}

// Contoh penggunaan
const p1 = new Produk({ nama: "Buku Tulis", harga: 5000 });
console.log(p1.render()); // Output: Buku Tulis - Rp 5000

// Buat object Produk lain
const p2 = new Produk({ nama: "Pensil", harga: 2000 });
console.log(p2.render()); // Output: Pensil - Rp 2000

