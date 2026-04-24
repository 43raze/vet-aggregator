<script>
import TheCommentSection from './TheCommentSection.vue'

export default {
  components: { TheCommentSection },
}
</script>

<template>
  <v-card
    rounded="xl"
    border
    elevation="0"
    class="ad-card d-flex flex-column h-100"
  >
    <v-card-item class="pb-1">
      <template #prepend>
        <v-avatar color="deep-purple-lighten-5" size="40">
          <v-icon color="deep-purple" size="20">mdi-paw</v-icon>
        </v-avatar>
      </template>
      <v-card-title class="text-body-1 font-weight-bold">
        Ветеринарна клініка «Лапки»
      </v-card-title>

      <v-card-subtitle>Собака</v-card-subtitle>
    </v-card-item>

    <v-card-text class="pt-2 pb-1 flex-grow-1">
      <p class="text-body-2 text-medium-emphasis mb-3">
        Повний спектр ветеринарних послуг. Досвідчені лікарі, сучасне
        обладнання. Працюємо 24/7.
      </p>

      <div class="d-flex align-center ga-1 mb-1">
        <v-icon size="15" color="deep-purple-lighten-2"
          >mdi-phone-outline</v-icon
        >

        <span class="text-caption">+38 (044) 123-45-67</span>
      </div>

      <div class="d-flex align-center ga-1 mb-1">
        <v-icon size="15" color="deep-purple-lighten-2"
          >mdi-email-outline</v-icon
        >

        <span class="text-caption">lapki@vet.ua</span>
      </div>

      <div class="d-flex align-center ga-1 mb-1">
        <v-icon size="15" color="deep-purple-lighten-2">mdi-web</v-icon>

        <span class="text-caption">lapki-vet.ua</span>
      </div>

      <v-rating
        color="amber"
        density="compact"
        size="small"
        readonly
        half-increments
      />
    </v-card-text>

    <v-divider />

    <TheCommentSection />
  </v-card>
</template>

<style scoped>
.ad-card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  background: #fff;
}
.ad-card:hover {
  /* transform: translateY(-3px); */
  box-shadow: 0 8px 24px rgba(103, 58, 183, 0.1) !important;
}
</style>
