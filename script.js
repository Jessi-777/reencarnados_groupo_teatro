// ===============================================================
// MOBILE NAVIGATION
// ===============================================================

const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("open");

    navToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}


// ===============================================================
// IMAGE PLACEHOLDERS
// ===============================================================

document.querySelectorAll("img.js-placeholder").forEach((img) => {

  img.addEventListener("error", () => {
    img.classList.add("is-empty");
  });

});


// ===============================================================
// INTERVIEWS
// ===============================================================

const VIDEOS = [

  {
    type: "youtube",
    id: "m6IKK8qtl8Y",
    title: "Interview"
  },

  {
    type: "facebook",
    url: "https://www.facebook.com/reel/1363550815922152",
    title: "Facebook Interview"
  }

];


const interviewsGrid =
  document.getElementById("interviewsGrid");


// ===============================================================
// HTML ESCAPE
// ===============================================================

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


// ===============================================================
// RENDER VIDEOS
// ===============================================================

function renderVideos() {

  if (!interviewsGrid) {
    return;
  }


  if (!VIDEOS.length) {

    interviewsGrid.innerHTML = `
      <div class="empty-state">
        No interviews added yet.
      </div>
    `;

    return;
  }


  interviewsGrid.innerHTML = VIDEOS
    .map((video) => {


      // =========================================================
      // YOUTUBE
      // =========================================================

      if (video.type === "youtube") {

        const title =
          escapeHTML(video.title);

        const embedURL =
          `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?rel=0&modestbranding=1`;

        return `
          <article class="video-card">

            <div class="video-media youtube-media">

              <iframe
                src="${embedURL}"
                title="${title}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

            </div>

            <div class="video-meta">

              <div class="video-type">
                YouTube Interview
              </div>

              <h3 class="video-title">
                ${title}
              </h3>

            </div>

          </article>
        `;
      }


      // =========================================================
      // FACEBOOK REEL
      // =========================================================

      if (video.type === "facebook") {

        const title =
          escapeHTML(video.title);

        const facebookURL =
          encodeURIComponent(video.url);

        const embedURL =
          `https://www.facebook.com/plugins/video.php?href=${facebookURL}&show_text=false&width=500`;

        return `
          <article class="video-card">

            <div class="video-media facebook-media">

              <div
                class="facebook-backdrop"
                aria-hidden="true"
              ></div>


              <div class="facebook-reel">

                <iframe
                  src="${embedURL}"
                  title="${title}"
                  loading="lazy"
                  scrolling="no"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

              </div>

            </div>


            <div class="video-meta">

              <div class="video-type">
                Facebook Reel
              </div>

              <h3 class="video-title">
                ${title}
              </h3>

            </div>

          </article>
        `;
      }


      return "";

    })
    .join("");

}


renderVideos();


// ===============================================================
// SCROLL REVEAL
// ===============================================================

const revealEls =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "in-view"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.15
      }
    );


  revealEls.forEach((el) => {

    observer.observe(el);

  });


} else {

  revealEls.forEach((el) => {

    el.classList.add("in-view");

  });

}