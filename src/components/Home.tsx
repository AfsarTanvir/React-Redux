import { useEffect, useState } from "react";
import ReduxBasic from "../components/ReduxBasic";
import SumReduxBasic from "../components/SumReduxBasic";
import Posts from "./Posts";

export default function Home() {
  return (
    <div className="m-3 p-2 w-fit rounded bg-yellow-100 hover:bg-yellow-200">
      <h1 className="text-2xl mb-3 text-center">Home</h1>
      <ReduxBasic id={1} />
      <ReduxBasic id={2} />
      <SumReduxBasic />
      <hr className="m-3" />
      {/* <Posts /> */}
      <Parent />
      <Timer />
    </div>
  );
}

function Timer() {
  const [first, setfirst] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(new Date());
    }, 1000);

    return () => clearTimeout(id);
  }, [first]);

  return (
    <div className="bg-red-50 w-full">
      <button onClick={() => setfirst((pre) => !pre)}>On click</button>
    </div>
  );
}

function Parent() {
  const [message, setMessage] = useState("");

  // Step 1: Define handler to receive data from child
  function handleChildData(data: string) {
    setMessage(data);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child: {message}</p>

      {/* Step 2: Pass function to child */}
      <Child onSendData={handleChildData} />
    </div>
  );
}

interface Props {
  onSendData: (data: string) => void;
}

function Child({ onSendData }: Props) {
  const [input, setInput] = useState("");

  // Step 3: Send data up on button click
  return (
    <div>
      <h2>Child Component</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => onSendData(input)}>Send to Parent</button>
    </div>
  );
}
