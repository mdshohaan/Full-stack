import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

const Help = () => {
  // const [name, setName] = useState("Irfan");
  const [state, setState] = useState({ name: "" });

  // const data = [
  //   { Name: "irfan", email: "irfan@gmail.com" },
  //   { Name: "arif", email: "arif@gmail.com" },
  //   { Name: "sohan", email: "sohan@gmail.com" },
  // ];
  // const data = [];

  useEffect(() => {
    setTimeout(() => {
      setState({ name: "Irfan" });
    }, 1000);
    console.log("Use effect call");
  }, []);

  return (
    <div>
      <Layout>
        {state.name && <h1>Hello {state.name} I am </h1>}{" "}
        {!state.name && <h1>Hello Guest I am </h1>}
        {/* {name ? <h1>Hello {name} I am </h1> : <h1>Hello Guest I am </h1>}
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li>
                {item.Name} ,{item.email}
              </li>
            ))}
          </ul>
        ) : (
          "there is no data"
        )} */}
      </Layout>
    </div>
  );
};

export default Help;
