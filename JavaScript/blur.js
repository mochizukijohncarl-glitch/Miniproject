const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("blurred");
  } 
  else {
    header.classList.remove("blurred");
  }
});
