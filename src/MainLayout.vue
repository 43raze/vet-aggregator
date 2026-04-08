<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: '',
          description: '',
          rank: '',
          phone: '',
          email: '',
          website: '',
          comments: [],
          photos: [],
          animal: '',
          hotelDays: 0,
        },
      ],
      firstName: '',
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
  <v-row class="border">
    <v-col cols="3" class="border">logo</v-col>
    <v-col cols="9" class="border">
      <v-sheet class="mx-auto" width="300">
        <v-form @submit.prevent>
          <v-row>
            <v-col cols="11" class="search-box">
              <v-text-field
                v-model="firstName"
                :rules="rules"
                label="First name"
                class="search-input"
              ></v-text-field>
              <v-btn
                class="search-btn"
                type="submit"
                icon="mdi-magnify"
                variant="plain"
                :ripple="false"
              ></v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </v-col>
    <v-col cols="3" class="border"> </v-col>
    <v-col cols="9" class="border">
      <ul>
        <li></li>
      </ul>
      <v-btn prepend-icon="$vuetify" variant="tonal"> Button </v-btn>
      <v-card color="deep-purple" variant="elevated" class="mx-auto">
        <v-card-item>
          <div>
            <div class="text-label-medium text-uppercase mt-2 mb-3">
              variant
            </div>
            <div class="text-title-large mb-1">Headline</div>
            <div class="text-body-small">
              Greyhound divisely hello coldly fonwderfully
            </div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn> Button </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" class="border">foo</v-col>
  </v-row>
</template>

<style>
.search-box {
  position: relative;
}
.search-btn {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
