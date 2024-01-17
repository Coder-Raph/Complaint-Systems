import { useMemo } from "react";
import "./ActiveSubs.css";

const ActiveSubs = ({ propWidth, propFlex, propMinWidth }) => {
  const activeSubs1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className="active-subs3" style={activeSubs1Style}>
      <div className="complaints">Complaints</div>
      <div className="div5">99</div>
      <div className="line3" />
    </div>
  );
};

export default ActiveSubs;
