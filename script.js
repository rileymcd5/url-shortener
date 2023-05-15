function shortenUrl() {
  var longUrl = document.getElementById("long-url").value;

  if (longUrl.trim() === "") {
    alert("Please enter a URL");
    return;
  }

  // Make an API request to your URL shortening service
  // You can replace the API endpoint with your own implementation
  fetch("https://your-url-shortener-api.com/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ longUrl: longUrl }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.shortUrl) {
        document.getElementById("short-url").innerHTML =
          "Shortened URL: <a href='" + data.shortUrl + "' target='_blank'>" + data.shortUrl + "</a>";
      } else {
        document.getElementById("short-url").innerHTML = "Unable to shorten the URL";
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
      document.getElementById("short-url").innerHTML = "An error occurred";
    });
}
