import React from "react";
import { useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onInsert === "function") {
      onInsert(inputValue); //props로부터 전달받은 onInsert함수를 호출. 그때 전달받는 값은
      //inputValue로 전달받음.
    }
    setInputValue(""); //이거는 엔터치고 나서 submit하고 input값을 초기화해줌.
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default InsertForm;
