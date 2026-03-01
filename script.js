const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const header = document.querySelector(".header");

const closeMobileMenu = () => nav?.classList.remove("open");

burger?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

const scrollToAnchor = (link) => {
  const href = link.getAttribute("href");
  if (!href?.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  const headerOffset = header?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

  window.scrollTo({ top, behavior: "smooth" });
};

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToAnchor(link);
    closeMobileMenu();
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (nav?.contains(link)) return;

  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    scrollToAnchor(link);
  });
});

const isValidRussianPhone = (phoneValue) => {
  const digits = phoneValue.replace(/\D/g, "");

  if (digits.length !== 11) return false;
  if (digits.startsWith("8")) return true;

  return digits.startsWith("7");
};

const setupRussianPhoneValidation = (formSelector, inputSelector) => {
  const form = document.querySelector(formSelector);
  const phoneInput = form?.querySelector(inputSelector);

  if (!form || !phoneInput) return;

  phoneInput.addEventListener("input", () => {
    phoneInput.setCustomValidity("");
  });

  form.addEventListener("submit", (event) => {
    const phone = phoneInput.value.trim();

    if (!isValidRussianPhone(phone)) {
      event.preventDefault();
      phoneInput.setCustomValidity(
        "Введите корректный российский номер: 11 цифр, начинается с +7, 7 или 8.",
      );
      phoneInput.reportValidity();
      return;
    }

    phoneInput.setCustomValidity("");
    event.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    form.reset();
  });
};

setupRussianPhoneValidation(".mini-form", 'input[type="tel"]');
setupRussianPhoneValidation(".contact-form", 'input[type="tel"]');
