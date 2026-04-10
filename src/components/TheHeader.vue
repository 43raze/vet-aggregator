<script>
export default {
  data() {
    return {
      rules: [
        value => {
          if (value) return true
          return 'You must enter a first name.'
        },
      ],
    }
  },
}
</script>

<template>
  <v-app-bar flat color="white" border="b" height="68">
    <v-container class="d-flex align-center ga-4 px-4">
      <div class="d-flex align-center ga-2">
        <v-avatar color="deep-purple" size="38">
          <v-icon color="white" size="20">mdi-paw</v-icon>
        </v-avatar>
        <span class="text-h6 font-weight-bold text-deep-purple-darken-2"
          >ВетАгрегатор</span
        >
      </div>

      <v-form class="flex-grow-1 search-form">
        <div class="search-box">
          <v-text-field
            placeholder="Пошук оголошень..."
            variant="outlined"
            density="compact"
            hide-details
            rounded="lg"
            bg-color="deep-purple-lighten-5"
            class="search-input"
          />
          <v-btn
            class="search-btn"
            type="submit"
            icon="mdi-magnify"
            variant="plain"
            :ripple="false"
            color="deep-purple"
          />
        </div>
      </v-form>

      <v-spacer />
      <v-btn
        color="deep-purple"
        variant="tonal"
        rounded="lg"
        prepend-icon="mdi-plus"
      >
        Додати
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.search-form {
  max-width: 500px;
}
.search-box {
  position: relative;
}
.search-btn {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
