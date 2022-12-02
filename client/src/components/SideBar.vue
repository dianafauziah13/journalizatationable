<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#FEE3EC"
    mini-variant
    mini-variant-width="80"
  >
    <v-avatar class="d-block text-center mx-auto mt-4 mb-16" size="40">
      <v-img
        src="@/assets/j4.png"
      ></v-img>
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
              color="#C0325F"
              large
            ></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>

    </v-list> -->
    <router-link
    to ="/home"
    tag="v-btn"
    >
      <v-btn icon class="home" ><v-icon large color="#C0325F">mdi-home-outline</v-icon></v-btn>
    </router-link>
    <router-link
    to ="/all-story"
    tag="v-btn"
    >
      <v-btn icon class="book" ><v-icon large color="#C0325F">mdi-book-outline</v-icon></v-btn>
    </router-link>
    <v-btn icon class="information" to="/about"><v-icon large color="#C0325F">mdi-information-outline</v-icon></v-btn>
    <!-- <v-btn icon class="cog" to="/login"><v-icon large color="#C0325F">mdi-cog</v-icon></v-btn> -->
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
  /* margin-left: 5px;
  margin-right: 5px; */
  /* border-radius: 100%; */
  /* background: #F999B7; */
  background: white;
  /* border-radius: 0%;
  margin-left: 0px;
  margin-right: 0px; */
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