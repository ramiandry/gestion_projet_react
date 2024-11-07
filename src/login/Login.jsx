import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="cont-login">
      <div className="cont-cont-login">
        <div className="rond"></div>
        <div className="rond-2"></div>
        <div className="login">
          <div className="cont-form">
            <div className="form">
              <div className="cont-text">
                <h3>LOGIN</h3>
                <p>Start by identifying yourself</p>
              </div>
              <form action="" method="post">
                <div className="row">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 21H14V19C14 17.3431 12.6569 16 11 16H5C3.34315 16 2 17.3431 2 19V21H0V19C0 16.2386 2.23858 14 5 14H11C13.7614 14 16 16.2386 16 19V21ZM8 12C4.68629 12 2 9.3137 2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 9.3137 11.3137 12 8 12ZM8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                  <input type="text" placeholder="Username or email" />
                </div>
                <div className="row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                  <input type="text" placeholder="password"/>
                </div>
                <div className="cont-btn">
                  <button type="submit">Login now</button>
                </div>
              </form>
              <div className="texte">
                <p>
                  Login <span>with Others</span>
                </p>
              </div>
              <div className="link-btn">
                <button>
                  <img
                    style={{ height: "30px" }}
                    src="https://m2w7f7u8.rocketcdn.me/wp-content/uploads/2021/09/Diseno-sin-titulo-9.png"
                  />
                  Login with <span>&nbsp; google</span>
                </button>
                <button>
                  <img
                    style={{ height: "30px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png"
                  />
                  Login with <span>&nbsp; Facebook</span>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="blur">
            <img src="img/women.png" className="women" alt="" srcset="" />
            <p>To bring this project to life here!!</p>
            <img src="img/Group11.png" className="group" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
