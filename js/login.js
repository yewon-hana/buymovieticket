let loginForm = document.getElementById("loginForm")
let inputId = document.getElementById("userId");
let inputPw = document.getElementById("userPw");
let users = JSON.parse(localStorage.getItem("users"));

loginForm.addEventListener("submit", function(e){
  e.preventDefault()
  let match = false;
  let selectedMovie = localStorage.getItem("selectedMovie");
  let loginMember;

  for(let i=0;i<users.length;i++){
    if(users[i].id === inputId.value && users[i].pw === inputPw.value){
      loginMember = users[i];
      match = true;
      break;
    }
  }
  if(match){
    console.log(selectedMovie);
    localStorage.setItem("loginMember", JSON.stringify(loginMember));
    if (selectedMovie !== ''){
      window.location.href = "payment.html";
    }
    else{
      window.location.href = "selectMovie.html";
    }
  }
  else{
    document.getElementById("loginMessage").textContent = "아이디 또는 비밀번호가 틀렸습니다.";
  }
});

