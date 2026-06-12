<script>
export default {
  props: ['clinicId'],

  emits: ['comment-submitted'],

  data() {
    return {
      localComment: this.createComment(),
    }
  },

  methods: {
    createComment() {
      return {
        id: Math.trunc(Math.random() * 10000),
        author: '',
        text: '',
        rank: 0,
        clinicId: this.clinicId,
      }
    },

    submit() {
      if (!this.localComment.text.trim() && !this.localComment.rank) return

      this.$emit('comment-submitted', {
        ...this.localComment,
        author: this.localComment.author || 'Анонім',
      })

      this.localComment = this.createComment()
    },
  },
}
</script>

<template>
  <v-form class="mt-2" @submit.prevent="submit">
    <v-text-field
      v-model.trim="localComment.author"
      placeholder="Ваше ім'я (необов'язково)"
      variant="outlined"
      density="compact"
      hide-details
      rounded="lg"
      bg-color="indigo-lighten-5"
      class="comment-input mb-2"
      prepend-inner-icon="mdi-account-outline"
    />

    <div class="d-flex align-center ga-1 mb-1">
      <span class="text-caption text-medium-emphasis">Оцінка:</span>
      <v-rating
        v-model.number="localComment.rank"
        density="compact"
        size="x-small"
        half-increments
        class="rating-red"
      />
    </div>

    <div class="d-flex align-center ga-2">
      <v-text-field
        v-model.trim="localComment.text"
        placeholder="Написати коментар..."
        variant="outlined"
        density="compact"
        hide-details
        rounded="lg"
        bg-color="indigo-lighten-5"
        class="comment-input flex-grow-1"
      />
      <v-btn
        type="submit"
        color="indigo"
        variant="tonal"
        icon="mdi-send"
        size="small"
        rounded="circle"
        :disabled="!localComment.text.trim() && !localComment.rank"
      />
    </div>
  </v-form>
</template>

<style scoped>
.comment-input {
  font-size: 12px;
}

.rating-red :deep(.v-btn) {
  margin: 0 4px;
}
.rating-red :deep(.v-icon) {
  color: #e53935 !important;
}
</style>
