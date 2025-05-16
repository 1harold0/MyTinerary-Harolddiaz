import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth); 
  const token = auth?.token; 

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
