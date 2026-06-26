<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ClinicFilterPanel from '@/components/clinic/ClinicFilterPanel.vue'
import ClinicModalForm from '@/components/clinic/ClinicModalForm.vue'
import ClinicList from '@/pages/ClinicList.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClinicFilterPanel,
    ClinicModalForm,
    ClinicList,
  },

  data() {
    return {
      isShowClinicModalForm: false,
      isFilterOpen: false,
    }
  },

  methods: {},
}
</script>

<template>
  <v-app class="app-bg">
    <TheHeader @add="isShowClinicModalForm = true" />

    <v-navigation-drawer
      v-model="isFilterOpen"
      temporary
      location="start"
      width="300"
    >
      <ClinicFilterPanel closable @close="isFilterOpen = false" />
    </v-navigation-drawer>

    <v-main class="app-main">
      <v-container class="pa-3 pa-sm-4">
        <v-btn
          class="d-md-none mb-3"
          variant="tonal"
          color="indigo"
          prepend-icon="mdi-filter-outline"
          rounded="lg"
          @click="isFilterOpen = true"
        >
          Фільтри
        </v-btn>

        <RouterView></RouterView>
      </v-container>
    </v-main>

    <TheFooter />

    <v-dialog v-model="isShowClinicModalForm" max-width="560">
      <ClinicModalForm
        @close="isShowClinicModalForm = false"
        @submit="addClinic"
      />
    </v-dialog>
  </v-app>
</template>

<style scoped>
.app-bg {
  background: #f4f0ff;
}
</style>
