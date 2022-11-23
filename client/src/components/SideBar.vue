<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#FEE3EC"
    mini-variant
    mini-variant-width="80"
  >
    <v-avatar class="d-block text-center mx-auto mt-4 mb-16" color="" size="40">
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
      <v-icon class="mb-5" color="#C0325F">mdi-cog</v-icon>

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
      { icon: "mdi-home-circle" },
      { icon: "mdi-home-circle" },
      { icon: "mdi-home-circle" },
      { icon: "mdi-home-circle" },
      { icon: "mdi-home-circle" },
    ],
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
</style>