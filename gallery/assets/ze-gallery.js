(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    document.documentElement.classList.add("reveal-ready");
  }

  function setupCurrentNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a").forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (href.endsWith(path)) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });
    items.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 6, 5) * 45 + "ms";
      observer.observe(item);
    });
  }

  function setupCursor() {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    var cursor = document.createElement("div");
    cursor.className = "ze-cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);
    document.body.classList.add("has-dot-cursor");

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var targetX = x;
    var targetY = y;
    var raf = 0;

    function render() {
      x += (targetX - x) * 0.24;
      y += (targetY - y) * 0.24;
      cursor.style.transform = "translate3d(" + x + "px," + y + "px,0) translate(-50%, -50%)";
      raf = requestAnimationFrame(render);
    }

    window.addEventListener("mousemove", function (event) {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
      if (!raf) render();
    }, { passive: true });

    window.addEventListener("mouseleave", function () {
      cursor.classList.remove("is-visible");
    });

    window.addEventListener("mousedown", function () {
      cursor.classList.add("is-down");
    });

    window.addEventListener("mouseup", function () {
      cursor.classList.remove("is-down");
    });

    var targetSelector = "a, button, summary, .option-card, .list-row, [data-cursor-target]";
    document.addEventListener("mouseover", function (event) {
      if (event.target.closest(targetSelector)) cursor.classList.add("is-target");
    });
    document.addEventListener("mouseout", function (event) {
      if (event.target.closest(targetSelector)) cursor.classList.remove("is-target");
    });
  }

  function setupTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (root) {
      var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-tab]"));
      var panels = Array.prototype.slice.call(root.querySelectorAll("[data-tab-panel]"));
      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          var target = tab.getAttribute("data-tab");
          tabs.forEach(function (item) {
            item.setAttribute("aria-selected", String(item === tab));
          });
          panels.forEach(function (panel) {
            panel.hidden = panel.getAttribute("data-tab-panel") !== target;
          });
        });
      });
    });
  }

  function setupAccordion() {
    document.querySelectorAll("[data-accordion-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        var panel = document.getElementById(button.getAttribute("aria-controls"));
        if (!panel) return;
        var expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupCurrentNav();
    setupReveal();
    setupCursor();
    setupTabs();
    setupAccordion();
  });
})();
