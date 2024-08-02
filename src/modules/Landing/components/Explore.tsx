import styles from "../Landing.module.css";
import Imports from "../Landing.imports";
import { CelerisBtn } from "../../../shared/Button";

const Explore = () => {
  return (
    <section
      className={`d-flex flex-lg-row flex-column-reverse ${styles.explore}`}
    >
      <div data-aos="fade-right" className={styles.exploreContent}>
        <h2>Explore endless possibilities with Celeris</h2>
        <p>
          Discover the transformative potential of AI-driven insights in
          streamlining operations and revolutionizing your institution.
        </p>
        <div className={styles.submit}>
          <CelerisBtn variant="secondary" rounded="true">
            Request Demo
          </CelerisBtn>
        </div>
      </div>
      <div data-aos="fade-up">
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
