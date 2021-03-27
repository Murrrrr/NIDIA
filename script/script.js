const myPage = document.querySelector('.fa-user');
const loginModal = document.querySelector('.modal');
const introImage = document.querySelector('.introImage');
const introInfoH1 = document.querySelector('.introInfo > h1');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const bodyWrapper = document.querySelector('.bodyWrapper');
const header = document.querySelector('header');
const mobileMenu = document.querySelector('.mobileMenu');

let compImgArr = [
    {
        backgroundUrl: "image/compIntro.jpg",
        positionY: "20%",
        introInfo: "안전을 최우선으로 생각합니다."
    },

    {
        backgroundUrl: "image/compIntro2.jpg",
        positionY: "40%",
        introInfo: "세계의 PC가 안전해지는 그날까지."
    },

    {
        backgroundUrl: "image/compIntro3.jpg",
        positionY: "60%",
        introInfo: "PC를 안전하게 지키고 싶다면."
    },

    {
        backgroundUrl: "image/compIntro4.jpg",
        positionY: "40%",
        introInfo: "전세계 5억명이 사용하는 백신 프로그램."
    }
    
]

let productArr = [
    {
        backgroundUrl: "image/antivirus_free.png",
        productName: ""
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
    });

    hamburgerMenu.addEventListener('click',()=>{

        if(mobileMenu.classList.contains('active') === true){
            mobileMenuClose();
        }

        else if(mobileMenu.classList.contains('active') == false){
            
            mobileMenuOpen();
        }

    })

    bodyWrapper.addEventListener('click',()=>{
        mobileMenuClose();
    })

    document.querySelector('.mobileMenu li:last-child').addEventListener('click',()=>{
        mobileMenuClose();
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

function mobileMenuOpen(){
    bodyWrapper.style.right = "50%";
    header.style.right = "50%";
    mobileMenu.style.left = "50%";
    mobileMenu.classList.add('active');
    bodyWrapper.style.filter = "brightness(50%)";
}

function mobileMenuClose(){
    bodyWrapper.style.right = "0%";
    header.style.right = "0%";
    mobileMenu.style.left = "100%";
    mobileMenu.classList.remove('active');
    setTimeout(()=>{
        bodyWrapper.style.filter = "brightness(100%)";
    },500)
}