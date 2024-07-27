import "./index.css";

import Card from "./Card";
import products from "./data";
import Counter from "./Counter";
import Switch from "./Switch";
import Gallery from "./Gallery";
import Form from "./Form";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
    <Form/>
    </div>
  );
}

export default App;
