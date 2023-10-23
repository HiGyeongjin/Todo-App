import React, { useCallback } from "react";
import { useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (typeof onInsert === "function" && inputValue) {
        //해당 코드는 onInsert라는 함수가 부모 컴포넌트로부터 props로 전달된 후 해당 함수가
        //실제로 함수, 즉 function이 맞는 지를 확인하는 코드임.
        //사실 이같은 검사는 기능적으로 반드시 필요한 부분은 아니지만 코드의 안정성의 측면에서
        // 작성해주는 것이 좋음.
        //이를 통해 개발자의 실수 등 다른 타입의 값이 전달되었을 경우
        //에러를 발생시켜 예기치 않은 상황에서 에러를 방지가능.
        onInsert(inputValue); //props로부터 전달받은 onInsert함수를 호출. 그때 전달받는 값은
        //inputValue로 전달받음.
      }
      setInputValue(""); //이거는 엔터치고 나서 submit하고 input값을 초기화해줌.)
    },
    [onInsert, inputValue]
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        marginBottom: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* input 부터 스타일 지정하기  */}
      {/* //엘리스 7주차 16 종합실습 실습 4 css로 하면 됨. */}
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
