import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import EldritchButton from "./components/button/eldritch.button";
import Main from "./components/main/main";

function App() {
  const [worldFocus, setWorldFocus] = useState(false);

  return (
    <>
      <EldritchButton
        title={"Arm"}
        style={{ left: 300 }}
        onClick={() => setWorldFocus(false)}
      />
      <EldritchButton title={"World"} onClick={() => setWorldFocus(true)} />
      <Main worldFocus={worldFocus} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
