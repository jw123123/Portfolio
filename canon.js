// 캐논코리아 리뉴얼 포트폴리오 인터랙션

document.addEventListener('DOMContentLoaded', () => {

  // 스크롤 등장 애니메이션
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // 헤더 스크롤 상태 (하단 라인 표시)
  const hd = document.getElementById('hd');

  // 도트 페이지네이션 활성화
  const dotNav = document.querySelector('.dot-nav');
  const dotLinks = [...dotNav.querySelectorAll('a')];
  const sections = dotLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const updateDots = () => {
    const mid = window.scrollY + window.innerHeight / 2;
    let current = 0;
    sections.forEach((sec, i) => {
      if (sec.offsetTop <= mid) current = i;
    });
    dotLinks.forEach((link, i) => link.classList.toggle('active', i === current));
    // 밝은 이미지(최종 결과물) 구간에서는 도트/라벨을 어두운 색으로 전환
    dotNav.classList.toggle('light', dotLinks[current].hasAttribute('data-light'));
  };

  const onScroll = () => {
    hd.classList.toggle('scrolled', window.scrollY > 10);
    updateDots();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateDots, { passive: true });
  onScroll();

});
