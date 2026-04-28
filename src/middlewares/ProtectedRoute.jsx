import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
  const token = localStorage.getItem("token"); // ya sessionStorage

  if (!token) {
    return navigate("/login"); // agar token nahi hai to login page pe bhej do
  }

//   return children;
};
export default ProtectedRoute;