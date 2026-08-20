<script setup>
import ProductCard from '../components/ProductCard.vue'
const daftarProduk = [
 { id: 1, nama: 'Red Beaded Mermaid Evening Gown with Feather Shawl ', harga: 25000000, gambar:
'https://i.pinimg.com/736x/6c/27/8d/6c278d9818d97878362da10a9473d38e.jpg' },
 { id: 2, nama: 'Luxury Burgundy Tulle Ball Gown with Corset Bodice', harga: 50000000, gambar:
'https://i.pinimg.com/736x/03/6e/64/036e64a50b3db39328a9d9cd75a6fecc.jpg' },
 { id: 3, nama: 'Luxury Strapless Satin Wedding Dress', harga: 67000000, gambar:
'https://i.pinimg.com/736x/cf/8e/64/cf8e64a557c934d4e36e37fdcf57cc35.jpg' },
{ id: 4, nama: 'Off Shoulder Satin Wedding Dress', harga: 98000000, gambar:
'https://i.pinimg.com/736x/6f/e0/dc/6fe0dc1aefae425a0dec3bcddd16e78c.jpg' },
{ id: 5, nama: 'Luxury Sculpted Strapless Wedding Gown', harga: 73000000, gambar:
'https://i.pinimg.com/1200x/bc/39/a9/bc39a99096500ca7c1b6b7be7050f50c.jpg' },
{ id: 6, nama: 'Off Shoulder Mermaid Wedding Dress', harga: 29000000, gambar:
'https://i.pinimg.com/736x/d5/19/bc/d519bc56e26dc0de9190d0834c79b888.jpg' },

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
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
 gap: 20px;
 justify-items: center;
}
</style>