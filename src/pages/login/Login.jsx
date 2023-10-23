import s from "./login.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginAct } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";
import Form from "../../components/form/Form";

const Login = () => {
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.authRed.loginError);
  const user = useSelector((state) => state.authRed.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Preloader />
      <div className={s.loginContainer}>
        <div className={s.leftSection}></div>
        <div className={s.rightSection}>
          <div className={s.login}>
            <span className={s.login__title}>Login</span>
            <Form
              formAction={loginAct}
              btnText="Sign In"
            />
            <div>
              {loginError && (
                <span style={{ color: "red" }}>Something went wrong!</span>
              )}
            </div>
            <div>
              <p>
                Don't have account?{" "}
                <Link
                  className={s.login__link}
                  to="/register"
                >
                  <span className={s.link__text}>Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
