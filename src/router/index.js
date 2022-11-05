import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Feed
    {
      path: "/feed",
      name: "feed",
      component: () => import("../views/Feed/FeedView.vue"),
    },
    {
      path: "/feed/add-post",
      name: "Add Post",
      component: () => import("../views/Feed/AddNewFeed.vue"),
    },
    {
      path: "/feed/edit-post",
      name: "Edit Post",
      component: () => import("../views/Feed/EditFeed.vue"),
    },
    // Products
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Products/ProductsView.vue"),
    },
    {
      path: "/products/add-product",
      name: "Add Product",
      component: () => import("../views/Products/AddNewProduct.vue"),
    },
    {
      path: "/products/edit-product",
      name: "Edit Product",
      component: () => import("../views/Products/EditProduct.vue"),
    },

    // Team
    {
      path: "/team-settings",
      name: "Team Settings",
      component: () => import("../views/TeamSettings/TeamSettings.vue"),
    },
    {
      path: "/new-team",
      name: "Create Team",
      component: () => import("../views/TeamSettings/CreateTeam.vue"),
    },

    // Profile
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/Profile/Profile.vue"),
    },
  ],
});

export default router;
