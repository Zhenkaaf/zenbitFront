import s from "./content.module.css";

const Content = () => {
  return (
    <div className={s.content}>
      <h2 className={s.content__title}>Open Deals</h2>
      <div className={s.content__items}>
        <div className={s.items}>
          <div className={s.item}>
            <img
              className={s.item__img}
              src="https://st5.depositphotos.com/28991456/64791/i/450/depositphotos_647918790-stock-photo-skyscrapers-building-city.jpg"
              alt=""
            />{" "}
            <div className={s.item__info}>
              <h4 className={s.info__title}>title</h4>
              <div className={s.info__details}>
                <div className={s.info__column}>
                  <p>6 500 000 Dhs</p>
                  <p>Tiket - 60 000 Dhs</p>
                </div>
                <div className={s.info__column}>
                  <p>Yield 9.25%</p>
                  <p>Days left 150</p>
                </div>
                <div className={s.info__column}>
                  <p>Sold 75%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.item}>
            <img
              className={s.item__img}
              src="https://st5.depositphotos.com/28991456/64791/i/450/depositphotos_647918790-stock-photo-skyscrapers-building-city.jpg"
              alt=""
            />{" "}
            <div className={s.item__text}>Card 1</div>
          </div>
          <div className={s.item}>
            <img
              className={s.item__img}
              src="https://st5.depositphotos.com/28991456/64791/i/450/depositphotos_647918790-stock-photo-skyscrapers-building-city.jpg"
              alt=""
            />{" "}
            <div className={s.item__text}>Card 1</div>
          </div>
          <div className={s.item}>
            <img
              className={s.item__img}
              src="https://st5.depositphotos.com/28991456/64791/i/450/depositphotos_647918790-stock-photo-skyscrapers-building-city.jpg"
              alt=""
            />{" "}
            <div className={s.item__text}>Card 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
