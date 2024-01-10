import { FunctionComponent, useCallback } from "react";
import ActiveSubsContainer from "../components/ActiveSubsContainer";
import ResolvedFormContainer from "../components/ResolvedFormContainer";
import ComplaintContainer from "../components/ComplaintContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop3.module.css";

const Desktop3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop3}>
      <ActiveSubsContainer />
      <div className={styles.activeSubs}>
        <div className={styles.complaints}>Complaints</div>
        <div className={styles.div}>99</div>
        <div className={styles.line} />
      </div>
      <ResolvedFormContainer numberValue="45" propLeft="calc(50% - 27px)" />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
        <div className={styles.raphaelCommodore}>Raphael Commodore</div>
      </div>
      <ComplaintContainer
        complaintType="Complaint regarding teaching"
        complaintDescription="Complaint regarding Bullying"
        complaintCategory="Complaint regarding cleanliness"
      />
      <img
        className={styles.bottomButtonsIcon}
        alt=""
        src="/bottom-buttons.svg"
      />
      <div className={styles.tabsBgParent}>
        <div className={styles.tabsBg} />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.unreslovedComplaints}>
            Unresloved Complaints
          </div>
        </div>
        <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
          <div className={styles.rectangle1} />
          <div className={styles.solvedCompliants}>Solved Compliants</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
