localStorage.setItem('selectedMovie',"");
localStorage.setItem('selectedMem',"");
localStorage.setItem('selectedSeat',"");

let users = [
  { id:"gahyeon", pw:"rlarkgus", name:"김가현", coupon:[], tickets:[] },
  { id:"jinwoo", pw:"tjdwlsdn", name:"성진우", coupon:[], tickets:[] },
  { id:"yeonseo", pw:"thsdustj", name:"손연서", coupon:[], tickets:[] },
  { id:"taeho", pw:"gkxogh", name:"하태호", coupon:[], tickets:[] },
  { id:"yewon", pw:"gksdPdnjs", name:"한예원", coupon:[], tickets:[] }
];

//영화 관련 정보
let currentMovies = [
{id:0,title:'좀비딸',age:"icons/age12.png",shortInfo:"2025.07.30 개봉 1시간 54분  코미디, 드라마",
  longInfo:`"나의 딸은 좀비다. 이 세상 마지막 남은 유일한 좀비"<br><br> 
댄스 열정을 불태우는 사춘기 딸 <b>‘수아’</b>와 함께 티격태격 일상을 보내는 맹수 전문 사육사 <b>‘정환’</b>.<br><br>
어느 날 전 세계를 강타한 좀비 바이러스에 감염된 딸 '수아'를 지키기 위해
'정환'은 어머니 '밤순'이 사는 바닷가 마을 '은봉리'로 ‘수아’와 함께 향한다.<br><br>
감염자를 색출해 내려는 사회 분위기 속에서 '수아'가 어렴풋이 사람 말을 알아듣고,
평소 좋아하던 춤과 할머니 ‘밤순’의 따끔한 효자손 맛에 반응하는 모습을 발견한다.<br><br>
절대 '수아'를 포기할 수 없는 '정환'은 호랑이 사육사의 오랜 경험을 살려
좀비딸 트레이닝에 돌입하는데...<br><br>
맹수보다 사납고, 사춘기보다 예민한 좀비딸 훈련기!<br><br>
올여름, 가장 유쾌한 극비 프로젝트가 시작된다!<br>`,poster:"movies/movie1.png",still :{0:"movies/movie1-1.png",1:"movies/movie1-2.png",2:"movies/movie1-3.png",3:"movies/movie1-4.png",4:"movies/movie1-5.png",5:"movies/movie1-6.png",6:"movies/movie1-7.png"}
,time:{'0803':{'1030':525,'1210':240},'0804':{'1300':180}}},
{id:1,title:'이사',age:"icons/age0.png",shortInfo:"2025.07.23 개봉 2시간 5분  드라마",
  longInfo:`화목한 가정을 자부하던 6학년 소녀 렌<br><br>
어느 날 아빠가 집을 나가고 엄마가 이혼을 선언했다.<br>
<i><b>“나는 엄마 아빠가 싸워도 참았어<br>
근데 왜 엄마 아빠는 못 참는 거야?”</i></b><br><br>
엄마가 만든 ‘둘을 위한 계약서’도 싫고<br>
친구들이 이 사실을 알아챌까 두렵다<br><br>
<i><b>“엄마, 부탁이 있어<br>
이번 주 토요일 비와 호수에 가자”</i></b><br><br>
몰래 꾸민 세 가족 여행<br>
엄마 아빠와 다시 함께 살 수 있을까?<br>`,poster:"movies/movie2.png",still:{0:"movies/movie2-1.png",1:"movies/movie2-2.png",2:"movies/movie2-3.png",3:"movies/movie2-4.png"}
,time:{}},
{id:2,title:'델마와 루이스',age:"icons/age19.png",shortInfo:"2025.07.10 개봉 2시간 9분  드라마",
  longInfo:`자유를 향한 마지막 질주<br><br>
답답한 현실에 갇힌 주부 ‘델마’와 식당 웨이트리스로 일하는 ‘루이스’.<br><br>
모든 걸 잠시 내려놓고 떠난 주말 여행은, 뜻밖의 사건 이후 돌이킬 수 없는 도주로 이어진다.<br><br>
사막 위를 질주하며 처음 마주한 자유, 그리고 그 안에서 피어나는 연대와 해방의 감정.<br><br>
하지만 점점 좁혀오는 추적과 흔들리는 감정 속, 두 사람은 마침내 세상의 경계 끝에 선다.<br>
모든 틀을 부수고 삶을 선택한 그들의 가장 찬란한 질주, <델마와 루이스>`,poster:"movies/movie3.png",still:{0:"movies/movie3-1.png",1:"movies/movie3-2.png",2:"movies/movie3-3.png",3:"movies/movie3-4.png"}
,time:{}},
{id:3,title:'인생은 아름다워',age:"icons/age0.png",shortInfo:"2016.04.13 개봉 1시간 56분  코미디, 드라마, 전쟁",
  longInfo:`부와 명예, 어느 하나 내세울 거 없지만 남다른 재치와 순수한 마음을 지닌 남자 ‘귀도’는<br> 
여러 번의 우연이 겹쳐, 운명적 사랑 ‘도라’와 만난다.<br><br>
그들 사랑의 결정체인 ‘조슈에’의 다섯 번째 생일날<br>
갑자기 들이닥친 군인들이 목적지를 알 수 없는 기차에 ‘귀도’와 ‘조슈에’를 싣는다.<br>
뒤늦게 이 사실을 알게 된 ‘도라’ 역시 기차에 따라 오른다.<br><br>
그렇게 비참한 수용소 생활이 시작되지만<br>
‘귀도’는 생일 선물로 특별히 준비한 게임이라며 ‘조슈에’를 안심시킨다.<br><br>
아이의 동심을 지키기 위해, 수용소 사람들도 이 거짓말에 동참하게 되는데…<br><br><br>
<i>“1,000점을 먼저 딴 사람에게 진짜 탱크를 준대”</i><br><br>
세상에서 가장 위대한 거짓말이 시작된다!`,poster:"movies/movie4.png",still:{0:"movies/movie4-1.png",1:"movies/movie4-2.png",2:"movies/movie4-3.png",3:"movies/movie4-4.png",4:"movies/movie4-5.png"}
,time:{}},
{id:4,title:'발레리나',age:"icons/age19.png",shortInfo:"2025.08.06 개봉 2시간 5분  액션",
  longInfo:`EVE Meets WICK<br><br>
새로운 복수의 시작<br>
존 윅 유니버스가 확장된다!<br><br>
살해당한 아버지의 복수를 원하는 ‘이브’는<br>
전설적인 킬러 ‘존 윅’을 배출한 암살자 양성 조직 루스카 로마에서<br>
혹독한 훈련을 거쳐 발레리나이자 킬러로 성장한다.<br><br>
아버지의 죽음에 얽힌 자들을 쫓던 ‘이브’는<br>
루스카 로마를 뛰어넘는 거대한 조직의 정체를 알아차리게 되고,<br>
킬러들의 표적이 된 ‘이브’의 눈앞에 ‘존 윅’이 나타나는데…<br>`,poster:"movies/movie5.png",still:{0:"movies/movie5-1.png",1:"movies/movie5-2.png",2:"movies/movie5-3.png",3:"movies/movie5-4.png",4:"movies/movie5-5.png"},5:"movies/movie5-6.png"
,time:{}}
];

localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("curMovies",JSON.stringify(currentMovies));
localStorage.setItem('loginMember',"");