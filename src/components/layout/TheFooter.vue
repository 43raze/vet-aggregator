<script>
export default {
  data() {
    return {
      links: ['Про нас', 'Контакти', 'Умови використання'],
    }
  },
}
</script>

<template>
  <v-footer color="indigo-darken-3" class="py-0 footer-bar">
    <v-container class="d-flex flex-column flex-sm-row align-center justify-space-between ga-2 py-3">
      <div class="d-flex ga-1">
        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
          color="cyan-lighten-3"
          size="small"
          rounded="lg"
        />
      </div>

      <p class="text-caption text-white opacity-60">
        © {{ new Date().getFullYear() }} Vet Search
      </p>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-bar {
  flex: 0 0 auto;
}
</style>
