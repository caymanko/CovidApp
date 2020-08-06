// All characters List (Image, Id, Name)
function listCountries() {
  var apiURL = "https://api.covid19api.com/summary";
  var page = event.target;
  var webListNode = page.querySelector("#web-list-node");

  $.ajax(apiURL).done(function(all) {
    for (let i = 0; i <= all.Countries.length; i++) {
      var createListItem = function(i) {
        return ons.createElement(
          "<ons-list-item>" +
            '<span class="list-item__subtitle" id="Name" style="font-weight: 500;">' +
            all.Countries[i].Country +
            "</span></div>" +
            '<div class="right"><ons-button onclick="showModal(' +
            i +
            ')" icon="md-caret-right"></ons-button></div>' +
            "</ons-list-item>"
        );
      };

      webListNode.appendChild(createListItem(i));
    }
  });
}
