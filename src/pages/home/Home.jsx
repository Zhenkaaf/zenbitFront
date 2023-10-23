import Content from "../../components/content/Content";

import s from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.home}>
        <div className={s.home__content}>
          <h1 className={s.home__title}>The chemical negatively charged</h1>
          <p className={s.home__subtitle}>
            Numerous calculations predict, and experiments confirm, that the
            force field
            <br />
            reflects the beam, while the mass defect is not formed. The chemical
            compound is
            <br /> negatively charged. Twhile the mass defect is{" "}
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <Content />
    </>
  );
};
export default Home;
