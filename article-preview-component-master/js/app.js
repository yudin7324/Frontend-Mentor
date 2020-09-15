let btn = document.getElementById("btn");
let innerFrameLinks = document.querySelector(".inner-frame__links");

btn.addEventListener("click", () => {
  activeHide();
});

function activeHide() {
  if (innerFrameLinks.classList.contains("hide")) {
    innerFrameLinks.classList.add("active");
    innerFrameLinks.classList.remove("hide");
  } else {
    innerFrameLinks.classList.add("hide");
    innerFrameLinks.classList.remove("active");
  }
};