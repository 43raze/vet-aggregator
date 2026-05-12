<script>
export default {
  emits: ['add'],
}
</script>

<template>
  <v-app-bar flat color="indigo-darken-3" height="68">
    <v-container class="d-flex align-center ga-4 px-4">
      <div class="d-flex align-center ga-2">
        <v-avatar color="cyan-lighten-3" size="38">
          <v-icon color="indigo-darken-3" size="20">mdi-paw</v-icon>
        </v-avatar>

        <span class="text-h6 font-weight-bold text-white">ВетАгрегатор</span>
      </div>

      <v-form class="flex-grow-1 search-form">
        <div class="search-box">
          <v-text-field
            placeholder="Пошук оголошень..."
            variant="outlined"
            density="compact"
            hide-details
            rounded="lg"
            bg-color="indigo-darken-2"
            base-color="cyan-lighten-3"
            color="white"
            class="search-input"
          />

          <v-btn
            class="search-btn"
            type="submit"
            icon="mdi-magnify"
            variant="plain"
            :ripple="false"
            color="cyan-lighten-3"
          />
        </div>
      </v-form>

      <v-spacer />

      <v-btn
        color="cyan-lighten-3"
        variant="tonal"
        rounded="lg"
        prepend-icon="mdi-plus"
        @click="$emit('add')"
      >
        Додати
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.search-form {
  max-width: 500px;
}

.search-box {
  position: relative;
}

.search-btn {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
