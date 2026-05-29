<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['add-comment'],

  data() {
    return {
      newAuthor: '',
      newText: '',
      newRank: 0,
    }
  },

  methods: {
    submit() {
      if (!this.newText.trim()) return

      this.$emit('add-comment', {
        author: this.newAuthor.trim() || 'Анонім',
        text: this.newText.trim(),
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
  <v-card-text class="pt-3 pb-2">
    <p class="text-caption font-weight-bold text-medium-emphasis mb-2">
      <v-icon size="14">mdi-comment-outline</v-icon>
      Коментарі
    </p>

    <div
      v-for="comment in comments"
      :key="comment.author"
      class="comment-item pa-2 rounded-lg mb-1"
    >
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="d-flex align-center ga-1">
          <v-avatar size="20" color="indigo-lighten-4">
            <v-icon size="12" color="indigo">mdi-account</v-icon>
          </v-avatar>

          <span class="text-caption font-weight-medium">
            {{ comment.author }}
          </span>
        </div>

        <v-rating
          v-if="comment.rank"
          :model-value="comment.rank"
          density="compact"
          size="x-small"
          readonly
          half-increments
          class="rating-red"
        />
      </div>

      <p class="text-caption text-medium-emphasis mb-0">
        {{ comment.text }}
      </p>
    </div>

    <div class="mt-2">
      <v-text-field
        v-model="newAuthor"
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
          v-model="newRank"
          density="compact"
          size="small"
          half-increments
          class="rating-red"
        />
      </div>

      <div class="d-flex align-center ga-2">
        <v-text-field
          v-model="newText"
          placeholder="Написати коментар..."
          variant="outlined"
          density="compact"
          hide-details
          rounded="lg"
          bg-color="indigo-lighten-5"
          class="comment-input flex-grow-1"
          @keyup.enter="submit"
        />

        <v-btn
          color="indigo"
          variant="tonal"
          icon="mdi-send"
          size="small"
          rounded="circle"
          :disabled="!newText.trim()"
          @click="submit"
        />
      </div>
    </div>
  </v-card-text>
</template>

<style scoped>
.comment-input {
  font-size: 12px;
}
.comment-item {
  background: #e8eaf6;
}
.rating-red :deep(.v-btn) {
  margin: 0 2px;
}
.rating-red :deep(.v-icon) {
  color: #e53935 !important;
}
</style>
