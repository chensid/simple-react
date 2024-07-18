/** @jsx Didact.createElement */
import Didact from "./react.js";

function App(props) {
  const [state, setState] = Didact.useState(1);

  return (
    <div id="foo">
      <a>bar</a>
      <h1>Hi {props.name}</h1>
      <h1
        onClick={() => setState((c) => c + 1)}
        style={{ margin: "0px", padding: "0px" }}
      >
        Count: {state}
      </h1>
    </div>
  );
}
const element = <App name="world" />;

const container = document.getElementById("root");
Didact.render(element, container);
