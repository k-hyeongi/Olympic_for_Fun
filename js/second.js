// 종목 관련 js
var num = new Array(46);
load();

function load() {
  for (let i=1; i<=2; i++) {
    let temp = i;
    num[i-1] = document.querySelector("#sport"+temp);
    num[i-1].addEventListener("click",goEvent);
  }
}

function goEvent(e) {
  console.log(e.target.id);
  let temp = e.target.id;
  location.href = "html/"+ temp[5] +".html";
}







// footer 관련 js
var goFirst = document.querySelector("#goFirst");
var goThird = document.querySelector("#goThird");

goFirst.addEventListener("click",firstPage);
goThird.addEventListener("click",thirdPage);

function firstPage() {
  location.href = "index.html";
}

function thirdPage() {
  location.href = "page3.html";
}