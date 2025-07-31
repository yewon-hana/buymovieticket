localStorage.setItem('selectedMovie',"");
localStorage.setItem('selectedMem',"");
localStorage.setItem('selectedSeat',"");
//localStorage.setItem('status',false);

let users = [
  { id:"yewon", pw:"gksdPdnjs", name:"한예원", coupon:[], tickets:[] },
  { id:"gahyeon", pw:"rlarkgus", name:"김가현", coupon:[], tickets:[] },
  { id:"yeonseo", pw:"thsdustj", name:"손연서", coupon:[], tickets:[] },
  { id:"taeho", pw:"gkxogh", name:"하태호", coupon:[], tickets:[] },
  { id:"jinwoo", pw:"tjdwlsdn", name:"성진우", coupon:[], tickets:[] }
];

let currentMovies = [
{title:'좀비딸',age:12,shortInfo:"2025.07.30 개봉1시간 54분코미디, 드라마",longInfo:"",poster:"movies/movie1.png"},
{title:'이사',age:0,shortInfo:"2025.07.23 개봉2시간 5분드라마",longInfo:"",poster:"movies/movie2.png"},
{title:'델마와 루이스',age:19,shortInfo:"2025.07.10 개봉2시간 9분드라마",longInfo:"",poster:"movies/movie3.png"},
{title:'인생은 아름다워',age:0,shortInfo:"2016.04.13 개봉1시간 56분코미디, 드라마, 전쟁",longInfo:"",poster:"movies/movie4.png"},
{title:'발레리나',age:19,shortInfo:"2025.08.06 개봉2시간 5분액션",longInfo:"",poster:"movies/movie5.png"}
];

localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("curMovies",JSON.stringify(currentMovies));
localStorage.setItem('loginMember',"");
