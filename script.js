const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const header = document.querySelector(".header");

const getAnchorTarget = (link) => {
  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#") || href.length < 2) return null;
  return document.getElementById(href.slice(1));
};

const animateScrollTo = (targetY, duration = 1100) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2);

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const scrollToAnchorSlowly = (link) => {
  const target = getAnchorTarget(link);
  if (!target) return;

  const headerOffset = header?.offsetHeight ?? 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const y = Math.max(targetTop - headerOffset - 12, 0);

  animateScrollTo(y, 1100);
};

burger?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

const closeMobileMenu = () => nav?.classList.remove("open");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (link.getAttribute("href") === "#") return;

  link.addEventListener("click", (event) => {
    const target = getAnchorTarget(link);
    if (!target) return;

    event.preventDefault();
    scrollToAnchorSlowly(link);

    if (nav?.contains(link)) {
      closeMobileMenu();
    }
  });
});

const isValidRussianPhone = (value) => {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"));
};

const setupRussianPhoneValidation = (form) => {
  const phoneInput = form.querySelector('input[type="tel"]');
  if (!phoneInput) return;

  phoneInput.addEventListener("input", () => {
    phoneInput.setCustomValidity("");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const phone = phoneInput.value.trim();

    if (!isValidRussianPhone(phone)) {
      phoneInput.setCustomValidity("Введите корректный номер РФ: +7, 7 или 8 и всего 11 цифр.");
      phoneInput.reportValidity();
      return;
    }

    phoneInput.setCustomValidity("");
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    form.reset();
  });
};

document.querySelectorAll(".mini-form, .contact-form").forEach(setupRussianPhoneValidation);
