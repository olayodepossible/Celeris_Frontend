import styles from "../Landing.module.css";
import Imports from "../Landing.imports";

const AboutUs = () => {
  return (
    <section className={`container ${styles.aboutUS}`}>
      <div className="d-flex flex-lg-row flex-column-reverse align-items-center justify-content-between">
        <div className={styles.aboutContent}>
          <h2 data-aos="fade-in">About Us</h2>
          <div data-aos="fade-right">
            <span>
              At Celeris, we're dedicated to driving innovation and empowering
              lenders to thrive in the digital age.
            </span>
            <span>
              Whether you're a traditional lender transitioning to digital or an
              existing digital lender seeking to enhance decision-making with
              data-driven precision, we're here to support you.
            </span>
            <span>
              Our solutions blend cutting-edge technology with the convenience
              of Software-as-a-Service, enabling lenders to take control of
              data, make informed decisions, and achieve greater accuracy in
              analytics.
            </span>
            <span>
              With Celeris, you're not just adapting to change – you're shaping
              the future of lending.
            </span>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <img src={Imports.about} alt="" className={styles.aboutImg} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
