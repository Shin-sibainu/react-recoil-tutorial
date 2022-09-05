import { useState } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import AddTask from "./components/AddTask";
import InputTask from "./components/InputTask";

function App() {
  return (
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
