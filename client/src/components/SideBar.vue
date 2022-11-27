<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#FEE3EC"
    mini-variant
    mini-variant-width="80"
  >
    <v-avatar class="d-block text-center mx-auto mt-4 mb-16" size="40">
      <v-icon color="#C0325F" x-large>mdi-artstation</v-icon>
    </v-avatar>

    <v-list flat class="mt-16">
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
    </v-list>
    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <v-icon large class="mb-5" color="#C0325F">mdi-cog</v-icon>

      <br />
      <router-link to="/signup"><v-icon color="white">-mdi-information-circle</v-icon></router-link>
    </div>
  </v-navigation-drawer>
</template>

<script>


export default {
  
  data: () => ({
    selectedItem: 3,
    drawer: null,
    items: [
      { icon: "mdi-home-outline" },
      { icon: "mdi-book-outline" },
      { icon: "mdi-comment-quote-outline" },
      { icon: "mdi-help-circle-outline" },
      { icon: "mdi-information-outline"},
    ],
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
</style>