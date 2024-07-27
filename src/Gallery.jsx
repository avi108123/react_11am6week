import { useState } from "react";
import products from "./data";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  function incIndex() {
    if (index < products.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function decIndex() {
    if (index > 0) setIndex(index - 1);
    else {
      setIndex(products.length - 1);
    }
  }

  return (
    <div>
      <div>
        <img src={products[index].thumbnail} alt="" />
        <img src={products[index+1].thumbnail} alt="" />
        <img src={products[index+2].thumbnail} alt="" />
        <img src={products[index+3].thumbnail} alt="" />
      </div>
      <button onClick={decIndex}>pre</button>
      <button onClick={incIndex}>next</button>
    </div>
  );
};

export default Gallery;
