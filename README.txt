FHS BOOK CLUB WEBSITE
=====================

HOW TO PREVIEW
  1. Unzip this folder.
  2. Double-click index.html (or in a terminal inside the folder:  start index.html  on Windows,
     open index.html on Mac). The whole site works from your computer, no internet or install needed.
  3. In VS Code: File > Open Folder, pick this folder, edit, save, then refresh the browser.

WHAT'S IN THE FOLDER
  index.html, about.html, events.html, team.html   the main pages
  team/shrivalli.html, sophia.html, agrima.html, pooja.html   one page per officer
  css/style.css      colors and fonts (see the variables at the top)
  js/site-data.js    THE FILE YOU EDIT: dates, rooms, event status, books, sign-up link
  images/team/       put the four officer photos here
  js/site.js         builds the lists from site-data.js (no need to edit)

PLACEHOLDERS TO REPLACE BEFORE PUBLISHING
  All of these are in js/site-data.js unless noted.
   S. signup.endpoint         the Formspree URL that turns on the email sign-up popup
                              (see js/site-data.js). Until it is filled in, the popup shows but says sign-up isn't connected.
   0. team (photos)           add each officer's photo to images/team, then type its
                              file name in site-data.js under "team". JPG/PNG/WebP, not HEIC,
                              about 1 MB, taller than wide. Get permission first.
   3. (done) next meeting and first bedazzling event are set to Oct 15, 2026
   4. (done) meeting room is Room 87
   5. events.meetings         dates for meetings 2 and 3 (Events page)
   6. (done) next.event is the first bedazzling event
   7. (done) current book is set
   8. events.activities       date, location and status for each activity
                              (they start as "idea"; change to "planned" or "confirmed")
   9. events.library          date, location and details for library events
                              (they start as "planned"; use "confirmed" only when it's real)

  Anything shown in italics with a dotted underline is "to be announced".
  Anything with a yellow dashed highlight is a placeholder to replace.

THINGS THAT ARE DELIBERATELY NOT HERE
  No login, forms, payment, analytics or backend. No social links. Photos only appear once you add them.
  No invented dates, rooms, partners or library details.

TO CHANGE THE MENU OR FOOTER
  The menu and footer are written out in each of the 9 HTML files, so change them in each one.
