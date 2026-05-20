<script>
// ClinicModalForm

export default {
  emits: ['close', 'submit'],

  data() {
    return {
      kindList: ['Собака', 'Кіт', 'Папуга', 'Кролик'],
      newClinic: {},
      form: {
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
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.form })
    },
    validateClinic() {
      //
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

    <v-card-text class="d-flex flex-column ga-3">
      <v-text-field
        label="Назва клініки"
        prepend-inner-icon="mdi-hospital-building"
        variant="outlined"
        density="compact"
        :model-value="form.title"
        @update:model-value="form.title = $event"
      />

      <v-textarea
        label="Опис"
        prepend-inner-icon="mdi-text"
        variant="outlined"
        density="compact"
        rows="3"
        auto-grow
        :model-value="form.description"
        @update:model-value="form.description = $event"
      />

      <v-text-field
        label="Телефон"
        prepend-inner-icon="mdi-phone-outline"
        variant="outlined"
        density="compact"
        :model-value="form.phone"
        @update:model-value="form.phone = $event"
      />

      <v-text-field
        :rules="rules"
        aria-autocomplete="none"
        hint="Enter your Email to access this website"
        label="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        density="compact"
        :model-value="form.email"
        @update:model-value="form.email = $event"
      />

      <v-text-field
        label="Адреса"
        prepend-inner-icon="mdi-map-marker-outline"
        variant="outlined"
        density="compact"
        :model-value="form.address"
        @update:model-value="form.address = $event"
      />

      <v-text-field
        label="Вебсайт"
        prepend-inner-icon="mdi-web"
        variant="outlined"
        density="compact"
        :model-value="form.website"
        @update:model-value="form.website = $event"
      />

      <div class="d-flex ga-3">
        <v-text-field
          label="Місто"
          prepend-inner-icon="mdi-city"
          variant="outlined"
          density="compact"
          :model-value="form.city"
          @update:model-value="form.city = $event"
        />
        <v-text-field
          label="Район"
          variant="outlined"
          density="compact"
          :model-value="form.district"
          @update:model-value="form.district = $event"
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
            :model-value="form.animals.includes(kind)"
            @update:model-value="
              $event
                ? form.animals.push(kind)
                : form.animals.splice(form.animals.indexOf(kind), 1)
            "
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
      <v-btn variant="flat" color="indigo" @click="handleSubmit">Додати</v-btn>
    </v-card-actions>
  </v-card>
</template>
