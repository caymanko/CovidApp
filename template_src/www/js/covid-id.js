function getapi(pIndex) {
  var apiURL = "https://api.covid19api.com/summary";
  var spinnerModal = document.querySelector("#spinner-modal");
  spinnerModal.show();
  $.ajax(apiURL)
    .done(function (cData) {
      var name = cData.Countries[pIndex].Country;
      var confirmed = cData.Countries[pIndex].TotalConfirmed;
      var deaths = cData.Countries[pIndex].TotalDeaths;
      var recovered = cData.Countries[pIndex].TotalRecovered;
      var newConfirmed = cData.Countries[pIndex].NewConfirmed;
      var newDeaths = cData.Countries[pIndex].NewDeaths;
      var newRecovered = cData.Countries[pIndex].NewRecovered;
      var date = cData.Countries[pIndex].Date;

      // set the toolbar center item to show the page.data.title
      var page = document.getElementById("Detail");
      page.querySelector("ons-toolbar .center").innerHTML = "COVID-19 Tracker";

      page.querySelector("#SingleTitle").innerHTML = name;
      page.querySelector("#totalConfirmed").innerHTML =
        "Total Confirmed: " + confirmed;
      page.querySelector("#totalDeaths").innerHTML = "Total Deaths: " + deaths;
      page.querySelector("#totalRecovered").innerHTML =
        "Total Recovered: " + recovered;
      page.querySelector("#newConfirmed").innerHTML =
        "New Confirmed: " + newConfirmed;
      page.querySelector("#newDeaths").innerHTML = "New Deaths: " + newDeaths;
      page.querySelector("#newRecovered").innerHTML =
        "New Recovered: " + newRecovered;
      page.querySelector("#date").innerHTML = date;
    })
    .always(function () {
      spinnerModal.hide();
    });
}
