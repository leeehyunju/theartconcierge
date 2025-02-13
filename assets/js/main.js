




// // 부드럽게 스크롤 되도록 해주는 코드
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);







// loading 글자모션
loadingTxt = ['THE ART' , 'CONCIERGE' , 'MODERN ART' , 'SCULPTURES'];

// forEach 반복문
//    element: '안녕하세요' , '반갑습니다' ...를 뜻함
//    i: 요소의 순서를 뜻함
function loop(){
    loadingTxt.forEach((element,i) => {
        // console.log(i);
        // setTimeout : 일정시간 뒤에 실행되는 코드 
        setTimeout(() => {
            $('.loading span').text(loadingTxt[i])
        }, 300*i);
    });
}
// 1회 실행은 해야하기 때문에 loop코드를 써줌
loop();

// 주기적으로 반복되는 코드
setInterval(() => {
    // 전체 순환이 완료된 뒤 1.2초마다 다시 반복
    // 반복주기는 배열 길이(4) × 300ms = 1200ms(1.2초)
    loop();
}, loadingTxt.length*300);



// 동작이 끝나고 loading페이지를 닫아야함
gsap.to('.loading',{
    // 위의 모션이 다 끝난 후 닫기 위해 딜레이를 줌
    delay:loadingTxt.length*.3,
    // opacity:0이랑 visability:hidden을 동시에 줄수있는 코드
    autoAlpha:0,
    // 끝난 후, 완전히 삭제해버리고 싶을때 코드
    onComplete:function(){
        $('.loading').remove();
        // sc-welcome 글자효과를 시작해줌
        introMotion.play();
    }
})


// 이런 방식을 계속해서 나열할 수 없으니 위에 방식으로 줌 
// 일정시간 뒤에 실행되는 코드
// setTimeout(() => {
//     // loadingTxt[0] : loadingTxt의 첫번째
//  $('.loading span').text(loadingTxt[0])
// }, 1000);
// setTimeout(() => {
//  $('.loading span').text(loadingTxt[1])
// }, 2000);
// setTimeout(() => {
//  $('.loading span').text(loadingTxt[2])
// }, 3000);


// 로딩 숫자
// gsap.from("#num", {
//     innerText: 0,
//     duration: 5,
//     snap : {
//         innerText: 1
//     }
//   });





// sc-welcome 글자모션
// from으로 전 값을 세팅해줌
const introMotion = gsap.from(".sc-welcome .headline span",{
    // 자기 크기만큼 내려줌
    yPercent:100,
    opacity:0,
    // 순차적으로 나오게 함
    stagger:0.1,
    paused:true,
})

// sc-welcome 슬라이드
var swiper = new Swiper(".sc-welcome .swiper", {
    loop:true,
    effect: "fade",
    speed:1000,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
}
});





// 하위메뉴 
$('.btn-menu').click(function(){
    $('.side-nav').addClass('show')
    // menu를 누르면 글자효과를 restart하고싶다
    // 누를때마다 재실행할수있다
    menu.restart();
})
// 하위메뉴 닫기버튼을 눌렀을때
$('.side-nav .close').click(function(){
    $('.side-nav').removeClass('show')
    // 다시 빠꾸시키는 모션을 줘야 다시 실행될수있음
    menu.reverse();
})

// 하위메뉴 글자모션
menu = gsap.from('.side-nav .child',{
    delay:0.3,
    // 전값이 이거였다
    yPercent:100,
    paused:true,
    stagger:0.1,
})






// #circleMotion img모션
introTl = gsap.timeline({
    scrollTrigger:{
        trigger:"#circleMotion",
        start:"0% 50%",
        end:"100% 70%",
        // markers:true,
        scrub:0
},
})

introTl.from('#circleMotion .thumb img', {
    'clip-path': 'circle(0% at 50% 50%)'
});







// split 쪼개는법
// 단어,글자
const headTxt = new SplitType('.sc-artworks h2', { types: 'lines, words, chars',});

// 줄
// const splitLines = new SplitType('.split-line',{ types: });
// line마다 효과를 주기위해 하나의 부모를 더 준 코드
// $('.line').wrap('<div class="line-wrap">')


