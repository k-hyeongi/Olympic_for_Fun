// footer 관련 js
var goFirst = document.querySelector("#goFirst");
var goThird = document.querySelector("#goThird");

goFirst.addEventListener("click",firstPage);
goThird.addEventListener("click",thirdPage);

function firstPage() {
  location.href = "../page2.html";
}

function thirdPage() {
  alert("다음은 없습니다..");
}