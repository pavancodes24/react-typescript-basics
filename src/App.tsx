import "./styles.css";
import Testing from "./components/Testing";
import { useState } from "react";
import Counter from "./components/Counter";
export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <div>hello</div>
      <Testing name="testing">hello testing component</Testing>
      <Counter setCount={setCount}>count is {count}</Counter>
    </div>
  );
}
