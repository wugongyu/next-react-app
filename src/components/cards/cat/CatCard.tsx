import styles from './CatCard.module.css';

export interface CatCardProps {
  sampleText: string;
}

const CatCard: React.FC<CatCardProps> = ({sampleText}) => {
  return (
    <div className={styles.container}>{sampleText}</div>
  );
}

export default CatCard;