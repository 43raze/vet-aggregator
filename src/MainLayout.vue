<script>
import TheHeader from './components/TheHeader.vue'
import FilterPanel from './components/FilterPanel.vue'
import ClinicCard from './components/ClinicCard.vue'
import ClinicModalForm from './components/ClinicModalForm.vue'
import { createClinic } from '../model/clinics.js'

export default {
  components: { TheHeader, FilterPanel, ClinicCard, ClinicModalForm },

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
          comments: [
            { author: 'Анна', text: 'Чудова клініка, дякую лікарям!', rank: 5 },
            { author: 'Максим', text: 'Швидко та професійно.', rank: 4 },
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
      this.clinics.push(
        createClinic({
          title: clinicDto.title,
          description: clinicDto.description,
          phone: clinicDto.phone,
          email: clinicDto.email,
          address: clinicDto.address,
          city: clinicDto.city,
          district: clinicDto.district,
          animalsKinds: clinicDto.animals,
          website: clinicDto.website,
        }),
      )

      this.isShowClinicModalForm = false
    },

    addComment({ clinicId, author, text, rank }) {
      const clinic = this.clinics.find(c => c.id === clinicId)

      if (!clinic) return
      clinic.comments.push({ author, text, rank })
    },
  },
}
</script>

<template>
  <v-app class="app-bg">
    <TheHeader @add="isShowClinicModalForm = true" />

    <v-main class="fill-height">
      <v-container class="fill-height pa-4">
        <v-row class="fill-height ma-0">
          <v-col cols="3" class="d-flex flex-column">
            <FilterPanel />
          </v-col>

          <v-col cols="9" class="overflow-y-auto">
            <v-row>
              <v-col v-for="clinic in clinics" :key="clinic.id" cols="12">
                <ClinicCard :clinic="clinic" @add-comment="addComment" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

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
