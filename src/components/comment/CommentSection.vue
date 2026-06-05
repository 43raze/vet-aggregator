<script>
import CommentSubmitter from '@/components/comment/CommentSubmitter.vue'
import CommentList from '@/components/comment/CommentList.vue'

export default {
  components: { CommentSubmitter, CommentList },

  props: {
    comments: {
      type: Array,
      default: () => [],
    },
    clinicId: {
      type: Number,
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

    <CommentSubmitter
      :clinicId
      @comment-submitted="$emit('add-comment', $event)"
    />
  </v-card-text>
</template>
