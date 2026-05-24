// =========================
// 840 Core 간단한 모바일 메뉴
// GitHub Pages에서 바로 동작
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // 메뉴 항목을 누르면 모바일 메뉴 닫기
  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}
// 스크롤 시 부드럽게 등장하는 애니메이션
const revealTargets = document.querySelectorAll(
  ".section, .card, .resource-card, .qa-box, details"
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealTargets.forEach((target) => {
  revealObserver.observe(target);
});
