import { useEffect } from "react";
import s from "./content.module.css";
import { getDealsAct } from "../../store/dealsSlice";
import { useDispatch, useSelector } from "react-redux";

const Content = () => {
  const deals = useSelector((state) => state.dealsRed.deals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDealsAct());
  }, []);

  return (
    <div className={s.content}>
      <h2 className={s.content__title}>Open Deals</h2>
      <div className={s.content__items}>
        {deals.length > 0 ? (
          <div className={s.items}>
            {deals.map((item) => (
              <div
                key={item._id}
                className={s.item}
              >
                <img
                  className={s.item__img}
                  src="https://st5.depositphotos.com/28991456/64791/i/450/depositphotos_647918790-stock-photo-skyscrapers-building-city.jpg"
                  alt=""
                />
                <div className={s.item__info}>
                  <h4 className={s.info__title}>{item.title}</h4>
                  <div className={s.info__details}>
                    <div className={s.info__column}>
                      <p>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        Dhs
                      </p>
                      <p>
                        Tiket -{" "}
                        {item.ticket
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        Dhs
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
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default Content;
