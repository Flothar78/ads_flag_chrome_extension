const getClasses = document.body.getElementsByClassName(
  "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
);

const classesFilter = () => {
  alert("The X_Ads Chrome extension is up and running");
  Array.prototype.filter.call(getClasses, function (getClasses) {
    getClasses.outerText == "Sponsorisé"
      ? (getClasses.style.backgroundColor = "red")
      : "";
  });
};
classesFilter();
//}

//window.scripting.executeScript()({
//  code: alert("The X_Ads Chrome extension is up and running"),
//});
/*


const classesFilter = (() => {
  Array.prototype.filter.call(getClasses, function (getClasses) {
    getClasses.outerText == "Sponsorisé"
      ? (getClasses.style.backgroundColor = "red")
      : "";
  });
})()
 window.addEventListener("load", classesFilter());
*/
