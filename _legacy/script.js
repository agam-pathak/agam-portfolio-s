const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const revealItems = document.querySelectorAll(".reveal");
const currentYear = document.getElementById("current-year");
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");
const THEME_STORAGE_KEY = "ap_portfolio_theme";
const rootElement = document.documentElement;
const introOverlay = document.getElementById("lux-intro");
const introSkip = document.getElementById("intro-skip");

function getSavedTheme() {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function setSavedTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore persistence errors (for example, private mode restrictions).
  }
}

function resolveInitialTheme() {
  const saved = getSavedTheme();
  if (saved) return saved;

  if ("matchMedia" in window) {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  return "dark";
}

function setTheme(theme, { persist = true } = {}) {
  rootElement.setAttribute("data-theme", theme);

  themeToggleButtons.forEach((button) => {
    const isDark = theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");

    const icon = button.querySelector("[data-theme-icon]");
    if (icon) {
      icon.textContent = isDark ? "☾" : "☀";
    }

    const label = button.querySelector("[data-theme-label]");
    if (label) {
      label.textContent = isDark ? "Dark" : "Light";
    }
  });

  if (persist) {
    setSavedTheme(theme);
  }
}

setTheme(resolveInitialTheme(), { persist: false });

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
});

if (introOverlay) {
  const reduceMotion =
    "matchMedia" in window &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const introDuration = reduceMotion ? 340 : 4800;
  const introHardTimeout = reduceMotion ? 900 : 7000;
  let introDismissed = false;

  const dismissIntro = () => {
    if (introDismissed) {
      return;
    }

    introDismissed = true;
    introOverlay.classList.add("is-leaving");
    document.body.classList.remove("is-preloading");

    window.setTimeout(() => {
      introOverlay.remove();
    }, 760);
  };

  if (introSkip instanceof HTMLButtonElement) {
    introSkip.addEventListener("click", dismissIntro);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dismissIntro();
    }
  });

  window.setTimeout(dismissIntro, introDuration);
  window.setTimeout(dismissIntro, introHardTimeout);
} else {
  document.body.classList.remove("is-preloading");
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!siteNav.classList.contains("is-open")) {
      return;
    }

    if (siteNav.contains(target) || navToggle.contains(target)) {
      return;
    }

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (!siteNav.classList.contains("is-open")) {
      return;
    }

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.focus();
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId) {
      return;
    }

    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (siteNav && navToggle) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const sectionIds = ["about", "skills", "projects", "education", "contact"];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter((section) => section !== null);

if ("IntersectionObserver" in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const id = entry.target.getAttribute("id");
        if (!id) {
          return;
        }

        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }

    if (contactStatus) {
      contactStatus.classList.remove("error");
      contactStatus.textContent = "Sending your message...";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      contactForm.reset();
      if (contactStatus) {
        contactStatus.classList.remove("error");
        contactStatus.textContent = "Thanks, your message was sent successfully.";
      }
    } catch {
      if (contactStatus) {
        contactStatus.classList.add("error");
        contactStatus.textContent =
          "Could not send right now. Please email me at agamworkspace@gmail.com.";
      }
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
      }
    }
  });
}
