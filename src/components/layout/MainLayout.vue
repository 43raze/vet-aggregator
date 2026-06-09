<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ClinicFilterPanel from '@/components/clinic/ClinicFilterPanel.vue'
import ClinicCard from '@/components/clinic/ClinicCard.vue'
import ClinicModalForm from '@/components/clinic/ClinicModalForm.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ClinicFilterPanel,
    ClinicCard,
    ClinicModalForm,
  },

  data() {
    return {
      isShowClinicModalForm: false,
      isFilterOpen: false,

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
    addClinic(clinicDto) {
      this.clinics.push({
        ...clinicDto,
        id: Math.trunc(Math.random() * 10000),
        rank: 0,
        photos: [],
        comments: [],
        overstayDays: 0,
        district: '',
        website: '',
      })

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

    <v-navigation-drawer v-model="isFilterOpen" temporary location="start" width="300">
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

        <v-row class="ma-0">
          <v-col cols="12" md="4" class="d-none d-md-flex flex-column pa-2">
            <ClinicFilterPanel />
          </v-col>

          <v-col cols="12" md="8" class="pa-2">
            <ClinicCard
              v-for="clinic in clinics"
              :key="clinic.id"
              :clinic="clinic"
              class="mb-3"
              @add-comment="addComment"
            />
          </v-col>
        </v-row>
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
