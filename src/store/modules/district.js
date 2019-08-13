import axios from "axios";
const BASE_URL = "http://localhost:3000";

export default {
  state: {
    districts: []
  },
  mutations: {
    SET_DISTRICTS(state, districts) {
      state.districts = districts;
    }
  },
  actions: {
    async fetchDistricts({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/districts`);
        commit("SET_DISTRICTS", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async createDistrict({ dispatch }, district) {
      try {
        await axios.post(`${BASE_URL}/districts/`, district);
        dispatch("fetchDistricts");
      } catch (err) {
        console.log(err);
      }
    },
    async updateDistrict({ dispatch }, district) {
      try {
        await axios.put(`${BASE_URL}/districts/${district._id}`, district);
        dispatch("fetchDistricts");
      } catch (err) {
        console.log(err);
      }
    },
    async deleteDistrict({ dispatch }, district) {
      try {
        await axios.delete(`${BASE_URL}/districts/${district._id}`);
        dispatch("fetchDistricts");
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    getDistricts: state => {
      return state.districts;
    }
  }
};
