import React, { Component, useEffect } from "react";
import "../style/style.css";
import Loading from "./Loading";

const Home = React.lazy(() => import("./Home"));

const App = () => {
  useEffect(() => {
    (async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await result.json();
      console.log(data);
    })();
  });

  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <h1>This is Main App</h1>
        <Home />
      </React.Suspense>
    </div>
  );
};

export default App;
