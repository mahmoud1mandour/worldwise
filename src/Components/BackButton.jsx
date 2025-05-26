import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={(e) => {
        navigate(-1);
        e.preventDefault();
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
