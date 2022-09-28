// 1. 先去探索 solidjs 响应式
import { createEffect } from "solid-js";
import { createSignal } from "solid-js";
import { render } from "solid-js/web";
import {App} from './App'

// let count = 1;
// let b = count + 10;

// console.log(b);

// count = 10;
// b = count + 10;
// console.log(b);

// react
// let [count, setCount] = createSignal(1);
// vue ref count.value
// react count

// 收集依赖
// createEffect(() => {
//   let b = count() + 10;
//   console.log(b);
// });

// setInterval(() => {
//   // 响应式对象
//   setCount(count() + 1);
// }, 1000);

// function createSignal(value) {
//   const effects = new Set();
//   function read() {
//     if (currentEffect) effects.add(currentEffect);
//     return value;
//   }

//   function write(newValue) {
//     value = newValue;
//     for (const effect of effects) {
//       effect();
//     }
//   }

//   return [read, write];
// }

// var currentEffect;
// function createEffect(effect) {
//   currentEffect = effect;
//   effect();
//   currentEffect = null;
// }

// 视图
// let [count, setCount] = createSignal(1);

// createEffect(() => {
//   document.body.innerHTML = ``;

//   const div = document.createElement("div");
//   div.innerText = `count: ${count()}`;
//   document.body.append(div);
// });

// setInterval(() => {
//   setCount(count() + 1);
// }, 1000);

render(App, document.querySelector("#app"))
console.log("aaaa")

