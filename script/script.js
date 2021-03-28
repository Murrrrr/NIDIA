const myPage = document.querySelector('.fa-user');
const loginModal = document.querySelector('.modal');
const introImage = document.querySelector('.introImage');
const introInfoH1 = document.querySelector('.introInfo > h1');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const bodyWrapper = document.querySelector('.bodyWrapper');
const header = document.querySelector('header');
const mobileMenu = document.querySelector('.mobileMenu');

const mobileImgSection = document.querySelector('.mobileProductWrapper .imgSection #product');
const mobileName = document.querySelector('.mobileProductWrapper h2');
const mobilePrice = document.querySelector('.mobileProductWrapper .productPrice');
const mobileBtn = document.querySelector('.mobileProductWrapper .purchaseBtn');
const productBtn = document.querySelectorAll('.mobileProductWrapper .buttonWrapper button');

const productInfoWrapper = document.querySelector('.mobileProductWrapper .productInfo');

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
        btn: "다운로드",
    },

    {
        backgroundUrl: "image/antivirus_premium.png",
        productName: "안티 바이러스 프리미엄",
        productPrice: "24,000 원",
        btn: "구매",
        
    },

    {
        backgroundUrl: "image/antivirus_ultimate.png",
        productName: "안티 바이러스 얼티메이트",
        productPrice: "36,000 원",
        btn: "구매",
        
    }
]

let productInfoArr = [
    {
        productInfo1: " 무료로 프로그램을 이용하시고 내 PC를 안전하게 지켜내세요.",
        productInfo2: " 실시간 감시와 정밀 검사로 바이러스의 위협을 차단하세요.",
        productInfo3: " 랜섬웨어 차단을 통해 소중한 파일들을 해커로부터 보호합니다."
    },

    {
        productInfo1: " 실시간 감시와 정밀 검사로 바이러스의 위협을 차단하세요.",
        productInfo2: " 랜섬웨어 차단을 통해 소중한 파일들을 해커로부터 보호합니다",
        productInfo3: " 인터넷 실시간 보호로 피싱사이트로 의심되는 사이트 접속을 차단합니다."
    },

    {
        productInfo1: " 안티 바이러스 프리미엄 기능을 모두 누릴 수 있습니다.",
        productInfo2: " 애드웨어 검사를 통해 PC를 안전하게 지켜냅니다.",
        productInfo3: " 최대 4대의 컴퓨터에 프로그램 등록이 가능합니다."
    }
]

let ranNum = Math.floor(Math.random()*compImgArr.length);

window.onload = ()=>{
    
    myPage.addEventListener('click', ()=>{
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

    let info1 = document.createElement("p");
    let check = document.createElement("i");
    let info1_content = document.createTextNode(productInfoArr[0].productInfo1);

    check.className = "fas fa-check";

    info1.append(check)
    info1.append(info1_content);


    if(document.querySelector('.mobileProductWrapper') == null){
        return 0;
    }

    
    else{
        mobileImgSection.src = `${productArr[0].backgroundUrl}`;
        mobileName.innerHTML = productArr[0].productName;
        mobilePrice.innerHTML = productArr[0].productPrice;
        mobileBtn.innerHTML = productArr[0].btn;

    }

    let btnMax=productBtn.length;

    for(let i=0;  i<btnMax; i++){


        productBtn[i].addEventListener('click',()=>{
            
            for(let j=0; j<btnMax; j++){
                productBtn[j].classList.remove('active');
            }
            
            productBtn[i].classList.add('active');

            if(productBtn[i].classList.contains('active') == true){
                mobileImgSection.src = `${productArr[i].backgroundUrl}`;
                mobileName.innerHTML = productArr[i].productName;
                mobilePrice.innerHTML = productArr[i].productPrice;
                mobileBtn.innerHTML = productArr[i].btn;
            }

            infoReplace(i);
            
        })

    }



    
}

function infoReplace(j){

    let infoArray = [];
    let checkArray = [];
    let contentArray = [];
    const productInfo = document.querySelectorAll('.mobileProductWrapper .productInfo p');

    contentArray[0] = document.createTextNode(productInfoArr[j].productInfo1);
    contentArray[1] = document.createTextNode(productInfoArr[j].productInfo2);
    contentArray[2] = document.createTextNode(productInfoArr[j].productInfo3);
    


    for(let i = 0; i<3; i++){
        infoArray[i] = document.createElement("p");
        checkArray[i] = document.createElement("i");
        checkArray[i].className = "fas fa-check";

        infoArray[i].append(checkArray[i]);
        infoArray[i].append(contentArray[i]);

        productInfoWrapper.replaceChild(infoArray[i], productInfo[i]);
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