import s from "./form.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const Form = ({ formAction, btnText, formTitle }) => {
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      userEmail: userEmailRef.current.value,
      userPassword: passwordRef.current.value,
    };

    dispatch(formAction(authData)).then(() => {
      userEmailRef.current.value = "";
      passwordRef.current.value = "";
    });
  };

  return (
    <form
      action=""
      className={s.form}
      onSubmit={handleSubmit}
    >
      <h4 className={s.form__title}>{formTitle}</h4>
      <label htmlFor="">Email</label>
      <input
        className={s.form__input}
        type="text"
        placeholder="Email"
        ref={userEmailRef}
      />

      <label htmlFor="">Password</label>
      <input
        className={s.form__input}
        type="password"
        placeholder="Password"
        ref={passwordRef}
      />
      {formTitle === "Login" ? (
        <p className={s.form__forgotPass}>Forgot password?</p>
      ) : (
        ""
      )}

      <button
        className={s.form__btn}
        type="submit"
      >
        {btnText}
      </button>
    </form>
  );
};
export default Form;
