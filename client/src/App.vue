<template>
  <v-app>
    <v-app-bar color="#F999B7" app dark flat >
    <v-icon color="black">mdi-arrow-left-thick</v-icon>
      <h4 class="black--text ml-3 mb-3 mt-3">Journalizetationable</h4> 
    
    <v-spacer></v-spacer>

      <h4 class="black--text text--lighten-2 mt-3 mb-3">History</h4>
    

    <v-icon x-large color="#FEE3EC" class="ml-2 mr-2">mdi-menu-down</v-icon>
    <router-link 
    to ="/story"
    tag="v-btn"
    >
      <v-btn color="#C0325F" class="withoutupercase">
          <v-icon left>mdi-plus</v-icon>
          New Journal
      </v-btn>
    </router-link>

<v-badge dot overlap color="green" class="ml-3 mr-2" dark>
    <v-avatar>
         <v-icon color="#C0325F" large>mdi-bell</v-icon>
    </v-avatar>
     
    </v-badge>

    <v-avatar>
         <v-icon color="#C0325F" large>mdi-account-circle-outline</v-icon>
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
