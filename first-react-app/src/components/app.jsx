import { Component } from "react";
import Button from "./components/button/Button";
import InputGroup from "./components/input-group/InputGroup";

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: "60%",
          padding: "2rem",
          background: "#fff",
          margin: "2rem auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h3>Sign Up</h3>
          <p style={{ marginBottom: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>

        <form>
          <InputGroup label="What is your Name" type="text" />
          <InputGroup label="What is your Email" type="email" />
          <InputGroup label="What is your Password" type="password" />

          <div>
            <Button text="reset" type="reset" variant="warning" size="small" />
            <Button
              text="submit"
              type="submit"
              variant="primary"
              size="large"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
