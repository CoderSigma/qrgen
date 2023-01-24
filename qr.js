alert("test")
    function generateQRCode() {
      // Get the text from the input field
      var text = document.getElementById("text-input").value;

      // Check if the text is not empty
      if (text) {
        // Set the QR code content
        var qrCodeContent = "https://chart.googleapis.com/chart?cht=qr&chl=" + text + "&chs=200x200&choe=UTF-8&chld=L|2";

        // Set the QR code image source
        document.getElementById("qr-img").innerHTML = "<img src='" + qrCodeContent + "'>";
      }
    }
