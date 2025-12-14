import React from "react";
import useApiData from "./useApiData";

const About = () => {
  const { data } = useApiData("https://jsonplaceholder.typicode.com/todos/2");
  console.log(data);

  return (
    <div>
      {"About Component"}
      <pre>{JSON.stringify(data, ["id"], 1)}</pre>
    </div>
  );
};


export default About;
