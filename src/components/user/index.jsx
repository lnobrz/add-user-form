import { UserContainer, UserCard } from "./styles";

const User = (props) => {
  return (
    <UserContainer>
      {props.usersArray.map((user) => (
        <UserCard key={user.id}>
          {user.name} {user.age}
        </UserCard>
      ))}
    </UserContainer>
  );
};

export default User;
