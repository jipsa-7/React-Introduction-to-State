import React from "react";
//We have an uI that depend on the value of a variable here it is isDone. This type of programming is called declarative programming.
var isDone = false; // Change isDone to true see the change.

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      {/**button click doesn't work because the paragraph is not rerendering here. Button click will only change the value of variable isDone  */}
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
