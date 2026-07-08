<script>
export default {
  props: ['clinics'],

  data() {
    return {}
  },

  methods: {
    goBack() {
      this.$router.push('/')
    },
  },

  created() {
    console.log('>>', this.clinics)
    console.log('>>', this.clinics[0])
  },

  computed: {
    clinic() {
      // console.log('>', this.clinics)
      // return this.clinics[0]
      return this.clinics.find(c => c.id === +this.$route.params.id)
    },

    contacts() {
      return [
        {
          icon: 'mdi-phone-outline',
          label: 'Телефон',
          value: this.clinic.phone,
        },
        { icon: 'mdi-email-outline', label: 'Email', value: this.clinic.email },
        { icon: 'mdi-web', label: 'Вебсайт', value: this.clinic.website },
        { icon: 'mdi-city', label: 'Місто', value: this.clinic.city },
        {
          icon: 'mdi-map-marker-outline',
          label: 'Адреса',
          value: this.clinic.address,
        },
      ].filter(contact => !!contact.value)
    },
  },
}
</script>

<template>
  <v-container class="py-4">
    <v-btn
      variant="text"
      color="indigo"
      prepend-icon="mdi-arrow-left"
      class="mb-3"
      @click="goBack"
    >
      Назад
    </v-btn>

    <v-card rounded="xl" border elevation="0" class="pa-2">
      <v-card-item>
        <template #prepend>
          <v-avatar color="indigo-lighten-5" size="56">
            <v-icon color="indigo" size="28">mdi-paw</v-icon>
          </v-avatar>
        </template>

        <v-card-title class="text-h6 font-weight-bold">
          {{ clinic.title }}
        </v-card-title>

        <!-- <h1>{{ clinics }}</h1> -->
        <!-- <h1>{{ $route.params.id }}</h1> -->

        <v-card-subtitle class="d-flex flex-wrap ga-1 mt-1">
          <v-chip
            v-for="kind in clinic.animalsKinds"
            :key="kind"
            size="x-small"
            color="indigo"
            variant="tonal"
          >
            {{ kind }}
          </v-chip>
        </v-card-subtitle>

        <template #append>
          <div class="d-flex align-center ga-1">
            <v-rating
              :model-value="Number(clinic.rank)"
              :length="5"
              density="compact"
              size="small"
              readonly
              half-increments
              class="rating-red"
            />
            <span class="text-body-2 font-weight-medium">
              {{ clinic.rank }}
            </span>
          </div>
        </template>
      </v-card-item>

      <v-divider class="my-2" />

      <v-card-text>
        <p class="text-subtitle-2 font-weight-bold mb-1">Опис</p>
        <p class="text-body-2 text-medium-emphasis mb-4">
          {{ clinic.description }}
        </p>

        <p class="text-subtitle-2 font-weight-bold mb-2">Контакти</p>
        <v-row density="comfortable">
          <v-col
            v-for="contact in contacts"
            :key="contact.label"
            cols="12"
            sm="6"
          >
            <div class="d-flex align-center ga-2 text-body-2">
              <v-icon size="18" color="indigo-lighten-2">
                {{ contact.icon }}
              </v-icon>
              <span class="text-medium-emphasis">{{ contact.label }}:</span>
              <span>{{ contact.value }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider class="my-2" />

      <v-card-text>
        <p class="text-subtitle-2 font-weight-bold mb-2">
          <v-icon size="16">mdi-comment-outline</v-icon>
          Коментарі ({{ clinic.comments.length }})
        </p>

        <div
          v-for="comment in clinic.comments"
          :key="comment.id"
          class="comment-item pa-2 rounded-lg mb-2 d-flex align-center justify-space-between ga-2"
        >
          <div class="d-flex align-center ga-2">
            <v-avatar size="28" color="indigo-lighten-4">
              <v-icon size="16" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <div>
              <p class="text-body-2 font-weight-medium ma-0">
                {{ comment.author }}
              </p>
              <p class="text-caption text-medium-emphasis ma-0">
                {{ comment.text }}
              </p>
            </div>
          </div>

          <v-rating
            :model-value="comment.rank"
            :length="5"
            density="compact"
            size="x-small"
            readonly
            class="rating-red flex-shrink-0"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.comment-item {
  background: #e8eaf6;
}

.rating-red :deep(.v-icon) {
  color: #e53935 !important;
  opacity: 1 !important;
}
</style>
