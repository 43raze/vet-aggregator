<script>
import TheHeader from './components/TheHeader.vue'
import FilterPanel from './components/FilterPanel.vue'
import ClinicCard from './components/ClinicCard.vue'
import ClinicForm from './components/ClinicForm.vue'
import { createClinic } from '../model/clinics.js'

export default {
  components: { TheHeader, FilterPanel, ClinicCard, ClinicForm },

  data() {
    return {
      dialog: false,
      list: [
        {
          id: 1,
          title: 'Ветеринарна клініка «Лапки»',
          description:
            'Повний спектр ветеринарних послуг. Досвідчені лікарі, сучасне обладнання. Працюємо 24/7.',
          rank: '4.8',
          phone: '+38 (044) 123-45-67',
          email: 'lapki@vet.ua',
          website: 'lapki-vet.ua',
          comments: [
            { author: 'Анна', text: 'Чудова клініка, дякую лікарям!', rank: 5 },
            { author: 'Максим', text: 'Швидко та професійно.', rank: 4 },
          ],
          photos: [],
          animal: 'Собака',
          hotelDays: 0,
        },
      ],
    }
  },

  methods: {
    addClinic(form) {
      this.list.push(
        createClinic({
          title: form.title,
          description: form.description,
          phone: form.phone,
          email: form.email,
          address: form.address,
          city: form.city,
          district: form.district,
          animalsKinds: form.animals,
          website: form.website,
        }),
      )
      this.dialog = false
    },
  },
}
</script>

<template>
  <v-app class="app-bg">
    <TheHeader @add="dialog = true" />

    <v-main class="fill-height">
      <v-container class="fill-height pa-4">
        <v-row class="fill-height ma-0">
          <v-col cols="3" class="d-flex flex-column">
            <FilterPanel />
          </v-col>

          <v-col cols="9" class="overflow-y-auto">
            <v-row>
              <v-col v-for="clinic in list" :key="clinic.id" cols="12">
                <ClinicCard :clinic="clinic" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-dialog v-model="dialog" max-width="560">
      <ClinicForm @close="dialog = false" @submit="addClinic" />
    </v-dialog>
  </v-app>
</template>

<style scoped>
.app-bg {
  background: #f4f0ff;
}
</style>
