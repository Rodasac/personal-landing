import { Buildings, Calendar, SuitcaseSimple } from "phosphor-react";
import StepIndicator from "./StepIndicator";

import styles from "./Step.module.css";

type StepProps = {
  indicator: string;
  title: string;
  location: string;
  date: string;
  description: string;
};

const Step: React.FC<StepProps> = ({
  indicator,
  title,
  location,
  date,
  description,
}) => {
  return (
    <div className={styles.step}>
      <StepIndicator indicator={indicator} />
      <div className={styles.content}>
        <div className={styles.row}>
          <SuitcaseSimple
            className={styles.icon}
            alignmentBaseline="baseline"
          />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.row}>
          <Buildings className={styles.icon} alignmentBaseline="baseline" />
          <p className={styles.jobData}>{location}</p>
        </div>
        <div className={styles.row}>
          <Calendar className={styles.icon} alignmentBaseline="baseline" />
          <p className={styles.jobData}>{date}</p>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
