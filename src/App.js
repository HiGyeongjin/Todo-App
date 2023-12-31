import "./App.css";
import React, { useState } from "react";
import InsertForm from "./components/InsertForm";
import ListView from "./components/listView";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleInsert = (value) => {
    setTodoList((current) => {
      //여기서 current는 현재값을 불러와서 맨뒤에 새로 입력된 값을
      //삽입해준다는 의미임.현재값을 전달받는 함수를 생성중임.
      const newTodoList = [...current]; //array나 object를 갖는 state일 경우, 새로운 변수를
      //생성한 뒤 값을 복사해와야 함.
      newTodoList.push({
        key: new Date().getTime(), // JSX에서 Array의 값을 표현할 때 각 요소를 구분하기 위한 값
        value, // onInsert로부터 전달받은 값,
        isCompleted: false, // 완료 처리를 위한 flag
      });
      return newTodoList;
    });
  };
  //윗 코드와 바로 아래 코드가 같음.
  // const handleInsert = (value) => {
  //   setTodoList((current) => {
  //     const newList = [...current];
  //     newList.push({
  //       key: new Date().getTime(),
  //       value,
  //       isCompleted: false,
  //     });
  //     return newList;
  //   });
  // };

  //엘리스 7주차 16 종합실습 실습 4 css로 하면 됨.
  //InsertForm 에서 input 확인해서 css수정하기

  const handleComplete = (index) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList[index].isCompleted = true;
      return newTodoList;
    });
  };

  const handleRemove = (index) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList.splice(index, 1);
      return newTodoList;
    });
  };
  return (
    <div className="App">
      <ListView
        todoList={todoList}
        onComplete={handleComplete}
        onRemove={handleRemove}
      />
      <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;
