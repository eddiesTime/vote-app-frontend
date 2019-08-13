<template>
  <v-container>
    <!-- TOOLBAR -->
    <v-toolbar flat color="white">
      <v-toolbar-title>Districts</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <!-- DIALOG -->
      <v-dialog v-model="dialog" max-width="500px">
        <!-- DIALOG OPEN BTN -->
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on"
            >New District</v-btn
          >
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
                  <v-text-field
                    label="District Name"
                    v-model="editedDistrict.districtName"
                  ></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-text-field
                    label="City"
                    v-model="editedDistrict.city"
                  ></v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-text-field
                    label="Country"
                    v-model="editedDistrict.country"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="saveDistrict">Save</v-btn>
            <v-btn color="error" @click="close">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="allDistricts"
      class="elevation-1"
      no-data-text="There are no districts registered yet..."
      no-results-text="No districts could be found..."
    >
      <template v-slot:items="props">
        <td>{{ props.item.districtName }}</td>
        <td>{{ props.item.city }}</td>
        <td>{{ props.item.country }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editDistrict(props.item)"
            >edit</v-icon
          >
          <v-icon small @click="deleteDistrict(props.item)">delete</v-icon>
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
        { text: "Name", value: "districtName" },
        { text: "City", value: "city" },
        { text: "Country", value: "country" },
        { text: "Actions", value: "name", sortable: false }
      ],
      defaultDistrict: {
        _id: "",
        districtName: "",
        city: "",
        country: ""
      },
      editedIndex: -1,
      editedDistrict: {
        _id: "",
        districtName: "",
        city: "",
        country: ""
      }
    };
  },
  computed: {
    allDistricts() {
      return this.$store.getters.getDistricts;
    },
    formTitle() {
      return this.editedIndex === -1 ? "New District" : "Edit District";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    getAllDistricts() {
      this.$store.dispatch("fetchDistricts");
    },
    saveDistrict() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("updateDistrict", this.editedDistrict);
      } else {
        this.$store.dispatch("createDistrict", this.editedDistrict);
      }
      this.close();
    },
    editDistrict(item) {
      this.editedIndex = this.$store.getters.getDistricts.indexOf(item);
      this.editedDistrict = Object.assign({}, item);
      this.dialog = true;
    },
    deleteDistrict(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.$store.dispatch("deleteDistrict", item);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedDistrict = Object.assign({}, this.defaultDistrict);
        this.editedIndex = -1;
      }, 300);
    }
  },
  created() {
    this.getAllDistricts();
  }
};
</script>

<style lang="scss" scoped></style>
