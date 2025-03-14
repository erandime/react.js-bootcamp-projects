import React from "react";
import emojipedia from "../emojipedia";
import Term from "./Term";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((term) => (
          <Term
            key={term.id}
            emoji={term.emoji}
            name={term.name}
            meaning={term.meaning.substring(0, 100)}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
