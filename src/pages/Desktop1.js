import { useCallback } from "react";
import ActiveSubs1 from "../components/ActiveSubs1";
import ActiveSubs from "../components/ActiveSubs";
import BottomButtonsIcon1 from "../components/BottomButtonsIcon1";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <ActiveSubs1 />
      <ActiveSubs propWidth="310px" />
      <div className="active-subs1">
        <div className="resolved-complaint1">
          <p className="resolved1">Resolved</p>
          <p className="complaint1">Complaint</p>
        </div>
        <div className="div2">3</div>
        <div className="line1" />
      </div>
      <div className="ellipse-group">
        <img className="group-child3" alt="" src="/ellipse-1@2x.png" />
        <div className="raphael-commodore2">Raphael Commodore</div>
      </div>
      <div className="items1">
        <div className="spotify1">
          <div className="view4">View</div>
          <div className="complaint-regarding-harrasment">
            Complaint regarding harrasment
          </div>
        </div>
        <div className="youtube-premium1">
          <div className="view4">View</div>
          <div className="complaint-regarding-repair">
            Complaint regarding repair
          </div>
        </div>
        <div className="microsoft-onedrive1">
          <div className="view6">View</div>
          <div className="complaint-regarding-teaching2">
            Complaint regarding teaching
          </div>
        </div>
        <div className="netflix1">
          <div className="view7">View</div>
          <div className="complaint-regarding-teaching3">
            Complaint regarding teaching
          </div>
        </div>
      </div>
      <BottomButtonsIcon1 />
      <div className="group-div" onClick={onGroupContainer1Click}>
        <div className="rectangle3" />
        <img className="frame-icon1" alt="" src="/frame.svg" />
      </div>
      <div className="tabs-bg-group">
        <div className="tabs-bg1" />
        <div className="rectangle-parent1" onClick={onGroupContainerClick}>
          <div className="rectangle4" />
          <div className="unresloved-complaints1">Unresloved Complaints</div>
        </div>
        <div className="rectangle-parent2">
          <div className="rectangle5" />
          <div className="solved-compliants1">Solved Compliants</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
