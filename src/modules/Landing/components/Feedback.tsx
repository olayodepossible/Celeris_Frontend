import styles from '../Landing.module.css';
import { settings, sliderItems } from '../Landing.imports';
import Slider from 'react-slick';

const Feedback = () => {
  return (
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
  );
};

export default Feedback;
