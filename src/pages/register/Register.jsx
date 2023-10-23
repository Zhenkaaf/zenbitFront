import s from "./register.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { registerAct } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";
import Form from "../../components/form/Form";

const Register = () => {
  const navigate = useNavigate();
  const registerError = useSelector((state) => state.authRed.registerError);
  const user = useSelector((state) => state.authRed.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <>
      <Preloader />
      <div className={s.registerContainer}>
        <div className={s.leftSection}></div>
        <div className={s.rightSection}>
          <div className={s.register}>
            <span className={s.register__title}>Register</span>
            <Form
              formAction={registerAct}
              btnText="Sign Up"
            />
            <div>
              {registerError && (
                <span style={{ color: "red" }}>Something went wrong!</span>
              )}
            </div>

            <div>
              <p>
                Already have an account?{" "}
                <Link
                  className={s.register__link}
                  to="/login"
                >
                  <span className={s.link__text}>Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
