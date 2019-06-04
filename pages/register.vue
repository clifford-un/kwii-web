<template>
  <div>
    <h1>Registro</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      />
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      />
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      />
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      />
      <v-btn
        :disabled="!valid"
        color="success"
        @click="validate"
      >
        Validate
      </v-btn>
      <v-btn
        color="error"
        @click="reset"
      >
        Reset Form
      </v-btn>
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'landing'
}
</script>
