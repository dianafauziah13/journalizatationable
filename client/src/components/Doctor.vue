<template>
   <v-card color="white" class="rounded-lg mt-2" flat>
            <v-row justify="center" class="pt-3">
              <v-date-picker
                v-model="picker"
                color="#C0325F"
                header-color="#C0325F"
                min="2022-11-01"
                show-adjacent-months
              ></v-date-picker>
              <p>{{picker}}</p>
            </v-row>

            <v-toolbar color="transparent" flat class="mt-3">
              <h4 class="black--text">Recent Journals</h4>
              <v-spacer></v-spacer>
              <v-avatar >
                <v-icon color="black">mdi-chevron-up</v-icon>
              </v-avatar>
            </v-toolbar>
            <v-list class="mt-n6" color="transparent" dense>
              <v-list-item v-for="chat in chats" :key="chat.title">
                <v-list-item-avatar tile>
                  <v-img :src="chat.img" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="chat.title"
                    class="black--text"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="chat.subtitle"
                    class="black--text"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
</template>

<script>
export default {
data: () => ({
    return:{
      picker: new Date()
    },
    chats: [
      {
        img: "p1.png",
        subtitle: "Cerita keseharianku",
        title: "DiaryKu",
      },
      {
        img: "p1.png",
        subtitle: "Cerita Cintaku",
        title: "My Love Story",
      },
    ],
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
   
})
}
</script>

<style>

</style>