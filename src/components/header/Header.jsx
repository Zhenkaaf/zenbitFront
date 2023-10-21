import { useDispatch, useSelector } from "react-redux";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import { signOutAct } from "../../store/authSlice";

const Header = () => {
  const user = useSelector((state) => state.authRed.user);
  const dispatch = useDispatch();
  return (
    <>
      <header className={s.header}>
        <div className={s.header__logo}>
          <Link
            className={s.header__link}
            to="/"
          >
            Home
          </Link>
        </div>
        {user ? (
          <div className={s.header__userInfo}>
            <div className={s.header__userEmail}>{user}</div>
            <button
              className={s.header__out}
              onClick={() => dispatch(signOutAct())}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className={s.header__buttons}>
            <Link
              className={s.header__buttonLink}
              to="/login"
            >
              Log in
            </Link>

            <Link
              className={s.header__buttonLink}
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
