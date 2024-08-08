function updateMapURL(pTagText) {
        
        // Get the text from the p tag
        const newStr = pTagText.replace(/\s/g, "+");
        // Replace "colombo national museum" in the URL with the p tag text
        const mapUrl = "https://www.google.com/maps/embed/v1/search?q=colombo+national+museum&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8".replace(
          "colombo+national+museum",
          newStr
        );
      
        // Update the iframe src attribute (assuming you have an iframe with id="map")
        document.getElementById("map").src = mapUrl;
      }
      document.querySelector("#bigtitle").addEventListener("change",() => {
        updateMapURL(document.getElementById("bigtitle").textContent);

      });

function search() {
const qry = document.getElementById("query");
    updateMapURL(qry.value)
}