window.onload = () => {
  start();
};

function start() {
  const main = document.querySelector("main");
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5,
  });

  function observerCallback(entries) {
    entries.forEach((entry) => {
      const section = entry.target;
      const floatingNav = document.querySelector(".floating_nav");
      const floatingNavLinks = floatingNav.querySelectorAll(".floating_nav a");

      if (entry.isIntersecting) {
        // if (section.classList.contains("section_primary")) {
        //   floatingNavLinks.forEach((link) => {
        //     link.classList.add("color-white");
        //   });
        // } else if (section.classList.contains("section_secondary")) {
        //   floatingNavLinks.forEach((link) => {
        //     link.classList.add("color-primary");
        //   });
        // } else {
        //   floatingNavLinks.forEach((link) => {
        //     // link.classList.remove("color-white");
        //     link.classList.add("color-white");
        //   });
        // }

        if (!floatingNav.classList.contains(".floating_nav_show")) {
          return floatingNav.classList.add("floating_nav_show");
        }
      } else {
        return floatingNav.classList.remove("floating_nav_show");
      }
    });
  }

  observer.observe(main);

  //   sections.forEach((section) => observer.observe(section));
}
