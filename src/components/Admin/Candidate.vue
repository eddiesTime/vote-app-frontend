<template>
  <v-container>
    <!-- TOOLBAR -->
    <v-toolbar flat color="white">
      <v-toolbar-title>Candidates</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <!-- DIALOG -->
      <v-dialog v-model="dialog" max-width="500px">
        <!-- DIALOG OPEN BTN -->
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Candidate</v-btn>
        </template>

        <!-- CARD INSIDE DIALOG -->
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap justify-center>
                <v-flex xs10>
                  <v-img
                    src="https://www.sickchirpse.com/wp-content/uploads/2016/09/Obama-.jpg"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs10>
                  <v-text-field label="Firstname" v-model="editedCandidate.firstname"></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-text-field label="Lastname" v-model="editedCandidate.lastname"></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <label for>Faction</label>
                  <!-- radiogroup -->
                  <v-radio-group v-model="editedCandidate.faction" row mandatory>
                    <v-radio label="Rick" value="Rick" color="primary"></v-radio>
                    <v-radio label="Morty" value="Morty" color="primary"></v-radio>
                    <v-radio label="Jerry" value="Jerry" color="primary"></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="saveCandidate">Save</v-btn>
            <v-btn color="error" @click="close">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="allCandidates"
      class="elevation-1"
      no-data-text="There are no candidates registered yet..."
      no-results-text="No candidates could be found..."
    >
      <template v-slot:items="props">
        <td>{{ props.item.firstname }}</td>
        <td>{{ props.item.lastname }}</td>
        <td>{{ props.item.faction }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editCandidate(props.item)">edit</v-icon>
          <v-icon small @click="deleteCandidate(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Firstname", value: "firstname" },
        { text: "Lastname", value: "lastname" },
        { text: "Faction", value: "faction" },
        { text: "Actions", value: "name", sortable: false }
      ],
      defaultCandidate: {
        id: "",
        firstname: "",
        lastname: "",
        faction: "",
        imageUrl: ""
      },
      editedIndex: -1,
      editedCandidate: {
        id: "",
        firstname: "",
        lastname: "",
        faction: "",
        imageUrl: ""
      }
    };
  },
  computed: {
    allCandidates() {
      return this.$store.getters.getCandidates;
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Candidate" : "Edit Candidate";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    getAllCandidates() {
      this.$store.dispatch("fetchCandidates");
    },
    saveCandidate() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("updateCandidate", this.editedCandidate);
      } else {
        this.$store.dispatch("createCandidate", this.editedCandidate);
      }
      this.close();
    },
    editCandidate(item) {
      this.editedIndex = this.$store.getters.getCandidates.indexOf(item);
      this.editedCandidate = Object.assign({}, item);
      this.dialog = true;
    },
    deleteCandidate(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.$store.dispatch("deleteCandidate", item);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedCandidate = Object.assign({}, this.defaultCandidate);
        this.editedIndex = -1;
      }, 300);
    }
  },
  created() {
    this.getAllCandidates();
  }
};
</script>

<style lang="scss" scoped></style>
