import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Desktop4.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className="desktop-5">
      <img
        className="vector-icon"
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
      <div className="bg-parent">
        <div className="bg" />
        <div className="light-bg" />
      </div>
      <div className="complaint-box-assigned-parent">
        <div className="complaint-box-assigned">{`Complaint Box Assigned `}</div>
        <div className="raphael-commodore">Raphael Commodore</div>
        <div className="ticket-no-67">Ticket No: 67</div>
        <img
          className="clipart546487-1-icon"
          alt=""
          src="/clipart546487-1@2x.png"
        />
      </div>
      <img className="desktop-5-child" alt="" src="/group-11.svg" />
      <div className="details">
        <div className="auto-layout-vertical">
          <div className="name">
            <div className="number">Name</div>
            <div className="auto-layout-horizontal">
              <div className="cse-department">CSE Department</div>
              <img
                className="iconsarrow-medium"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="description">
            <div className="number">Description</div>
            <div className="auto-layout-horizontal1">
              <div className="cant-forgotten-password">
                Can’t Forgotten Password
              </div>
              <img
                className="iconsarrow-medium1"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="category">
            <div className="category1">Category</div>
            <div className="auto-layout-horizontal2">
              <div className="cant-forgotten-password">Password Reset</div>
              <img
                className="iconsarrow-medium1"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="first-payment">
            <div className="number">Number</div>
            <div className="auto-layout-horizontal1">
              <div className="cant-forgotten-password">+233 20 956 8959</div>
              <img
                className="iconsarrow-medium1"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="reminder">
            <div className="number">Create QR Code</div>
            <div className="auto-layout-horizontal4">
              <div className="cant-forgotten-password">Yes</div>
              <img
                className="iconsarrow-medium1"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="currency" />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Desktop4;
