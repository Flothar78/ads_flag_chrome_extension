//document
//  .getElementsByClassName(
//    "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
//  )[0].textContent == "Sponsorisé"
//  ? console.log("test OK")
//  : console.log("PAS DU TOUT");

const getClasses = document.getElementsByClassName(
  "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
);

const classesFilter = Array.prototype.filter.call(
  getClasses,
  function (getClasses) {
    console.log(
      getClasses.outerText === "Sponsorisé"
        ? getClasses.outerText
        : "Not promoted"
    );
    return getClasses.outerText === "Sponsorisé";
  }
);

console.log(classesFilter);
