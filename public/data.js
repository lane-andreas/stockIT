document.querySelectorAll(".updateTable").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll("[data-selected='true']").forEach((section) => {
      section.setAttribute("data-selected", "false");
    });

    const targetElements = btn.getAttribute("data-target");
    document.querySelectorAll("." + targetElements).forEach((section) => {
      section.setAttribute("data-selected", "true");
    });
  });
});

document.querySelectorAll(".ticker").forEach((row) => {
  row.addEventListener("click", () => {
    const ticker = row.getAttribute("data-ticker");
    window.location.href = `/ticker?symbol=${ticker}`;
  });
});

document.addEventListener("mousemove", function (e) {
  const follower = document.querySelector("#follower");
  if (follower) {
    const mouseX = e.clientX / 5;
    const mouseY = e.clientY / 5;
    follower.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px)`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Flag to track menu state
  let menuVisible = false;

  // Get the elements
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");

  // Click event listener
  menuToggle.addEventListener("click", function () {
    if (menuVisible) {
      nav.style.translate = ""; // Hide the menu
    } else {
      nav.style.translate = "0"; // Show the menu
    }
    menuVisible = !menuVisible; // Toggle the state
  });
});
