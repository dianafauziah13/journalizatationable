<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#FEE3EC"
    mini-variant
    mini-variant-width="80"
  >
    <v-avatar class="d-block text-center mx-auto mt-4 mb-16" color="" size="40">
      <v-icon color="white" x-large>fab fa-artstation</v-icon>
    </v-avatar>

    <!-- <v-list flat class="mt-16">
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          active-class="border"
         
          :ripple="false"
        >
          <v-list-item-icon>
            <v-icon
              v-text="item.icon"
              color="white"
            ></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
    <v-btn icon class="home" ><v-icon large color="#C0325F">mdi-home-outline</v-icon></v-btn>
    <v-btn icon class="book" ><v-icon large color="#C0325F">mdi-book-outline</v-icon></v-btn>
    <v-btn icon class="information" ><v-icon large color="#C0325F">mdi-information-outline</v-icon></v-btn>
    <v-btn icon class="cog" to="/signup"><v-icon large color="#C0325F">mdi-cog</v-icon></v-btn>
    <!-- <router-link to="/signup"><v-icon class="information" color="white">-mdi-information-circle</v-icon></router-link> -->
  </v-navigation-drawer>
</template>

<script>


export default {
  
  data: () => ({
    selectedItem: 3,
    drawer: null,
  }),
};
</script>
<style>
.border {
  margin-left: 12px;
  margin-right: 12px;
  background: #529DFF;
  border-radius: 50%;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.home{
  position: absolute;
  top: 200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.cog{
  display: flex;
  position: absolute;
  bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.book{
  position: absolute;
  top: 290px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.information{
  position: absolute;
  top: 380px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>