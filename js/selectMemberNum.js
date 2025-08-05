// ▲ 버튼 함수
function up(b){
    let num = b.nextElementSibling;
    num.innerText=parseInt(num.innerText)+1;
}

// ▼ 버튼 함수
function down(b){
    let num = b.previousElementSibling;
    // 숫자가 0일 경우 감소 X
    if (num.innerText == 0){
        return;
    }
    else{
        num.innerText=parseInt(num.innerText)-1;
    }
}


// 좌석선택 버튼 함수 
// 누르면 인원수 localstorage에 전송 + 페이지 이동
let selectedMem = { adult: 0, child: 0, senior: 0 }

let toSeat = () => {    
    let spanHC = document.getElementsByClassName('numSpan');
    let spanId = [...spanHC].map((span)=>` ${span.innerText}`);     
    
    if (spanId[0] == 0 && spanId[2] == 0 && spanId[1]){
        alert('어린이 관객은 성인 보호자가 최소 1명 필요합니다!');
    }
    else{
        selectedMem.adult = spanId[0];
        selectedMem.child = spanId[1];
        selectedMem.senior = spanId[2];
        console.log(selectedMem);
        localStorage.setItem("selectedMem", JSON.stringify(selectedMem));
        window.location.href = "selectMemberSeat.html";                
    }
}