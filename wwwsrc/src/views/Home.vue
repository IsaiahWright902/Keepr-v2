<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row text-center" style="padding-top:2em;">
        <div class="col-12">
          <img src="../assets/keepr.png" style="max-width:100%; height:auto;" />
        </div>
      </div>
      <div class="row" style="padding-top:1em;">
        <div class="col-12">
          <button v-if="!keepForm" @click="keepForm = true" class="btn btn-outline-info">New Keep</button>
          <button v-else @click="keepForm = false" class="btn btn-danger">Cancel</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <create-keep v-if="keepForm" />
        </div>
      </div>
      <div class="row" style="padding-top:2em;">
        <keep v-for="keep in keeps" :key="keep.id" :keepData="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import keep from "../components/Keeps";
import CreateKeep from "../components/CreateKeep";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "home",

  async mounted() {
    this.$store.dispatch("getKeeps");
    await onAuth();
    this.$store.dispatch("setBearer", this.$auth.bearer);
    this.$store.dispatch("getVaults");
    this.$store.dispatch("getProfile");
  },

  data() {
    return {
      keepForm: false,
    };
  },
  computed: {
    keeps() {
      return this.$store.state.publicKeeps;
    },

    user() {
      return this.$store.state.user;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {
    keep,
    CreateKeep,
  },
};
</script>
