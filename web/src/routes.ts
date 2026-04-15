import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import MainLayout from "@layouts/MainLayout";
import AccessLayout from "@layouts/AccessLayout";
import ProfileLayout from "@layouts/ProfileLayout";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        component: lazy(() => import("@pages/Home")),
      },
      {
        path: "/create-listing",
        component: lazy(() => import("@pages/CreateListing")),
      },
      {
        path: "/search",
        component: lazy(() => import("@/pages/ListingsSearch")),
      },
      {
        path: "/listings/:id",
        component: lazy(() => import("@/pages/ListingDetail")),
      },
      {
        path: "/buy",
        component: lazy(() => import("@pages/Buy")),
      },
      {
        path: "/about",
        component: lazy(() => import("@pages/About")),
      },
      {
        path: "*404",
        component: lazy(() => import("@pages/NotFound")),
      }
    ]
  },
  {
    path: "/login",
    component: AccessLayout,
    children: [
      {
        path: "/",
        component: lazy(() => import("@pages/access/Login")),
      }
    ]
  },
  {
    path: "/register",
    component: AccessLayout,
    children: [
      {
        path: "/",
        component: lazy(() => import("@pages/access/Register")),
      }
    ]
  },
  {
    path: "/profile",
    component: ProfileLayout,
    children: [
      {
        path: "/",
        component: lazy(() => import("@pages/profile/Profile")),
      },
      {
        path: "/history",
        component: lazy(() => import("@pages/profile/ListingsHistory")),
      },
      {
        path: "/orders",
        component: lazy(() => import("@pages/profile/OrdersHistory")),
      }
    ]
  }
];
