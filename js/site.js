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

  /* sign-up link: use the real one when it's been added */
  var url = String(D.signupUrl || "").trim();
  each("[data-signup]", function (a) {
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; }
  });
  each("[data-signup-missing]", function (n) { n.hidden = !!url; });
})();
