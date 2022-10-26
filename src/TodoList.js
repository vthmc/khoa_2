import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = (props) => {
  const data = props.dataList || [];
  const indexActive = props.indexActive;
  return (
    <div className="todo-list-container">
      {data.map((res, index) => {
        const active = index === indexActive;
        console.log("active", index, indexActive);
        return (
          <div
            type="checkbox"
            onClick={() => props.setIndexActive(index)}
            className={`todo-item-container ${active ? "done" : ""}`}
          >
            {!active ? (
              <FaRegCircle
                type="checkbox"
                className="item-done-button"
                color="#9A9A9A"
              />
            ) : (
              <FaRegCheckCircle
                type="checkbox"
                className="item-done-button"
                color="#9A9A9A"
              />
            )}
            <div className="item-title">{res || ""}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
