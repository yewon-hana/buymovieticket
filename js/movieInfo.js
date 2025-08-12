        let selected = JSON.parse(localStorage.getItem("selectedMovie"));
        // let mvObj = JSON.parse(localStorage.getItem('curMovies')); 
        // let selected = mvObj[mvId];

        let forw = document.getElementById("forw");
        let mvPos = document.getElementById("selectedMoviePoster");
        let mvImgs = document.getElementById("mvImages");
        let mvDetl = document.getElementById("movieDetails");

        let mvTitle = document.createElement("h2");
        let mvShortInfo = document.createElement("h5");
        let mvLongInfo = document.createElement("p");
        let stillEach = document.createElement("p");
        let buybtn = document.getElementById("mvbuy");

        mvPos.src = selected['poster'];
        
        let s = "";
        for(let i =0; i<Object.keys(selected['still']).length;i++){
            s+=`<img class ="still" src = "${selected['still'][i]}">`;
        }
        stillEach.innerHTML =s;
        mvImgs.appendChild(stillEach);

        mvTitle.innerText = selected['title'];
        mvShortInfo.innerHTML = `<img src="${selected['age']}", style="width:20px;"> ${selected['shortInfo']}`;
        mvLongInfo.innerHTML = selected['longInfo'];

        mvDetl.appendChild(mvTitle);
        mvDetl.appendChild(mvShortInfo);
        mvDetl.appendChild(mvLongInfo);

        forw.addEventListener('click',()=>{
            localStorage.setItem("selectedMovie","");
            window.location.href="selectMovie.html";
        })

        buybtn.addEventListener('click',()=>{
            window.location.href = "selectDateTimeTheater.html";
        })
