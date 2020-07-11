import Vue from "vue";
import Vuesax from "vuesax";
import * as firebase from "firebase";
// import { auth } from 'firebase/app';
import "vuesax/dist/vuesax.css";
import VueAxios from "vue-axios";
import axios from "axios";
import "material-icons/iconfont/material-icons.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let app = '';

const firebaseConfig = {
  apiKey: "AIzaSyCilWLvnK_Yf_9sYEDNLbxppTAXfPz6K_U",
  authDomain: "linkedin-copy-28fd0.firebaseapp.com",
  databaseURL: "https://linkedin-copy-28fd0.firebaseio.com",
  projectId: "linkedin-copy-28fd0",
  storageBucket: "linkedin-copy-28fd0.appspot.com",
  messagingSenderId: "365531468018",
  appId: "1:365531468018:web:349b676737468c423d806b",
};

firebase.initializeApp(firebaseConfig);

Vue.use(Vuesax, VueAxios, axios);
Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
