<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import FilterPanel from './components/FilterPanel.vue'
import ClinicCard from './components/ClinicCard.vue'
import ClinicModalForm from './components/ClinicModalForm.vue'
import ClinicDetails from './views/ClinicDetails.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    FilterPanel,
    ClinicCard,
    ClinicModalForm,
    ClinicDetails,
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
      this.clinics.push({
        id: Math.trunc(Math.random() * 10000),
        rank: 0,
        photos: [],
        comments: [],
        overstayDays: 0,
        title: clinicDto.title,
        description: clinicDto.description,
        phone: clinicDto.phone,
        email: clinicDto.email,
        address: clinicDto.address,
        city: clinicDto.city,
        district: clinicDto.district,
        animalsKinds: clinicDto.animals,
        website: clinicDto.website,
      })

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

    <v-navigation-drawer
      v-model="isFilterOpen"
      temporary
      location="start"
      width="300"
    >
      <div class="pa-4 d-flex flex-column fill-height">
        <div class="d-flex align-center justify-space-between mb-3">
          <span class="text-subtitle-1 font-weight-bold text-indigo-darken-2">
            Фільтри
          </span>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="small"
            color="medium-emphasis"
            @click="isFilterOpen = false"
          />
        </div>

        <FilterPanel />
      </div>
    </v-navigation-drawer>

    <v-main class="app-main">
      <v-container class="pa-3 pa-sm-4">
        <div class="d-flex d-md-none mb-3">
          <v-btn
            variant="tonal"
            color="indigo"
            prepend-icon="mdi-filter-outline"
            rounded="lg"
            @click="isFilterOpen = true"
          >
            Фільтри
          </v-btn>
        </div>

        <v-row class="ma-0">
          <v-col cols="12" md="4" class="d-none d-md-flex flex-column pa-2">
            <FilterPanel />
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
