<script>
import CommentSubmitter from '@/components/comment/CommentSubmitter.vue'

export default {
  components: { CommentSubmitter },

  props: ['comments'],
}
</script>

<template>
  <div
    v-for="comment in comments"
    :key="comment.id"
    class="comment-item pa-2 rounded-lg mb-1 d-flex align-center justify-space-between ga-2"
  >
    <div class="d-flex align-center ga-1 flex-grow-1 min-width-0">
      <v-avatar size="20" color="indigo-lighten-4" class="flex-shrink-0">
        <v-icon size="12" color="indigo">mdi-account</v-icon>
      </v-avatar>

      <span class="text-caption font-weight-medium text-no-wrap">
        {{ comment.author }}
      </span>

      <span class="text-caption text-medium-emphasis comment-text">
        {{ comment.text }}
      </span>
    </div>

    <v-rating
      :model-value="comment.rank"
      :length="5"
      density="compact"
      size="x-small"
      readonly
      half-increments
      class="flex-shrink-0"
      :class="comment.rank > 0 ? 'rating-red' : 'rating-grey'"
    />
  </div>
</template>

<style scoped>
.comment-item {
  background: #e8eaf6;
}
.comment-text {
  overflow-wrap: anywhere;
}
.min-width-0 {
  min-width: 0;
}

.rating-red :deep(.v-btn),
.rating-grey :deep(.v-btn) {
  margin: 0 4px;
}
.rating-red :deep(.v-icon) {
  color: #e53935 !important;
}
.rating-grey :deep(.v-icon) {
  color: #bdbdbd !important;
  opacity: 1 !important;
}
</style>
