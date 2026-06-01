<script>
import CommentSubmitter from './CommentSubmitter.vue'

export default {
  components: { CommentSubmitter },

  props: ['comments'],
}
</script>

<template>
  <div
    v-for="comment in comments"
    :key="comment.author"
    class="comment-item pa-2 rounded-lg mb-1 d-flex align-center justify-space-between ga-2"
  >
    <div class="d-flex align-center ga-1 flex-grow-1 min-width-0">
      <v-avatar size="20" color="indigo-lighten-4" class="flex-shrink-0">
        <v-icon size="12" color="indigo">mdi-account</v-icon>
      </v-avatar>

      <span class="text-caption font-weight-medium text-no-wrap">{{
        comment.author
      }}</span>
      <span class="text-caption text-medium-emphasis comment-text">{{
        comment.text
      }}</span>
    </div>

    <div class="d-flex align-center flex-shrink-0">
      <v-rating
        :model-value="comment.rank"
        :length="5"
        density="compact"
        size="x-small"
        readonly
        half-increments
        :class="comment.rank > 0 ? 'rating-red' : 'rating-grey'"
      />
    </div>
  </div>
</template>
