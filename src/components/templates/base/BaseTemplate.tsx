import styles from './BaseTemplate.module.css';

export interface BaseTemplateProps {
  sampleText: string;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({sampleText}) => {
  return (
    <div className={`${styles.container} bg-gradient-to-r from-cyan-500 to-blue-500`}>{sampleText}</div>
  );
}

export default BaseTemplate;