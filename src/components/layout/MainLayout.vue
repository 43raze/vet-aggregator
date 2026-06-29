<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ClinicModalForm from '@/components/clinic/ClinicModalForm.vue'
import ClinicList from '@/pages/ClinicList.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClinicModalForm,
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
