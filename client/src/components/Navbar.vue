<template>
  <v-app-bar color="#F999B7" app dark flat >

    <!-- <v-icon color="black">mdi-arrow-left-thick</v-icon> -->

      <h4 class="fontsig fw-bolder black--text ml-3 mb-3 mt-3">Journalizeritationable</h4> 
    
    <v-spacer></v-spacer>
<!-- 
      <h4 class="black--text text--lighten-2 mt-3 mb-3">History</h4>
    
    <v-icon x-large color="#FEE3EC" class="ml-2 mr-2">mdi-menu-down</v-icon> -->
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
    <v-avatar >
         <v-icon color="#C0325F" large>mdi-bell</v-icon>
    </v-avatar>
    </v-badge>
    <v-btn icon to="/profile"><v-icon color="#C0325F" large>mdi-account-circle-outline</v-icon></v-btn>
    

   
    
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@;500;600;700&display=swap');

.v-btn.withoutupercase {
  text-transform: none !important;
}
.fontsig{
  font-family: 'Signika', sans-serif;
}
</style>