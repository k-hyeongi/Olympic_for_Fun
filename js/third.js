
// goBack footer
var nextBtn = document.querySelector("#goBack");

nextBtn.addEventListener("click",nextPage);

function nextPage() {
  location.href = "page2.html";
}