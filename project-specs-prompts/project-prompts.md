# Build Project 1 — Structured Prompt Sequence (Context / Task / Format / Constraints)



Original prompt this was rewritten from: *"I want you to build a single page web application following the exact specs. I need this to be written in HTML, CSS, and JS only. No fancy anything. I will need access to each file (the index.html, styles.css, and main.js) and I want you to display this in a view that I can easily adjust if needed."*

---

## Prompt 1 — Project setup

**Context:** I'm building a one-page website for "Just Doing the Books," a bookkeeping business, following a locked spec: one headline + one-sentence description, exactly three content sections, and one call-to-action. Nothing else gets added.
**Task:** Set up the project skeleton only — no section content yet. Create three files: `index.html`, `styles.css`, `main.js`. In `index.html`, include the basic HTML5 structure, a `<header>` with the headline "Local Bookkeeping You Can Trust" and the one-sentence description, and empty placeholder `<section>` tags for the three sections to come.
**Format:** Plain HTML, CSS, and JavaScript only — no frameworks, no libraries, no build tools. Give me the full contents of all three files.
**Constraints:** Do not add navigation, extra sections, extra buttons, or any feature beyond what's described. After you give me the code, explain what each part of it does in plain language before I approve moving to the next section.

## Prompt 2 — Section 1: Services

**Context:** The site skeleton from Prompt 1 is in place. Now I'm filling in the first of exactly three sections.
**Task:** Build the "Services" section with this content only: personal and small business bookkeeping, bank statement organization and review, profit and loss reports, cash flow tracking, tax services and reports, account preparation, general bookkeeping and financial record organization.
**Format:** Add the HTML for this section into `index.html` in the existing placeholder, and any styling it needs into `styles.css`. Show me only the code you're adding/changing, not the whole file again.
**Constraints:** This is one of exactly three sections — don't add sub-navigation, extra buttons, or content beyond this list. Explain what each piece of the HTML and CSS you just wrote does before I move to the next section.

## Prompt 3 — Section 2: About

**Context:** Sections skeleton and Services are done. Now building the second of three sections.
**Task:** Build the "About Just Doing the Books" section with this content: [paste the About paragraphs].
**Format:** Add the HTML into the existing placeholder in `index.html`, plus any needed CSS. Show only what's new/changed.
**Constraints:** No new sections, no extra elements beyond a heading and the given paragraphs. Explain the code before moving on.

## Prompt 4 — Section 3: Contact / CTA

**Context:** Sections skeleton, Services, and About are done. This is the third and final section, and it also holds the site's one required call-to-action.
**Task:** Build the "Get in Touch" section: one email button (`mailto:justdoingthebooks@gmail.com`) as the single CTA, with the phone number and "Accepts Venmo, Cash App, Zelle" as plain supporting text underneath — not additional buttons.
**Format:** Add the HTML/CSS for this section, plus any JavaScript needed (e.g. the footer year). Show only what's new/changed.
**Constraints:** This must remain the only call-to-action on the page — no second button, no nav links. Explain every part of the code, including the JavaScript, before considering the build finished.

---

## Why this structure matters for the assignment
The repeated "explain the code" line at the end of every prompt isn't just good practice — it's what satisfies "explain every part" as the build happens, instead of trying to reconstruct explanations after the fact. Prompting section-by-section (rather than the whole page at once, which is what the original build prompt did) also makes "stay in scope" easier to enforce in real time — each prompt only ever asks for one of the three locked sections, so there's no room for the AI to slip in something extra without it being obvious immediately.

See also: `build-project-1-spec.md` (locked scope) and `build-project-1-prompt-log.md` (the actual prompt history and caught mistakes from the real build).