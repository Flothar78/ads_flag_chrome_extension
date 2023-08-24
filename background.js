//document
//  .getElementsByClassName(
//    "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
//  )[0].textContent == "Sponsorisé"
//  ? console.log("test OK")
//  : console.log("PAS DU TOUT");

try {
  chrome.tabs.onUpdated.addListener(function (changeInfo, tab) {
    if (changeInfo.status == "complete") {
      chrome.scripting.executeScript({
        files: ["contentScript.js"],
        target: { tabId: tab.id },
      });
    }
  });
} catch (e) {
  console.log(e);
}
//window.scripting.executeScript()({
//  code: alert("The X_Ads Chrome extension is up and running"),
//});
/*
const getClasses = document.body.getElementsByClassName(
  "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
);

const classesFilter = (() => {
  Array.prototype.filter.call(getClasses, function (getClasses) {
    getClasses.outerText == "Sponsorisé"
      ? (getClasses.style.backgroundColor = "red")
      : "";
  });
})()
 window.addEventListener("load", classesFilter());
*/
