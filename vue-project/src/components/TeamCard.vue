<script setup>
defineProps(['nama', 'jabatan', 'foto'])
</script>

<template>
  <div class="team-card">
    <div class="avatar">
      <img v-if="foto" :src="foto" :alt="nama" />
      <span v-else>{{ nama.charAt(0) }}</span>
    </div>
    <h3>{{ nama }}</h3>
    <p>{{ jabatan }}</p>
  </div>
</template>

<style scoped>
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* warna background & font sesuaikan sendiri */
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>