<template>
  <v-content>
    <div>
      <v-toolbar class="green accent-3">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">VoteForYourself</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn flat @click="authState = !authState">
          {{ authenticationState }}
        </v-btn>
      </v-toolbar>
    </div>
    <router-view></router-view>
    <v-navigation-drawer app v-model="drawer" clipped dark>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Admin</v-list-tile-title>
            <font-awesome-icon icon="user-cog"></font-awesome-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.title.toLowerCase()"
        >
          <v-list-tile-action>
            <font-awesome-icon :icon="item.icon" />
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Election",
          icon: "person-booth"
        },
        {
          title: "Candidate",
          icon: "vote-yea"
        },
        {
          title: "District",
          icon: "building"
        },
        {
          title: "Voter Registration",
          icon: "user-friends"
        }
      ],
      drawer: true,
      authState: true
    };
  },
  computed: {
    authenticationState() {
      return this.authState ? "Signin" : "Logout";
    }
  },
  methods: {
    navigateTo(routeName) {
      if (routeName === "Voter Registration") {
        routeName = "Registration";
      }
      this.$router.push({ name: routeName.toLowerCase() });
    }
  }
};
</script>

<style lang="scss" scoped></style>
