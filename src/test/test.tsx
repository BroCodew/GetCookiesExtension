import React, { useEffect, useState } from "react";

const Test = () => {
  console.log("33333");
  const [name, setName] = useState("");

  const handleInput = (e: any) => {
    console.log("im here");
    console.log(e.target.value);

    chrome.runtime.sendMessage({ action: "popup" }, function (response) {
      console.log("I received cookies!");
      console.log(response);
    });
  };

  return (
    <div>
      <form onSubmit={handleInput}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Test;
