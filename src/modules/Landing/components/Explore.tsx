import styles from "../Landing.module.css";
import Imports from "../Landing.imports";
import { CelerisBtn } from "../../../shared/Button";

const Explore = () => {
  return (
    <section
      className={`d-flex flex-lg-row flex-column-reverse ${styles.explore}`}
    >
      <div className={styles.exploreContent}>
        <h2>Explore endless possibilities with Celeris</h2>
        <p>
          Discover the transformative potential of AI-driven insights in
          streamlining operations and revolutionizing your institution.
        </p>
        <CelerisBtn variant="secondary" rounded="true">
          Request Demo
        </CelerisBtn>
      </div>
      <div>
        <img
          src={Imports.explore}
          alt="explore"
          className="img-responsive position-absolute"
        />
      </div>
    </section>
  );
};

export default Explore;
