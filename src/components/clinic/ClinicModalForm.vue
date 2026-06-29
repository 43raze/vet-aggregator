<script>
export default {
  props: ['modelValue'],

  emits: ['close', 'submit', 'update:modelValue'],

  data() {
    return {
      kindList: ['Собака', 'Кіт', 'Інші'],

      newClinic: {
        title: '',
        description: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        animalsKinds: [],
      },

      rules: [
        value => !!value || "Поле обов'язкове.",
        value => (value && value.length >= 3) || 'Мінімум 3 символи',
      ],
    }
  },

  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate()
      if (!valid) return

      this.$emit('submit', { ...this.newClinic })
    },
  },

  unmounted() {
    localStorage.setItem('newClinic', JSON.stringify(this.newClinic))
  },

  mounted() {
    const newClinic = localStorage.getItem('newClinic')
    if (newClinic && newClinic !== '[object Object]') {
      this.newClinic = JSON.parse(newClinic)
    }
  },
}
</script>

<!-- ClinicSubmitterModal -->
<template>
  <v-dialog
    :model-value
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="560"
  >
    <v-card
      rounded="xl"
      border
      elevation="0"
      max-width="560"
      class="modal-card"
    >
      <v-card-item class="py-3">
        <v-card-title class="text-body-1 font-weight-bold">
          Додати клініку
        </v-card-title>

        <template #append>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="small"
            color="medium-emphasis"
            @click="$emit('update:modelValue', false)"
          />
        </template>
      </v-card-item>

      <v-form ref="form">
        <v-card-text class="d-flex flex-column ga-2 py-2">
          <v-text-field
            v-model="newClinic.title"
            label="Назва клініки"
            prepend-inner-icon="mdi-hospital-building"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :rules="rules"
          />

          <v-textarea
            v-model="newClinic.description"
            label="Опис"
            prepend-inner-icon="mdi-text"
            variant="outlined"
            density="compact"
            rows="2"
            hide-details="auto"
            :rules="rules"
          />

          <v-text-field
            v-model="newClinic.phone"
            label="Телефон"
            prepend-inner-icon="mdi-phone-outline"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :rules="rules"
          />

          <v-text-field
            v-model="newClinic.email"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :rules="rules"
          />

          <v-text-field
            v-model="newClinic.city"
            label="Місто"
            prepend-inner-icon="mdi-city"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :rules="rules"
          />

          <v-text-field
            v-model="newClinic.address"
            label="Адреса"
            prepend-inner-icon="mdi-map-marker-outline"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :rules="rules"
          />

          <div>
            <p class="text-caption text-medium-emphasis ma-0">Тварини</p>
            <div class="d-flex flex-wrap ga-2">
              <v-checkbox
                v-for="kind in kindList"
                :key="kind"
                :label="kind"
                density="compact"
                hide-details
                :model-value="newClinic.animalsKinds.includes(kind)"
                @update:model-value="
                  $event
                    ? newClinic.animalsKinds.push(kind)
                    : newClinic.animalsKinds.splice(
                        newClinic.animalsKinds.indexOf(kind),
                        1,
                      )
                "
              />
            </div>
          </div>
        </v-card-text>
      </v-form>

      <v-divider />

      <v-card-actions class="pa-3">
        <v-btn
          icon="mdi-plus"
          variant="flat"
          color="indigo-lighten-5"
          size="40"
          @click="handleSubmit"
        >
          <v-icon color="indigo" size="24">mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.modal-card {
  overflow: hidden;
}
</style>
