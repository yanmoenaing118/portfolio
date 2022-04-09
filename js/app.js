const sequenceAnimation = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

sequenceAnimation(1500)
  .then(fadePageLoadingAnimation)
  .then(() => sequenceAnimation(1000))
  .then(removePageLoadingEl)
  .then(MoveUpTextBox);

function fadePageLoadingAnimation() {
  document.getElementById("page_loading").style.opacity = "0";
}

function removePageLoadingEl() {
  document.getElementById("page_loading").style.display = "none";
}

function MoveUpTextBox() {
  const textbox = document.querySelector(".hero_textbox");
  textbox.style.transform = "translate(-50%,-54%)";
  textbox.style.opacity = 1;
}

function start() {
  const main = document.querySelector("main");
  const mobileMenuCloseBtn = document.querySelector(".mobile_nav_close img");
  const mobileMenu = document.querySelector(".mobile_menu img");
  const mobileNavbar = document.querySelector(".mobile_nav");
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
  });

  mobileMenuCloseBtn.addEventListener("click", closeMobileNav);
  mobileMenu.addEventListener("click", openMobileNav);

  function openMobileNav() {
    mobileNavbar.style.left = "0%";
  }

  function closeMobileNav() {
    mobileNavbar.style.left = "-100%";
  }

  function observerCallback(entries) {
    entries.forEach((entry) => {
      const floatingNav = document.querySelector(".floating_nav");

      if (entry.isIntersecting) {
        if (!floatingNav.classList.contains(".floating_nav_show")) {
          return floatingNav.classList.add("floating_nav_show");
        }
      } else {
        return floatingNav.classList.remove("floating_nav_show");
      }
    });
  }

  observer.observe(main);
}

start();
