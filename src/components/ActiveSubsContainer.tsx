import { FunctionComponent } from "react";
import styles from "./ActiveSubsContainer.module.css";

const ActiveSubsContainer: FunctionComponent = () => {
  return (
    <div className={styles.activeSubs}>
      <div className={styles.complaintBox}>Complaint Box</div>
      <div className={styles.div}>3</div>
      <div className={styles.line} />
    </div>
  );
};

export default ActiveSubsContainer;
