/* =====================================================================
   FHS BOOK CLUB · builds the dynamic bits from js/site-data.js
   You shouldn't need to edit this file. Edit site-data.js instead.
   ===================================================================== */
(function () {
  "use strict";
  var D = window.FHS;
  if (!D) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // "to be announced" or [bracketed] text is tentative: show it pencilled in
  function isTba(s) { return /to be announced|^\s*\[/i.test(String(s || "")); }
  function fmt(s) { return isTba(s) ? '<span class="tba">' + esc(s) + "</span>" : esc(s); }
  function get(o, path) {
    return path.split(".").reduce(function (a, k) { return a == null ? a : a[k]; }, o);
  }
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  /* simple text slots: <span data-bind="next.meeting.date"> */
  each("[data-bind]", function (el) {
    var v = get(D, el.getAttribute("data-bind"));
    if (v != null) el.innerHTML = fmt(v);
  });

  /* status stamp */
  function stamp(key) {
    var label = D.statuses[key] || D.statuses.idea;
    var cls = D.statuses[key] ? key : "idea";
    return '<span class="stamp stamp-' + esc(cls) + '">' + esc(label) + "</span>";
  }

  /* full event rows (Events page) */
  function row(e) {
    return '<li class="ev' + (e.status === "example" ? " is-example" : "") + '">' +
      '<div class="ev-date">' + fmt(e.date) + "</div>" +
      '<div class="ev-main"><h3>' + esc(e.title) + "</h3>" +
      "<p>" + fmt(e.location) + "</p>" +
      (e.note ? "<p>" + esc(e.note) + "</p>" : "") + "</div>" +
      '<div class="ev-status">' + stamp(e.status) + "</div></li>";
  }
  each("[data-events]", function (ul) {
    var list = (D.events[ul.getAttribute("data-events")] || []);
    ul.innerHTML = list.length ? list.map(row).join("") :
      '<li class="ev"><div class="ev-main"><p>Nothing listed yet.</p></div></li>';
  });

  /* short "Coming up" list (Home page) */
  each("[data-preview]", function (ul) {
    var E = D.events;
    var picks = [
      [E.meetings[0], "events.html#meetings"],
      [E.activities[0], "events.html#activities"],
      [E.activities[1], "events.html#activities"],
      [E.library[0], "events.html#library"]
    ].filter(function (p) { return p[0]; });
    ul.innerHTML = picks.map(function (p) {
      var e = p[0];
      return "<li>" +
        '<div class="line"><a class="title" href="' + p[1] + '">' + esc(e.title) + "</a>" +
        '<span class="dots" aria-hidden="true"></span>' + stamp(e.status) + "</div>" +
        '<p class="when">' + fmt(e.date) + "</p></li>";
    }).join("");
  });

  /* officer photos: fills the slot once a file name is set in site-data.js */
  each("[data-photo]", function (slot) {
    var info = (D.team || {})[slot.getAttribute("data-photo")];
    if (!info || !info.photo) return;
    var im = new Image();
    im.alt = info.alt || "";
    im.onload = function () { slot.classList.add("has-photo"); slot.appendChild(im); };
    im.src = slot.getAttribute("data-base") + info.photo;
  });


  /* welcome popup (Home page): shows once per visit, closes with button, Esc or a click outside */
  each("[data-popup]", function (host) {
    try { if (sessionStorage.getItem("fhsPopup")) return; } catch (e) {}
    var ev = (D.next && D.next.event) || {};
    var room = (D.next && D.next.meeting && D.next.meeting.room) || "";
    var last = document.activeElement;
    var wrap = document.createElement("div");
    wrap.className = "popup";
    wrap.innerHTML =
      '<div class="popup-box" role="dialog" aria-modal="true" aria-labelledby="popT" tabindex="-1">' +
      '<button class="popup-x" type="button" aria-label="Close">Close <span aria-hidden="true">&times;</span></button>' +
      '<p class="kicker">Next up</p>' +
      '<h2 id="popT">' + fmt(ev.title || "To be announced") + "</h2>" +
      '<p class="popup-when">' + fmt(ev.date || "Date to be announced") + "</p>" +
      (room ? "<p>" + fmt(room) + "</p>" : "") +
      '<p class="popup-actions"><a class="btn" href="events.html">See upcoming events</a>' +
      '<button class="btn btn-alt popup-su-btn" type="button">Sign up for updates</button>' +
      '<button class="textlink popup-later" type="button">Not now</button></p></div>';
    document.body.appendChild(wrap);
    var box = wrap.firstChild;
    function close() {
      document.removeEventListener("keydown", key);
      wrap.remove();
      try { sessionStorage.setItem("fhsPopup", "1"); } catch (e) {}
      if (last && last.focus) last.focus();
    }
    function key(e) {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      var f = box.querySelectorAll("a[href],button");
      var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
    document.addEventListener("keydown", key);
    wrap.addEventListener("click", function (e) { if (e.target === wrap) close(); });
    box.querySelector(".popup-x").addEventListener("click", close);
    box.querySelector(".popup-later").addEventListener("click", close);
    box.querySelector("a.btn").addEventListener("click", function () {
      try { sessionStorage.setItem("fhsPopup", "1"); } catch (e) {}
    });
    setTimeout(function () { box.focus(); }, 0);
  });

  /* email sign-up popup: only exists once D.signup.endpoint is filled in */
  var ep = String((D.signup && D.signup.endpoint) || "").trim();
  {
    var note = document.querySelector("[data-foot-note]");
    if (note && ep) note.textContent = "This website has no login and no tracking. If you sign up for updates, your email goes to the club officers.";
    var origin = null;
    function openSignup() {
      if (document.querySelector(".popup-su")) return;
      origin = document.activeElement;
      var w = document.createElement("div");
      w.className = "popup popup-su";
      w.innerHTML =
        '<div class="popup-box" role="dialog" aria-modal="true" aria-labelledby="suT" tabindex="-1">' +
        '<button class="popup-x" type="button" aria-label="Close">Close <span aria-hidden="true">&times;</span></button>' +
        '<p class="kicker">Stay in the loop</p><h2 id="suT">Sign up for club updates</h2>' +
        "<p>Put in your email and the club officers will send updates about meetings and events.</p>" +
        '<form class="su-form" novalidate><label for="suEmail">Email address</label>' +
        '<input id="suEmail" name="email" type="email" autocomplete="email" required>' +
        '<input class="su-hp" name="_gotcha" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">' +
        '<p class="su-msg" role="status" aria-live="polite"></p>' +
        '<p class="popup-actions"><button class="btn" type="submit">Sign up</button>' +
        '<button class="textlink popup-later" type="button">Not now</button></p></form></div>';
      document.body.appendChild(w);
      var box = w.firstChild, form = box.querySelector("form"), msg = box.querySelector(".su-msg"),
          input = box.querySelector("#suEmail");
      function close() {
        document.removeEventListener("keydown", key); w.remove();
        if (origin && origin.focus) origin.focus();
      }
      function key(e) {
        if (e.key === "Escape") return close();
        if (e.key !== "Tab") return;
        var f = box.querySelectorAll("a[href],button,input:not(.su-hp)"), a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
      document.addEventListener("keydown", key);
      w.addEventListener("click", function (e) { if (e.target === w) close(); });
      box.querySelector(".popup-x").addEventListener("click", close);
      box.querySelector(".popup-later").addEventListener("click", close);
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var v = input.value.trim();
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { msg.textContent = "Please enter a valid email address."; input.focus(); return; }
        if (!ep) { msg.textContent = "Sign-up isn't connected yet. Officers: add the Formspree link in js/site-data.js."; return; }
        var btn = form.querySelector("button[type=submit]"); btn.disabled = true; msg.textContent = "Sending...";
        fetch(ep, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
          .then(function (r) {
            if (!r.ok) throw new Error("bad");
            form.innerHTML = '<p class="su-done"><strong>You&rsquo;re signed up.</strong> Thanks! Watch your email for club updates.</p>' +
              '<p class="popup-actions"><button class="btn" type="button">Close</button></p>';
            form.querySelector("button").addEventListener("click", close);
            form.querySelector("button").focus();
          })
          .catch(function () { btn.disabled = false; msg.textContent = "That didn't go through. Please try again in a moment."; });
      });
      setTimeout(function () { input.focus(); }, 0);
    }
    each("[data-signup-open]", function (b) { b.hidden = false; b.addEventListener("click", openSignup); });
    /* the welcome popup gets a sign-up button too */
    document.addEventListener("click", function (e) {
      if (e.target.classList && e.target.classList.contains("popup-su-btn")) {
        var wp = document.querySelector(".popup:not(.popup-su)"); if (wp) wp.querySelector(".popup-later").click();
        openSignup();
      }
    });
  }
})();
