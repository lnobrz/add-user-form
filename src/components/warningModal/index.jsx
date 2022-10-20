import ReactDOM from "react-dom";
import {
  WarningContainer,
  WarningHeader,
  WarningBody,
  Modal,
  Button,
} from "./styles";

const ModalComponent = (props) => {
  return (
    <Modal>
      <WarningContainer>
        <WarningHeader>Invalid Input</WarningHeader>
        <WarningBody>
          Please, check if you had filled both input fiels and if the typed age
          is valid and try again.
        </WarningBody>
        <Button onClick={props.handleClick}>Close</Button>
      </WarningContainer>
    </Modal>
  );
};

const WarningModal = (props) => {
  const handleClick = () => {
    props.closeModalSetter(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalComponent handleClick={handleClick} />,
        document.getElementById("errorModal")
      )}
    </>
  );
};

export default WarningModal;
