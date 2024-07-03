import styles from "../Landing.module.css";
import Imports from "../Landing.imports";
import { CelerisBtn } from "../../../shared/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="d-flex flex-xl-row flex-column-reverse align-items-center justify-content-between w-100">
      <div className={styles.analysisText}>
        <h2 className={styles.analysisH2}>
          Empower Your Lending Decisions with Advanced Credit Analytics
        </h2>
        <p className={styles.analysisPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat.
        </p>
        <div className={styles.getStated}>
          <Link to={'/'}>
            <CelerisBtn variant="primary" rounded="true">
              GET STARTED
            </CelerisBtn>
          </Link>
        </div>
      </div>

      <img
        src={Imports.analysis}
        alt="Advancec Credit Analysis"
        className={`img-responsive ${styles.imgResponsive}`}
      />
    </section>
  );
};

export default Hero;
