import "./styles.css";
import Async from "./async";
import Parent from "./async-state";
import HooksExample from "./hooks";
import PropsExample from "./props";
// import ReduxParent from "./redux";
import { useState } from "react";

type stateType = "async" | "async-state" | "props" | "hooks";

export default function App() {
  const [state] = useState<stateType>("async-state");

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        margin: "40px 0"
      }}
    >
      {state === "async" && <Async />}
      {state === "async-state" && <Parent id={12} />}
      {state === "props" && <PropsExample />}
      {state === "hooks" && <HooksExample />}
      {/* {state === "redux" && <ReduxParent />} */}
    </div>
  );
}
