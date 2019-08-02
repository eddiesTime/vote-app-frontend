<template>
  <div>
    <v-container grid-list-xl text-xs-center>
      <v-card pa-3>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="districtName"
            :counter="10"
            :rules="nameRules"
            label="District Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="city"
            :rules="emailRules"
            label="City"
            required
            pa-3
          ></v-text-field>

          <v-text-field
            v-model="Country"
            :rules="emailRules"
            label="Country"
            required
          ></v-text-field>

          <v-btn :disabled="!valid" color="success" @click="validate"
            >Create District</v-btn
          >

          <v-btn color="error" @click="reset">Clear</v-btn>
        </v-form>
      </v-card>
    </v-container>
    <v-divider></v-divider>
    <div class="listArea"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
