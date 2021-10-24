import MyProducts from "../MyProducts/MyProducts";
import MainPage from "../MainPage/MainPage";
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet";
import MySales from "../MySales/MySales";
import SignIn from "../Sign/SignIn/SignIn";
import SignUp from "../Sign/SignUp/SignUp";

export const routes = [
  {
    component: SignUp,
    path: "/signup",
    exact: true,
    withAuth: false,
  },
  {
    component: SignIn,
    path: "/signin",
    exact: true,
    withAuth: false,
  },
  {
    component: MainPage,
    path: "/",
    exact: true,
    withAuth: true,
  },

  {
    component: MyProducts,
    path: "/products",
    exact: true,
    withAuth: true,
  },

  {
    component: MySales,
    path: "/sales",
    exact: true,
    withAuth: true,
  },

  {
    component: PersonalCabinet,
    path: "/personal-cabinet",
    exact: true,
    withAuth: true,
  },


];
