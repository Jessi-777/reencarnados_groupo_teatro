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
// GALLERY Same pattern as VIDEOS: one entry
// per photo, drop in the real Cloudinary URL + a short caption
// whenever we have them.
// ===============================================================

const GALLERY = [
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819931/1000148554_z2ipnx.jpg', },
  // caption: 'Ensayo, agosto 2026' 
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819929/1000148462_e1sseh.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819930/1000148471_alevov.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819928/1000148423_efs8lh.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148399_vma2yo.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148321_olfvpx.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148384_edkd8m.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148393_vywr4d.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148313_oyrrrd.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819928/1000148414_xwi3t6.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819928/1000148423_efs8lh.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819928/1000148420_uglhxa.jpg',},
  
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148384_edkd8m.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819927/1000148408_y2dry6.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819931/1000148492_kukg7w.jpg',},
  { url: 'https://res.cloudinary.com/dk25jqckw/image/upload/v1787819931/1000148552_wwv5p0.jpg',},
];

const galleryGrid = document.getElementById('galleryGrid');

function renderGallery() {
  if (!galleryGrid) return;

  if (GALLERY.length === 0) {
    galleryGrid.innerHTML =
      '<div class="empty-state">No hay fotos todavía. Agrega una en script.js (busca la lista GALLERY).</div>';
    return;
  }

  galleryGrid.innerHTML = GALLERY.map((photo, i) => `
    <div class="gallery-item js-placeholder" data-index="${i}" data-label="${escapeHTML(photo.url)}">
      <img src="${photo.url}" alt="${escapeHTML(photo.caption || '')}" loading="lazy" />
      ${photo.caption ? `<span class="gallery-caption">${escapeHTML(photo.caption)}</span>` : ''}
    </div>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      const wasExpanded = item.classList.contains('is-expanded');
      galleryGrid.querySelectorAll('.gallery-item.is-expanded').forEach((el) => el.classList.remove('is-expanded'));
      if (!wasExpanded) item.classList.add('is-expanded');
    });
  });

  // Re-arm the broken-image placeholder fallback for the new <img> elements
  galleryGrid.querySelectorAll('img.js-placeholder').forEach((img) => {
    img.addEventListener('error', () => img.classList.add('is-empty'));
  });
}

renderGallery();

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