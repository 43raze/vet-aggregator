<script>
export default {
  emits: ['close'],
}
</script>

<template>
  <v-card rounded="xl" border elevation="0" max-width="560">
    <v-card-item>
      <template #prepend>
        <v-avatar color="indigo-lighten-5" size="40">
          <v-icon color="indigo" size="20">mdi-plus</v-icon>
        </v-avatar>
      </template>

      <v-card-title class="text-body-1 font-weight-bold">
        Додати клініку
      </v-card-title>
    </v-card-item>

    <v-card-text class="d-flex flex-column ga-3">
      <v-text-field
        label="Назва клініки"
        prepend-inner-icon="mdi-hospital-building"
        variant="outlined"
        density="compact"
      />

      <v-textarea
        label="Опис"
        prepend-inner-icon="mdi-text"
        variant="outlined"
        density="compact"
        rows="3"
        auto-grow
      />

      <v-text-field
        label="Телефон"
        prepend-inner-icon="mdi-phone-outline"
        variant="outlined"
        density="compact"
      />

      <v-text-field
        label="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        density="compact"
      />

      <v-text-field
        label="Адреса"
        prepend-inner-icon="mdi-map-marker-outline"
        variant="outlined"
        density="compact"
      />

      <div class="d-flex ga-3">
        <v-text-field
          label="Місто"
          prepend-inner-icon="mdi-city"
          variant="outlined"
          density="compact"
        />
        <v-text-field label="Район" variant="outlined" density="compact" />
      </div>

      <div>
        <p class="text-caption text-medium-emphasis mb-1">Тварини</p>
        <div class="d-flex flex-wrap ga-2">
          <v-checkbox
            v-for="kind in ['Собака', 'Кіт', 'Папуга', 'Кролик']"
            :key="kind"
            :label="kind"
            density="compact"
            hide-details
          />
        </div>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn variant="text" color="medium-emphasis" @click="$emit('close')">
        Скасувати
      </v-btn>
      <v-btn variant="flat" color="indigo">Додати</v-btn>
    </v-card-actions>
  </v-card>
</template>
