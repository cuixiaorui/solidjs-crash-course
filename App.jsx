// import { createSignal, createEffect } from "solid-js";
import {Todo} from './Todo'

// function Counter(props) {
//   let [count, setCount] = createSignal(1);

//   createEffect(() => {
//     let b = count() + 10;
//     console.log(b);
//   });

//   const handleClick = () => {
//     setCount(count() + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>click</button>
//       count: {count()}
//     </div>
//   );
// }

// export function App() {
//   return (
//     <div>
//       <Counter initCount={1}></Counter>
//       <Counter initCount={2}></Counter>
//       <Counter initCount={3}></Counter>
//     </div>
//   );
// }

export function App() {
  return (
    <div>
      <Todo></Todo>
    </div>
  );
}
