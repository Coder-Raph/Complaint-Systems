import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../components/Button1";
import "./Desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="desktop-4">
      <img
        className="vector-icon1"
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
      <b className="student-complaints">STUDENT COMPLAINTS</b>
      <div className="students-name-parent">
        <div className="students-name">Student’s Name</div>
        <div className="group-child" />
      </div>
      <div className="description-parent">
        <div className="phone-number">Description</div>
        <div className="group-child" />
      </div>
      <div className="phone-number-parent">
        <div className="phone-number">{`Phone Number `}</div>
        <div className="group-child" />
      </div>
      <div className="assign-to-parent">
        <div className="phone-number">Assign To</div>
        <div className="group-child" />
      </div>
      <div className="assign-to-group">
        <div className="phone-number">Assign To</div>
        <div className="group-child" />
      </div>
      <div className="index-number-parent">
        <div className="index-number">Index Number</div>
        <div className="group-child" />
      </div>
      <div className="desktop-4-child" />
      <Button1 />
    </div>
  );
};

export default Desktop3;
