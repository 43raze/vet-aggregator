<script>
export default {
  emits: ['add'],
}
</script>

<template>
  <v-app-bar flat color="indigo-darken-3" height="60">
    <v-container class="d-flex align-center ga-4">
      <a href="/" class="d-flex align-center ga-2 logo-link">
        <v-avatar color="cyan-lighten-3" size="38">
          <v-icon color="indigo-darken-3" size="20">mdi-paw</v-icon>
        </v-avatar>
        <span class="text-h6 font-weight-bold text-white d-none d-sm-inline">Vet Search</span>
      </a>

      <v-spacer />

      <div class="d-flex align-center ga-3 right-group">
        <v-form class="search-form" @submit.prevent>
          <v-text-field
            placeholder="Пошук оголошень..."
            variant="outlined"
            density="compact"
            hide-details
            rounded="lg"
            bg-color="indigo-darken-2"
            base-color="cyan-lighten-3"
            color="white"
            append-inner-icon="mdi-magnify"
          />
        </v-form>

        <v-btn
          color="cyan-lighten-3"
          variant="tonal"
          rounded="lg"
          icon="mdi-plus"
          class="d-flex d-sm-none"
          @click="$emit('add')"
        />
        <v-btn
          color="cyan-lighten-3"
          variant="tonal"
          rounded="lg"
          prepend-icon="mdi-plus"
          class="d-none d-sm-flex"
          @click="$emit('add')"
        >
          Додати
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.logo-link {
  text-decoration: none;
  flex-shrink: 0;
}

.search-form {
  width: 360px;
  max-width: 100%;
}
</style>
