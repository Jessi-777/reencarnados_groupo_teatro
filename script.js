// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------------------------------------------------------------
// Image placeholders: any <img class="js-placeholder"> that fails
// to load (because the file doesn't exist yet) gets marked "is-empty",
// which shows a dashed box with the expected file path instead of a
// broken-image icon. Once a real file exists at that path, it just
// works — no code changes needed.
// ---------------------------------------------------------------
document.querySelectorAll('img.js-placeholder').forEach((img) => {
  img.addEventListener('error', () => {
    img.classList.add('is-empty');
  });
});

// ---------------------------------------------------------------
// INTERVIEWS — add a new interview by adding one line below.
// `id` is the part of the YouTube URL after "v=" or after "youtu.be/".
// Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: 'dQw4w9WgXcQ'
// ---------------------------------------------------------------
const VIDEOS = [
  // { id: 'dQw4w9WgXcQ', title: 'On the return of Las Voces que Regresan' },
  // { id: 'XXXXXXXXXXX', title: 'Building the ensemble: a conversation' },
];

const interviewsGrid = document.getElementById('interviewsGrid');

function renderVideos() {
  if (!interviewsGrid) return;

  if (VIDEOS.length === 0) {
    interviewsGrid.innerHTML =
      '<div class="empty-state">No interviews added yet. Add one in script.js (look for the VIDEOS list).</div>';
    return;
  }

  interviewsGrid.innerHTML = VIDEOS.map((video) => `
    <div class="video-card">
      <div class="video-frame-wrap">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${video.id}"
          title="${video.title.replace(/"/g, '&quot;')}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-meta">
        <h3 class="video-title">${video.title}</h3>
      </div>
    </div>
  `).join('');
}

renderVideos();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  revealEls.forEach((el) => el.classList.add('in-view'));
}