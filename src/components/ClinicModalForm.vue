<script>
export default {
  emits: ['close', 'submit'],

  data() {
    return {
      kindList: ['Собака', 'Кіт', 'Папуга', 'Кролик'],

      newClinic: {
        title: '',
        description: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        district: '',
        animals: [],
        website: '',
      },

      rules: [
        value => !!value || "Поле обов'язкове.",
        value => (value && value.length >= 3) || 'Мінімум 3 символи',
      ],
    }
  },

  methods: {
    handleSubmit() {
      if (!this.validateClinic()) return
      this.$emit('submit', { ...this.newClinic })
    },

    validateClinic() {
      const { title, description, phone, email, address, city } = this.newClinic
      return (
        !!title && !!description && !!phone && !!email && !!address && !!city
      )
    },
  },
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

    <v-form ref="form">
      <v-card-text class="d-flex flex-column ga-3">
        <v-text-field
          v-model="newClinic.title"
          label="Назва клініки"
          prepend-inner-icon="mdi-hospital-building"
          variant="outlined"
          density="compact"
          :rules="rules"
        />

        <v-textarea
          v-model="newClinic.description"
          label="Опис"
          prepend-inner-icon="mdi-text"
          variant="outlined"
          density="compact"
          rows="3"
          auto-grow
          :rules="rules"
        />

        <v-text-field
          v-model="newClinic.phone"
          label="Телефон"
          prepend-inner-icon="mdi-phone-outline"
          variant="outlined"
          density="compact"
          :rules="rules"
        />

        <v-text-field
          v-model="newClinic.email"
          label="Email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          density="compact"
          :rules="rules"
        />

        <v-text-field
          v-model="newClinic.address"
          label="Адреса"
          prepend-inner-icon="mdi-map-marker-outline"
          variant="outlined"
          density="compact"
          :rules="rules"
        />

        <v-text-field
          v-model="newClinic.website"
          label="Вебсайт"
          prepend-inner-icon="mdi-web"
          variant="outlined"
          density="compact"
        />

        <div class="d-flex ga-3">
          <v-text-field
            v-model="newClinic.city"
            label="Місто"
            prepend-inner-icon="mdi-city"
            variant="outlined"
            density="compact"
            :rules="rules"
          />
          <v-text-field
            v-model="newClinic.district"
            label="Район"
            variant="outlined"
            density="compact"
          />
        </div>

        <div>
          <p class="text-caption text-medium-emphasis mb-1">Тварини</p>
          <div class="d-flex flex-wrap ga-2">
            <v-checkbox
              v-for="kind in kindList"
              :key="kind"
              :label="kind"
              density="compact"
              hide-details
              :model-value="newClinic.animals.includes(kind)"
              @update:model-value="
                $event
                  ? newClinic.animals.push(kind)
                  : newClinic.animals.splice(newClinic.animals.indexOf(kind), 1)
              "
            />
          </div>
        </div>
      </v-card-text>
    </v-form>

    <v-divider />

    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn variant="text" color="medium-emphasis" @click="$emit('close')">
        Скасувати
      </v-btn>
      <v-btn variant="flat" color="indigo" @click="handleSubmit">Додати</v-btn>
    </v-card-actions>
  </v-card>
</template>
