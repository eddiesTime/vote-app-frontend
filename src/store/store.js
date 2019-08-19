import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/store/modules/auth.js";
import Admin from "@/store/modules/admin.js";
import Election from "@/store/modules/election.js";
import District from "@/store/modules/district.js";
import Candidate from "@/store/modules/candidate.js";
import Voter from "@/store/modules/voter.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Admin,
    Auth,
    Candidate,
    District,
    Election,
    Voter
  }
});