// sc-artworks 글자모션
gsap.from('.sc-artworks .group-head .char',{
    scrollTrigger:{
        trigger:".sc-artworks .group-head",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        // 도달했을때/떠났을때/도달했을때/다시 재실행되는 코드
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.03,
})


// sc-artworks text-area
const textAreaTxt = new SplitType('.sc-artworks .group-bottom .text-area p', { types: 'lines, words, chars',});

// sc-artworks 글자모션
gsap.from('.sc-artworks .group-bottom .text-area .char',{
    scrollTrigger:{
        trigger:".sc-artworks .group-bottom .text-area",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.01,
})





// sc-artworks img모션
// gsap.set('.sc-artworks .artworks-list img',{
//     yPercent:20
// })

// fromTo: 전도 셋팅하고, 후도 바꾸고싶을때 쓰는 코드
gsap.fromTo('.sc-artworks .artworks-list img',{
    // from 처음값 입력하는 곳
    yPercent:-20,
    },{
        // To 완성값 입력하는 곳
        scrollTrigger:{
            trigger:".sc-artworks .artworks-list",
            start:"0% 70%",
            end:"100% 50%",
            // markers:true,
            scrub:0
        },
        yPercent:20,
        ease:"none"
    }
)






// 자바스크립트,제이쿼리 다 가능
// querySelector는 하나의 요소만 선택됨
// a = document.querySelector('.sc-discover .artists-item');
artistsList = document.querySelectorAll('.sc-discover .artists-item');
// c = $('.sc-discover .artists-item')[0]

// console.log(a);
// console.log(b);
// console.log(c[0]);

// sc-discover img모션
// 제이쿼리 버전(반복문)
$('.sc-discover .artists-item').each(function(i,el){

    // 천천히 나오고 싶었다 duration 1초
    gsap.from(el,1,{
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"0% 70%",
            // markers:true,
            toggleActions:"none play none reset"
        },
        opacity:0
    })
    
})

// 반복문 자바스크립트 버전
// array: 배열
//  $('.sc-discover .artists-item').forEach(element => {
//     console.log(element);
// });






// sc-gallery 글자모션
const galleryTxt = new SplitType('.sc-gallery h2', { types: 'lines, words, chars',});

// sc-artworks 글자모션
gsap.from('.sc-gallery .group-head .char',{
    scrollTrigger:{
        trigger:".sc-gallery .group-head",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.02,
})






// sc-services 글자모션
const servicesTxt = new SplitType('.sc-services h2', { types: 'lines, words, chars',});

// sc-services 글자모션
gsap.from('.sc-services .group-head .char',{
    scrollTrigger:{
        trigger:".sc-services .group-head",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.02,
})





// sc-in-touch 글자모션
const getInTouchTxt = new SplitType('.sc-in-touch h2', { types: 'lines, words, chars',});

// sc-in-touch 글자모션
gsap.from('.sc-in-touch .group-head .char',{
    scrollTrigger:{
        trigger:".sc-in-touch .group-head",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.01,
})


// sc-in-touch img모션
gsap.set('.sc-in-touch .col-left img',{
    yPercent:10
})

gsap.to('.sc-in-touch .col-left img',{
    scrollTrigger:{
        trigger:".sc-in-touch",
        start:"0% 0%",
        end:"100% 0%",
        // markers:true,
        scrub:0
    },
    yPercent:-10,
    ease:"none"
})






// cursor
$(document).mousemove(function(e){
    // 내가 보고있는 뷰포트에서의 좌표
    // x의 좌표
    x=e.clientX;
    // y의 좌표
    y=e.clientY;

    gsap.to('.cursor',0,{
        x:x,
        y:y,
    })
})



// services-cursor
$('.services-item').mousemove(function(e){
    // 내 영역(services-item)에서의 좌표
    x=e.offsetX;
    y=e.offsetY;

    gsap.to('.sc-services .text-area .services-item .hov-img',{
        x:x,
        y:y,
    })
})






// cursor
// $(document).ready(function() {
//     $(document).mousemove(function(event) {
//         const $cursorDefaultInner = $('.cursor-default-inner');
        
//         // ?
//         $cursorDefaultInner.css({
//             left: event.clientX + 'px',
//             top: event.clientY + 'px'
//         });
//     });
// });




// footer 시간
function updateTime() {
    const now = new Date(); // 현재 시간을 가져옴
    const hours = String(now.getHours()).padStart(2, '0'); // 시간 (2자리로 포맷)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 분 (2자리로 포맷)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 분 (2자리로 포맷)
    $('#paris-time').text(`${hours}:${minutes}:${seconds}`)
    $('#athens-time').text(`${hours}:${minutes}:${seconds}`)
}

// 1초마다 updateTime 함수 호출
setInterval(() => {
    updateTime();
}, 1000);

// 페이지가 로드되었을때 바로 시간 표시
updateTime();
