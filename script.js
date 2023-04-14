// change background
let twitterIcon = document.querySelector("#twitter-icon");
twitterIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.querySelector(".twitter__container").classList.toggle("dark");
});
