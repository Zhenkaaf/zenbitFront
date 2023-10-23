import s from "./form.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const Form = ({ formAction, btnText }) => {
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
      <label htmlFor="">Useremail</label>
      <input
        className={s.form__input}
        type="text"
        placeholder="useremail"
        ref={userEmailRef}
      />

      <label htmlFor="">Password</label>
      <input
        className={s.form__input}
        type="password"
        placeholder="password"
        ref={passwordRef}
      />

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
