import { useEffect } from "react";
import s from "./content.module.css";
import { getDealsAct } from "../../store/dealsSlice";
import { useDispatch, useSelector } from "react-redux";
import DealItem from "../dealItem/DealItem";

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
              <DealItem
                item={item}
                key={item._id}
              />
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
