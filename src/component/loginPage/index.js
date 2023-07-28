import { useState, useHistory } from "react";
import "./index.css";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const { name, password } = credentials;

  const submitCredentials = (event) => {
    event.preventDefault();

    if (name !== "" || password !== "") {
      setErrorMsg("Please Provide all the details");
    } else {
      const userDetails = localStorage.getItem("userDetails");
      if (
        credentials.name === userDetails.name &&
        credentials.password === userDetails.password
      ) {
        history.replace("/");
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={(e) => submitCredentials(e)} className="container">
        <h1 className="heading">Welcome</h1>
        <input
          value={name}
          onChange={(e) => {
            setCredentials((prevObject) => ({
              ...prevObject,
              name: e.target.value,
            }));
          }}
          className="inputElement"
          type="text"
          placeholder="Enter UserName"
        />
        <input
          value={password}
          onChange={(e) => {
            setCredentials((prevObject) => ({
              ...prevObject,
              password: e.target.value,
            }));
          }}
          className="inputElement"
          type="password"
          placeholder="Enter Password"
        />
        <p>{errorMsg}</p>
        <button className="sign-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
