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

    <v-card-actions class="px-4 py-2">
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
.rating-red :deep(.v-btn) {
  margin: 0 2px;
}
.rating-red :deep(.v-icon) {
  color: #e53935 !important;
}
</style>
