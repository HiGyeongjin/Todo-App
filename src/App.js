import "./App.css";
import React from "react";
import InsertForm from "./components/insertForm";

function App() {
  return (
    <div className="App">
      <InsertForm
        onInsert={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}

export default App;
