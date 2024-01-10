import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ResolvedFormContainer.module.css";

type ResolvedFormContainerType = {
  numberValue?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propOpacity?: CSSProperties["opacity"];
};

const ResolvedFormContainer: FunctionComponent<ResolvedFormContainerType> = ({
  numberValue,
  propLeft,
  propOpacity,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      opacity: propOpacity,
    };
  }, [propLeft, propOpacity]);

  return (
    <div className={styles.activeSubs}>
      <div className={styles.resolvedComplaint}>
        <p className={styles.resolved}>Resolved</p>
        <p className={styles.complaint}>Complaint</p>
      </div>
      <div className={styles.div} style={divStyle}>
        {numberValue}
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default ResolvedFormContainer;
