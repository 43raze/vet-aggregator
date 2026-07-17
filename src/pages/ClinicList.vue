<script>
import ClinicCard from '@/components/clinic/ClinicCard.vue'
import ClinicFilterPanel from '@/components/clinic/ClinicFilterPanel.vue'

export default {
  components: { ClinicCard, ClinicFilterPanel },

  props: ['clinics'],

  emits: ['add-comment', 'update-clinics'],

  data() {
    return {
      isFilterOpen: false,
    }
  },

  methods: {
    addComment({ clinicId, ...comment }) {
      const clinic = this.clinics.find(c => c.id === clinicId)
      if (!clinic) return

      const updatedClinic = { ...clinic }
      updatedClinic.comments.push(comment)
      const updatedClinics = this.clinics.map(c =>
        c === clinic ? updatedClinic : c,
      )

      this.$emit('update-clinics', updatedClinics)
    },
  },
}
</script>

<template>
  <div>
    <v-row class="ma-0">
      <v-col cols="12" md="4" lg="3" class="d-none d-md-flex flex-column pa-2">
        <ClinicFilterPanel />
      </v-col>

      <v-btn
        class="d-md-none ma-2"
        variant="tonal"
        color="indigo"
        prepend-icon="mdi-filter-outline"
        rounded="lg"
        @click="isFilterOpen = true"
      >
        Фільтри
      </v-btn>

      <v-navigation-drawer
        v-model="isFilterOpen"
        temporary
        location="start"
        width="300"
        class="d-md-none"
      >
        <ClinicFilterPanel closable @close="isFilterOpen = false" />
      </v-navigation-drawer>

      <v-col cols="12" md="8" lg="9" class="pa-2">
        <v-row>
          <v-col v-for="clinic in clinics" :key="clinic.id" cols="12">
            <ClinicCard :clinic="clinic" @add-comment="addComment($event)" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
