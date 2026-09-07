import { useState } from "react";
import Buttons from "../components/buttons/Buttons";
import DisplayCount from "../components/dispaly-count/DisplayCount";
import Layout from "../components/layout/Layout";
import UpdateIncrementDecrement from "../components/update-inc/UpdateIncrementDecrement";

const About = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(5);
  const [decrementValue, setIDecrementValue] = useState(5);

  const o = count || 50;
  console.log(o);
  count && console.log("Count has value");

  function increment() {
    setCount(count + incrementValue); // Or
    // setCount((count) => count + incrementValue);
  }
  function decrement() {
    setCount(count - decrementValue);
  }

  const handleIncrement = (e) => {
    setIncrementValue(parseInt(e.target.value));
  };
  const handleDecrement = (e) => {
    setIDecrementValue(parseInt(e.target.value));
  };

  return (
    <div>
      <Layout>
        <h1>About Us</h1>
        <p>Welcome to our about page!</p>

        <DisplayCount count={count} />

        <UpdateIncrementDecrement
          incrementValue={incrementValue}
          handleIncrement={handleIncrement}
          decrementValue={decrementValue}
          handleDecrement={handleDecrement}
        />

        <Buttons increment={increment} decrement={decrement} />

        {/* <button onClick={increment}>Increment</button> */}
      </Layout>
    </div>
  );
};

export default About;
