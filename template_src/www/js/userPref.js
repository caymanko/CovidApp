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
            // set the toolbar center item to show the page.data.title
            var page = document.getElementById("first-template");
            console.log(page);

            // page.querySelector("#SingleTitle").innerHTML = name;
            page.querySelector("#home-totalConfirmed").innerHTML = confirmed;
            page.querySelector("#home-totalDeaths").innerHTML = deaths;
            page.querySelector("#home-totalRecovered").innerHTML = recovered;
            page.querySelector("#home-newConfirmed").innerHTML = newConfirmed;
            page.querySelector("#home-newDeaths").innerHTML = newDeaths;
            page.querySelector("#home-newRecovered").innerHTML = newRecovered;
            page.querySelector("#home-date").innerHTML = date;
          }
        }
      }
    })
    .always(function() {
      spinnerModal.hide();
    });
}
