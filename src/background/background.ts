chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "content") {
        console.log("da bat su kien content");
        chrome.cookies.getAll({ url: "https://www.facebook.com/" }, cookies => {
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError });
            } else {
                // Return the cookies in the response message


                setTimeout(() => {
                    console.log("cookies", cookies);

                }, 5000);
                sendResponse({ success: true, cookies: cookies });
            }
        });

        // Return true to indicate that we will send a response asynchronously
        return true;
    }
    if (request.action === "popup") {
        chrome.cookies.getAll({ domain: ".facebook.com" }, cookies => {
            console.log("da bat su kien popup 1", cookies);
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError });
            } else {
                // Return the cookies in the response message
                setTimeout(() => {
                    console.log("cookies !", cookies);

                }, 2000);
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
