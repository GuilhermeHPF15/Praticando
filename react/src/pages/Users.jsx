import { useParams } from "react-router-dom";

function Users() {
  const { user } = useParams();

  return <h2>Bem vindo(a), {user}!</h2>
}

export default Users;
