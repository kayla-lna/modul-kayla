<script setup>
import { ref } from 'vue'

// Form ini cuma tampilan, jadi cukup data lokal biasa (belum kirim ke mana-mana)
const nama = ref('')
const email = ref('')
const pesan = ref('')
</script>

<template>
  <div class="contact-page">
    <section class="banner">
      <h1>Hubungi Kami</h1>
    </section>

    <section class="contact-content">
      <!-- Kolom 1: Info Kontak -->
      <div class="info-kontak">
        <h2>Info Kontak</h2>
        <p>📍 TODO: alamat toko/sekolah kalian</p>
        <p>📞 nomor telepon </p>
        <p>✉️ TODO: alamat email</p>
        <p>🕑 Open 09:00 - Close 21:00</p>
      </div>

      <!-- Kolom 2: Formulir -->
      <div class="form-card">
        <h2>Kirim Pesan</h2>
        <form>
          <div class="form-group">
            <label for="nama">Nama</label>
            <input id="nama" v-model="nama" type="text" placeholder="Nama kamu" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" placeholder="email@contoh.com" />
          </div>

          <div class="form-group">
            <label for="pesan">Pesan</label>
            <textarea id="pesan" v-model="pesan" rows="4" placeholder="Tulis pesan kamu di sini..."></textarea>
          </div>

          <button type="button">Kirim</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.banner {
  /* TODO: samakan dengan warna banner Landing Page & About Page */
  background-color: #4f46e5;
  color: white;
  text-align: center;
  padding: 3rem 1rem;
}

.contact-content {
  display: flex;
  gap: 2rem;
  padding: 3rem 1.5rem;
  flex-wrap: wrap;
}

.info-kontak,
.form-card {
  flex: 1;
  min-width: 260px;
}

.info-kontak p {
  font-size: 1.05rem;
  margin: 0.75rem 0;
}

.form-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.35rem;
  font-weight: 600;
}

input,
textarea {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-family: inherit;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4f46e5; /* TODO: samakan dengan warna aksen toko kalian */
}

button {
  /* TODO: samakan dengan warna tombol Landing Page */
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

button:hover {
  opacity: 0.9;
}
</style>