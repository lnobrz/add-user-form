import { useState } from "react";
import GlobalStyle from "./globalStyles/globalStyles";
import Form from "./components/form";
import User from "./components/user";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Form usersArray={users} usersSetter={setUsers} />
      <User usersArray={users} />
    </>
  );
}

export default App;
