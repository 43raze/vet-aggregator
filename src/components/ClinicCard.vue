<script>
import CommentSection from './CommentSection.vue'

export default {
  components: { CommentSection },

  props: {
    clinic: {
      type: Object,
      required: true,
    },
  },
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
        <v-avatar color="indigo-lighten-5" size="40">
          <v-icon color="indigo" size="20">mdi-paw</v-icon>
        </v-avatar>
      </template>

      <v-card-title class="text-body-1 font-weight-bold">
        {{ clinic.title }}
      </v-card-title>

      <v-card-subtitle>
        <v-chip v-for="kind in clinic.animalsKinds" :key="kind" size="x-small">
          {{ kind }}
        </v-chip>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="pt-2 pb-1 flex-grow-1">
      <p class="text-body-2 text-medium-emphasis mb-3">
        {{ clinic.description }}
      </p>

      <div class="d-flex align-center ga-1 mb-1">
        <v-icon size="15" color="indigo-lighten-2">mdi-phone-outline</v-icon>

        <span class="text-caption">{{ clinic.phone }}</span>
      </div>

      <div class="d-flex align-center ga-1 mb-1">
        <v-icon size="15" color="indigo-lighten-2">mdi-email-outline</v-icon>

        <span class="text-caption">{{ clinic.email }}</span>
      </div>

      <div class="d-flex align-center ga-1 mb-1">
        <v-icon size="15" color="indigo-lighten-2">mdi-web</v-icon>

        <span class="text-caption">{{ clinic.website }}</span>
      </div>

      <div class="d-flex align-center ga-1 mt-2">
        <v-rating
          :model-value="Number(clinic.rank)"
          density="compact"
          size="small"
          readonly
          half-increments
          class="rating-red"
        />

        <span class="text-caption text-medium-emphasis">{{ clinic.rank }}</span>
      </div>
    </v-card-text>

    <v-divider />

    <CommentSection :comments="clinic.comments" />
  </v-card>
</template>

<style scoped>
.ad-card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  background: #fff;
}
.rating-red :deep(.v-btn) {
  margin: 0 2px;
}
.rating-red :deep(.v-icon) {
  color: #e53935 !important;
}
</style>
