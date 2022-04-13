document.getElementById("navbarNav").addEventListener("click",  function(){
    console.log("clicked");
});


gsap.from('.earth-city', {  duration :2.5  , x:'100',opacity:'0', ease: "power1.inOut"});

gsap.from('.nav-item', {duration :2.5  ,opacity:'0', ease: "power1.inOut", stagger : .5 } );

gsap.from('.title-image' ,{duration : 2.5 , x:'-10', opacity:'0', ease: "power1.inOut"});




function getWidth (){
    var a = (window.innerWidth);
    console.log(a);
    if(a<576) {
        $(".card").removeAttr("data-aos");
    }
}

var b = (window.innerWidth);
 
if(b<576){
    $(".card").removeAttr("data-aos");
}

window.onresize = getWidth;





// ====== AOS JS =========

AOS.init();

// =====SWIPER +====== 


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
    },
    loop : true,
  });