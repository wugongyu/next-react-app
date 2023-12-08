import styles from './CatCard.module.css';
import Image from 'next/image';

export interface CatCardProps {
  tag: string;
  title: string;
  subTitle: string;
  author: string;
  time: string;
}

const CatCard: React.FC<CatCardProps> = (props) => {
  const { tag, title, subTitle, author, time } = props;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image 
            src="/car.jpg"
            width="600"
            height="400"
            alt="card__image"
            className={styles.card__image}
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image 
              src="https://i.pravatar.cc/40?img=3"
              width="40"
              height="40"
              alt="user__image"
              className={styles.user__image}
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default CatCard;