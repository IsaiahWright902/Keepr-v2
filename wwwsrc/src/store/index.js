
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: [],
    vaults: [],
    vaultKeeps: [],
    profile: []
  },
  mutations: {
    setPublicKeeps(state, keep) {
      state.publicKeeps = keep;
    },
    setVaults(state, vaults) {
      state.vaults = vaults;
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps
    },
    setProfile(state, profile) {
      state.profile = profile
    },
    addKeep(state, keep) {
      state.publicKeeps.push(keep);
    },
    addVault(state, vault) {
      state.vaults.push(vault)
    },


  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    // Get Methods
    async getKeeps({ commit, dispatch }) {
      let res = await api.get("keeps");
      commit("setPublicKeeps", res.data);

    },
    async getVaults({ commit, dispatch }) {
      let res = await api.get("vaults");
      commit("setVaults", res.data);
    },
    async getProfile({ commit, dispatch }) {
      let res = await api.get("profile");
      commit("setProfile", res.data);
    },
    // Get By Id Methods
    async getKeepsByVaultId({ commit, dispatch }, id) {
      let res = await api.get("vaults/" + id + "/keeps");
      commit("setVaultKeeps", res.data)
    },
    // Delete Methods
    async deleteKeep({ commit, dispatch }, id) {
      let res = await api.delete("keeps/" + id)
      dispatch("getKeeps")
    },
    async deleteVault({ commit, dispatch }, id) {
      let res = await api.delete("vaults/" + id)
      dispatch("getVaults")
    },
    // Create Methods
    async createKeep({ commit, dispatch }, newKeep) {
      let res = api.post("keeps", newKeep);
      commit("addKeep", newKeep);
    },
    async createVault({ commit, dispatch }, newVault) {
      let res = api.post("vaults", newVault);
      commit("addVault", newVault)
    },
    async addToVault({ commit, dispatch }, newVaultKeep) {
      let res = api.post("vaultKeeps", newVaultKeep);
      commit("setVaultKeeps", newVaultKeep)
    },
    async addToKeepCount({ commit, dispatch }, keepId) {

      let res = api.put("")
    },


  }
});