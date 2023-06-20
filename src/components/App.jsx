import React, { useState } from "react";

function App() {
  var col = "white";
  const [q, b] = useState(col);
  function xch() {
    b("black");
  }
  function ch() {
    b("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: q }} onMouseOver={xch} onMouseOut={ch}>
        Submit
      </button>

      {/* // there are many option to do this thing  */}
    </div>
  );
}

export default App;
