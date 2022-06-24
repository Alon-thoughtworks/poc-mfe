import React, {createElement, useEffect, useRef} from "react";
import '../../shared-components/my-element';

function App() {
    const myElementEl = useRef(null);
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = 'button { color: red; }';
        myElementEl.current.shadowRoot.append(styleElement);
    });

  return (
    <div className="App">
      Hello customer!!!
        <my-element ref={myElementEl}>
            <p>first counter</p>
        </my-element>

        <my-element ref={myElementEl}>
            <p>second counter</p>
        </my-element>
    </div>
  );
}

export default App;
