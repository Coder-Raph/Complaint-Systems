import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Button1.css";

const Button1 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="button2" onClick={onButtonContainerClick}>
      <div className="button3">
        <div className="get-started2">Create Complaint Box</div>
      </div>
    </div>
  );
};

export default Button1;
