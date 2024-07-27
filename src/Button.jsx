


function Button({ text = "click here" }) {
  return (
    <button
      style={{
        backgroundColor: "red",
        color:"green"
      }}
    >
      {text}
    </button>
  );
}


function Component2(){
  return (
    <div>
      this is component 2
    </div>
  )
}

export default Button;

export {Component2}