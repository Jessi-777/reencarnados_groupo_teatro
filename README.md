# reencarnados_groupo_teatro
/* ============================================================
   FACEBOOK VIDEO

   The OUTER FRAME remains 16:9.

   The actual vertical Facebook reel is centered inside it.
   It is intentionally much larger than your previous version.
============================================================ */

.facebook-media,
.facebook-video {
  position: relative;

  width: 100%;

  aspect-ratio: 16 / 9;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #080709;
}

/* ============================================================
   FACEBOOK CINEMATIC BACKDROP
============================================================ */

.facebook-media::before,
.facebook-video::before {
  content: "";

  position: absolute;
  inset: -20%;

  z-index: 0;

  background:
    radial-gradient(
      ellipse at center,
      rgba(196, 72, 44, 0.24),
      rgba(106, 18, 35, 0.3) 35%,
      rgba(5, 5, 6, 0.98) 75%
    );

  filter: blur(30px);

  transform: scale(1.1);

  pointer-events: none;
}

.facebook-backdrop {
  position: absolute;
  inset: -10%;

  z-index: 1;

  background:
    radial-gradient(
      ellipse at center,
      rgba(106, 18, 35, 0.65),
      rgba(8, 7, 9, 0.98) 72%
    );

  filter: blur(22px);

  transform: scale(1.1);

  opacity: 0.95;

  pointer-events: none;
}

.facebook-backdrop::after {
  content: "";

  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.35);
}

/* ============================================================
   FACEBOOK REEL CONTAINER

   This is the key fix.

   The reel is:
   - centered horizontally
   - centered vertically
   - tall
   - large
   - never stuck top-left
============================================================ */

.facebook-reel {
  position: absolute;

  top: 50%;
  left: 50%;

  z-index: 3;

  width: min(44%, 390px);
  height: 96%;

  min-width: 220px;

  aspect-ratio: 9 / 16;

  overflow: hidden;

  background: #000;

  border-radius: 0;

  box-shadow:
    0 0 55px rgba(0, 0, 0, 0.75),
    0 15px 45px rgba(0, 0, 0, 0.55);

  transform: translate(-50%, -50%);
}

/* ============================================================
   FACEBOOK IFRAME

   Fills the reel container.
============================================================ */

.facebook-reel iframe,
.facebook-video iframe {
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: block;

  border: 0;

  background: #000;
}

/*
   If your JavaScript renders the iframe directly into
   .facebook-media instead of .facebook-reel, this still
   keeps it centered and large.
*/

.facebook-media > iframe {
  position: absolute;

  top: 50%;
  left: 50%;

  width: min(44%, 390px);
  height: 96%;

  min-width: 220px;

  aspect-ratio: 9 / 16;

  border: 0;

  background: #000;

  transform: translate(-50%, -50%);

  z-index: 3;
}

/* ============================================================
   VIDEO META
============================================================ */

.video-meta {
  padding: 1.15rem 1.35rem 1.35rem;

  background:
    linear-gradient(
      180deg,
      rgba(241, 235, 225, 0.025),
      rgba(241, 235, 225, 0.01)
    );
}

.video-type {
  margin: 0 0 0.45rem;

  color: var(--ember);

  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.video-title {
  margin: 0;

  color: var(--paper);

  font-family: var(--font-display);

  font-size: clamp(1.05rem, 2vw, 1.3rem);

  font-weight: 600;
  line-height: 1.25;
}

/* ============================================================
   FACEBOOK DESKTOP SIZING

   Larger screen = larger reel.
============================================================ */

@media (min-width: 760px) {
  .facebook-reel {
    width: min(48%, 420px);
    height: 96%;
  }

  .facebook-media > iframe {
    width: min(48%, 420px);
    height: 96%;
  }
}

@media (min-width: 1100px) {
  .facebook-reel {
    width: min(52%, 460px);
    height: 96%;
  }

  .facebook-media > iframe {
    width: min(52%, 460px);
    height: 96%;
  }
}

@media (min-width: 1400px) {
  .facebook-reel {
    width: min(55%, 500px);
    height: 97%;
  }

  .facebook-media > iframe {
    width: min(55%, 500px);
    height: 97%;
  }
}