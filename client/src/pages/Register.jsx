import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth";


export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const {storeTokenInLS} = useAuth();

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = async(e) => {
  e.preventDefault();
  console.log(user);
  try {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(user),
    });
    if(response.ok){
      const res_data = await response.json();
      console.log("res from server",res_data);
      storeTokenInLS(res_data.token);
      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      })
      navigate("/login");
    }
    console.log(response);
  } catch (error) {
    console.log("register", error)
  }
  // connecting backend with frontend

};
return (
  <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/register.png" alt="" width="500" height="500" />
            </div>
            <div className="registration form">
              <h1 className="main-heading mb-3">registration form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder="username" id="username" required autoComplete="off" value={user.username} on onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="text" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email} on onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="phone">enter yoour phone no</label>
                  <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off" value={user.phone} on onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder="enter your password" id="username" required autoComplete="off" value={user.password} on onChange={handleInput} />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">register now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>
)
}  
