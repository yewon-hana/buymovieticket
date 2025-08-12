let loginStatus = localStorage.getItem("loginMember");
let curMovies = JSON.parse(localStorage.getItem("curMovies"));

let ticket = document.getElementById("ticket");
let login = document.getElementById("login");
// let user = document.getElementById("user");
let movie1 = document.getElementById("movie1");
let movie2 = document.getElementById("movie2");
let movie3 = document.getElementById("movie3");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let buy = document.getElementById("buy");
let shortInfo = document.getElementById("shortInfo");
let ageImg = document.getElementById("ageImg");
let index = 0;

//버튼 hover 이벤트
prev.onmouseover = btnHover;
next.onmouseover = btnHover;
prev.onmouseout = btnDown;
next.onmouseout = btnDown;

//영화 정보 표시
ageFor();

checking();

//로그인 상태면 로그아웃과 user 페이지 버튼 뜨게
function checking() {
  if (loginStatus != "") {
    login.src = "/icons/logout.png";
    login.style.width = "25px";
    login.style.paddingBottom = "12px";
    // user.style.display='inline-block';
  } else {
    login.src = "/icons/login.png";
    // user.style.display='hidden';
  }
}

function ageFor() {
  ageImg.src = curMovies[index]["age"];
  shortInfo.innerText = curMovies[index]["shortInfo"];
}

function btnHover() {
  this.style.backgroundColor = "lightgray";
}

function btnDown() {
  this.style.backgroundColor = "white";
}

//index값에 맞는 영화 순서 바꾸기
next.addEventListener("click", function () {
  if (index == 0) {
    movie1.style.visibility = "visible";
    prev.style.visibility = "visible";
  }
  movie1.src = curMovies[index]["poster"];
  movie2.src = curMovies[index + 1]["poster"];
  if (index == 3) {
    next.style.visibility = "hidden";
    movie3.style.visibility = "hidden";
  } else {
    movie3.src = curMovies[index + 2]["poster"];
  }
  index++;
  ageFor();
});

prev.addEventListener("click", () => {
  if (index == 4) {
    movie3.style.visibility = "visible";
    next.style.visibility = "visible";
  }
  movie3.src = curMovies[index]["poster"];
  movie2.src = curMovies[index - 1]["poster"];
  if (index == 1) {
    prev.style.visibility = "hidden";
    movie1.style.visibility = "hidden";
  } else {
    movie1.src = curMovies[index - 2]["poster"];
  }
  index--;
  ageFor();
});

//중앙의 영화 클릭하면 상세 페이지로 넘어가기
movie2.onclick = function () {
  localStorage.setItem("selectedMovie", JSON.stringify(curMovies[index]));
  window.location.href = "movieInfo.html";
};

//예매하기 누르면 상영관 선택 화면으로 이동
buy.addEventListener("click", function () {
  window.location.href = "selectDateTimeTheater.html";
  localStorage.setItem("selectedMovie", JSON.stringify(curMovies[index]));
});

//상단의 티켓을 누르면
//로그인 상태 : 예매한 티켓 표시
//로그아웃 상태 : 로그인 페이지로 이동 (confirm)
ticket.addEventListener("click", function () {
  if (loginStatus == "") {
    let logincheck = confirm("로그인이 필요한 서비스입니다! 로그인해 주세요");
    if (logincheck) {
      window.location.href = "login.html";
    }
  } else {
    let ticketCheck = JSON.parse(loginStatus)["tickets"];

    if (ticketCheck != "") {
      window.location.href = "showMovieTicket.html";
    } else {
      alert("구매한 티켓 정보가 없습니다");
    }
  }
});

//login과 logout 기능
login.addEventListener("click", () => {
  if (loginStatus == "") {
    window.location.href = "login.html";
  } else {
    let check = confirm("진짜 로그아웃 하시겠습니까?");
    if (check) {
      localStorage.setItem("loginMember", "");
      window.location.href = "selectMovie.html";
    }
  }
});

// user.addEventListener('click',()=>{
//     window.location.href = "userPage.html";
// })
