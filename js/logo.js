var logo = document.querySelector("#logo");
var logoDetail = document.querySelector("#logoDetail");
var content = document.querySelector("#content");
var detail = document.querySelector("#detail");

logo.addEventListener("click",changeLogo);

let show = false;

function changeLogo() {
  if (show==false) {
    logo.style.display = "inline";
    logoDetail.style.display = "inline";
    content.style.display = "none";
    detail.style.display = "none";
    show = true;
  }
  else {
    logo.style.display = "block";
    logoDetail.style.display = "none";
    content.style.display = "block";
    detail.style.display = "block";
    show = false;
  }
}