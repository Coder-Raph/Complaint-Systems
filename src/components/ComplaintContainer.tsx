import { FunctionComponent } from "react";
import styles from "./ComplaintContainer.module.css";

type ComplaintContainerType = {
  complaintType?: string;
  complaintDescription?: string;
  complaintCategory?: string;
};

const ComplaintContainer: FunctionComponent<ComplaintContainerType> = ({
  complaintType,
  complaintDescription,
  complaintCategory,
}) => {
  return (
    <div className={styles.items}>
      <div className={styles.spotify}>
        <div className={styles.view}>View</div>
        <div className={styles.complaintRegardingTeaching}>{complaintType}</div>
      </div>
      <div className={styles.youtubePremium}>
        <div className={styles.view}>View</div>
        <div className={styles.complaintRegardingBullying}>
          {complaintDescription}
        </div>
      </div>
      <div className={styles.microsoftOnedrive}>
        <div className={styles.view2}>View</div>
        <div className={styles.complaintRegardingTeaching1}>
          Complaint regarding teaching
        </div>
      </div>
      <div className={styles.netflix}>
        <div className={styles.view3}>View</div>
        <div className={styles.complaintRegardingCleanlines}>
          {complaintCategory}
        </div>
      </div>
      <div className={styles.netflix1}>
        <div className={styles.view4}>View</div>
        <div className={styles.complaintRegardingTeaching2}>
          Complaint regarding teaching
        </div>
        <div className={styles.div}>4</div>
      </div>
      <div className={styles.netflix2}>
        <div className={styles.view4}>View</div>
        <div className={styles.complaintRegardingTeaching2}>
          Complaint regarding teaching
        </div>
        <div className={styles.div}>4</div>
      </div>
      <div className={styles.netflix3}>
        <div className={styles.view4}>View</div>
        <div className={styles.complaintRegardingTeaching2}>
          Complaint regarding teaching
        </div>
        <div className={styles.div}>4</div>
      </div>
      <div className={styles.netflix4}>
        <div className={styles.view4}>View</div>
        <div className={styles.complaintRegardingTeaching2}>
          Complaint regarding teaching
        </div>
        <div className={styles.div}>4</div>
      </div>
    </div>
  );
};

export default ComplaintContainer;
