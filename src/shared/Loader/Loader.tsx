import "./Loader.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#333333"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
