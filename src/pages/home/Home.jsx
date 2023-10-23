import Content from "../../components/content/Content";

import s from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.HomeContainer}>
        <div className={s.content}>
          <div className={s.text}>Centered Text</div>
        </div>
      </div>
      <Content />
    </>
  );
};
export default Home;
