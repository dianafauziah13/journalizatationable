<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item class="justify-center">
        <v-list-item-content>
          <i class="fas fa-user-circle fa-6x"></i>
          <v-list-item-title>
            Guess
          </v-list-item-title>
          <v-list-item-subtitle>
            Free Version
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-icon class="mr-5" @click="drawer = !drawer">fas fa-user-circle</v-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/' },
        { title: 'Add Post', icon: 'mdi-note-plus', link: '/add-post' },
        { title: 'About', icon: 'mdi-help-box', link: '/about' },
        { title: 'Edit Post', icon: 'mdi-help-box', link: '/edit-post' },
        { title: 'Login', icon: 'mdi-help-box', link: '/login' },
      ], 
    }),
  }
</script>