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
        confirmed;
      page.querySelector("#totalDeaths").innerHTML = deaths;
      page.querySelector("#totalRecovered").innerHTML = recovered;
      page.querySelector("#newConfirmed").innerHTML = newConfirmed;
      page.querySelector("#newDeaths").innerHTML =  newDeaths;
      page.querySelector("#newRecovered").innerHTML = newRecovered;
      page.querySelector("#date").innerHTML = date;
    })
    .always(function () {
      spinnerModal.hide();
    });
}
