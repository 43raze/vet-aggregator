<script>
import ClinicCard from '@/components/clinic/ClinicCard.vue'
import ClinicFilterPanel from '@/components/clinic/ClinicFilterPanel.vue'
import ClinicDetails from '@/pages/ClinicDetails.vue'

export default {
  components: {
    ClinicCard,
    ClinicFilterPanel,
    ClinicDetails,
  },

  props: ['clinics'],

  emits: ['comment-added'],

  data() {
    return {}
  },

  methods: {
    addComment({ clinicId, ...comment }) {
      // const clinic = this.clinics.find(c => c.id === clinicId)
      // if (!clinic) return
      // clinic.comments.push(comment)
      this.emit('comment-added', { clinicId, ...comment })
    },
  },
}
</script>

<template>
  <v-row class="ma-0">
    <v-col cols="12" md="4" class="d-none d-md-flex flex-column pa-2">
      <ClinicFilterPanel />
    </v-col>

    <v-col cols="12" md="8" class="pa-2">
      <v-row>
        <v-col v-for="clinic in clinics" :key="clinic.id" cols="12">
          <ClinicCard :clinic="clinic" @add-comment="addComment" />
        </v-col>
      </v-row>
      <ClinicDetails v-if="false" />
    </v-col>
  </v-row>
</template>
