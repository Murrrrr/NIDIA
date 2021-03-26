const myPage = document.querySelector('.fa-user');
const loginModal = document.querySelector('.modal');
const introImage = document.querySelector('.introImage');
const introInfoH1 = document.querySelector('.introInfo > h1');

let compImgArr = [
    {
        backgroundUrl: "../image/compIntro.jpg",
        positionY: "20%",
        introInfo: "안전을 최우선으로 생각합니다."
    },

    {
        backgroundUrl: "../image/compIntro2.jpg",
        positionY: "40%",
        introInfo: "세계의 PC가 안전해지는 그날까지."
    },

    {
        backgroundUrl: "../image/compIntro3.jpg",
        positionY: "60%",
        introInfo: "PC를 안전하게 지키고 싶다면."
    },

    {
        backgroundUrl: "../image/compIntro4.jpg",
        positionY: "40%",
        introInfo: "전세계 5억명이 사용하는 백신 프로그램."
    }
    
]

let ranNum = Math.floor(Math.random()*compImgArr.length);

window.onload = ()=>{
    
    myPage.addEventListener('click', ()=>{
        console.log(loginModal.classList.contains('active'));
        if(loginModal.classList.contains('active') === true){
            loginModal.classList.remove('active');
        }

        else if(loginModal.classList.contains('active') === false){
            loginModal.classList.add('active');
        }
    })

    if(introImage == null){
        return 0;
    }

    else{
        introImage.style.backgroundImage = `url(${compImgArr[ranNum].backgroundUrl})`;
        introImage.style.backgroundPositionY = `${compImgArr[ranNum].positionY}`;
        introInfoH1.innerHTML = compImgArr[ranNum].introInfo;
    }

    
}