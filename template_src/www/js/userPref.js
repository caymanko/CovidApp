function getpref(selectCountry) {
  var apiURL = "https://api.covid19api.com/summary";
  var spinnerModal = document.querySelector("#spinner-modal");
  //   spinnerModal.show();
  $.ajax(apiURL)
    .done(function(cData) {
      getValue(selectCountry);
      function getValue(selectCountry) {
        for (var i = 0; i < cData.Countries.length; i++) {
          if (cData.Countries[i].Country == selectCountry) {
            // Gather info from the Country
            var confirmed = cData.Countries[i].TotalConfirmed;
            var deaths = cData.Countries[i].TotalDeaths;
            var recovered = cData.Countries[i].TotalRecovered;
            var newConfirmed = cData.Countries[i].NewConfirmed;
            var newDeaths = cData.Countries[i].NewDeaths;
            var newRecovered = cData.Countries[i].NewRecovered;
            var date = cData.Countries[i].Date;

            //Display Data onto the Home page
            document.querySelector(
              "#home-totalConfirmed"
            ).innerHTML = confirmed;
            document.querySelector("#home-totalDeaths").innerHTML = deaths;
            document.querySelector(
              "#home-totalRecovered"
            ).innerHTML = recovered;
            document.querySelector(
              "#home-newConfirmed"
            ).innerHTML = newConfirmed;
            document.querySelector("#home-newDeaths").innerHTML = newDeaths;
            document.querySelector(
              "#home-newRecovered"
            ).innerHTML = newRecovered;
            document.querySelector("#home-date").innerHTML = date;
          }
        }
      }
    })
    .always(function() {
      spinnerModal.hide();
    });
}
