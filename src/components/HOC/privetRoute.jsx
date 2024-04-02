import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { Navigate } from "react-router-dom";
import Loading from "../shared/Loading";

function PrivetRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

export default PrivetRoute;
