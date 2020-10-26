const moreBtn = document.querySelector(
  ".information .information__title__bar .title__box button"
);
const title = document.querySelector(
  ".information__title__bar .title__box .title"
);

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
