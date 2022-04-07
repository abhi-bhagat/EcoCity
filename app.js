document.getElementById("navbarNav").addEventListener("click",  function(){
    console.log("clicked");
});



gsap.from('.earth-city', {  duration :2.5  , x:'100',opacity:'0', ease: "power1.inOut"});

gsap.from('.nav-item', {duration :2.5  ,opacity:'0', ease: "power1.inOut", stagger : .5 } );

gsap.from('.title-image' ,{duration : 2.5 , x:'-10', opacity:'0', ease: "power1.inOut"});









// ====== AOS JS =========

AOS.init();