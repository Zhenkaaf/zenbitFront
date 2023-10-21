import Content from "../../components/content/Content";
import Header from "../../components/header/Header";
import s from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.HomeContainer}>
        <Header />
        <div className={s.content}>
          <div className={s.text}>Centered Text</div>
        </div>
      </div>
      <Content />
    </>
  );
};
export default Home;
