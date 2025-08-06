//예매 일자 선택 -> 상영 일자/상영관 정보
const dateButtons = document.getElementById("dateButtons");
const scheduleContainer = document.getElementById("scheduleContainer");
const today = new Date();
const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));

//예매 일자 자동 생성
for(let i=0; i<7; i++){
        const date=new Date();
        date.setDate(today.getDate()+i);

        const year=date.getFullYear();
        let month=date.getMonth()+1;
        if(month<10)
        month="0"+month;
        let day=date.getDate();
        if(day<10)
        day="0"+day;
        const dateOnScreen=`${year}-${month}-${day}`;
            
        //예매 일자 버튼 생성
        const btn=document.createElement("button");
        btn.textContent=`${month} / ${day}`;
        btn.className="date-btns";
        btn.dataset.date=dateOnScreen;

        btn.addEventListener("click",function(){
            const allButtons = document.querySelectorAll(".date-btns");
            allButtons.forEach(b => {
                b.style.backgroundColor = "#f0f0f0";
            });
            this.style.backgroundColor="#fff0f5";
            this.style.color="black";

            const titleContainer = document.getElementById("titleContainer");
            let h4 = titleContainer.querySelector(".titleSelectTimeTheater");

            if(!h4){
                h4 = document.createElement("h4");
                h4.className="titleSelectTimeTheater";
                titleContainer.appendChild(h4);
            }

            h4.innerHTML="상영 정보";
            const clickedDate = this.dataset.date;
            showSchedule(clickedDate);
            
        });

        dateButtons.appendChild(btn);
    }

        //예매 일자 버튼 클릭 시 상영일자와 상영관 정보 출력
        function showSchedule(clickedDate){
            // const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));
            const selectedMovie = {id:0,title:'좀비딸',age:"icons/age12.png",shortInfo:"2025.07.30 개봉 1시간 54분  코미디, 드라마",
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
,movieSchedule:[{time : "10:00" , theater : "1관"},{time : "12:40" , theater : "4관"},{time : "20:20" , theater : "5관"}]};
            const schedules=selectedMovie['movieSchedule'];
            scheduleContainer.innerText="";

            if (!schedules || schedules.length === 0) {
                scheduleContainer.textContent = "해당 영화의 상영 정보가 없습니다.";
                return;
            }

            schedules.forEach(item=>{
                const btn=document.createElement("button");
                btn.innerHTML=`${item.time}<br>${item.theater}`;
                btn.className="schedule-btns";

                btn.addEventListener("click",function(){
                    let check = confirm(`선택하신 시간은 ${item.time}, 해당 상영관은 ${item.theater} 입니다.`);
                    if(check) {
                        localStorage.setItem("selectedTime",item.time);
                        localStorage.setItem("selectedTheater",item.theater);
                        localStorage.setItem("selectedDate",clickedDate);
                        alert("좌석 선택 페이지로 이동합니다.");
                        window.location.href = "selectMemberNum.html";
                    }
                    else {
                        alert("취소되었습니다. 원하시는 상영 정보를 다시 선택해주세요.");
                    }
                    });
                    scheduleContainer.appendChild(btn);
                });
        }