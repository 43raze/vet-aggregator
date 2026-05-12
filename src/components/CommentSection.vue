<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      newText: '',
      newRank: 0,
    }
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
          <v-avatar size="20" color="deep-purple-lighten-4">
            <v-icon size="12" color="deep-purple">mdi-account</v-icon>
          </v-avatar>
          <span class="text-caption font-weight-medium">{{
            comment.author
          }}</span>
        </div>

        <v-rating
          v-if="comment.rank"
          :model-value="comment.rank"
          color="amber"
          density="compact"
          size="x-small"
          readonly
          half-increments
        />
      </div>

      <p class="text-caption text-medium-emphasis mb-0">
        {{ comment.text }}
      </p>
    </div>

    <div class="mt-2">
      <div class="d-flex align-center ga-1 mb-1">
        <span class="text-caption text-medium-emphasis">Оцінка:</span>
        <v-rating
          v-model="newRank"
          color="amber"
          density="compact"
          size="small"
          half-increments
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
          bg-color="deep-purple-lighten-5"
          class="comment-input flex-grow-1"
        />

        <v-btn
          color="deep-purple"
          variant="tonal"
          icon="mdi-send"
          size="small"
          rounded="circle"
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
  background: #ede7f6;
}
</style>
