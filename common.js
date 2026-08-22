document.addEventListener('DOMContentLoaded', () => {

  // 헤더
  window.addEventListener('scroll', () => {
  const header = document.querySelector('#hd');

  if (window.scrollY > 1080) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


  // 프로젝트 영역 GSAP
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
  ScrollTrigger.create({
    trigger: '.project-container',
    pin: '.project-bg-title',
    start: 'top center',
    end: 'bottom bottom',
    scrub: 1,
    pinSpacing: false,
  });
});


// 스플래쉬화면
 const splash = document.querySelector('.splash');

 document.body.style.overflowY = 'hidden';
 
 setTimeout(() => {
    splash.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1500);

});