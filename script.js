/* BukuBaik — campaign operations page
   Progressive enhancement only: the page works with JavaScript disabled. */

(function () {
  "use strict";

  var toast = document.getElementById("toast");
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2400);
  }

  /* ---------------------------------------------------------- Year */

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* -------------------------------------------------- Copy to clipboard */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback for non-secure contexts (e.g. opening the file directly).
    return new Promise(function (resolve, reject) {
      var field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();

      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (error) {
        ok = false;
      }
      document.body.removeChild(field);
      ok ? resolve() : reject(new Error("copy-unsupported"));
    });
  }

  Array.prototype.forEach.call(
    document.querySelectorAll("[data-copy]"),
    function (button) {
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-copy") || "";
        var original = button.textContent;

        copyText(value)
          .then(function () {
            var label = button.getAttribute("data-copy-label") || "Teks";
            button.textContent = "Tersalin";
            showToast(label + " disalin: " + value);
          })
          .catch(function () {
            showToast("Salin manual: " + value);
          })
          .then(function () {
            window.setTimeout(function () {
              button.textContent = original;
            }, 1800);
          });
      });
    }
  );

  /* --------------------------------------------------------- Share page */

  var shareButtons = [
    document.getElementById("shareButton"),
    document.getElementById("shareFooterButton")
  ].filter(Boolean);

  function shareCampaign() {
    var shareData = {
      title: "BukuBaik — Donasi Buku untuk PAUD Anggrek, Desa Sukatani",
      text:
        "Kampanye donasi buku bacaan anak untuk PAUD Anggrek, Desa Sukatani. " +
        "Koordinasi donasi melalui Gmail koordinator BukuBaik.",
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(function (error) {
        if (error && error.name === "AbortError") return;
        copyLink();
      });
      return;
    }

    copyLink();
  }

  function copyLink() {
    copyText(window.location.href)
      .then(function () {
        showToast("Tautan halaman disalin.");
      })
      .catch(function () {
        showToast("Salin tautan halaman secara manual dari address bar.");
      });
  }

  shareButtons.forEach(function (button) {
    button.addEventListener("click", shareCampaign);
  });

  /* ------------------------------------------------ Active nav on scroll */

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav a[href^='#']")
  );

  var watched = navLinks
    .map(function (link) {
      var target = document.getElementById(link.getAttribute("href").slice(1));
      return target ? { link: link, target: target } : null;
    })
    .filter(Boolean);

  function setActive(link) {
    navLinks.forEach(function (item) {
      item.classList.toggle("is-active", item === link);
    });
  }

  if ("IntersectionObserver" in window && watched.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = watched.filter(function (item) {
            return item.target === entry.target;
          })[0];
          if (match) setActive(match.link);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    watched.forEach(function (item) {
      observer.observe(item.target);
    });
  }
})();
