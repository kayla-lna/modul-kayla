import { Component } from "./Component.js";
export class Footer extends Component {
render() {
const tahun = new Date().getFullYear();
return `
<hr/>
<footer>
<small>&copy; ${tahun} SMK Ceriya - Semua hak akan dilindungi</small>
</footer>
`;
}
}
