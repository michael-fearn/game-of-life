import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGrid } from "./hooks/grid";
import { useTiming } from "./hooks/timing";
import { Grid } from "./grid";
function App() {
  const { gridState, getNextGridState } = useGrid();
  useTiming(getNextGridState);
  return (
    <div className="App">
      <Grid dimensions={[30, 30]} points={gridState} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
