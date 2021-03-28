const myPage = document.querySelector('.fa-user');
const loginModal = document.querySelector('.modal');
const introImage = document.querySelector('.introImage');
const introInfoH1 = document.querySelector('.introInfo > h1');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const bodyWrapper = document.querySelector('.bodyWrapper');
const header = document.querySelector('header');
const mobileMenu = document.querySelector('.mobileMenu');

const mobileImgSection = document.querySelector('.mobileProductWrapper .imgSection');
const mobileName = document.querySelector('.mobileProductWrapper h2');
const mobilePrice = document.querySelector('.mobileProductWrapper .productPrice');
const mobileBtn = document.querySelector('.mobileProductWrapper .purchaseBtn');

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
        productName: "안티 바이러스 프리",
        productPrice: "* 이 제품은 PC 전용입니다.",
        btn: "다운로드"
    },

    {
        backgroundUrl: "image/antivirus_premium.png",
        productName: "안티 바이러스 프리미엄",
        productPrice: "24,000 원",
        btn: "구매"
    },

    {
        backgroundUrl: "image/antivirus_ultimate.png",
        productName: "안티 바이러스 프리",
        productPrice: "36,000 원",
        btn: "구매"
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

    if(document.querySelector('.mobileProductWrapper') == null){
        return 0;
    }

    else{
        mobileImgSection.style.backgroundImage = `url(${productArr[0].backgroundUrl})`;
        mobileName.innerHTML = productArr[0].productName;
        mobilePrice.innerHTML = productArr[0].productPrice;
        mobileBtn.innerHTML = productArr[0].btn;
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