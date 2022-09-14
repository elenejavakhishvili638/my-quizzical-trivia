import React from "react";
import FirstPage from "./FirstPage";
import Main from "./Main";

function App() {
  const [mainPage, setMainPage] = React.useState(false);

  function start() {
    setMainPage(true);
  }

  return <div>{mainPage ? <Main /> : <FirstPage start={start} />}</div>;
}

export default App;
