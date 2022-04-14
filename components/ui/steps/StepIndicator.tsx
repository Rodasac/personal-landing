import styles from "./StepIndicator.module.css";

const StepIndicator: React.FC<{ indicator: string }> = ({ indicator }) => {
  return <div className={styles.indicator}>{indicator}</div>;
};

export default StepIndicator;
