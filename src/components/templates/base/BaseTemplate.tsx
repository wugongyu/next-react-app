import styles from './BaseTemplate.module.css';

export interface BaseTemplateProps {
  sampleText: string;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({sampleText}) => {
  return (
    <div className={styles.container}>{sampleText}</div>
  );
}

export default BaseTemplate;