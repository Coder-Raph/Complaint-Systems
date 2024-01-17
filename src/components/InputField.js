import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InputField.css";

const InputField = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="component-1" onClick={onComponent1ContainerClick}>
      <div className="component-1-child" />
      <b className="sign-in1">Sign in</b>
    </div>
  );
};

export default InputField;
