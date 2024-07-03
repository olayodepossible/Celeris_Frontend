import styles from "../Landing.module.css";
import Imports from "../Landing.imports";

const BusExpansion = () => {
  return (
    <section className="row justify-content-between position-relative g-5 row-cols-xl-2 row-cols-lg-1">
      <div className={styles.busImg}>
        <img src={Imports.expansion} alt="Business Expansion Image" />
      </div>
      <div className={styles.busExpansion}>
        <h2>
          Your business is poised for expansion. Our solution is designed to
          fuel it.
        </h2>
        <p>
          Celeris' Credit in a Box merges cutting-edge tech with SaaS
          convenience, empowering data control and shaping business futures with
          flexibility.
        </p>
        <ul className={styles.expansionFeatures}>
          <li>
            <img src={Imports.lowfee} alt="" />
            <p>Lowest fees in market</p>
          </li>
          <li>
            <img src={Imports.fast} alt="" />
            <p>Fast and secure</p>
          </li>
          <li>
            <img src={Imports.encryption} alt="" />
            <p>256-bit secure encryption</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BusExpansion;
