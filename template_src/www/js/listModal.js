// MODAL
function showModal(i) {
  var modal = document.querySelector("ons-modal");

  var apiURL = "https://api.covid19api.com/summary";
  var spinnerModal = document.querySelector("#spinner-modal");
  spinnerModal.show();
  $.ajax(apiURL)
    .done(function(cData) {
      var name = cData.Countries[i].Country;
      var confirmed = cData.Countries[i].TotalConfirmed;
      var deaths = cData.Countries[i].TotalDeaths;
      var recovered = cData.Countries[i].TotalRecovered;
      var newConfirmed = cData.Countries[i].NewConfirmed;
      var newDeaths = cData.Countries[i].NewDeaths;
      var newRecovered = cData.Countries[i].NewRecovered;
      var date = cData.Countries[i].Date;

      // set the toolbar center item to show the page.data.title

      document.querySelector("#countryName").innerHTML = name;
      document.querySelector("#totalConfirmed").innerHTML = confirmed;
      document.querySelector("#totalDeaths").innerHTML = deaths;
      document.querySelector("#totalRecovered").innerHTML = recovered;
      document.querySelector("#newConfirmed").innerHTML = newConfirmed;
      document.querySelector("#newDeaths").innerHTML = newDeaths;
      document.querySelector("#newRecovered").innerHTML = newRecovered;
      document.querySelector("#date").innerHTML = date;
    })
    .always(function() {
      spinnerModal.hide();
    });
  modal.show();
}

function hideModal() {
  var modal = document.querySelector("ons-modal");
  modal.hide();
}
