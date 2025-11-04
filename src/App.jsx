import React, { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);  

  function incrementCount() {
    setCount(count + 1);
  }

  async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice"); 
    const data = await res.json();
    console.log("The Advice:\n "+data.slip.advice+ "\n" + "the ID of the advice:\n "+ data.slip.id); // Log the advice to the console for now
    setAdvice(data.slip.advice);
  
  }

  function handerClickForGetAdvice() {
    fetchAdvice();
    incrementCount();
  }

  return (
    <>
      <div>
        <h1>{advice === "" ? "Click to get your advice for today": advice}</h1>
        <button onClick={handerClickForGetAdvice}>get advice</button>
        <button onClick={() => {setAdvice("")}}> clear </button>
        <Message count={count} />
        
      </div>
    </>
  );
}
function Message(props){
  return <h2>You have requested advice {props.count} times</h2>;
}
export default App;
