// import React, { useContext, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// const Login = () => {
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const { dispatch } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         dispatch({ type: "LOGIN", payload: user });
//         navigate("/");
//         // ...
//       })
//       .catch((error) => {
//         setError(true);
//       });
//   };

//   return (
//     <div className="container pt-5 mt-5 pb-5">
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//         <div>
//           {error && (
//             <span className="mb-3 text-danger">Wrong Email or Password</span>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
        // ...
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="container pt-5 mt-5 pb-5">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="d-flex justify-content-between mt-3">
          {error && (
            <span className="text-danger">Wrong Email or Password</span>
          )}
          <span>
            New user?{" "}
            <Link to="/register" className="link">
              Register Here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
