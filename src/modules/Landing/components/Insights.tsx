import styles from "../Landing.module.css";
import Imports from "../Landing.imports";
import { CelerisBtn } from "../../../shared/Button";
import Card from "../../../shared/Card/Card";

const Insights = () => {
  return (
    <section className={styles.insights}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className={styles.insightsHeading}>
          Actionable Insights for accurate decisioning
        </h4>
        <p className={styles.insightsSubheading}>
          Detect bank statement frauds and get insights on borrower salary,
          obligations, recurring expenses, and 500 more parameters.
        </p>
      </div>
      <div className="row row-cols-lg-3 g-4 row-cols-sm-1">
        <div className="d-flex gap2 flex-sm-row flex-md-column align-items-center justify-content-between">
          <Card
            img={Imports.report}
            title="Credit Analysis and Reporting"
            content="Our solution will generate credit analysis reports based on client's needs"
          />
          <Card
            img={Imports.secure}
            title="100% Secure"
            content="Save cost and explore a credit journey at a go!"
          />
        </div>
        <div className={styles.bigdata}>
          <h2 className={styles.bigdataHeading}>credit in a box</h2>
          <p className={styles.bigdataSubheading}>
            Automate your loan origination, bank statement request and review,
            credit report analysis and loan decision based on your customized
            business model
          </p>
          <img
            src={Imports.bigData}
            alt="Big Data"
            className="img-responsive"
          />
        </div>
        <div className="d-flex gap1 flex-sm-row flex-md-column align-items-center justify-content-between">
          <Card
            img={Imports.report}
            title="Credit Analysis and Reporting"
            content="Our solution will generate credit analysis reports based on client's needs"
          />
          <Card
            img={Imports.secure}
            title="100% Secure"
            content="Save cost and explore a credit journey at a go!"
          />
        </div>
      </div>
      <span className="d-flex justify-self-end">
        <CelerisBtn variant="primary" rounded="true">
          Request Demo
        </CelerisBtn>
      </span>
    </section>
  );
};

export default Insights;
