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

  /* ---- SIGN-UP LINK ------------------------------------------------
     Paste the school-approved sign-up link between the quotes, like:
       signupUrl: "https://forms.example.com/your-form",
     Leave it empty ("") until you have it. */
  signupUrl: "",

  /* ---- QUESTIONS ---------------------------------------------------
     A school-approved way to ask the club a question (shown on Join). */
  contact: "[Add a school-approved way to ask questions]",

  /* ---- CURRENT BOOK ---------------------------------------------- */
  currentBook: { title: "To be announced" },

  /* ---- NEXT UP (shown on the Home page and the Join page) --------- */
  next: {
    meeting: { date: "Date to be announced", room: "Room to be announced" },
    event:   { title: "To be announced", date: "Date to be announced", status: "planned" }
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
      { title: "Club meeting", date: "Date to be announced",
        location: "At school, during lunch. Room to be announced.",
        status: "regular", note: "Every other Thursday." },
      { title: "Club meeting", date: "Date to be announced",
        location: "At school, during lunch. Room to be announced.",
        status: "regular", note: "Every other Thursday." },
      { title: "Club meeting", date: "Date to be announced",
        location: "At school, during lunch. Room to be announced.",
        status: "regular", note: "Every other Thursday." }
    ],

    /* Monthly book activities (we aim for about one a month) */
    activities: [
      { title: "Book bingo", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." },
      { title: "Bookmark making", date: "Date to be announced", location: "Location to be announced",
        status: "idea", note: "We've talked about this one. Nothing is scheduled yet." },
      { title: "Book bedazzling", date: "Date to be announced", location: "Location to be announced",
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
    ],

    /* Past events. These two rows are EXAMPLES so you can see the layout.
       Replace them with real past events, or delete them. */
    past: [
      { title: "[Example] Past event title", date: "[Example date]", location: "[Example location]",
        status: "example", note: "Example row only. This did not necessarily happen. Replace or delete it." },
      { title: "[Example] Another past event", date: "[Example date]", location: "[Example location]",
        status: "example", note: "Example row only. This did not necessarily happen. Replace or delete it." }
    ]
  }
};
