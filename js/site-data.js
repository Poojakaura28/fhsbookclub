/* =====================================================================
   FHS BOOK CLUB · THE FILE YOU EDIT
   ---------------------------------------------------------------------
   Almost everything that changes lives here: dates, rooms, event status,
   book titles and the sign-up link. Edit the text inside the quotes, save,
   and refresh the page. Don't delete the quotes, commas or brackets.

   RULES THIS SITE FOLLOWS
   - Nothing is shown as confirmed unless you set  status: "confirmed".
   - While a detail is unknown, leave it as "... to be announced". The site
     shows it in a pencilled-in style so visitors can tell it isn't final.

   STATUS WORDS (use one of these for `status`)
     "confirmed"  date and place are set
     "planned"    we intend to do it, details not final
     "idea"       we've talked about it, nothing decided
     "regular"    a regular club meeting
     "example"    sample row (used for the Past events examples)
   ===================================================================== */
window.FHS = {



  /* ---- EMAIL SIGN-UP --------------------------------------------------
     Until "endpoint" is filled in, the sign-up popup shows but cannot send anything.
     To turn it on, make a free form at formspree.io (it emails you every
     sign-up), then paste its URL here, like:
       endpoint: "https://formspree.io/f/abcdwxyz"
     Get the school's OK before collecting students' emails. */
  signup: { endpoint: "https://formspree.io/f/mjygaeeb" },

  /* ---- CURRENT BOOK ---------------------------------------------- */
  currentBook: { title: "The Southern Book Club’s Guide to Slaying Vampires by Grady Hendrix" },

  /* ---- NEXT UP (shown on the Home page and the Join page) --------- */
  next: {
    meeting: { date: "Thursday, October 15, 2026", room: "Room 87" },
    event:   { title: "First book bedazzling event", date: "Thursday, October 15, 2026", status: "confirmed" }
  },

  /* ---- OFFICER PHOTOS ---------------------------------------------
     Put each photo in the images/team folder, then type its file name
     below. Use JPG, PNG or WebP (not HEIC), about 1 MB or less, taller
     than wide (4:5 is ideal). Get the student's and school's OK first.
     Until a photo is added, the page shows a "Photo coming soon" slot. */
  team: {
    shrivalli: { photo: "shrivalli.jpg", alt: "Shrivalli, the club's president" },
    sophia:    { photo: "", alt: "Sophia, the club's vice president" },
    agrima:    { photo: "", alt: "Agrima, the club's treasurer" },
    pooja:     { photo: "", alt: "Pooja, the club's secretary" }
  },

  /* ---- STATUS LABELS (what the stamps say) ------------------------ */
  statuses: {
    confirmed: "Confirmed",
    planned:   "Planned",
    idea:      "Idea",
    regular:   "Regular meeting",
    example:   "Example only"
  },

  /* ---- EVENTS ------------------------------------------------------
     To add an event: copy one { ... } block, paste it below, and edit it.
     To remove one: delete its whole { ... }, including the comma. */
  events: {

    /* Regular club meetings: every other Thursday during lunch */
    meetings: [
      { title: "Club meeting", date: "Thursday, October 15, 2026",
        location: "At school, during lunch, in Room 87.",
        status: "regular", note: "Every other Thursday." },
      { title: "Club meeting", date: "Date to be announced",
        location: "At school, during lunch, in Room 87.",
        status: "regular", note: "Every other Thursday." },
      { title: "Club meeting", date: "Date to be announced",
        location: "At school, during lunch, in Room 87.",
        status: "regular", note: "Every other Thursday." }
    ],

    /* Monthly book activities (we aim for about one a month) */
    activities: [
      { title: "Book bedazzling: our first event", date: "Thursday, October 15, 2026",
        location: "At school, during lunch, in Room 87.",
        status: "confirmed", note: "Our first book bedazzling event." },
      { title: "Book bingo", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." },
      { title: "Bookmark making", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." },
      { title: "Blind-date-with-a-book", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." },
      { title: "Buddy reading", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." },
      { title: "Book swap", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." }
    ],

    /* Library events. Keep these "planned" until a date, place and
       any partner are actually confirmed. */
    library: [
      { title: "Promoting club events at the local library", date: "Date to be announced",
        location: "Local library. Details to be announced.",
        status: "planned", note: "This is a plan. Nothing is confirmed yet." },
      { title: "Library event (title to be announced)", date: "Date to be announced",
        location: "Local library. Details to be announced.",
        status: "planned", note: "This is a plan. Nothing is confirmed yet." }
    ]
  }
};
