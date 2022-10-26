import { TodoList } from "./TodoList";
import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const checkBox = () => {
  const [done, setDone] = useState(false);
  const click = () => {
    setDone(true);
  };
  if (done) {
    return (
      <div className="todo-item-container done">
        <FaRegCheckCircle
          className="item-done-button"
          color="#9a9a9a"
          onClick={click}
        />
        <div className="item-title">Build some websites</div>
      </div>
    );
  }
  return;
  <TodoList />;
};

export default checkBox;
