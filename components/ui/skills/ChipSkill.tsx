import styles from "./ChipSkill.module.css";

type ChipSkillProps = {
  skill: string;
  color?: string;
};

const ChipSkill: React.FC<ChipSkillProps> = ({ color = "#000", skill }) => {
  return (
    <div className={styles.chip}>
      <span className={styles.chipColor} style={{ backgroundColor: color }} />
      {skill}
    </div>
  );
};

export default ChipSkill;
