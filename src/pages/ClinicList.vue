<script>
import ClinicCard from '@/components/clinic/ClinicCard.vue'
import ClinicFilterPanel from '@/components/clinic/ClinicFilterPanel.vue'
import ClinicDetails from '@/pages/ClinicDetails.vue'
import ClinicSubmitterModal from '@/components/clinic/ClinicSubmitterModal.vue'

export default {
  components: {
    ClinicCard,
    ClinicFilterPanel,
    ClinicDetails,
    ClinicSubmitterModal,
  },

  props: ['isModalOpen'],

  emits: ['update:isModalOpen'],

  data() {
    return {
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

      this.$emit('update:isModalOpen', false)
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
            <ClinicCard :clinic="clinic" @add-comment="addComment" />
          </v-col>
        </v-row>

        <ClinicDetails v-if="false" />
      </v-col>
    </v-row>

    <ClinicSubmitterModal
      :model-value="isModalOpen"
      @update:model-value="$emit('update:isModalOpen', $event)"
      @submit="addClinic"
    />
  </div>
</template>
