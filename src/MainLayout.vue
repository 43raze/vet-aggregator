<script>
import TheHeader from './components/TheHeader.vue'
import TheFilterPanel from './components/TheFilterPanel.vue'
import ClinicCard from './components/ClinicCard.vue'

export default {
  components: { TheHeader, TheFilterPanel, ClinicCard },
  data() {
    return {
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
            { author: 'Анна', text: 'Чудова клініка, дякую лікарям!' },
            { author: 'Максим', text: 'Швидко та професійно.' },
          ],
          photos: [],
          animal: 'Собака',
          hotelDays: 0,
        },
      ],
    }
  },
}
</script>

<template>
  <v-app class="app-bg">
    <TheHeader />

    <v-main class="fill-height">
      <v-container class="fill-height pa-4" fluid>
        <v-row class="fill-height ma-0">
          <v-col cols="3" class="d-flex flex-column">
            <TheFilterPanel />
          </v-col>

          <v-col cols="9" class="overflow-y-auto">
            <v-row>
              <v-col cols="12">
                <ClinicCard />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.app-bg {
  background: #f4f0ff;
}
</style>
