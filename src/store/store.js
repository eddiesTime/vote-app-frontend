import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/store/modules/auth.js";
import Admin from "@/store/modules/admin.js";
import Election from "@/store/modules/election.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Admin,
    Election
  }
});
