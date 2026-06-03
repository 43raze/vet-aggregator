<script>
export default {
  emits: ['comment-submitted'],

  data() {
    return {
      // localComment: {}
      // id: где ты ?
      newAuthor: '',
      newText: '',
      newRank: 0,
    }
  },

  methods: {
    submit() {
      if (!this.newText.trim()) return

      this.$emit('comment-submitted', {
        author: this.newAuthor || 'Анонім',
        text: this.newText,
        rank: this.newRank,
      })

      this.newAuthor = ''
      this.newText = ''
      this.newRank = 0
    },
  },
}
</script>

<template>
  <v-form class="mt-2" @submit.prevent="submit">
    <v-text-field
      v-model.trim="newAuthor"
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
        v-model.number="newRank"
        density="compact"
        size="x-small"
        half-increments
        class="rating-red"
      />
    </div>

    <div class="d-flex align-center ga-2">
      <v-text-field
        v-model.trim="newText"
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
        :disabled="!newText.trim()"
      />
    </div>
  </v-form>
</template>
