import axios from "axios";
const BASE_URL = "http://localhost:3000";

export default {
  state: {
    candidates: []
  },
  mutations: {
    SET_CANDIDATES(state, candidates) {
      state.candidates = candidates;
    }
  },
  actions: {
    async fetchCandidates({ commit }) {
      const response = await axios.get(`${BASE_URL}/candidates`);
      try {
        commit("SET_CANDIDATES", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async createCandidate({ dispatch }, candidate) {
      try {
        await axios.post(`${BASE_URL}/candidates/`, candidate);
        dispatch("fetchCandidates");
      } catch (err) {
        console.log(err);
      }
    },
    async updateCandidate({ dispatch }, candidate) {
      try {
        await axios.put(`${BASE_URL}/candidates/${candidate._id}`, candidate);
        dispatch("fetchCandidates");
      } catch (err) {
        console.log(err);
      }
    },
    async deleteCandidate({ dispatch }, candidate) {
      try {
        await axios.delete(`${BASE_URL}/candidates/${candidate._id}`);
        dispatch("fetchCandidates");
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    getCandidates: state => {
      return state.candidates;
    }
  }
};
