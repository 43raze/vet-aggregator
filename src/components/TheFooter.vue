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
    <v-container
      class="d-flex flex-column flex-sm-row align-center ga-2 py-3"
    >
      <div class="d-flex align-center">
        <v-avatar color="cyan-lighten-3" size="28" class="mr-2">
          <v-icon color="indigo-darken-3" size="14">mdi-paw</v-icon>
        </v-avatar>
        <span class="text-body-2 font-weight-bold text-white">Vet Search</span>
      </div>

      <div class="d-flex justify-center flex-wrap ga-1 mx-sm-4">
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

      <v-spacer class="d-none d-sm-block" />

      <span class="text-caption text-white opacity-60">
        © {{ new Date().getFullYear() }} Vet Search
      </span>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-bar {
  flex: 0 0 auto;
}
</style>
