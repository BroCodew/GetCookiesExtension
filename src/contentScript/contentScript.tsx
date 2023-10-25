import React, { useEffect, useState } from "react";
import "./index.scss";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "changeColor") {
    const links = document.querySelectorAll("a");
    links.forEach(function (link) {
      link.style.color = "red";
    });
    sendResponse({ success: true, message: "Color changed to red" });
  }
});

const ContentScript = () => {
  console.log("33333");
  const [name, setName] = useState("");

  const handleInput = (e) => {
    chrome.runtime.sendMessage({ action: "content" }, (response) => {
      if (response && response.success) {
        console.log("Yêu cầu đã được xử lý thành công ở background.js.");
      } else {
        console.error("Xảy ra lỗi khi xử lý yêu cầu ở background.js.");
      }
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

export default ContentScript;
