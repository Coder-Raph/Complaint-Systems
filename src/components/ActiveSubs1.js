import { useMemo } from "react";
import "./ActiveSubs1.css";

const ActiveSubs1 = ({ propFlex, propMinWidth, propAlignSelf }) => {
  const activeSubsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div className="active-subs2" style={activeSubsStyle}>
      <div className="complaint-box">Complaint Box</div>
      <div className="div4">3</div>
      <div className="line2" />
    </div>
  );
};

export default ActiveSubs1;
