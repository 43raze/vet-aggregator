<script>
import ClinicCard from '@/components/clinic/ClinicCard.vue'
import ClinicFilterPanel from '@/components/clinic/ClinicFilterPanel.vue'

export default {
  components: { ClinicCard, ClinicFilterPanel },

  props: ['clinics'],

  emits: ['add-comment'],

  data() {
    return {
      isFilterOpen: false,
    }
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
            <ClinicCard
              :clinic="clinic"
              @add-comment="$emit('add-comment', $event)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
