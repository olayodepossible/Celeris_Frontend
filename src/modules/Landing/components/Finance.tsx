import styles from "../Landing.module.css";
import { companies } from "../Landing.imports";

const Finance = () => {
  return (
    <section className={styles.finance}>
      <p className={styles.financeHeader}>Finance flow has been featured on</p>
      <div className={styles.company}>
        {companies.map((company, index) => (
          <span key={index} className="d-flex align-items-center">
            <img src={company.icon} alt={company.name} key={index} />
            <p>{company.name}</p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Finance;
