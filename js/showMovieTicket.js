let mvObj = JSON.parse(localStorage.getItem("curMovies"));

let loginMem = JSON.parse(localStorage.getItem("loginMember"));

let tickets = loginMem["tickets"];

let forw = document.getElementById("forw");
let mvPoster = document.getElementById("ticketPoster");
let mvTitle = document.getElementById("title");
let mem = document.getElementById("mem");
let seat = document.getElementById("seat");
let timedate = document.getElementById("time");

for (i = 0; i < tickets.length; i++) {
  let mv = tickets[i];

  mvPoster.src = mvObj[mv["mvId"]].poster;
  mvTitle.innerText = mvObj[mv["mvId"]].title;

  //티켓 예매한 인원 출력
  let mvMem = mv["mvMem"];
  let total = 0;
  for (let j in mvMem) {
    if (mvMem[j] != 0) {
      total += mvMem[j];
    }
  }
  let m = document.createElement("span");
  m.innerHTML = ` 총 ${total} 명  `;
  mem.appendChild(m);

  let mvSeat = mv["mvSeat"];
  
  for (let j in mvSeat) {
    let s = document.createElement("span");
    s.innerHTML += ` ${mvSeat[j]}`;
    seat.appendChild(s);
  }

  let mvTime = mv["mvTime"];
  let mvDate = mv["mvDate"];

  timedate.innerHTML += `상영 날짜 : ${mvDate} <br><br>`;
  for (let i in mvTime) {
    switch (i) {
      case "theater":
        timedate.innerHTML += `<br><br>상영관 : ${mvTime[i]}`;
        break;
      case "time":
        timedate.innerHTML += `상영 시간 :  ${mvTime[i]}`;
        break;
    }
  }
}

//뒤로가기 버튼
forw.addEventListener("click", function () {
  window.location.href = "selectMovie.html";
});
