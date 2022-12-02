<template>
  <v-app>
    <v-app-bar color="#F999B7" app dark flat >
    <router-link 
    to ="/"
    tag="v-icon"
    >
      <!-- <v-icon color="black">mdi-arrow-left-thick</v-icon> -->
    </router-link>
        <h4 class="fontsig black--text ml-3 mb-3 mt-3">Journalizeritationable</h4> 
    
    <!-- <v-spacer></v-spacer>
    <v-badge dot overlap color="green" class="ml-1 mr-3" dark>
      <v-avatar>
         <v-icon color="#C0325F" large>mdi-bell</v-icon>
      </v-avatar>     
    </v-badge> -->

    <!-- <v-avatar>
      <v-btn icon to="/profile"><v-icon color="#C0325F" large>mdi-account-circle-outline</v-icon></v-btn>
    </v-avatar> -->
  </v-app-bar>
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
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Poppins&family=Signika:wght@600&display=swap');

.fontsig{
  font-family: 'Signika', sans-serif;

}
</style>
