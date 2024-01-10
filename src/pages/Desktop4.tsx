import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypePrimary from "../components/TypePrimary";
import styles from "./Desktop4.module.css";

const Desktop4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorClick}
      />
      <b className={styles.studentComplaints}>STUDENT COMPLAINTS</b>
      <div className={styles.studentsNameParent}>
        <div className={styles.studentsName}>Student’s Name</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.descriptionParent}>
        <div className={styles.description}>Description</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.indexNumberParent}>
        <div className={styles.indexNumber}>Index Number</div>
        <div className={styles.groupChild} />
      </div>
      <TypePrimary
        getStarted="Create Complaint Box"
        typePrimaryBackground="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0), rgba(36, 0, 255, 0.5)), #2400ff"
        typePrimaryBoxShadow="unset"
        typePrimaryWidth="641px"
        typePrimaryPosition="absolute"
        typePrimaryTop="687px"
        typePrimaryLeft="calc(50% - 320px)"
        typePrimaryHeight="95px"
        getStartedFontSize="40px"
      />
    </div>
  );
};

export default Desktop4;
