import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop5.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="desktop-6">
      <img
        className="vector-icon2"
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
      <div className="bg-group">
        <div className="bg1" />
        <div className="light-bg1" />
      </div>
      <div className="complaint-box-assigned-group">
        <div className="complaint-box-assigned1">{`Complaint Box Assigned `}</div>
        <div className="raphael-commodore3">Raphael Commodore</div>
        <div className="ticket-no-671">Ticket No: 67</div>
        <img
          className="clipart546487-1-icon1"
          alt=""
          src="/clipart546487-1@2x.png"
        />
      </div>
      <img className="desktop-6-child" alt="" src="/group-11.svg" />
      <div className="details1">
        <div className="auto-layout-vertical1">
          <div className="name2">
            <div className="name3">Name</div>
            <div className="auto-layout-horizontal5">
              <div className="cse-department1">CSE Department</div>
              <img
                className="iconsarrow-medium5"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="description3">
            <div className="name3">Description</div>
            <div className="auto-layout-horizontal6">
              <div className="cant-forgotten-password1">
                Can’t Forgotten Password
              </div>
              <img
                className="iconsarrow-medium6"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="category2">
            <div className="category3">Category</div>
            <div className="auto-layout-horizontal7">
              <div className="cant-forgotten-password1">Password Reset</div>
              <img
                className="iconsarrow-medium6"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="first-payment1">
            <div className="name3">Number</div>
            <div className="auto-layout-horizontal6">
              <div className="cant-forgotten-password1">+233 20 956 8959</div>
              <img
                className="iconsarrow-medium6"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="reminder1">
            <div className="name3">Create QR Code</div>
            <div className="auto-layout-horizontal9">
              <div className="cant-forgotten-password1">Yes</div>
              <img
                className="iconsarrow-medium6"
                alt=""
                src="/iconsarrow-medium.svg"
              />
            </div>
          </div>
          <div className="currency1" />
        </div>
      </div>
    </div>
  );
};

export default Desktop5;
