import axios from "axios";
const BASE_URL = "http://localhost:3000";

export default {
  state: {
    elections: []
  },
  mutations: {
    SET_ELECTIONS(state, elections) {
      state.elections = elections;
    }
  },
  actions: {
    async fetchElections({ commit }) {
      const response = await axios.get(BASE_URL + "/elections");
      try {
        commit("SET_ELECTIONS", response.data);
      } catch (err) {
        console.log(err);
      }
      // commit("AUTH_LOGIN", payload);
    }
  },
  getters: {
    getElections: state => {
      return state.elections;
    }
  }
};
