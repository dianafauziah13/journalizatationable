<template>
  <v-card color="white" class="rounded-lg mt-2" flat>
           <!-- <v-row justify="center" class="pt-2">
             <v-date-picker
               v-model="picker"
               color="#2784FF"
               width="260"
             ></v-date-picker>
           </v-row> -->

           <v-toolbar color="transparent" flat class="mt-3">
             <h4 class="black--text mr-3">Recent Journals</h4>
             <v-avatar>
               <v-icon class="mb-2" color="black">mdi-chevron-up</v-icon>
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
                   class="grey--text"
                 ></v-list-item-subtitle>
               </v-list-item-content>
             </v-list-item>
           </v-list>
         </v-card>
</template>

<script>
export default {
data: () => ({
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
   // picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
   //   .toISOString()
   //   .substr(0, 10),
  
})
}
</script>

<style>

</style>