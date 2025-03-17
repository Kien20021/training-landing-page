document.addEventListener("scroll", function () {
  const navStartScroll = document.getElementById("nav_start");
  if (window.scrollY > 0) {
    navStartScroll.classList.add("scrolled");
  } else {
    navStartScroll.classList.remove("scrolled");
  }
});
