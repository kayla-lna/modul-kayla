<!-- <template>
 <main>
 <h1>Tentang Kami</h1>
 <p>Onlineshop ini dikelola oleh siswa SMK Ceriya jurusan
PPLG.</p>
 </main>
</template> -->

<script setup>
import TeamCard from '../components/TeamCard.vue'

// TODO: ganti dengan data tim kalian sendiri (min. 3 anggota)
const daftarTim = [
  { id: 1, nama: 'Nama Anggota 1', jabatan: 'Founder & Owner', foto: '' },
  { id: 2, nama: 'Nama Anggota 2', jabatan: 'Manajer Operasional', foto: '' },
  { id: 3, nama: 'Nama Anggota 3', jabatan: 'Kepala Pemasaran', foto: '' },
]
</script>

<template>
  <div class="about-page">
    <!-- Banner -->
    <section class="banner">
      <h1>Tentang Kami</h1>
    </section>

    <!-- Bagian 1: Cerita Kami -->
    <section class="cerita-kami">
      <div class="cerita-teks">
        <h2>Cerita Kami</h2>
        <p>
          TODO: tulis cerita asli tentang toko kalian di sini,
               kapan mulai, kenapa dibuat, apa yang membedakan, dst.
        </p>
      </div>
      <div class="cerita-gambar">
        <img src="https://placehold.co/400x300" alt="Toko Kami" />
      </div>
    </section>

    <!-- Bagian 2: Tim Kami -->
    <section class="tim-kami">
      <h2>Tim Kami</h2>
      <div class="team-grid">
        <TeamCard
          v-for="anggota in daftarTim"
          :key="anggota.id"
          :nama="anggota.nama"
          :jabatan="anggota.jabatan"
          :foto="anggota.foto"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.banner {
  /* TODO: samakan warna dengan Landing Page kalian, misalnya: */
  background-color: #4f46e5;
  color: white;
  text-align: center;
  padding: 3rem 1rem;
}

.cerita-kami {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 3rem 1.5rem;
  flex-wrap: wrap;
}

.cerita-teks {
  flex: 1;
  min-width: 250px;
}

.cerita-gambar {
  flex: 1;
  min-width: 250px;
}

.cerita-gambar img {
  width: 100%;
  border-radius: 8px;
}

.tim-kami {
  padding: 3rem 1.5rem;
  text-align: center;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>