import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Vote from "./components/Vote.vue";
import Admin from "./components/Admin/Admin.vue";
import Candidate from "./components/Admin/Candidate.vue";
import District from "./components/Admin/District.vue";
import Registration from "./components/Admin/Registration.vue";
import Election from "./components/Admin/Election.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/vote",
      component: Vote
    },
    {
      path: "/vote",
      name: "vote",
      component: Vote
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "",
          name: "admin",
          redirect: "/admin/election"
        },
        {
          path: "candidate",
          name: "candidate",
          component: Candidate
        },
        {
          path: "district",
          name: "district",
          component: District
        },
        {
          path: "election",
          name: "election",
          component: Election
        },
        {
          path: "registration",
          name: "registration",
          component: Registration
        }
      ]
    }
  ]
});
