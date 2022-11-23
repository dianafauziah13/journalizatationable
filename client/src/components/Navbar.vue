<template>
  <v-app-bar color="#F999B7" app dark flat >
    <v-icon color="black">fas fa-long-arrow-alt-left</v-icon>
      <h4 class="black--text ml-3">Journalizetationable</h4> 
    
    <v-spacer></v-spacer>

      <h4 class="black--text text--lighten-2">History</h4>
    

    <v-icon x-small color="#2784FF" class="ml-2 mr-2">fas fa-caret-down</v-icon>
    <router-link 
    to ="/story"
    tag="v-btn"
    >
      <v-btn color="#C0325F" class="withoutupercase">
          <v-icon left>fas fa-plus</v-icon>
          New Journal
      </v-btn>
    </router-link>

<v-badge dot overlap color="green" class="ml-3 mr-2" dark>
    <v-avatar tile color="#E5F1FF">
         <v-icon color="#2784FF">fas fa-bell</v-icon>
    </v-avatar>
     
    </v-badge>

     <v-avatar tile color="#E5F1FF">
        <v-img src="" />
    </v-avatar>

    

   
    
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style>
.v-btn.withoutupercase {
  text-transform: none !important;
}</style>