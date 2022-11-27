const projects = [
  {
    logo: "olive-go.jpg",
    projectName: "Olive Go - Home Improvement",
    projectLink: "https://olivego.com/",
    projectBrief: `Customers will be able to shop from anywhere across the nation for a
    full range of home improvement products with installation, repair, and
    maintenance services that complement every product available on the
    platform.`,
    techBrief: `The primary framework is NextJS because it gives the best developer
    experience with all the features I need for production: hybrid static
    & server rendering, and route pre-fetching.`,
    approaches: [
      `Prerendering each pages for a better SEO`,
      `Combination of SSG and CSR to get a performanced hybrid application`,
      `Used NextJS’s API routes to communicate with the external backend
APIs.`,
      `Used SWR for data fetching to get better User Experience`,
      `Support for internationalized (i18n) routing`,
      `Used Context API + useReducer for state management.`,
    ],
  },
  {
    logo: "midas.png",
    projectName: "Midascreatives",
    projectLink: "https://midascreatives.com.mm/",
    projectBrief: `Midas Creatives is a creative agency which is established and founded in Singapore. They help companies grow business and revenue. They deliver strong branding identity through marketing communications across all media.`,
    techBrief: `NextJS - Framer Motion`,
    approaches: [],
  },
  {
    logo: "player.ico",
    projectName: "My Playlist",
    projectLink: "https://myplaylist.vercel.app/",
    projectBrief: `A music player with beautifully animated particle effects. The
    lyric is translated into English.`,
    techBrief: `I created this player using React + Redux. Styled-componets is used for the styling.`,
    approaches: [],
  },

  {
    logo: "venuslab.svg",
    projectName: "Venus Lab Website Clone",
    projectLink: "https://venuslab-clone.vercel.app/",
    projectBrief: `This is the cloned website of https://venuslab.co.<br /> I created this website as part of the interview process when I applied for the job.`,
    techBrief: `NextJS - Styled Components`,
    approaches: [],
  },

  {
    logo: "codepen.svg",
    projectName: "My Pens on CodePen.io",
    projectLink: "https://codepen.io/yanmoenaing118",
    projectBrief: `Beautiful pens I created to learn new things.`,
    techBrief: `CSS, SCSS, Animation, DOM`,
    approaches: [],
  },
];

const readMore = document.querySelectorAll(".work-read");
const detailEl = document.querySelector(".work-details");

function printDetails(project) {
  let button = `<button class="close-details">
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.79782 5.50375L10.7395 1.57125C10.9121 1.39864 11.0091 1.16453 11.0091 0.920417C11.0091 0.676308 10.9121 0.442196 10.7395 0.269584C10.5669 0.0969723 10.3328 0 10.0886 0C9.84454 0 9.61043 0.0969723 9.43782 0.269584L5.50532 4.21125L1.57282 0.269584C1.4002 0.0969723 1.16609 -1.81876e-09 0.921982 0C0.677872 1.81876e-09 0.44376 0.0969723 0.271148 0.269584C0.0985367 0.442196 0.00156439 0.676308 0.00156438 0.920417C0.00156438 1.16453 0.0985367 1.39864 0.271148 1.57125L4.21282 5.50375L0.271148 9.43625C0.185231 9.52147 0.117036 9.62285 0.0704982 9.73456C0.0239603 9.84626 0 9.96607 0 10.0871C0 10.2081 0.0239603 10.3279 0.0704982 10.4396C0.117036 10.5513 0.185231 10.6527 0.271148 10.7379C0.356365 10.8238 0.457749 10.892 0.569453 10.9386C0.681157 10.9851 0.800971 11.0091 0.921982 11.0091C1.04299 11.0091 1.16281 10.9851 1.27451 10.9386C1.38621 10.892 1.4876 10.8238 1.57282 10.7379L5.50532 6.79625L9.43782 10.7379C9.52303 10.8238 9.62442 10.892 9.73612 10.9386C9.84782 10.9851 9.96764 11.0091 10.0886 11.0091C10.2097 11.0091 10.3295 10.9851 10.4412 10.9386C10.5529 10.892 10.6543 10.8238 10.7395 10.7379C10.8254 10.6527 10.8936 10.5513 10.9401 10.4396C10.9867 10.3279 11.0106 10.2081 11.0106 10.0871C11.0106 9.96607 10.9867 9.84626 10.9401 9.73456C10.8936 9.62285 10.8254 9.52147 10.7395 9.43625L6.79782 5.50375Z"
      fill="#F8F8F8"
    />
  </svg>
</button>`;

  let logoEl = `<div class="project-logo">
<img src="assets/${project.logo}" alt="Photo of ${project.projectName} logo" />
</div>`;

  let headerEl = `<header>
<h2>${project.projectName}</h2>
<a href="${project.projectLink}" target="_blank"
  >${project.projectLink}</a
>
</header>`;

  let projectBrief = `<p>
${project.projectBrief}
</p>`;

  let techBrief = `<p>
${project.techBrief}
</p>
<br />`;

  let approachesList = project.approaches
    .map((item) => `<li>${item}</li>`)
    .join("");

  let approaches = `<ul>${approachesList}</ul>`;

  let template = `${button}<article>${logoEl}${headerEl}${projectBrief}${techBrief}${approaches}</article>`;

  return template;
}

readMore.forEach((el) => {
  el.addEventListener("click", (e) => {
    const index = el.dataset.index;
    detailEl.innerHTML = printDetails(projects[index]);

    const closeBtn = detailEl.querySelector("button");

    closeBtn.addEventListener("click", (e) => {
      detailEl.classList.remove("show");
    });

    if (!detailEl.classList.contains("show")) {
      detailEl.classList.add("show");
    }
  });
});
