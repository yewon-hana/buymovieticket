let loginStatus = localStorage.getItem('loginMember');
    let curMovies = JSON.parse(localStorage.getItem('curMovies')); 

    let ticket = document.getElementById("ticket");
    let movie1 = document.getElementById("movie1");
    let movie2 = document.getElementById("movie2");
    let movie3 = document.getElementById("movie3");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let buy = document.getElementById("buy");
    let shortInfo = document.getElementById("shortInfo");
    let ageImg = document.getElementById("ageImg");
    let index = 0;

    prev.onmouseover = btnHover;
    next.onmouseover = btnHover;
    prev.onmouseout = btnDown;
    next.onmouseout = btnDown;


    ageFor();
   
    function ageFor(){
        ageImg.src = curMovies[index]['age'];
        shortInfo.innerText =  curMovies[index]['shortInfo'];
    }

    function btnHover(){
        this.style.backgroundColor = 'lightgray';
    }

    function btnDown(){
        this.style.backgroundColor = 'white';
    }

    next.addEventListener('click',function(){
        if(index ==0){
            movie1.style.visibility = 'visible';
            prev.style.visibility = 'visible';
        }
        movie1.src = curMovies[index]['poster'];
        movie2.src = curMovies[index+1]['poster'];
        if(index == 3){
            next.style.visibility = 'hidden';
            movie3.style.visibility = 'hidden';
        }else{
            movie3.src = curMovies[index+2]['poster'];
        }
        index++;
        ageFor();
    })

    prev.addEventListener('click',()=>{
        if(index==4){
            movie3.style.visibility = 'visible';
            next.style.visibility = 'visible';
        }
        movie3.src = curMovies[index]['poster'];
        movie2.src = curMovies[index-1]['poster'];
        if(index==1){
            prev.style.visibility = 'hidden';
            movie1.style.visibility = 'hidden';        
        }else{
            movie1.src = curMovies[index-2]['poster'];
        }
        index--;
        ageFor();
    })

    movie2.onclick = function(){
        localStorage.setItem('selectedMovie',curMovies[index]['id']);
        window.location.href = "movieInfo.html";
    }

    // buy.addEventListener('click',function(){
    //     window.location.href = 
    //     localStorage.setItem('selectedMovie',curMovies[index]['id']);
    // })

    ticket.addEventListener('click',function(){
        if(loginStatus==""){
            let logincheck = confirm("로그인이 필요한 서비스입니다! 로그인해 주세요");
            if(logincheck){
                window.open('login.html','_blank','width=320px,height=320px,scrollbars=no,top=200,left=800');
            }
        }else{
            
        let userDB = JSON.parse(localStorage.getItem('users')); 
        
        let loginedUser = userDB.map((i)=>{
            if(i['id']==loginStatus){
                if(i['tickets']!=""){
                    window.location.href = "showMovieTicket.html";
                }else{
                    alert("구매한 티켓 정보가 없습니다");
                }
            }
        })

        }
    })