import { Component } from "../components/Component.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
export class KontakPage extends Component {
render() {
const navbar = new Navbar({namaSekolah: "SMK Ceriya", activePage: "kontak" }).render();
const footer = new Footer().render();
return `
${navbar}
<main>
<h1>Hubungi Kami</h1>
<p>Email: info@smkceriya.sch.id</p>
<p>Telepon: (028) 28-0910</p>
</main>
${footer}
`;
}
}