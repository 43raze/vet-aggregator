<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ClinicSubmitterModal from '@/components/clinic/ClinicSubmitterModal.vue'
import ClinicList from '@/pages/ClinicList.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClinicSubmitterModal,
    ClinicList,
  },

  data() {
    return {
      isShowClinicModalForm: false,
    }
  },

  methods: {},
}
</script>

<template>
  <v-app class="app-bg">
    <TheHeader @add="isShowClinicModalForm = true" />

    <v-main class="app-main">
      <v-container class="pa-3 pa-sm-4">
        <RouterView />
      </v-container>
    </v-main>

    <TheFooter />
    <!-- @submit="addClinic" -->
    <ClinicSubmitterModal v-model="isShowClinicModalForm" />
  </v-app>
</template>

<style scoped>
.app-bg {
  background: #f4f0ff;
}
</style>
