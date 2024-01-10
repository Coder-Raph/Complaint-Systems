import { FunctionComponent, useCallback } from "react";
import ActiveSubsContainer from "../components/ActiveSubsContainer";
import ResolvedFormContainer from "../components/ResolvedFormContainer";
import ComplaintContainer from "../components/ComplaintContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";

const Desktop2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className={styles.desktop2}>
      <ActiveSubsContainer />
      <div className={styles.activeSubs}>
        <div className={styles.complaints}>Complaints</div>
        <div className={styles.div}>99</div>
        <div className={styles.line} />
      </div>
      <ResolvedFormContainer
        numberValue="3"
        propLeft="calc(50% - 14px)"
        propOpacity="0.4"
      />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
        <div className={styles.raphaelCommodore}>Raphael Commodore</div>
      </div>
      <ComplaintContainer
        complaintType="Complaint regarding harrasment"
        complaintDescription="Complaint regarding repair"
        complaintCategory="Complaint regarding teaching"
      />
      <img
        className={styles.bottomButtonsIcon}
        alt=""
        src="/bottom-buttons1.svg"
      />
      <div className={styles.tabsBgParent}>
        <div className={styles.tabsBg} />
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer1Click}
        >
          <div className={styles.rectangle} />
          <div className={styles.unreslovedComplaints}>
            Unresloved Complaints
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangle1} />
          <div className={styles.solvedCompliants}>Solved Compliants</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
