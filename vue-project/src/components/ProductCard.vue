<script setup>
import { ref } from 'vue'
defineProps(['nama', 'harga', 'gambar'])
const gambarDipilih = ref(null)
function bukaPreview(src) {
 gambarDipilih.value = src
}

function tutupPreview() {
 gambarDipilih.value = null
}

function tambahKeKeranjang(nama) {
 const suara = new Audio('nikin-pop-up-something-160353.mp3')
 suara.play()
 alert(`${nama} ditambahkan ke keranjang!`)
}
</script>

<template>
 <div class="card">
 <div class="gambar-wrap">
 <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" />
 </div>
 <h3>{{ nama }}</h3>
 <p>Rp {{ harga.toLocaleString('id-ID') }}</p>
 <button @click="tambahKeKeranjang(nama)">Tambah ke Keranjang</button>
 </div>

 <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
 <img :src="gambarDipilih" class="preview-besar" />
 </div>
</template>
<style scoped>

.card {
 border: 1px solid #ddd;
 border-radius: 10px;
 padding: 14px;
 width: 220px;
 text-align: center;
 display: flex;
 flex-direction: column;
}
.gambar-wrap {
 width: 100%;
 aspect-ratio: 3 / 4;
 overflow: hidden;
 border-radius: 6px;
}
.gambar-wrap img {
 width: 100%;
 height: 100%;
 object-fit: cover;
 cursor: pointer;
 display: block;
}
.card h3 {
 font-size: 14px;
 line-height: 1.3;
 min-height: 2.6em;
 overflow: hidden;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
}
.card button { margin-top: auto; }
.preview-overlay {
 position: fixed; top: 0; left: 0; width: 100%; height: 100%;
 background: rgba(0, 0, 0, 0.7);
 display: flex; align-items: center; justify-content: center;
 cursor: zoom-out;
}
.preview-besar { max-width: 80%; max-height: 80%; border-radius: 8px; }
button {
 margin-top: 8px;
 padding: 6px 12px;
 border: none;
 border-radius: 6px;
 background: bisque;
 color: white;
 cursor: pointer;
}
button:hover { background: lightpink; }
</style>