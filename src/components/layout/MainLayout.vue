<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ClinicSubmitterModal from '@/components/clinic/ClinicSubmitterModal.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClinicSubmitterModal,
  },

  data() {
    return {
      isShowClinicModalForm: false,

      clinics: [
        {
          id: 1,
          title: 'Ветеринарна клініка «Лапки»',
          description:
            'Повний спектр ветеринарних послуг. Досвідчені лікарі, сучасне обладнання. Працюємо 24/7.',
          rank: 4.8,
          phone: '+38 (044) 123-45-67',
          email: 'lapki@vet.ua',
          website: 'lapki-vet.ua',
          city: 'Київ',
          address: 'вул. Хрещатик, 1',
          comments: [
            {
              id: 1,
              author: 'Анна',
              text: 'Чудова клініка, дякую лікарям!',
              rank: 5,
            },
            { id: 2, author: 'Максим', text: 'Швидко та професійно.', rank: 4 },
          ],
          photos: [],
          animalsKinds: ['Собака'],
          overstayDays: 0,
        },
      ],
    }
  },

  methods: {
    addClinic(clinic) {
      this.clinics.push(clinic)
      this.isShowClinicModalForm = false
    },

    addComment({ clinicId, ...comment }) {
      const clinic = this.clinics.find(c => c.id === clinicId)
      if (!clinic) return
      clinic.comments.push(comment)
    },
  },
}
</script>

<template>
  <v-app class="app-bg">
    <TheHeader @add="isShowClinicModalForm = true" />

    <v-main class="app-main">
      <v-container class="pa-3 pa-sm-4">
        <RouterView :clinics="clinics" @add-comment="addComment" />
      </v-container>
    </v-main>

    <TheFooter />

    <ClinicSubmitterModal v-model="isShowClinicModalForm" @submit="addClinic" />
  </v-app>
</template>

<style scoped>
.app-bg {
  background: #f4f0ff;
}
</style>
