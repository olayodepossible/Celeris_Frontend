import * as React from 'react';
import { CelerisPrimaryBtn, CelerisSecondaryBtn } from '../../shared/Button';
import styles from './Landing.module.css';
import Imports from './Landing.imports';
import Card from '../../shared/Card/Card';

export interface ICompaniesProps {
  icon: string;
  name: string;
}
const companies: ICompaniesProps[] = [
  {
    icon: Imports.company1,
    name: 'Company Name',
  },
  {
    icon: Imports.company2,
    name: 'Company Name',
  },
  {
    icon: Imports.company3,
    name: 'Company Name',
  },
  {
    icon: Imports.company4,
    name: 'Company Name',
  },
  {
    icon: Imports.company5,
    name: 'Company Name',
  },
];

export default function Landing() {
  return (
    <>
      <main className="container">
        {/* Hero section */}
        <section className="row row-cols-lg-2 row-cols-sm-1 align-items-center mt-5 pt-5 position-relative w-100">
          <div className={styles.analysisText}>
            <h2 className={styles.analysisH2}>
              Empower Your Lending Decisions with Advanced Credit Analytics
            </h2>
            <p className={styles.analysisPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat.
            </p>
            <CelerisPrimaryBtn rounded>GET STARTED</CelerisPrimaryBtn>
          </div>
          <div>
            <img
              src={Imports.analysis}
              alt="Advancec Credit Analysis"
              className={`img-responsive ${styles.imgResponsive}`}
            />
          </div>
        </section>

        {/* Finance section */}
        <section className={styles.finance}>
          <p className={styles.financeHeader}>
            Finance flow has been featured on
          </p>
          <div className={styles.company}>
            {companies.map((company, index) => (
              <span key={index} className="d-flex align-items-center">
                <img src={company.icon} alt={company.name} key={index} />
                <p>{company.name}</p>
              </span>
            ))}
          </div>
        </section>

        {/* Insights section */}
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
                title="Credit Analysis and 
            Reporting"
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
                Automate your loan origination, bank statement request and
                review, credit report analysis and loan decision based on your
                customized business model
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
                title="Credit Analysis and 
            Reporting"
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
            <CelerisPrimaryBtn rounded>Request Demo</CelerisPrimaryBtn>
          </span>
        </section>

        {/* Business Expansion Section */}
        <section className="row position-relative g-5 row-cols-xl-2 row-cols-lg-1">
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
              convenience, empowering data control and shaping business futures
              with flexibility.
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

        {/* Explore section */}
      </main>
      <section className={styles.explore}>
        <div className={styles.exploreContent}>
          <h2>Explore endless possibilities with Celeris</h2>
          <p>
            Discover the transformative potential of AI-driven insights in
            streamlining operations and revolutionizing your institution.
          </p>
          <CelerisSecondaryBtn rounded>Request Demo</CelerisSecondaryBtn>
        </div>
        <div>
          <img
            src={Imports.explore}
            alt="explore"
            className="img-responsive position-absolute"
          />
        </div>
      </section>

      {/* Feedback section */}
      <section className=""></section>
    </>
  );
}
