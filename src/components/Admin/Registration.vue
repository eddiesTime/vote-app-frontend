<template>
  <v-container>
    <!-- TOOLBAR -->
    <v-toolbar flat color="white">
      <v-toolbar-title>Voters</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <!-- DIALOG -->
      <v-dialog v-model="dialog" max-width="500px" persistent>
        <!-- DIALOG OPEN BTN -->
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            class="mb-2"
            v-on="on"
            @click="requestCredentials"
            >New Voter</v-btn
          >
        </template>

        <!-- CARD INSIDE DIALOG -->
        <v-card>
          <v-card-title>
            <span class="headline">New Voter Credentials</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap justify-center>
                <v-flex xs10>
                  <v-text-field
                    label="Username"
                    :value="newVoter.username"
                    readonly
                    outline
                  ></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-text-field
                    label="Password"
                    :value="newVoter.password"
                    readonly
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="close">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="allVoter"
      class="elevation-1"
      no-data-text="There are no voters registered yet..."
      no-results-text="No voters could be found..."
    >
      <template v-slot:items="props">
        <td>{{ props.item.username }}</td>
        <td>{{ props.item.hasVoted }}</td>
        <td>{{ props.item.changedPw }}</td>
        <td class="justify-center layout px-0">
          <v-icon small @click="deleteVoter(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Username", value: "username" },
        { text: "Has Voted", value: "hasVoted" },
        { text: "Changed Password", value: "changedPw" },
        { text: "Actions", value: "name", sortable: false }
      ],
      newVoter: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    allVoter() {
      return this.$store.getters.getVoter;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    getAllVoter() {
      this.$store.dispatch("fetchVoter");
    },
    async requestCredentials() {
      try {
        const credentials = await this.$store.dispatch("postVoter");
        this.newVoter.username = credentials.username;
        this.newVoter.password = credentials.password;
        this.dialog = true;
      } catch (err) {
        console.log(err);
      }
    },
    deleteVoter(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.$store.dispatch("deleteVoter", item);
    },
    close() {
      this.dialog = false;
      this.newVoter.username = "";
      this.newVoter.password = "";
    }
  },
  created() {
    this.getAllVoter();
  }
};
</script>

<style lang="scss" scoped></style>
