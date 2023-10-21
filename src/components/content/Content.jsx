import s from "./content.module.css";

const Content = () => {
  return (
    <div className={s.FullPageSection}>
      <div className={s.card}>Card 1</div>
      <div className={s.card}>Card 2</div>
    </div>
  );
};
export default Content;
