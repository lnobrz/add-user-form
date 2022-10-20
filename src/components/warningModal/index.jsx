import {
  WarningContainer,
  WarningHeader,
  WarningBody,
  Modal,
  Button,
} from "./styles";

const WarningModal = (props) => {
  const handleClick = () => {
    props.closeModalSetter(false);
  };

  return (
    <Modal>
      <WarningContainer>
        <WarningHeader>Invalid Input</WarningHeader>
        <WarningBody>
          Please, check if you had filled both input fiels and if the typed age
          is valid and try again.
        </WarningBody>
        <Button onClick={handleClick}>Close</Button>
      </WarningContainer>
    </Modal>
  );
};

export default WarningModal;
