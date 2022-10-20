import { useState } from "react";
import { FormContainer, Label, Input, Button } from "./styles";
import WarningModal from "../warningModal";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameInput = (event) => {
    setUserName(event.target.value);
  };

  const handleAgeInput = (event) => {
    setUserAge(event.target.value);
  };

  const handleSubmit = () => {
    props.usersSetter(() => [
      ...props.usersArray,
      { name: userName, age: userAge, id: Math.random() },
    ]);
    setUserName("");
    setUserAge("");
  };

  const submitCheck = (event) => {
    event.preventDefault();
    if (userName && userAge !== "" && userAge > 0) {
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
        <Input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={handleNameInput}
        />
        <br />
        <Label htmlForm="age">Age</Label>
        <br />
        <Input
          type="number"
          id="age"
          name="age"
          value={userAge}
          onChange={handleAgeInput}
        />
        <br />
        <Button onClick={submitCheck}>Add User</Button>
      </FormContainer>
    </>
  );
};

export default Form;
