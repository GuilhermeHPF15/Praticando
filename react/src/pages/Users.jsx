import { useParams } from "react-router-dom";

export default function Users() {
  const { user } = useParams();

  return <h2>Bem vindo(a), {user}!</h2>
}
