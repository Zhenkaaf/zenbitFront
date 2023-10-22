import { useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import s from "./register.module.css";
import { useNavigate } from "react-router";
import { registerAct } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";

const Register = () => {
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const registerError = useSelector((state) => state.authRed.registerError);
  const user = useSelector((state) => state.authRed.user);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      userEmail: userEmailRef.current.value,
      userPassword: passwordRef.current.value,
    };
    dispatch(registerAct(authData)).then(() => {
      userEmailRef.current.value = "";
      passwordRef.current.value = "";
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <>
      <Header />
      <Preloader />
      <div className={s.LoginContainer}>
        <div className={s.leftSection}></div>
        <div className={s.rightSection}>
          <div className={s.login}>
            <span className={s.loginTitle}>Register</span>
            <form
              action=""
              className={s.loginForm}
              onSubmit={handleSubmit}
            >
              <label htmlFor="">Useremail</label>
              <input
                className={s.loginInput}
                type="text"
                placeholder="useremail"
                ref={userEmailRef}
              />

              <label htmlFor="">Password</label>
              <input
                className={s.loginInput}
                type="password"
                placeholder="password"
                ref={passwordRef}
              />
              {/* {isFetching ? (
                <button
                  className="watch__spinner-login"
                  disabled={true}
                >
                  <WatchSpinner />
                </button>
              ) : (
                <button
                  className="loginButton"
                  type="submit"
                >
                  Sign In
                </button>
              )} */}
              <button
                className={s.loginButton}
                type="submit"
              >
                Sign Up
              </button>
              <div>
                {registerError && (
                  <span style={{ color: "red" }}>Something went wrong!</span>
                )}
              </div>
            </form>

            <div>
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
