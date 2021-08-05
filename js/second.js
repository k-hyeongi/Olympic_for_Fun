var goFirst = document.querySelector("#goFirst");
var goThird = document.querySelector("#goThird");

goFirst.addEventListener("click",firstPage);
goThird.addEventListener("click",thirdPage);

function firstPage() {
  location.href = "index.html";
}

function thirdPage() {
  alert("개발중...");
}