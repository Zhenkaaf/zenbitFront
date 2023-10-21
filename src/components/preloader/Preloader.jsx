import { Vortex } from "react-loader-spinner";
import s from "./preloader.module.css";
import { useSelector } from "react-redux";

const Preloader = () => {
  const isLoading = useSelector((state) => state.authRed.isLoading);
  return (
    <div className={isLoading ? s.overlay : ""}>
      <Vortex
        visible={isLoading}
        height={200}
        width={200}
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Preloader;
