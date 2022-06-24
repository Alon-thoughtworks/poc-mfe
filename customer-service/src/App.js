import React, {useEffect, useRef} from "react";
import '../../shared-components';

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
        <count-listener>
            <my-element  ref={myElementEl}>
                <p>first counter</p>
            </my-element>
            <my-element>
                <p>first counter</p>
            </my-element>
        </count-listener>
    </div>
  );
}

export default App;
