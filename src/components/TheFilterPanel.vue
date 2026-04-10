<script>
export default {}
</script>

<template>
  <v-card rounded="xl" border elevation="0" class="pa-4 flex-grow-1">
    <p class="text-subtitle-2 font-weight-bold mb-3 text-deep-purple-darken-2">
      Фільтри
    </p>

    <p class="text-caption mb-1 text-deep-purple-lighten-1">Вид тварини</p>
    <v-chip-group class="mb-3">
      <v-chip value="dog" variant="tonal" color="deep-purple" size="small"
        >Собаки</v-chip
      >
      <v-chip value="cat" variant="tonal" color="deep-purple" size="small"
        >Коти</v-chip
      >
      <v-chip value="other" variant="tonal" color="deep-purple" size="small"
        >Інші</v-chip
      >
    </v-chip-group>

    <p class="text-caption mb-1 text-deep-purple-lighten-1">Днів передержки</p>
    <v-slider
      min="0"
      max="30"
      step="1"
      color="deep-purple"
      thumb-label
      class="mb-2"
    />

    <v-divider class="my-3" />
    <v-btn
      block
      variant="outlined"
      color="deep-purple"
      rounded="lg"
      size="small"
    >
      Скинути
    </v-btn>
  </v-card>
</template>
