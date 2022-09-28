import { createSignal } from "solid-js";
let id = 0;
export function useTodo() {
  let [items, setItems] = createSignal([]);
  const createItem = (content) => {
    return {
      content,
      id: id++,
    };
  };
  const removeItem = function (id) {
    setItems(items().filter((item) => item.id !== id));
  };
  const addItem = function (content) {
    setItems([...items(), createItem(content)]);
  };

  return {
    items,
    removeItem,
    addItem,
  };
}
