const themeButtons = document.querySelectorAll("[data-theme-option]");
const themePreview = document.querySelector(".theme-preview");
const themeImages = document.querySelectorAll("[data-theme-image]");
const themeCaption = document.querySelector("[data-theme-caption]");

const captions = {
  light: "Light mode capture, staged with public-safe demo clipboard entries.",
  dark: "Dark mode capture, staged with public-safe demo clipboard entries."
};

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeOption;

    themeButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    themeImages.forEach((image) => {
      image.classList.toggle("is-active", image.dataset.themeImage === theme);
    });

    if (themePreview) {
      themePreview.dataset.activeTheme = theme;
    }

    if (themeCaption) {
      themeCaption.textContent = captions[theme];
    }
  });
});

const bucketDemo = document.querySelector("[data-bucket-demo]");
const bucketReplay = document.querySelector("[data-bucket-replay]");
const bucketStatus = document.querySelector("[data-bucket-status]");

if (bucketDemo) {
  const bucketSteps = [
    "Drag toward a stash, then drop to save.",
    "Clip card follows your cursor toward the bucket.",
    "Bucket opens when the card is close enough.",
    "ShiftV tucks the clip into the active stash."
  ];
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let bucketTimer;
  let bucketStep = 0;

  const setBucketStep = (step) => {
    bucketStep = step;
    bucketDemo.dataset.step = String(step);

    if (bucketStatus) {
      bucketStatus.textContent = bucketSteps[step];
    }
  };

  const scheduleBucketStep = () => {
    bucketTimer = window.setTimeout(() => {
      const nextStep = (bucketStep + 1) % bucketSteps.length;
      setBucketStep(nextStep);
      scheduleBucketStep();
    }, bucketStep === 0 ? 1100 : 1500);
  };

  const playBucketDemo = () => {
    window.clearTimeout(bucketTimer);

    if (reducedMotionQuery.matches) {
      setBucketStep(3);
      return;
    }

    setBucketStep(0);
    scheduleBucketStep();
  };

  if (bucketReplay) {
    bucketReplay.addEventListener("click", playBucketDemo);
  }

  reducedMotionQuery.addEventListener("change", playBucketDemo);
  playBucketDemo();
}
