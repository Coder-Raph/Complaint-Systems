import { useCallback } from "react";
import ActiveSubs1 from "../components/ActiveSubs1";
import ActiveSubs from "../components/ActiveSubs";
import BottomButtonsIcon from "../components/BottomButtonsIcon";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="desktop-3">
      <ActiveSubs1 propFlex="unset" propMinWidth="unset" />
      <ActiveSubs propWidth="310px" propFlex="unset" propMinWidth="unset" />
      <div className="active-subs">
        <div className="resolved-complaint">
          <p className="resolved">Resolved</p>
          <p className="complaint">Complaint</p>
        </div>
        <div className="div1">45</div>
        <div className="line" />
      </div>
      <div className="ellipse-parent">
        <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
        <div className="raphael-commodore1">Raphael Commodore</div>
      </div>
      <div className="items">
        <div className="spotify">
          <div className="view">View</div>
          <div className="complaint-regarding-teaching">
            Complaint regarding teaching
          </div>
        </div>
        <div className="youtube-premium">
          <div className="view">View</div>
          <div className="complaint-regarding-bullying">
            Complaint regarding Bullying
          </div>
        </div>
        <div className="microsoft-onedrive">
          <div className="view2">View</div>
          <div className="complaint-regarding-teaching1">
            Complaint regarding teaching
          </div>
        </div>
        <div className="netflix">
          <div className="view3">View</div>
          <div className="complaint-regarding-cleanlines">
            Complaint regarding cleanliness
          </div>
        </div>
      </div>
      <BottomButtonsIcon />
      <div className="rectangle-parent" onClick={onGroupContainer1Click}>
        <div className="rectangle" />
        <img className="frame-icon" alt="" src="/frame.svg" />
      </div>
      <div className="tabs-bg-parent">
        <div className="tabs-bg" />
        <div className="rectangle-group">
          <div className="rectangle1" />
          <div className="unresloved-complaints">Unresloved Complaints</div>
        </div>
        <div className="rectangle-container" onClick={onGroupContainer12Click}>
          <div className="rectangle2" />
          <div className="solved-compliants">Solved Compliants</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
