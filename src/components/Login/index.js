import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { useAuth } from "../../AuthContext";
import "./index.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); 
  const [passwordSee, setPasswordSee] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSignup, setShowSignup] = useState(false); // toggle state
  const { login } = useAuth();
  const navigate = useNavigate();

  // LOGIN
  const onSubmitForm = async (event) => {
    event.preventDefault();
    setErrorMsg("");

    if (email === "" || password === "") {
      setErrorMsg("Email or Password cannot be empty");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      login(); 
      navigate("/");
    } catch (error) {
      setErrorMsg("Invalid Email or Password");
    }
  };

  // SIGNUP
  const onSignupForm = async (event) => {
    event.preventDefault();
    setErrorMsg("");

    if (email === "" || password === "") {
      setErrorMsg("Email or Password cannot be empty");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! You can now login.");
      setShowSignup(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/email-already-in-use") setErrorMsg("Email already in use");
      else if (error.code === "auth/invalid-email") setErrorMsg("Invalid email");
      else if (error.code === "auth/weak-password") setErrorMsg("Password should be at least 6 characters");
      else setErrorMsg(error.message);
    }
  };

  const togglePassword = () => setPasswordSee(!passwordSee);
  const passwordType = passwordSee ? "text" : "password";
  const passwordIcon = passwordSee ? <FaEyeSlash /> : <FaEye />;

  return (
    <div className="loginFormContainer">
      <img
        src="https://images.booking-wp-plugin.com/main/blog/Reduces-Patient-No-Shows.jpg"
        alt="loginImg"
        className="login-img"
      />

      <form className="formContainer" onSubmit={showSignup ? onSignupForm : onSubmitForm}>
        <h1 className="loginP">{showSignup ? "Signup" : "Login"}</h1>
        <div className="inputContainer">
          <label className="label" htmlFor="email">
            Enter Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="inputUserName"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label" htmlFor="password">
            Enter Password*
          </label>
          <div className="password-div">
            <input
              type={passwordType}
              id="password"
              value={password}
              className="inputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="password-btn" onClick={togglePassword}>
              <span className="eye-icon">{passwordIcon}</span>
            </button>
          </div>
        </div>

        {errorMsg && <p className="errorMsg">{errorMsg}</p>}

        <button type="submit" className="loginButton">
          {showSignup ? "Signup" : "Login"}
        </button>

        <p
          style={{ marginTop: "10px", cursor: "pointer", color: "blue" }}
          onClick={() => {
            setShowSignup(!showSignup);
            setErrorMsg("");
            setEmail("");
            setPassword("");
          }}
        >
          {showSignup ? "Already have an account? Login" : "New user? Signup here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
