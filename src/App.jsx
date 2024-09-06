import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState("");

  const isRef = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isRef.current) {
      isRef.current = true;
      return;
    }
    console.log("update");
  });

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : ""}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
