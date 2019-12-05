<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" style="width:450px">
        <span>Vuetify</span>
        <span class="font-weight-light"> GENERIC TABLE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs>
        <v-tab :to="'/example'">Generic Example I</v-tab>
        <v-tab :to="'/example2'">Generic Example II</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
});
</script>
