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
{id:1,title:'좀비딸',age:"icons/age12.png",shortInfo:"2025.07.30 개봉1시간 54분코미디, 드라마",longInfo:"",poster:"movies/movie1.png"},
{id:2,title:'이사',age:"icons/age0.png",shortInfo:"2025.07.23 개봉2시간 5분드라마",longInfo:"",poster:"movies/movie2.png"},
{id:3,title:'델마와 루이스',age:"icons/age19.png",shortInfo:"2025.07.10 개봉2시간 9분드라마",longInfo:"",poster:"movies/movie3.png"},
{id:4,title:'인생은 아름다워',age:"icons/age0.png",shortInfo:"2016.04.13 개봉1시간 56분코미디, 드라마, 전쟁",longInfo:"",poster:"movies/movie4.png"},
{id:5,title:'발레리나',age:"icons/age19.png",shortInfo:"2025.08.06 개봉2시간 5분액션",longInfo:"",poster:"movies/movie5.png"}
];

localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("curMovies",JSON.stringify(currentMovies));
localStorage.setItem('loginMember',"");
