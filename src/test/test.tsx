import React, { useEffect, useState } from "react";

const Test = () => {
  console.log("33333");
  const [name, setName] = useState("");

  // content.js

  const handleInput = (e: any) => {
    chrome.runtime.sendMessage({ action: "popup" }, function (response) {
      console.log(response);
    });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "changeColor" },
        function (response) {
          if (response && response.success) {
            console.log("Màu đã được thay đổi thành màu đỏ.");
          } else {
            console.error("Xảy ra lỗi khi thay đổi màu.");
          }
        }
      );
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
        <button type="submit">Change color</button>
      </form>
    </div>
  );
};

export default Test;
