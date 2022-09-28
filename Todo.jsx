import { useTodo } from "./useTodo";

const { items, removeItem, addItem } = useTodo();

function TodoItem(props) {
  return (
    <li>
      {props.item.content}
      <button onClick={() => removeItem(props.item.id)}> remove</button>
    </li>
  );
}

export function Todo() {
  let input = null;

  const handleClick = function () {
    addItem(input.value);
    input.value = "";
  };

  return (
    <div>
      <input type="text" ref={input}></input>
      <button onClick={handleClick}>add</button>

      <ul>
        {items().map((item) => (
          <TodoItem item={item}></TodoItem>
        ))}
      </ul>
    </div>
  );
}
