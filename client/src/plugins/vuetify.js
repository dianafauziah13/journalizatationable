import Vue from 'vue';
// import Vuetify from 'vuetify';
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const opts = {
    theme: {
      themes: {
        light: {
          //
        },
      },
    },
    icons: {
      iconfont: 'mdi',
    },
  };
  
  export default new Vuetify(opts);

// export default new Vuetify({
// });
