<script setup>
import ProductCard from '../components/ProductCard.vue'
const daftarProduk = [
 { id: 1, nama: 'Red Beaded Mermaid Evening Gown with Feather Shawl ', harga: 25000000, gambar:
'https://i.pinimg.com/736x/6c/27/8d/6c278d9818d97878362da10a9473d38e.jpg' },
 { id: 2, nama: 'Luxury Black Sequin Couture Gown  ', harga: 50000000, gambar:
'https://i.pinimg.com/736x/a7/24/80/a72480134391bb56b09d7765b40662ad.jpg' },
 { id: 3, nama: 'Luxury Navy Satin Evening Gown', harga: 67000000, gambar:
'https://i.pinimg.com/736x/76/92/5f/76925f73575942fa25424d023c480c65.jpg' },
{ id: 4, nama: 'Luxury Sculpted Strapless Wedding Gown', harga: 98000000, gambar:
'https://i.pinimg.com/736x/df/e4/cd/dfe4cde21f949afba97c434ff6e48c09.jpg' },
{ id: 5, nama: 'Luxury Black White Evening Gown', harga: 73000000, gambar:
'https://i.pinimg.com/736x/51/9c/ce/519cced0e737733c86c48b7fad32114a.jpg' },
{ id: 6, nama: 'Luxury Off-Shoulder Mermaid Wedding Dress', harga: 29000000, gambar:
'https://i.pinimg.com/736x/75/d3/24/75d324e42a6a4fc0e7a52ae89e932547.jpg' },

]
</script>
<template>
    <main>
        <h1>Produk Kami</h1>
        <div class="grid">
            <ProductCard
 v-for="produk in daftarProduk"
 :key="produk.id"
 :nama="produk.nama"
 :harga="produk.harga"
 :gambar="produk.gambar"
 />
 </div>
 </main>
</template>
<style scoped>
.grid {
 display: flex;
 gap: 16px;
 flex-wrap: wrap;
}
</style>