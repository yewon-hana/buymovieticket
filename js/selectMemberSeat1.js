let selectedMem = JSON.parse(window.localStorage.getItem("selectedMem"));

let memberCountLi = Object.values(selectedMem); // 연령별 좌석수 (이후 좌석 선택시에도 사용)
let infoTr = document.getElementById('infoTr');

for (let i=0 ; i<3 ; i++){
    let ageTd = document.createElement('td');
    ageTd.innerHTML = ['성인','어린이','경로우대'][i];
    ageTd.setAttribute('class','ageTd');
    infoTr.appendChild(ageTd);

    let countTd = document.createElement('td');
    countTd.innerHTML = memberCountLi[i]
    countTd.setAttribute('class','countTd');
    infoTr.appendChild(countTd);
}