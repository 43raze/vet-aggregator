<script>
import CommentSection from '@/components/comment/CommentSection.vue'

export default {
  components: { CommentSection },

  props: {
    clinic: {
      type: Object,
      required: true,
    },
  },

  emits: ['add-comment'],

  data() {
    return {
      isShowComments: false,
    }
  },

  computed: {
    contacts() {
      return [
        { icon: 'mdi-phone-outline', value: this.clinic.phone },
        { icon: 'mdi-email-outline', value: this.clinic.email },
        { icon: 'mdi-web', value: this.clinic.website },
        { icon: 'mdi-city', value: this.clinic.city },
        { icon: 'mdi-map-marker-outline', value: this.clinic.address },
      ].filter(contact => !!contact.value)
    },
  },

  methods: {
    onAddComment(comment) {
      this.$emit('add-comment', { clinicId: this.clinic.id, ...comment })
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

      <div class="d-flex flex-column ga-1">
        <div
          v-for="contact in contacts"
          :key="contact.icon"
          class="d-flex align-center ga-1 text-caption"
        >
          <v-icon size="15" color="indigo-lighten-2">{{ contact.icon }}</v-icon>
          {{ contact.value }}
        </div>
      </div>

      <div class="d-flex align-center ga-1 mt-2">
        <template v-if="clinic.rank > 0">
          <v-rating
            :model-value="Number(clinic.rank)"
            :length="5"
            density="compact"
            size="small"
            readonly
            half-increments
            class="rating-red"
          />
          <span class="text-caption text-medium-emphasis">
            {{ clinic.rank }}
          </span>
        </template>

        <template v-else>
          <v-icon v-for="i in 5" :key="i" size="16" color="grey-lighten-1">
            mdi-star-outline
          </v-icon>

          <span class="text-caption text-medium-emphasis ml-1">
            Немає оцінок
          </span>
        </template>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-actions class="px-4 py-2">
      <v-btn
        variant="tonal"
        color="indigo"
        size="small"
        prepend-icon="mdi-information-outline"
      >
        Детальніше
      </v-btn>

      <v-spacer />

      <v-btn
        variant="text"
        color="indigo"
        size="small"
        :prepend-icon="
          isShowComments ? 'mdi-chevron-up' : 'mdi-comment-outline'
        "
        @click="isShowComments = !isShowComments"
      >
        Коментарі ({{ clinic.comments?.length ?? 0 }})
      </v-btn>
    </v-card-actions>

    <CommentSection
      v-show="isShowComments"
      :clinic-id="clinic.id"
      :comments="clinic.comments"
      @add-comment="onAddComment"
    />
  </v-card>
</template>

<style scoped>
.ad-card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  background: #fff;
}

.rating-red :deep(.v-icon) {
  color: #e53935 !important;
  opacity: 1 !important;
}
</style>
