import { useState } from "react";

function UseStateHook() {
  const [arr, setArr] = useState(["apple", "banana", "chiku"]);
  const addFruit = (Element) => {
    setArr([...arr, Element.value]);
    Element.value = "";
  };
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input name="value"></input>
      <button
        onClick={() => addFruit(document.querySelector('[name="value"]'))}
      >
        Add fruit
      </button>
    </div>
  );
}

export default UseStateHook;
