import axios from "axios";
const BASE_URL = "http://localhost:3000";

export default {
  state: {
    voter: []
  },
  mutations: {
    SET_VOTER(state, voter) {
      state.voter = voter;
    }
  },
  actions: {
    async fetchVoter({ commit }) {
      const response = await axios.get(`${BASE_URL}/registration`);
      try {
        commit("SET_VOTER", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async postVoter({ dispatch }) {
      try {
        const crendentials = await axios.post(`${BASE_URL}/registration`);
        dispatch("fetchVoter");
        return crendentials.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteVoter({ dispatch }, voter) {
      try {
        await axios.delete(`${BASE_URL}/registration/${voter._id}`);
        dispatch("fetchVoter");
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    getVoter: state => {
      return state.voter;
    }
  }
};
