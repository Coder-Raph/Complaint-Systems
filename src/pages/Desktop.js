import InputField from "../components/InputField";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <img className="cladding1-1-icon" alt="" src="/cladding1-1@2x.png" />
      <div className="desktop-1-child" />
      <div className="desktop-1-item" />
      <b className="students-complaint-portal-container">
        <p className="students-complaint">Students Complaint Portal</p>
        <p className="students-complaint">(SCP)</p>
      </b>
      <b className="sign-in">Sign In</b>
      <img
        className="gctu-courses-removebg-preview-icon"
        alt=""
        src="/gctucoursesremovebgpreview@2x.png"
      />
      <div className="desktop-1-inner" />
      <div className="desktop-1-child1" />
      <InputField />
    </div>
  );
};

export default Desktop;
