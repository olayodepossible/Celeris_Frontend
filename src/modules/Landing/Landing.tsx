import * as React from 'react';
import { CelerisPrimaryBtn, CelerisSecondaryBtn } from '../../shared/Button';
import styles from './Landing.module.css';
import Imports, { companies, settings, sliderItems } from './Landing.imports';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../../shared/Card/Card';
import Slider from 'react-slick';

export default function Landing() {
  return (
    <>
      <main className="container">
        {/* Hero section */}
        <section className="d-flex flex-xl-row flex-column-reverse align-items-center justify-content-between w-100">
          <div className={styles.analysisText}>
            <h2 className={styles.analysisH2}>
              Empower Your Lending Decisions with Advanced Credit Analytics
            </h2>
            <p className={styles.analysisPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat.
            </p>
            <CelerisPrimaryBtn rounded="true">GET STARTED</CelerisPrimaryBtn>
          </div>

          <img
            src={Imports.analysis}
            alt="Advancec Credit Analysis"
            className={`img-responsive ${styles.imgResponsive}`}
          />
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
            <CelerisPrimaryBtn rounded="true">Request Demo</CelerisPrimaryBtn>
          </span>
        </section>

        {/* Business Expansion Section */}
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
      </main>

      {/* Explore section */}
      <section
        className={`d-flex flex-lg-row flex-column-reverse ${styles.explore}`}
      >
        <div className={styles.exploreContent}>
          <h2>Explore endless possibilities with Celeris</h2>
          <p>
            Discover the transformative potential of AI-driven insights in
            streamlining operations and revolutionizing your institution.
          </p>
          <CelerisSecondaryBtn rounded="true">Request Demo</CelerisSecondaryBtn>
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
      <section className={styles.feedback}>
        <h2>What our users say?</h2>
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className={styles.sliderCard}>
              <p>{item.comment}</p>
              <div className={styles.info}>
                <img src={item.icon} alt={item.name} />
                <span className={styles.infoDetails}>
                  <h4>{item.name}</h4>
                  <p>
                    {item.role},{item.company}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* About Us Section */}
      <section className={`container ${styles.aboutUS}`}>
        <div className="d-flex flex-lg-row flex-column-reverse align-items-center justify-content-between">
          <div className={styles.aboutContent}>
            <h2>About Us</h2>
            <div>
              <span>
                At Celeris, we're dedicated to driving innovation and empowering
                lenders to thrive in the digital age.
              </span>
              <span>
                Whether you're a traditional lender transitioning to digital or
                an existing digital lender seeking to enhance decision-making
                with data-driven precision, we're here to support you.
              </span>
              <span>
                Our solutions blend cutting-edge technology with the convenience
                of Software-as-a-Service, enabling lenders to take control of
                data, make informed decisions, and achieve greater accuracy in
                analytics.
              </span>
              <span>
                With Celeris, you're not just adapting to change – you're
                shaping the future of lending.
              </span>
            </div>
          </div>
          <div>
            <img src={Imports.about} alt="" className={styles.aboutImg} />
          </div>
        </div>
      </section>

      {/* Connect with us section */}
      <section className="container">
        <div className={styles.connect}>
          <img src={Imports.connect} alt="" />
          <form className={styles.connectForm}>
            <h3 className={styles.formHeading}>
              Connect with us to schedule a platform demonstration and explore
              potential collaboration opportunities. Complete the form provided,
              and we'll reach out to you promptly.
            </h3>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="form-input"
                id="name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Business email</label>
              <input
                type="email"
                className="form-input"
                placeholder="myname@company.com"
                id="email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-input"
                id="company"
                placeholder="Company Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">
                Please share anything that will help prepare for our meeting
              </label>
              <textarea name="message" id="message" cols={40}>
                {' '}
              </textarea>
            </div>
            <div className="d-flex align-items-center justify-content-center w-100">
              <CelerisPrimaryBtn rounded="true">Submit</CelerisPrimaryBtn>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
