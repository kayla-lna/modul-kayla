import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
export class HomePage extends Component {
render() {
    const navbar = new Navbar({  namaSekolah:"SMK Ceriya", activePage: "home" }).render();
    const footer = new Footer().render();
    const namaSekolah = this.props.namaSekolah;
return `
${navbar}
<main>
<h1>Selamat Datang di Website Sekolah ${this.props.namaSekolah}</h1>
<p>Ini adalah halaman utama (Home) dari website sekolah kami.</p>
</main>
${footer}
`;
}
}