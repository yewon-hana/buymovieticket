// 좌석마다 onclick 이벤트리스너 추가

// 좌석 클릭 > 인원수만큼 좌석 선택됨 >
// 선택된 좌석 td만 클래스 추가 > map으로 좌석명만 추출 > selectedSeats에 출력

let countSum = 0; // 인원수 총합
for (i of memberCountLi) {
  countSum += parseInt(i);
}

let hc = document.querySelectorAll("#seats td"); //쿼리셀렉터올은 htmlcollection 반환하므로
let tdLi = [...hc]; // []안에 스프레드하여 배열형태로 변환함

tdLi.map((td) => {
  td.addEventListener("click", (e) => {
    // 기존 선택된 좌석들 모두 초기화
    let selectedSeatTdHC = document.getElementsByClassName("selectedSeatTd");
    let selectedSeatTdLi = [...selectedSeatTdHC];
    for (let i in selectedSeatTdLi) {
      selectedSeatTdLi[i].classList.remove("selectedSeatTd");
    }

    let seatIdx = tdLi.indexOf(e.target); // 선택한 자리의 전체 좌석 내 index (0~63)
    let trLength = e.target.parentElement.childElementCount; // 선택한 열의 length
    let tdIdx = [...e.target.parentElement.children].indexOf(e.target); // 선택한 자리의 열 내 index (0~7)

    // 선택한 열 첫번째 자리의 tdLi 속 index 계산
    let firstSeatTdLiIdx = seatIdx - tdIdx;

    let tdStart; // 선택 시작 좌석 (열 내 인덱스 (0~7))
    let tdEnd; // 선택 끝 좌석 (열 내 인덱스 (0~7))

    // 클릭된 좌석이 선택 그룹의 가장 오른쪽이 되는 경우를 가정하여 시작 좌석 계산
    let ifTdStart = tdIdx - countSum + 1;

    // 만약 계산된 시작 좌석이 열의 왼쪽 경계를 넘어간다면 (0 미만),
    // 그룹을 열의 시작(0번 좌석)에 맞춰 정렬
    if (ifTdStart < 0) {
      tdStart = 0;
      tdEnd = countSum - 1;
    } else {
      // 그렇지 않다면, 클릭된 좌석이 선택 그룹의 가장 오른쪽이 되도록 설정
      tdStart = ifTdStart;
      tdEnd = tdIdx;
    }

    // 계산된 tdStart부터 tdEnd까지의 좌석에 'selectedSeatTd' 클래스 적용
    for (let i = tdStart; i <= tdEnd; i++) {
      tdLi[firstSeatTdLiIdx + i].classList.toggle("selectedSeatTd");
    }

    // 선택된 좌석들 id를 div(selectedSeatTd)에 출력
    let selectedSeatId = [
      ...document.getElementsByClassName("selectedSeatTd"),
    ].map((td) => ` ${td.id} `);
    selectedSeats.innerText = selectedSeatId;

    localStorage.setItem("selectedSeat", JSON.stringify(selectedSeatId));
  });
});
