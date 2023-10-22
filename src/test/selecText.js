// console.log("content script running", chrome);
// const bodyDom = document.querySelector("body");

// let selectionText = "";

// function getSelectedText() {
//   let selectedText = "";

//   // window.getSelection
//   if (window.getSelection) {
//     selectedText = window.getSelection().toString();
//   }
//   // document.getSelection
//   else if (document.getSelection) {
//     selectedText = document.getSelection().toString();
//   }
//   // document.selection
//   else if (document.selection) {
//     selectedText = document.selection.createRange().text;
//   } else return;
//   // To write the selected text into the textarea
//   return selectedText;
// }

// function getSelectedTextNode() {
//   let selectedText = "";

//   // window.getSelection
//   if (window.getSelection) {
//     selectedText = window.getSelection();
//   }
//   // document.getSelection
//   else if (document.getSelection) {
//     selectedText = document.getSelection();
//   }
//   // document.selection
//   else if (document.selection) {
//     selectedText = document.selection.createRange();
//   } else return;
//   // To write the selected text into the textarea
//   return selectedText;
// }

// function getRangeSelectionText() {
//   const selectionTextNode = getSelectedTextNode();

//   const getRange = selectionTextNode.getRangeAt(0);

//   const selectionRect = getRange.getBoundingClientRect();
//   return selectionRect;
// }

// function renderTooltipTranslator(selectionTextRange, selectionText) {
//   const tooltipWrapper = document.createElement("div");
//   tooltipWrapper.id = "translator-ext-rhpteam";
//   const tooltipIcon = document.createElement("div");
//   tooltipIcon.classList.add("translator-etx-icon");
//   tooltipIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 800 800">
//   <?xml version="1.0" encoding="iso-8859-1"?>
//   <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
//   <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
//      viewBox="0 0 512 512" xml:space="preserve">
//   <path style="fill:#D7DEED;" d="M503.983,84.977c0-14.168-11.485-25.653-25.653-25.653H33.67c-14.168,0-25.653,11.485-25.653,25.653
//     v42.756h495.967V84.977z"/>
//   <path style="fill:#EFF2FA;" d="M230.347,418.472H50.772c-4.722,0-8.551-3.829-8.551-8.551V170.489c0-4.722,3.829-8.551,8.551-8.551
//     h179.574c4.722,0,8.551,3.829,8.551,8.551v239.432C238.898,414.643,235.069,418.472,230.347,418.472z"/>
//   <path style="fill:#28AFF0;" d="M461.228,418.472H281.653c-4.722,0-8.551-3.829-8.551-8.551V170.489c0-4.722,3.829-8.551,8.551-8.551
//     h179.574c4.722,0,8.551,3.829,8.551,8.551v239.432C469.779,414.643,465.95,418.472,461.228,418.472z"/>
//   <path d="M478.33,51.307H33.67C15.105,51.307,0,66.411,0,84.977v342.046c0,18.566,15.105,33.67,33.67,33.67h444.66
//     c18.566,0,33.67-15.105,33.67-33.67V84.977C512,66.411,496.895,51.307,478.33,51.307z M33.67,67.34h444.66
//     c9.725,0,17.637,7.912,17.637,17.637v34.739H16.033V84.977C16.033,75.252,23.945,67.34,33.67,67.34z M478.33,444.66H33.67
//     c-9.725,0-17.637-7.912-17.637-17.637V135.749h479.933v291.273C495.967,436.748,488.055,444.66,478.33,444.66z"/>
//   <path d="M127.733,101.545h342.046c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H127.733
//     c-4.427,0-8.017,3.589-8.017,8.017C119.716,97.956,123.305,101.545,127.733,101.545z"/>
//   <path d="M330.146,272.057c4.146,1.553,8.767-0.546,10.321-4.691l4.463-11.9h44.471l4.463,11.9c1.207,3.218,4.262,5.204,7.507,5.204
//     c0.935,0,1.887-0.165,2.813-0.512c4.145-1.555,6.247-6.175,4.691-10.321l-22.657-60.419c-2.958-7.891-10.609-13.192-19.071-13.192
//     c-8.427,0-16.077,5.302-19.036,13.192l-22.657,60.419C323.899,265.882,326,270.503,330.146,272.057z M363.123,206.946
//     c0.625-1.667,2.243-2.788,4.059-2.788c1.782,0,3.398,1.12,4.023,2.788l12.182,32.486h-32.446L363.123,206.946z"/>
//   <path d="M230.347,153.921H50.772c-9.136,0-16.568,7.432-16.568,16.568v239.432c0,9.136,7.432,16.568,16.568,16.568h179.574
//     c9.136,0,16.568-7.432,16.568-16.568V170.489C246.914,161.353,239.482,153.921,230.347,153.921z M230.881,409.921
//     c0,0.295-0.239,0.534-0.534,0.534H50.772c-0.295,0-0.534-0.239-0.534-0.534V170.489c0-0.295,0.239-0.534,0.534-0.534h179.574
//     c0.295,0,0.534,0.239,0.534,0.534V409.921z"/>
//   <path d="M461.228,153.921H281.653c-9.136,0-16.568,7.432-16.568,16.568v239.432c0,9.136,7.432,16.568,16.568,16.568h179.574
//     c9.136,0,16.568-7.432,16.568-16.568V170.489C477.795,161.353,470.363,153.921,461.228,153.921z M461.762,409.921
//     c0,0.295-0.239,0.534-0.534,0.534H281.653c-0.295,0-0.534-0.239-0.534-0.534V170.489c0-0.295,0.239-0.534,0.534-0.534h179.574
//     c0.295,0,0.534,0.239,0.534,0.534V409.921z"/>
//   <path d="M307.307,315.324h25.653c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-25.653
//     c-4.427,0-8.017,3.589-8.017,8.017C299.29,311.734,302.88,315.324,307.307,315.324z"/>
//   <path d="M307.307,349.528h59.858c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-59.858
//     c-4.427,0-8.017,3.589-8.017,8.017C299.29,345.939,302.88,349.528,307.307,349.528z"/>
//   <path d="M435.574,299.29h-68.409c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h68.409
//     c4.427,0,8.017-3.589,8.017-8.017C443.591,302.88,440.001,299.29,435.574,299.29z"/>
//   <path d="M332.96,367.699h-25.653c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653
//     c4.427,0,8.017-3.589,8.017-8.017C340.977,371.289,337.388,367.699,332.96,367.699z"/>
//   <path d="M435.574,367.699h-68.409c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h68.409
//     c4.427,0,8.017-3.589,8.017-8.017C443.591,371.289,440.001,367.699,435.574,367.699z"/>
//   <path d="M435.574,333.495H401.37c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h34.205
//     c4.427,0,8.017-3.589,8.017-8.017C443.591,337.084,440.001,333.495,435.574,333.495z"/>
//   <path d="M204.693,367.699H179.04c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653
//     c4.427,0,8.017-3.589,8.017-8.017C212.71,371.289,209.12,367.699,204.693,367.699z"/>
//   <path d="M204.693,333.495h-59.858c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h59.858
//     c4.427,0,8.017-3.589,8.017-8.017C212.71,337.084,209.12,333.495,204.693,333.495z"/>
//   <path d="M144.835,367.699H76.426c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h68.409
//     c4.427,0,8.017-3.589,8.017-8.017C152.852,371.289,149.262,367.699,144.835,367.699z"/>
//   <path d="M204.693,299.29H179.04c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653
//     c4.427,0,8.017-3.589,8.017-8.017C212.71,302.88,209.12,299.29,204.693,299.29z"/>
//   <path d="M76.426,315.324h68.409c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H76.426
//     c-4.427,0-8.017,3.589-8.017,8.017C68.409,311.734,71.999,315.324,76.426,315.324z"/>
//   <path d="M76.426,349.528h34.205c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H76.426
//     c-4.427,0-8.017,3.589-8.017,8.017C68.409,345.939,71.999,349.528,76.426,349.528z"/>
//   <path d="M110.63,212.71h42.317c-1.075,5.499-3.35,13.164-8.132,20.872c-1.283-2.08-2.46-4.255-3.505-6.544
//     c-1.84-4.028-6.597-5.8-10.623-3.961c-4.028,1.84-5.801,6.595-3.961,10.623c2.052,4.491,4.504,8.695,7.321,12.596
//     c-4.735,4.154-10.583,7.907-17.845,10.812c-4.111,1.644-6.11,6.31-4.466,10.421c1.254,3.134,4.264,5.041,7.446,5.041
//     c0.991,0,1.999-0.185,2.975-0.576c9.269-3.708,16.734-8.477,22.757-13.76c6.486,5.704,14.058,10.345,22.595,13.76
//     c0.977,0.391,1.984,0.576,2.975,0.576c3.182,0,6.192-1.907,7.446-5.041c1.645-4.111-0.355-8.777-4.466-10.421
//     c-6.798-2.719-12.731-6.302-17.792-10.704c9-12.476,12.331-25.563,13.56-33.694h9.805c4.427,0,8.017-3.589,8.017-8.017
//     s-3.589-8.017-8.017-8.017h-26.186v-0.534c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v0.534H110.63
//     c-4.427,0-8.017,3.589-8.017,8.017S106.203,212.71,110.63,212.71z"/>
//   <circle cx="42.221" cy="93.528" r="8.017"/>
//   <circle cx="67.875" cy="93.528" r="8.017"/>
//   <circle cx="93.528" cy="93.528" r="8.017"/>
//   </svg>
// </svg>`;

