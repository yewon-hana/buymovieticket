// 클릭 가능한 표 형태의 좌석배치도 생성

let seats = document.getElementById('seats');
let abcd = ['A','B','C','D','E','F','G','H'];

for (let i=0 ; i<abcd.length ; i++){
    let tr = document.createElement('tr');
    tr.setAttribute('id',abcd[i]);
    seats.appendChild(tr);
}
for (let i=0 ; i<abcd.length ; i++){
    for (let n=0 ; n<abcd.length ; n++){
        let td = document.createElement('td');
        td.setAttribute('id',`${abcd[i]}${n+1}`);
        td.innerHTML = `${abcd[i]}${n+1}`;
        document.getElementById(abcd[i]).appendChild(td);
    }
}