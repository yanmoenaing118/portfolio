const SPEED = 500;

const bulletOne = document.querySelector(".page-pagination-1");
const bulletTwo = document.querySelector(".page-pagination-2");
const bulletThree = document.querySelector(".page-pagination-3");
const bulletFour = document.querySelector(".page-pagination-4");

const contactBtn = document.querySelector("#contact");

bulletOne.addEventListener("click", () => scrollToSection(".section--1"));

bulletTwo.addEventListener("click", () => scrollToSection(".section--2"));

bulletThree.addEventListener("click", () => scrollToSection(".section--3"));

bulletFour.addEventListener("click", () => scrollToSection(".section--4"));

contactBtn.addEventListener("click", () => scrollToSection(".section--4"));

function scrollToSection(className) {
  const el = document.querySelector(className);
  el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

/** Works Slider */

const works = new Swiper(".workSwiper", {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".work-actions--next",
    prevEl: ".work-actions--prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

works.slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    works.slideTo(index, SPEED);
  });
});

const worksSection = document.querySelector(".works-section");
const prevWork = worksSection.querySelector(".work-actions--prev");
const nextWork = worksSection.querySelector(".work-actions--next");
const currentWork = worksSection.querySelector(".current");

prevWork.style.opacity = 0;
currentWork.textContent = "1 / 5";

works.on("slideChange", function () {
  currentWork.textContent = `${this.activeIndex + 1} / 5`;
  if (this.activeIndex > 0) {
    prevWork.style.opacity = 1;
  } else {
    prevWork.style.opacity = 0;
  }

  if (this.activeIndex === this.slides.length - 1) {
    nextWork.style.opacity = 0;
  } else {
    nextWork.style.opacity = 1;
  }
  [1, 2, 3, 4, 5].forEach((index) => {
    const el = document.querySelector(`.workSwiper-slide-${index}`);
    if (index - 1 !== this.activeIndex) {
      el.style.opacity = 0.65;
      el.style.transform = "scale(0.8)";
    } else {
      el.style.opacity = 1;
      el.style.transform = "scale(1)";
    }
  });
});

[1, 2, 3, 4, 5].forEach((index) => {
  if (index - 1 !== works.activeIndex) {
    const el = document.querySelector(`.workSwiper-slide-${index}`);
    el.style.transform = "scale(0.8)";
    el.style.opacity = 0.65;
  }
});

const workSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const actions = entry.target.querySelector(".work-actions");
      if (entry.isIntersecting) {
        if (!actions.classList.contains("show")) {
          actions.classList.add("show");
        }
      } else {
        actions.classList.remove("show");
      }
    });
  },
  {
    threshold: 1,
  }
);

workSectionObserver.observe(worksSection);

/** Sections Obserer */

const sections = document.querySelectorAll(".section");

const animationList = [
  "animate__rubberBand",
  "animate__swing",
  "animate__heartBeat",
  "animate__wobble",
];

const intersectionCallback = (entries) => {
  entries.forEach((entry, idx) => {
    let elem = entry.target;
    let h1 = elem.querySelector("h1");
    const index = Number(h1.dataset.index);

    if (entry.isIntersecting) {
      document.title = h1.textContent;
      renderActivePaginationBullets(index);
      if (!h1.classList.contains(animationList[index])) {
        h1.classList.add(animationList[index]);
        h1.classList.add("active");
      }
    } else {
      h1.classList.remove(animationList[index]);
      h1.classList.remove("active");
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, {
  threshold: 0.5,
});

sections.forEach((el) => observer.observe(el));

const bullets = document.querySelectorAll(
  ".page-pagination-bullets > div > div"
);

function renderActivePaginationBullets(activeIndex) {
  bullets.forEach((el, idx) => {
    el.classList.remove("page-pagination-active");

    if (idx === activeIndex) {
      if (!el.classList.contains("page-pagination-active")) {
        el.classList.add("page-pagination-active");
      }
    }
  });
}
