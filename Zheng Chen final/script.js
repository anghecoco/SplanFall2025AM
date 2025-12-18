

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCap = document.getElementById("lightbox-cap");

if (lightbox && lightboxImg && lightboxCap) {
  document.querySelectorAll(".js-lightbox img").forEach((img) => {
    img.addEventListener("click", () => openBox(img));
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeBox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBox();
  });
}

function openBox(img) {
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || "Preview image";

  const cap = img.closest("figure")?.querySelector("figcaption")?.innerText || "";
  lightboxCap.textContent = cap;
}

function closeBox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImg.src = "";
  lightboxCap.textContent = "";
}