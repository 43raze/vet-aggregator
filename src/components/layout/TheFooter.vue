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
      fluid
      class="d-flex flex-column flex-sm-row align-center ga-2 py-3"
      style="max-width: 1920px"
    >
      <div class="d-flex justify-center flex-wrap ga-1">
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
