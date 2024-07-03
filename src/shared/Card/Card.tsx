import * as React from "react";
import styles from "./Card.module.css";
import { CelerisBtn } from "../Button";

export interface ICardProps {
  img?: string;
  title?: string;
  content?: string;
  button?: string;
}

const Card = ({ img, title, content, button }: ICardProps) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="Image title" className={styles.cardImg} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>{content}</p>
      {button && (
        <CelerisBtn variant="primary" rounded="true">
          {button}
        </CelerisBtn>
      )}
    </div>
  );
};

export default Card;
