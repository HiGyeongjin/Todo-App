import React, { useCallback } from "react";
import { useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (typeof onInsert === "function" && inputValue) {
        onInsert(inputValue); //props로부터 전달받은 onInsert함수를 호출. 그때 전달받는 값은
        //inputValue로 전달받음.
      }
      setInputValue(""); //이거는 엔터치고 나서 submit하고 input값을 초기화해줌.)
    },
    [onInsert, inputValue]
  );

  //7주차 16종합실습 /유용한 팁들 (필수)  실습2 리스트 표현하기 하는데 등록하고
  //완료, 삭제 버튼이랑 등록한 자료들이 안나옴.
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
