import { FunctionComponent } from "react";
import styles from "./VerticalForm.module.css";

const VerticalForm: FunctionComponent = () => {
  return (
    <div className={styles.autoLayoutVertical}>
      <div className={styles.name}>
        <div className={styles.number}>Name</div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.cseDepartment}>CSE Department</div>
          <img
            className={styles.iconsarrowMedium}
            alt=""
            src="/iconsarrow-medium.svg"
          />
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.number}>Description</div>
        <div className={styles.autoLayoutHorizontal1}>
          <div className={styles.cantForgottenPassword}>
            Can’t Forgotten Password
          </div>
          <img
            className={styles.iconsarrowMedium1}
            alt=""
            src="/iconsarrow-medium.svg"
          />
        </div>
      </div>
      <div className={styles.category}>
        <div className={styles.category1}>Category</div>
        <div className={styles.autoLayoutHorizontal2}>
          <div className={styles.cantForgottenPassword}>Password Reset</div>
          <img
            className={styles.iconsarrowMedium1}
            alt=""
            src="/iconsarrow-medium.svg"
          />
        </div>
      </div>
      <div className={styles.firstPayment}>
        <div className={styles.number}>Number</div>
        <div className={styles.autoLayoutHorizontal1}>
          <div className={styles.cantForgottenPassword}>+233 20 956 8959</div>
          <img
            className={styles.iconsarrowMedium1}
            alt=""
            src="/iconsarrow-medium.svg"
          />
        </div>
      </div>
      <div className={styles.reminder}>
        <div className={styles.number}>Create QR Code</div>
        <div className={styles.autoLayoutHorizontal4}>
          <div className={styles.cantForgottenPassword}>Yes</div>
          <img
            className={styles.iconsarrowMedium1}
            alt=""
            src="/iconsarrow-medium.svg"
          />
        </div>
      </div>
      <div className={styles.currency} />
    </div>
  );
};

export default VerticalForm;
