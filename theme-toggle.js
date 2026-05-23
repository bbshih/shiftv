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
