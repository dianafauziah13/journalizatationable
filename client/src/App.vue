<template>
  <v-app>
    <v-app-bar color="#F999B7" app dark flat >
    <router-link 
    to ="/"
    tag="v-icon"
    >
      <v-icon color="black">mdi-arrow-left-thick</v-icon>
    </router-link>
        <h4 class="black--text ml-3 mb-3 mt-3">Journalizeritationable</h4> 
    
    <v-spacer></v-spacer>

      <h4 class="black--text text--lighten-2 mt-3 mb-3">History</h4>
    

    <v-icon x-large color="#FEE3EC" class="ml-1">mdi-menu-down</v-icon>

<v-badge dot overlap color="green" class="ml-1 mr-3" dark>
    <v-avatar>
         <v-icon color="#C0325F" large>mdi-bell</v-icon>
    </v-avatar>     
</v-badge>

    <v-avatar>
         <v-icon class="mr-2" color="#C0325F" large>mdi-account-circle-outline</v-icon>
    </v-avatar>
  </v-app-bar>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <router-view/>
    </v-main>
    <center><p class="cp">Copyright @ 2022 J4 Interactive Studio. All right reserved</p></center>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
