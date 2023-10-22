import { useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import s from "./login.module.css";
import { useNavigate } from "react-router";
import { loginAct } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";

const Login = () => {
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.authRed.loginError);
  const user = useSelector((state) => state.authRed.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      userEmail: userEmailRef.current.value,
      userPassword: passwordRef.current.value,
    };

    dispatch(loginAct(authData)).then(() => {
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
      <div className={s.loginContainer}>
        <div className={s.leftSection}>Содержимое левой секции 2/3 ширины</div>
        <div className={s.rightSection}>
          <div className={s.login}>
            <span className={s.loginTitle}>Login</span>
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

              <button
                className={s.loginButton}
                type="submit"
              >
                Sign In
              </button>
              <div>
                {loginError && (
                  <span style={{ color: "red" }}>Something went wrong!</span>
                )}
              </div>
            </form>

            <div>
              <p>
                Don't have account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
