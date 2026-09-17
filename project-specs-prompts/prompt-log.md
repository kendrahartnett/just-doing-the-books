# Build Project 1 — Prompt Log

Evidence of the thinking behind "Just Doing the Books." Kendra reviewed/directed every step below; this log is for the "log every prompt" requirement. Organized by phase since the build moved between two tools (Claude, then Replit).

---

## Phase 1 — Scoping (with Claude)

**1. Pasted the assignment requirements** (headline + 3 sections + 1 CTA spec, scope-discipline constraints, grading rubric, milestones: scope today → build Day 4 → demo Day 5).
→ Produced: shared understanding of the spec; saved to project doc `build-project-1-spec.md`.

**2. Chose the site's purpose:** "A family member's service" (selected from options presented).
→ Narrowed the subject before any content was drafted.

**3. Provided the subject and source material:** photos of her mom Joanna Plues's business card ("Just Doing the Books," Payson AZ, PTIN P03418357) plus written details — services offered (personal/business bookkeeping, all statement types, tax prep, e-filing), credentials (Bookkeeping Certification, 2 AA degrees), personal qualities, and desired contact methods (email button, phone/text with 24-hr response) and payment options (Venmo, Cash App, Zelle, with logos requested).
→ Raw content for the site.

**4. Scope-discipline decision:** presented with the conflict between "exactly one CTA" and three requested contact/payment features, Kendra chose **"Email button only"** — email as the single CTA, phone as plain text, payment logos dropped entirely.
→ This is the scope-control decision the rubric is grading for.

**5.** *"I want the 3 featured sections to be 'services / about Joanna and why to choose her business / how to reach them with call to action email button'. Let's add this in small text in the contact section: 'call/text (928) 970-2835, and she'll respond within 24 hours.' as well as one-line 'Accepts Venmo, Cash App, Zelle' under the contact section, no logos."*
→ Finalized section order/topics and confirmed the phone + payment-methods line as small text, no logos. Locked scope saved to the project doc.

## Phase 2 — Initial build (with Claude)

**6.** *"Let's start building the site. I need it made in HTML, CSS, and JS only. I will need access to each file, the index.html, styles.css, and main.js, each as artifacts that I can upload into my Github and VS code editor. I want to be able to preview the application so we can make adjustments as needed. I will also need you to keep track of all of my prompts and I will go over all of the code myself to Be able to explain every part of what we build together. Make sure to stay within the set constraints and specs. Do not deter from the project requirements."*
→ Produced: `index.html`, `styles.css`, `main.js`, and `images/logo.png` (delivered as files), plus a live preview link that mirrors those exact files. This log started.

## Phase 3 — Rebuilding & iterating in Replit

**7.** Kendra rebuilt the site independently in Replit, then came back with: *"I used replit to make the build. here are the files. I want to make a professional README.md to add to this project that includes the specs and project requirements, as well as the description of the company."*
→ Produced: `README.md` documenting the business, the locked spec, the constraints/rubric, tech stack, and file structure.

### Full verbatim prompt history — sent to Replit's AI (provided directly by Kendra)

These are the actual prompts, word for word, typed into the Replit build session (not including images/reference documents attached alongside them):

