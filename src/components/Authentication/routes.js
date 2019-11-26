import { Login } from "./Login";
import { SignUp } from "./Signup";
import { ForgotPassword } from "./ForgotPassword";

const routes = [
  {
    Path: "signup",
    component: SignUp
  },
  {
    Path: "login",
    component: Login
  },
  {
    Path: "forgotpassword",
    component: ForgotPassword
  }
];

export default routes;
