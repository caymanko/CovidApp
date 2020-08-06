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

      document.querySelector("#countryName").innerHTML =
        '<div class="h2-border"><h2>' + name + "</h2></div>";
      document.querySelector("#totalConfirmed").innerHTML =
        '<span class="modal-head"> Total Confirmed:</span> ' + confirmed;
      document.querySelector("#totalDeaths").innerHTML =
        '<span class="modal-head">Total Deaths:</span> ' + deaths;
      document.querySelector("#totalRecovered").innerHTML =
        '<span class="modal-head">Total Recovered:</span> ' + recovered;
      document.querySelector("#newConfirmed").innerHTML =
        '<span class="modal-head">New Confirmed:</span> ' + newConfirmed;
      document.querySelector("#newDeaths").innerHTML =
        '<span class="modal-head">New Deaths:</span> ' + newDeaths;
      document.querySelector("#newRecovered").innerHTML =
        '<span class="modal-head">New Recovered:</span> ' + newRecovered;
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
