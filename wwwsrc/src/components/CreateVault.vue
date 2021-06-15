<template>
  <div class="create-vault">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-info"
      data-toggle="modal"
      data-target="#exampleModal"
    >Create New Vault</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <form @submit.prevent="createVault">
              <input type="text" name="name" placeholder="Name..." v-model="newVault.name" required />
              <input
                type="text"
                name="description"
                placeholder="Description..."
                v-model="newVault.Description"
                required
              />
              <br />
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateVault",
  data() {
    return {
      newVault: {
        title: "",
        descripton: ""
      }
    };
  },
  methods: {
    createVault() {
      this.$store.dispatch("createVault", this.newVault);
      this.newKeep = { title: "", description: "" };
      this.form = false;
    }
  }
};
</script>

<style></style>