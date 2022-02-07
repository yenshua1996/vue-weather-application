import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Asia from "../views/Asia";
import Ocenia from "../views/Ocenia";
import NorthAmerica from "../views/NorthAmerica";
import SouthAmerica from "../views/SouthAmerica";
import Europe from "../views/Europe";
import Africa from "../views/Africa";

// Routes Array
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/asia",
    name: "Asia",
    component: Asia,
  },
  {
    path: "/ocenia",
    name: "Ocenia",
    component: Ocenia,
  },
  {
    path: "/northamerica",
    name: "North America",
    component: NorthAmerica,
  },
  {
    path: "/southamerica",
    name: "South America",
    component: SouthAmerica,
  },
  {
    path: "/europe",
    name: "Europe",
    component: Europe,
  },
  {
    path: "/africa",
    name: "Africa",
    component: Africa,
  },
];

// Create Routes
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Export Routes
export default router;
