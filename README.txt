FHS BOOK CLUB WEBSITE
=====================

HOW TO PREVIEW
  1. Unzip this folder.
  2. Double-click index.html (or in a terminal inside the folder:  start index.html  on Windows,
     open index.html on Mac). The whole site works from your computer, no internet or install needed.
  3. In VS Code: File > Open Folder, pick this folder, edit, save, then refresh the browser.

WHAT'S IN THE FOLDER
  index.html, about.html, events.html, team.html, join.html   the five main pages
  team/shrivalli.html, sophia.html, agrima.html, pooja.html   one page per officer
  css/style.css      colors and fonts (see the variables at the top)
  js/site-data.js    THE FILE YOU EDIT: dates, rooms, event status, books, sign-up link
  js/site.js         builds the lists from site-data.js (no need to edit)

PLACEHOLDERS TO REPLACE BEFORE PUBLISHING
  All of these are in js/site-data.js unless noted.
   1. signupUrl               the school-approved sign-up link (Join page button)
   2. contact                 school-approved way to ask questions (Join page)
   3. next.meeting.date       next meeting date (Home, About, Join)
   4. next.meeting.room       meeting room (Home, About, Join)
   5. events.meetings         date + room for each club meeting row (Events page)
   6. next.event              next event title and date (Home)
   7. currentBook.title       the book you're reading now (Home, About)
   8. events.activities       date, location and status for each activity
                              (they start as "idea"; change to "planned" or "confirmed")
   9. events.library          date, location and details for library events
                              (they start as "planned"; use "confirmed" only when it's real)
  10. events.past             two EXAMPLE rows: replace with real past events or delete them
  11. team/*.html (4 files)   the yellow "In [Name]'s words" box on each officer page:
                              write a sentence or two, or delete the whole box

  Anything shown in italics with a dotted underline is "to be announced".
  Anything with a yellow dashed highlight is a placeholder to replace.

THINGS THAT ARE DELIBERATELY NOT HERE
  No login, forms, payment, analytics or backend. No photos or social links.
  No invented dates, rooms, partners or library details.

TO CHANGE THE MENU OR FOOTER
  The menu and footer are written out in each of the 9 HTML files, so change them in each one.
