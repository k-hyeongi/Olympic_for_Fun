var logo = document.querySelector("#logo");
var logoDetail = document.querySelector("#logoDetail");

logo.addEventListener("click",changeLogo);

let show = false;

function changeLogo() {
  if (show==false) {
    logo.style.display = "inline";
    logoDetail.style.display = "inline";
    show = true;
  }
  else {
    logo.style.display = "block";
    logoDetail.style.display = "none";
    show = false;
  }
}