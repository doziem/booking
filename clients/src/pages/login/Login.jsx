import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    usernameOrEmail: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    e.preventDefault();

    let data;
    if (credentials.usernameOrEmail.match(isEmail)) {
      data = {
        email: credentials.usernameOrEmail,
        password: credentials.password,
      };
    } else {
      data = {
        username: credentials.usernameOrEmail,
        password: credentials.password,
      };
    }

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="usernameOrEmail Or email"
          id="usernameOrEmail"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          {loading ? "Login...." : "Login"}
        </button>
        {error && <span style={{color:"red",marginLeft:'15px'}}>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
