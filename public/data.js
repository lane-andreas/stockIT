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
    window.location.href = `/stockit/ticker?symbol=${ticker}`;
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