//   tooltipWrapper.appendChild(tooltipIcon);

//   const top = selectionTextRange.top + selectionTextRange.height + 6 + "px";
//   const left =
//     selectionTextRange.left +
//     (selectionTextRange.width / 2 - tooltipWrapper.offsetWidth / 2) +
//     "px";

//   tooltipWrapper.style.position = "absolute";
//   tooltipWrapper.style.background = "white";
//   tooltipWrapper.style.padding = "4px";
//   tooltipWrapper.style.top = top;
//   tooltipWrapper.style.left = left;
//   bodyDom.appendChild(tooltipWrapper);
//   console.log("selectionText", selectionText);

//   if (tooltipWrapper) {
//     tooltipWrapper.addEventListener("click", async () => {
//       console.log("selectionText", selectionText);
//       if (selectionText.length > 0) {
//         try {
//           const response = await fetch(
//             `http://localhost:3000/api/translator?keywords=${selectionText}&input=vi&output=en`
//           );
//           // Xử lý kết quả ở đây
//           const result = await response.json();
//           console.log("dich", result.text);
//         } catch (error) {
//           console.error("lỗi ở đây", error);
//         }
//       }
//     });
//   }
// }

// bodyDom.addEventListener("mouseup", () => {
//   selectionText = getSelectedText();
//   if (selectionText && selectionText.length > 0) {
//     const selectionTextRange = getRangeSelectionText();
//     renderTooltipTranslator(selectionTextRange, selectionText);
//     setTimeout(() => {
//       const tooltipWrapper = document.querySelector(
//         "div#translator-etx-rhpteam"
//       );
//       if (tooltipWrapper) tooltipWrapper.remove();
//     }, 3000);
//   }
// });

// console.log("");
