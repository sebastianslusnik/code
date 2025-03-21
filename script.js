document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("urlInput");
  let defaultUrlInput = "SESLU1";
  const currentUrlText = document.getElementById("currentUrlText");
  const currentUrl = document.getElementById("currentUrl");
  const fullEmailButton = document.getElementById("fullEmail");
  const shortEmailButton = document.getElementById("shortEmail");
  const passwordButton = document.getElementById("password");
  const userButton = document.getElementById("user");
  const codeButton = document.getElementById("code");
  const dinnerButton = document.getElementById("dinner");
  const vzvButton = document.getElementById("vzv");

  const qrcodeColor_Dark = "#222";
  const qrcodeColor_Light = "#eeeeee";

  const qrcode = new QRCode("qrcode", {
    text: defaultUrlInput,
    colorDark: qrcodeColor_Dark,
    colorLight: qrcodeColor_Light,
    correctLevel: QRCode.CorrectLevel.H
  });

  const updateQRCode = (url) => {
    if (url.trim() === "") {
      url = defaultUrlInput;
      currentUrlText.textContent = "Converted value:";
      currentUrl.textContent = defaultUrlInput;
    } else {
      if (
        url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("localhost:") ||
        url.startsWith("192.") ||
        url.endsWith(".com")
      ) {
        currentUrlText.textContent = "Current URL:";
        currentUrl.textContent = url;
      } else {
        currentUrlText.textContent = "Current Text:";
        currentUrl.textContent = url;
      }
    }
    qrcode.makeCode(url);
  };

  const handleInputChange = () => {
    const url = urlInput.value.trim();
    updateQRCode(url);
  };

  urlInput.addEventListener("blur", handleInputChange);
  urlInput.addEventListener("input", handleInputChange);

  fullEmailButton.addEventListener("click", () => {
    const datavalue = "sebastian.slusnik@ingka.ikea.com";
    updateQRCode(datavalue);
  });

  shortEmailButton.addEventListener("click", () => {
    const datavalue = "sebastian.slusnik";
    updateQRCode(datavalue);
  });

  passwordButton.addEventListener("click", () => {
    const datavalue = "S1usn1k.1997";
    updateQRCode(datavalue);
  });

  userButton.addEventListener("click", () => {
    const datavalue = "SESLU1";
    updateQRCode(datavalue);
  });

  codeButton.addEventListener("click", () => {
    const datavalue = "9833";
    updateQRCode(datavalue);
  });

  dinnerButton.addEventListener("click", () => {
    const datavalue =
      "https://forms.office.com/Pages/ResponsePage.aspx?id=emMLclplz0CBavIvQHVcLKQfJQkW92xPpV59F_V59yZUQThOQjhITkI5TVBGVUM3SDlRQlY1R1kwOC4u&origin=QRCode";
    updateQRCode(datavalue);
  });

  vzvButton.addEventListener("click", () => {
    const datavalue =
      "https://forms.office.com/Pages/ResponsePage.aspx?id=emMLclplz0CBavIvQHVcLKQfJQkW92xPpV59F_V59yZUMURLVjhSVURCUFkwVkZLSkpDWENDMUpTSS4u&origin=QRCode";
    updateQRCode(datavalue);
  });

  updateQRCode(defaultUrlInput);
});

const toggleDarkMode = () => {
  const elements = document.querySelectorAll(".light-mode");
  elements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
};
