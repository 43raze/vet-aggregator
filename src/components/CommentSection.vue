<script>
import CommentSubmitter from './CommentSubmitter.vue'
import CommentList from './CommentList.vue'

export default {
  components: { CommentSubmitter, CommentList },

  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['add-comment'],
}
</script>

<template>
  <v-card-text class="pt-3 pb-2">
    <p class="text-caption font-weight-bold text-medium-emphasis mb-2">
      <v-icon size="14">mdi-comment-outline</v-icon>
      Коментарі
    </p>

    <CommentList :comments />

    <CommentSubmitter @comment-submitted="$emit('add-comment', $event)" />
  </v-card-text>
</template>

<style scoped>
.comment-input {
  font-size: 12px;
}
.comment-item {
  background: #e8eaf6;
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
