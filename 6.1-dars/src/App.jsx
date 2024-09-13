import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container container__header">
        <div className="logo">
          <img src="./logo.svg" alt="Logo" />
          <span>RouteX</span>
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <a className="home" href="#">
                HOME
              </a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">BLOGS</a>
            </li>
          </ul>
        </nav>
        <div className="message">
          <a href="#">
            <img src="./message.svg" width={55} alt="message" />
          </a>
          <div className="help">
            <span>Need help?</span>
            <span>(307) 555-0133</span>
          </div>
        </div>
      </div>
      <main>
        <section>
          <div className="container main__container">
            <h1 className="main_h1">
              Journey with Confidence <span>Migrate</span> with Us
            </h1>
            <p className="main_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <button className="btn">
              Learn More <img src="./arrow.svg" alt="" />
            </button>
          </div>
        </section>
      </main>
      <div className="container about__container">
        <div className="left">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4">
            <span>10+</span>
            <p>years of experiences</p>
          </div>
        </div>
        <div className="right">
          <h6>
            ABOUT US <img src="./object.svg" alt="" />
          </h6>
          <h2>
            Unknown Wanderlust <span>Your Journey into</span>{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac ante sed tincidunt.
          </p>
          <div className="right_bottom">
            <div className="right_left">
              <div className="check">
                <input type="checkbox" id="checkbox" />
                <span>Safety Guides</span>
              </div>
              <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
            </div>
            <div className="right_right">
              <div className="check">
                <input type="checkbox" id="checkbox" />
                <span>Passport Assistance</span>
              </div>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
            </div>
          </div>{" "}
          <button className="btn2">
            Read More <img src="./arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
