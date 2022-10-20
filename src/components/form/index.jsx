import { useState, useRef } from "react";
import { FormContainer, Label, Input, Button } from "./styles";
import WarningModal from "../warningModal";

const Form = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    props.usersSetter(() => [
      ...props.usersArray,
      {
        name: userNameRef.current.value,
        age: userAgeRef.current.value,
        id: Math.random(),
      },
    ]);
  };

  const submitCheck = (event) => {
    event.preventDefault();
    if (
      userNameRef.current.value &&
      userAgeRef.current.value !== "" &&
      userAgeRef.current.value > 0
    ) {
      handleSubmit();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isModalOpen && <WarningModal closeModalSetter={setIsModalOpen} />}
      <FormContainer>
        <Label htmlForm="name">Name</Label>
        <br />
        <Input type="text" id="name" name="name" ref={userNameRef} />
        <br />
        <Label htmlForm="age">Age</Label>
        <br />
        <Input type="number" id="age" name="age" ref={userAgeRef} />
        <br />
        <Button onClick={submitCheck}>Add User</Button>
      </FormContainer>
    </>
  );
};

export default Form;
