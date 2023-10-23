import s from "./dealItem.module.css";

const DealItem = ({ item }) => {
  return (
    <div className={s.item}>
      <img
        className={s.item__img}
        src={item.image}
        alt="Photo of city"
      />
      <div className={s.item__info}>
        <h4 className={s.info__title}>{item.title}</h4>
        <div className={s.info__details}>
          <div className={s.info__column}>
            <p>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Dhs
            </p>
            <p>
              Tiket -{" "}
              {item.ticket.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Dhs
            </p>
          </div>
          <div className={s.info__column}>
            <p>Yield {(item.yield * 0.01).toFixed(2)}%</p>
            <p>Days left {item.days}</p>
          </div>
          <div className={s.info__column}>
            <p>Sold {item.sold}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DealItem;
