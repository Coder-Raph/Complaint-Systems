import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDesktop1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop1} onClick={onDesktop1Click}>
      <img className={styles.cladding11Icon} alt="" src="/cladding1-1@2x.png" />
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} />
      <b className={styles.studentsComplaintPortalContainer}>
        <p className={styles.studentsComplaint}>Students Complaint Portal</p>
        <p className={styles.studentsComplaint}>(SCP)</p>
      </b>
      <b className={styles.signIn}>Sign In</b>
      <img
        className={styles.gctuCoursesRemovebgPreviewIcon}
        alt=""
        src="/gctucoursesremovebgpreview@2x.png"
      />
      <div className={styles.desktop1Inner} />
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default Desktop1;
