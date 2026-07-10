(function () {
  var currentPath = window.location.pathname.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
  var links = document.querySelectorAll("#top-nav a[href]");
  var nav = document.querySelector("#top-nav");
  var navCollapse = document.querySelector("#top-nav-collapse");

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href === "#") return;

    try {
      var url = new URL(href, window.location.origin);
      var linkPath = url.pathname.replace(/\/$/, "") || "/";
      if (linkPath === currentPath) {
        link.setAttribute("aria-current", "page");
        var li = link.closest("li");
        if (li) li.classList.add("active");
      }
    } catch (_err) {}
  });

  document.querySelectorAll('a[href^="#"], a[href*="/#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var nav = document.querySelector("#top-nav-collapse.in");
      var toggle = document.querySelector(".navbar-toggle");
      if (nav && toggle) toggle.click();
    });
  });

  if (navCollapse && !document.querySelector(".nasmei-rail-links")) {
    var railLinks = document.createElement("div");
    railLinks.className = "nasmei-rail-links";
    railLinks.innerHTML =
      '<a href="https://www.linkedin.com/company/104914809/" target="_blank" rel="noopener noreferrer" aria-label="NASMEI on LinkedIn">' +
      '<span aria-hidden="true">in</span><strong>LinkedIn</strong></a>';
    navCollapse.appendChild(railLinks);
  }

  var backToTop = document.createElement("button");
  backToTop.type = "button";
  backToTop.className = "nasmei-back-to-top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.textContent = "↑";
  document.body.appendChild(backToTop);

  function updateBackToTop() {
    backToTop.classList.toggle("is-visible", window.scrollY > 520);
  }

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
})();