1. "I want you to build a single page web application following the exact specs. I need this to be written in HTML, CSS, and JS only. No fancy anything. I will need access to each file (the index.html, styles.css, and main.js) and I want you to display this in a view that I can easily adjust if needed"
2. "Let's change the one line description at the top to say: Personal and small business bookkeeping, tax prep, and e-filing by Joanna Plues, serving local businesses and neighbors Payson, AZ since 2012."
3. "Let's change the one line description at the top to say: Personal and small business bookkeeping, tax prep, and e-filing by Joanna Plues, serving local businesses and neighbors in Payson, AZ since 2012." (typo fix on #2 — added "in")
4. "make the gap between the navbar and the first section much smaller. bring them closer"
5. "move the logo to the top of the page to be right next to the 'payson, az since 2012' tag. Put them in a flex so they can be next to eachother"
6. "remove that action and replace the navbar logo with the actual logo image"
7. "let's replace what it in the 'About Joanna' section hear to 'About Just Doing the Books' and replace the text inside that section with this: Joanna Plues started this small business in 2012 and has been helping neighbors and local businesses keep their books ever since. She holds a Bookkeeping Certification from Eastern Arizona College, along with two Associate degrees — one in Business Science and one in Administrative Information Services. With years of experience and a strong attention to detail, Joanna understands how important it is to keep financial records organized, accurate, and up to date. She takes the time to understand each client's needs and works hard to make bookkeeping feel less stressful and more …."
8. "replace the last paragraph in the about section to: She treats every business and personal bookkeeping need with the same care and respect she would give her own, helping clients stay organized, keep track of their finances, and feel more confident about their financial records."
9. "change the one-line description at the top to say: Personal and small business bookkeeping, tax prep, and e-filing by Joanna Plues, serving local businesses and neighbors of Payson, AZ." (dropped "since 2012," reworded again)
10. "move the bottom line of the navbar up"
11. "Inside the circle that is in between section 1 and section 2, I want you to replace the text inside with: PTIN: P03418357"
12. "Make the 'PTIN' text larger and italisize the other text in the circle"
13. "in section 2, make the 'about' in the title different than the company name"
14. "That's better. But let's adjust the about to be a little bit larger"
15. "let's rebuild the 'services' section to reflect this: Bookkeeping Services / Personal & Small Business Bookkeeping — Joanna offers organized and reliable bookkeeping support for individuals and small businesses, including: Bank statement organization and review; Profit and loss reports; Cash flow tracking and reports; Tax services and tax reports; Account preparation; General bookkeeping and financial record organization"
16. "Let's move the entire section with the circle in between section 1 and 2 to the very bottom of the page"
17. "That is not what i wanted. Move the about section back to section 2." — **caught an AI mistake:** the AI moved the wrong content (the whole About section, not just the PTIN circle) when asked to relocate the circle; Kendra caught it and corrected it immediately.
18. "I want you to move only this part of the section to the bottom of the page. Leave everything else exactly where it is:" (clarifying #16/#17 — only the PTIN circle should move)
19. "I want to remove the clickable section tabs in the navbar. I think this exceeds the specs. Replace them with text: '(928) 970-2835' and underneath that line, add: justdoingthebooks@gmail.com" — **first attempt** at catching the nav-tabs scope violation.
20. "add the logo to the very bottom section to be placed directly across from the PTIN circle. I want them in a flex so they are both next to eachother"
21. "Make the logo a little larger to fill in the space next to the PTIN circle"
22. "I want to logo at the bottom to be much larger. I want it to fill up the blank space. Like in the flex, the PTIN circle would have 35% and the logo would have 60%"
23. "make the very bottom part to be a part of the 3rd section. I can only have 3 section so just blend them together" — active scope enforcement: merging a drifting fourth "section" back into section 3 to stay at exactly three.
24. "leave the section 3 the same title, but change the text below to say Time to Get Things Balanced"
25. "I want to remove the clickable section tabs in the navbar. I think this exceeds the specs. Replace them with text: '(928) 970-2835' and underneath that line, add: justdoingthebooks@gmail.com" (linked to replit.com/@kendrahartnett/Just-Doing-the-Books-Website) — **the nav tabs had come back**, so this is the **second, official "catch one mistake" moment** flagged for the assignment (see write-up below).

### Replit's own session summary (auto-generated, some overlap with the list above)

Replit's AI kept its own running summary of part of this same session, which was provided separately. A few of these restate edits already captured above; a few add detail not otherwise logged (the exact CTA button wording, the PTIN number's color change, and the requests for a clean HTML/CSS/JS-only file package):

7-S.1. Keep Section 3's title as "Have Questions? Let's Add Them Up," but change the text below it to exactly "Time to Get Things Balanced." *(= item 24 above)*
7-S.2. Remove the large "Have Questions?" text in section 3.
7-S.3. Actually put the large white text back but have the text say: Contact me.
7-S.4. Move the "Contact me" to go underneath "Time to Get Things Balanced" and change "Contact me" to "Let's connect".
7-S.5. Replace the text underneath the email button to say: You can also call or text (928) 970-2835. Joanna will respond to all inquiries within 24 hours.
7-S.6. Center that text.
7-S.7. Separate the sentences onto their own lines.
7-S.8. Make that text a little smaller — the CTA button should be the main focus of the section.
7-S.9. Have the CTA button say: Email Joanna Right now
7-S.10. Move "(928) 970-2835." to its own line.
7-S.11. Change the "P03418357" color in the bottom section to match the lighter blue. *(color detail not in the verbatim list above)*
7-S.12. Change section 3's title from "03 / Have Questions? Let's Add Them Up" to just "Have Questions?"
7-S.13. "I need the artifact files now." *(requesting the clean HTML/CSS/JS package from Replit)*
7-S.14. "This was supposed to be ONLY html, css, and js. nothing else." — **another caught mistake:** the AI's exported package included extra files beyond the three required.
7-S.15. "I need a folder with the logo image."
7-S.16. "I need a log of all of the prompts that I sent you for this project."

---

## Phase 4 — Continuing the log with Claude

**8.** *"add these prompts to the prompt log as well."*
→ Folded Replit's session summary (7-S.1–7-S.16 above) into this master log.

**9.** *"how do i bring these 2 sections in the flex closer together in full screen?"* (PTIN stamp + logo in the footer sitting too far apart on wide screens)
→ Diagnosed the cause (`justify-content: space-between` with wide fixed-percentage flex children) and gave the fix.

**10. Caught mistake, flagged explicitly for this assignment:** the same "remove clickable nav tabs, replace with phone/email text" prompt as verbatim item 25 above — provided again directly to Claude when logging which mistake was caught. See full write-up below.

**11.** *"here are the rest of the prompts during the build..."* (this entry) — provided the complete verbatim Replit prompt history (items 1–25 above) to fill gaps the auto-generated summary missed.

---


## The caught mistakes (satisfies the "catch one mistake" constraint — actually have three)

**1. Scope creep — clickable navbar tabs (the main one to lead with in your demo).**
What the AI got wrong: it added clickable navigation tabs to the navbar — a feature never in the locked spec (headline + 3 sections + 1 CTA, nothing extra). Why it's a mistake: the spec explicitly rules out bonus features, and a nav bar is exactly that. The fix: replaced the tabs with plain text (phone number + email) in the same navbar space — no new functionality added. Notably, this had to be caught **twice** (verbatim items 19 and 25) because the tabs resurfaced after the first fix — good evidence of staying vigilant, not just fixing something once and moving on.

**2. Wrong content moved.**
When asked to relocate the PTIN circle to the bottom of the page, the AI moved the entire About section instead. Kendra caught it immediately ("That is not what i wanted. Move the about section back to section 2.") and had to clarify exactly which piece should move.

**3. Extra files in the exported package.**
When Kendra asked Replit for the downloadable file package, it included more than the three required files. Kendra caught it and required an HTML/CSS/JS-only package.

## Also worth knowing (a caveat, not a caught mistake)
The email CTA button uses a `mailto:` link, which only opens something if the visitor's device has a default email app configured — on some phones/browsers with none set up, clicking it does nothing and gives no error. Worth testing on real devices, or deciding it's an acceptable tradeoff.