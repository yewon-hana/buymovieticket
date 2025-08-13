//예매 일자 선택 -> 상영 일자/상영관 정보
const dateButtons = document.getElementById("dateButtons");
const scheduleContainer = document.getElementById("scheduleContainer");
const today = new Date();
const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));
const movieImg = document.getElementById("movieImg");

movieImg.src = selectedMovie["poster"];

//예매 일자 자동 생성
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(today.getDate() + i);

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let day = date.getDate();
  if (day < 10) day = "0" + day;
  const dateOnScreen = `${year}-${month}-${day}`;

  //예매 일자 버튼 생성
  const btn = document.createElement("button");
  btn.textContent = `${month} / ${day}`;
  btn.className = "date-btns";
  btn.dataset.date = dateOnScreen;

  btn.addEventListener("click", function () {
    const allButtons = document.querySelectorAll(".date-btns");
    allButtons.forEach((b) => {
      b.style.backgroundColor = "#f0f0f0";
      b.style.color = "black";
    });
    this.style.backgroundColor ="#ff6b6b";
    this.style.color = "white";

    const titleContainer = document.getElementById("titleContainer");
    let h4 = titleContainer.querySelector(".titleSelectTimeTheater");

    if (!h4) {
      h4 = document.createElement("h4");
      h4.className = "titleSelectTimeTheater";
      titleContainer.appendChild(h4);
    }

    h4.innerHTML = "상영 정보";
    const clickedDate = this.dataset.date;
    showSchedule(clickedDate);
  });

  dateButtons.appendChild(btn);
}

//예매 일자 버튼 클릭 시 상영일자와 상영관 정보 출력
function showSchedule(clickedDate) {
  const schedules = selectedMovie["movieSchedule"];
  scheduleContainer.innerText = "";

  if (!schedules || schedules.length === 0) {
    scheduleContainer.textContent = "해당 영화의 상영 정보가 없습니다.";
    return;
  }

  schedules.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerHTML = `${item.time}<br>${item.theater}`;
    btn.className = "schedule-btns";

    btn.addEventListener("click", function () {
      let check = confirm(
        `선택하신 시간은 ${item.time}, 해당 상영관은 ${item.theater} 입니다.`
      );
      if (check) {
        localStorage.setItem("selectedTime", item.time);
        localStorage.setItem("selectedTheater", item.theater);
        localStorage.setItem("selectedDate", clickedDate);
        alert("좌석 선택 페이지로 이동합니다.");
        window.location.href = "selectMemberNum.html";
      } else {
        alert("취소되었습니다. 원하시는 상영 정보를 다시 선택해주세요.");
      }
    });
    scheduleContainer.appendChild(btn);
  });
}
