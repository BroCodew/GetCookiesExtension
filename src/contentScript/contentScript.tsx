import React, { useEffect, useState } from "react";
import "./index.scss";

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

  // useEffect(() => {
  //   // Hàm lấy giá trị cookie "c_user"
  //   const getCookieValue = () => {
  //     return new Promise((resolve, reject) => {
  //       chrome.cookies.get(
  //         {
  //           url: "https://facebook.com",
  //           name: "c_user",
  //         },
  //         (cookie) => {
  //           if (chrome.runtime.lastError) {
  //             // Xử lý lỗi nếu có
  //             reject(chrome.runtime.lastError);
  //           } else {
  //             resolve(cookie && cookie.value);
  //           }
  //         }
  //       );
  //     });
  //   };

  //   // Sử dụng hàm để lấy giá trị cookie và cập nhật state
  //   getCookieValue()
  //     .then((cUser) => {
  //       if (typeof cUser === "string") {
  //         // Kiểm tra kiểu dữ liệu
  //         setName(cUser);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Lỗi khi lấy giá trị cookie:", error);
  //     });
  // }, []);

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
