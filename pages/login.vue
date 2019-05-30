<template>
      <div>
      <h1>Login</h1>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nombre de usuario"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Contraseña"
        required
      ></v-text-field>
      <v-btn
        color="error"
        @click="reset"
      >
        Login
      </v-btn>
    </v-form>
      </div>
</template>

<script>
export default {
  layout: 'landing'
}
</script>
