# DBiz Canvas Talk — Slide-by-Slide Script

Sourced from `~/DBiz/deck/narrative-skeleton.md` (spoken voice) and `~/DBiz/deck/deck-outline.md` (33-slide mapping). This file is the working script; the prior docs stay as the long-form record.

---

## Frame

**The point of the talk in one sentence:** if you build apps by feeding raw BRDs into an AI tool, things break in three ways. The DBiz Canvas is what we put between the BRD and the AI to stop them breaking.

**Audience:** mixed — designers, engineers, BAs, PMs, leadership. Includes juniors and non-native English speakers. Plain language throughout.

**Slot:** 30–40 min including Q&A.

**Format:** 100% online via Teams, most videos off. Engagement happens in chat. Polls go through Teams (pre-built). No "show of hands" anywhere. With videos off, voice does the work body language usually does — vary tone and pace.

**Brand and term:** the methodology is the *DBiz Canvas*. Introduce that name once on the opening slide of Act 2, then use *canvas* throughout. Avoid "intent model," "schema," "structured artifact" in spoken language; we'll show the structured form when needed but talk about it as "the canvas."

**Time budget**

| Block | Time |
|---|---|
| Opening (audience questions + setup) | 2 min |
| Act 1 — What goes wrong with BRD + AI | 6 min |
| Act 2 — The canvas in the bigger picture | 7–8 min |
| Act 3 — From canvas to product, despite changes | 15 min |
| Close + Q&A | 5–8 min |
| **Total** | **37–40 min** |

---

## Opening (~2 min)

### S·01 — Title · ~10s
**Visual:** Title, speaker name, VBS as case study tucked underneath. Plain.
**Speaker:**
- "Thanks for joining. Before I start, two quick questions in the chat."
- (Title slide stays up while chat fills.)

### S·02 — Chat prompt 1 · ~45s
**Visual:** Big text. *Drop a Y in chat if you've ever tried building an app by feeding a BRD straight into an AI tool — Cursor, Claude, v0, Lovable, anything like that. N if you haven't.*
**Speaker:**
- Read the prompt.
- Watch the chat scroll. Read the rough split out loud.
- Don't rush — the count itself is the setup.

### S·03 — Chat prompt 2 · ~45s
**Visual:** Big text. *For everyone who said Y: what didn't work? Speak up.*
**Speaker:**
- Read 2–3 replies out loud verbatim. Unmute is fine; chat is fine.
- The audience is writing your Act 1 setup for you.

### S·04 — What this talk does · ~30s
**Visual:** Three short lines, stacked.
- *What goes wrong with BRD + AI.*
- *What we did differently for VBS.*
- *How we shipped in 3 weeks despite three BRD revisions.*
**Speaker:**
- "That's what this talk is about."
- "I'll show you what happens when you do it the BRD-into-AI way. Then what we did differently. Then we'll get to questions."

---

## Act 1 — What goes wrong with BRD + AI (~6 min)

### S·05 — Act 1 title · ~10s
**Visual:** *Act 1 — What goes wrong with BRD + AI.* Section card.
**Speaker:**
- "Let me show you what breaks. I gave a real chunk of the VBS BRD to an AI tool and asked for a screen."

### S·06 — The setup · ~30s
**Visual:** Two columns. Left: real chunk of the VBS BRD (~a page). Right: first AI output (booking screen attempt).
**Speaker:**
- "Here's a chunk of the VBS BRD. About a page."
- "I gave it to an AI tool and asked for the booking screen. This is what came back."
- (Don't narrate every detail. Let people see it.)

### S·07 — Problem 1 · Hallucination · ~1m 30s
**Visual:** Same first AI output, with the "Consignor" column header circled in the HBL table.
**Speaker:**
- "The AI invented a column. The BRD lists thirteen fields for an HBL. Consignor isn't one of them."
- "The actual party concept in the BRD is 'Next Hop' — who you delegate the shipment to. Different concept entirely."
- "It looks reasonable. Most reviewers wouldn't catch it."
- "But it's not what the business asked for — and a screen built around the wrong concept drifts further the more you build on it."

### S·08 — Problem 2 · Drift · ~1m 30s
**Visual:** Output v1 next to v2 from the same prompt, run a day apart. Diff highlights on the changed bits.
**Speaker:**
- "Same prompt. Different day. Different output."
- "Not wildly different. But different enough."
- "If I'd built around v1 and a teammate built around v2, we'd be working on incompatible apps."

### S·09 — Problem 3 · Revision rot · ~2m
**Visual:** Two screenshots of the pickup-booking screen. Top — built on BRD v1: LSP self-books, two steps, "Confirm booking & pay". Bottom — same shell after a BRD revision introduced the Terminal-Operator-on-behalf-of-LSP flow: new Step 0, Consignor column renamed to Shipper, new LSP service fee line, CTA changed to "Confirm & invoice".
**Speaker:**
- "This is the one that really hurt."
- "BRD changed. Mid-build. Ran the prompt again. New output is fine on its own — but it doesn't fit the app I already built."
- "Three concrete things on screen. The Consignor column is now Shipper — same data, new word. There's a new Step 0 — booking on behalf of an LSP — that pushes the whole form down. And the billing flow flipped from 'pay' to 'invoice', with a new fee line and a different total."
- "Each one looks small. Together, the v1 shell doesn't survive. I either rebuild from scratch or stitch incompatible halves together."
- *Spoken aside, no slide:* "It's the telephone game. Every revision loses something. The deeper problem is the AI doesn't have anything stable to anchor to between revisions."

### S·09·5 — Pivot · what was missing? · ~20s
**Visual:** Quiet, near-empty slide. *"Three problems. One missing thing."* + the rhetorical question. Tags reminding the audience of S·07 / S·08 / S·09.
**Speaker:**
- "So — three problems. Hallucination. Drift. Revision rot."
- "What would have to exist between the BRD and the AI for none of these to happen?"
- *(deliberate pause, ~2 seconds — let the question land. No chat response expected; this is a beat, not a poll.)*
- "Something stable. Something both sides can anchor to. That's what we built."

---

## Act 2 — The canvas in the bigger picture (~7–8 min)

### S·10 — Act 2 title · ~10s
**Visual:** *Act 2 — The canvas in the bigger picture.* Section card. (Brand: *DBiz Canvas* introduced here, once.)
**Speaker:**
- "What we did differently was put a stable thing between the BRD and the AI. We call it the DBiz Canvas."
- "Before I show you the canvas, here's the bigger picture in one slide."

### S·11 — The pipeline · ~1m 30s
**Visual:** Single horizontal flow.
`Raw inputs (BRDs · journeys · flows · notes) → DBiz Canvas (intent model + artifacts for build [back end · front end · design · architecture]) → Working repository (canvas specs + design system specs [tokens · components · registry]) → AI-assisted build → spec-driven front-end screens.`
DBiz Canvas + canvas-specs portion of the working repo highlighted. Back-end / architecture columns visible but greyed out.
**Speaker:**
- "Left to right: raw inputs, the canvas, the working repository, the AI, the actual screens."
- "The canvas holds two things: a collaborative source of truth, and structured artifacts for build."
- "Today we're zooming in on the canvas and the canvas specs. The highlighted boxes. Everything else exists; it's not what today is about."

### S·12 — What went in: the mess · ~1m 30s
**Visual:** Grid of small thumbnails — seven BRD versions, journey-map screenshots, scraps of notes from calls. Don't over-arrange. The point is the mess.
**Speaker:**
- "This is what came in over 3 weeks."
- "Multiple BRD revisions from Ronnie. Journey maps we drew and redrew. Notes from calls. Different people contributing different shapes of input."
- "None of it bad. All of it inconsistent."
- "All of this went into the canvas, in a structured way. Once it's in there, it doesn't matter what shape it came in as."

### S·13 — The canvas — what it actually looks like · ~1m
**Visual:** Full-bleed screenshot of the canvas in the browser, scrolled top-to-bottom slowly (or video clip if available). No annotations.
**Speaker:**
- "This is it. One structured doc. Same fields every time."
- "We use it for two things — and that's what the rest of this section is about."

### S·14 — Same source, two uses · ~30s
**Visual:** Two boxes side by side under one label *DBiz Canvas*.
- Left: *Part 1 — Collaboration* (consensus · actors · entities · journeys · rules · open questions)
- Right: *Part 2 — Artifacts for build* (information architecture · screen list · data fields · stages and transitions)
**Speaker:**
- "Same source. Two uses."
- "First, to collaborate and reach consensus on what the system actually is."
- "Second, once we agree, to generate the artifacts the build needs."

### S·15 — Part 1 · Collaboration · ~30s
**Visual:** Section card. *Part 1 — Collaboration.* Subtitle: *Where Roni, Kavya, Ranjith, and I lived day-to-day.*
**Speaker:**
- "The first job of the canvas is collaboration."
- "We added to it, argued in it, marked things as approved or pending."
- "The piece I want to call out is open questions."

### S·16 — Open questions · day 1 · ~1m
**Visual:** Real screenshot of the canvas with the open-questions panel visible — many cards, varied statuses. Highlight the count.
**Speaker:**
- "Anything we couldn't answer became a card."
- "Some got answered by us. Some by Ronnie or the client."
- "They stayed visible until resolved."

### S·17 — Open questions · a week later · ~45s
**Visual:** Same view, a week later. Most cards resolved or folded into rules. Side-by-side or before/after if possible.
**Speaker:**
- "Same view, a week later."
- "Most resolved. Each one folded into a rule, an entity, or a flow once answered."

### S·19 — Part 2 · Artifacts for build · ~30s
**Visual:** Section card. *Part 2 — Artifacts for build.* Subtitle: *Once we agree, the canvas exports specs the build can consume.*
**Speaker:**
- "Once we agree on what's in the canvas, we generate the artifacts the build actually consumes."

### S·20 — Artifacts, grouped by swim lane · ~1m
**Visual:** Four columns. Design / front end highlighted. Back end and architecture greyed as "out of scope today."
- *Design:* information architecture · screen list · journeys
- *Front end:* data fields · validation rules · stages and transitions
- *Back end (greyed):* entities · DB schema · API endpoints
- *Architecture (greyed):* service map · data flow
**Speaker:**
- "Each artifact serves a swim lane."
- "For VBS, we used canvas-driven artifacts mostly on the design and front-end side."
- "Why the structured shape matters for AI: free-form BRDs vary every time. A list with the same fields every time gives the AI something it can actually use."
- "So we hand the AI the canvas, not the BRD. Let me show you the actual artifacts."

---

## Act 3 — From canvas to product, despite changes (~15 min)

### S·21 — Act 3 title · ~10s
**Visual:** *Act 3 — From canvas to product.* Subtitle: *Despite changes mid-build.*
**Speaker:**
- "I'll walk through the artifacts in the order we built them."

### S·22 — Phase 0 · The working repository · ~1m
**Visual:** Outer box *Working repository*. Inside: two boxes side by side. Left: *Canvas specs* (markdown / JSON). Right: *Design system specs* — small stack *Tokens → Components → Registry.* Arrow from outer box into an *AI-assisted build* node.
**Speaker:**
- "All these artifacts get exported into a single working repository, alongside a design system spec."
- "Design system spec is layered: tokens at the base — colour, spacing, type, radii. Components in the middle — buttons, inputs, tables, all unstyled. Registry on top — binds those into the project with the right theming."
- "AI reads both the canvas specs and the design system specs from this one place. That's what keeps the build coherent when we regenerate."

### S·23 — Phase 1 · Stages and lifecycle · ~2m
**Visual:** Left: shipment lifecycle as a clean horizontal diagram — *Vessel → Wharf → Unpacked → Ready → Picked.* Right: live screenshots of the actual VBS badges in the running app, one per stage, in the same order.
**Speaker:**
- "A shipment starts on a vessel, arrives at the wharf, gets unpacked, becomes ready, then gets picked. Five stages."
- "Written down in the canvas before any screen got designed."
- "Once the stages exist: designer knows the colour, label, icon for each badge. Engineer knows what each transition is in code. Same list, both sides."

### S·24 — Phase 2 · Data dictionary · ~2m
**Visual:** Left: slice of the shipment data dictionary (field name, type, optional/required, choices). Right: live shipment card from the app. Lines connecting each field on the card to its row in the dictionary.
**Speaker:**
- "What fields go on a shipment card? The canvas already answers that."
- "Full list of fields. Shape (text, number, date). Optional or required. Fixed list of choices where it applies."
- "Designer: this is what goes on every card. Engineer: this is what the form validates against. One source, both sides."

### S·25 — Phase 3 · How the app is laid out · ~2m
**Visual:** VBS route map, grouped by actor. Each actor has a column of pages under their name. Highlight a couple of overlapping pages between actors to show shared screens.
**Speaker:**
- "The actor list inside the canvas is the navigation."
- "Each actor gets their own area. Each thing they do becomes a page."
- "Because the canvas already says who the actors are and what they do, the layout falls out without anyone having to argue about it in a room."

### S·26 — Phase 4a · Design system as a layered stack · ~1m 30s
**Visual:** Left: small stack diagram — *Tokens → Components → Registry* — arrows showing each layer feeds the next. Right: a single VBS card, with one annotation per layer pointing at where its contribution lands.
**Speaker:**
- "We didn't hand the AI a random style guide. We handed it a design system spec with three layers."
- "Tokens: colour, spacing, type, radii."
- "Components: unstyled building blocks — buttons, inputs, tables, cards."
- "Registry: binds those into the project with the right theming."
- "AI uses all three, layered, when it builds a screen."

### S·27 — Phase 4b · The handoff page (flows index) · ~45s
**Visual:** Screenshot of the dev-tools / flows index inside the VBS app. Routes grouped by actor, status badges visible.
**Speaker:**
- "On top of the design system, we kept a handoff page inside the app itself."
- "Flows index, component showcase. Engineer's first stop."

### S·28 — Phase 4c · Coverage view · ~45s
**Visual:** Coverage tracker side-by-side: canvas requirements on one side, what the app actually has on the other. Built / pending / stale states clearly distinguishable.
**Speaker:**
- "Same handoff page also has a coverage tracker."
- "What the canvas says we need vs. what the app actually has. Built. Stale. Missing."
- "At any moment, the engineer (and the rest of us) could see where we were."
- "Read the canvas. Look at the design system. Check the flows index. Build the next page. Repeatable. Reviewable. Not a black box."

### S·29 — Phase 5 · The build, honestly · ~2m 30s
**Visual:** Three rows. Row 1: *BRD change #1 → canvas update → regenerate → ship.* Row 2: same pattern. Row 3: same pattern. Don't over-design — looks more credible plain.
**Speaker:**
- "I want to be honest about this part. The build was messy."
- "We regenerated screens many times. Things broke. AI tools aren't magic and they didn't get it right the first time."
- "Here's what mattered: every time something broke, we'd go back to the canvas, fix the root cause there, and regenerate forward."
- "The mess didn't pile up across phases because the source stayed put."
- "BRD changed three times during the build. Each time, we updated the canvas, and the screens caught up."
- "We shipped in 3 weeks because we always had a stable place to come back to when the AI got things wrong."

### S·30 — Phase 6a · Feedback tracker · ~1m
**Visual:** Feedback tracker open with 4–6 real notes pinned to specific screens. Notes show short text + the screen they refer to + status (open/done).
**Speaker:**
- "How did we know we'd built the right thing? Two things."
- "First, the canvas is the checklist: every flow maps to a screen, every business rule to UI enforcement, every lifecycle stage reachable from somewhere. Coverage view tells us where the gaps are."
- "Second, this — the feedback tracker. As we walked through screens with Roni and Ranjith, we logged what worked and what didn't, against the screen it referred to."
- "Tracker fed back into the canvas if it was a rule change, or into the design system if it was a styling thing. Same loop, both directions."

### S·31 — Phase 6b · A live screen · ~30s
**Visual:** A real, polished VBS screen. Booking screen on the wharf actor's dashboard, or a shipment card detail view. No annotations.
**Speaker:**
- "This is what shipped."
- (Pause. Let it sit.)

---

## Close + Q&A (~5–8 min)

### S·32 — Close · what we shipped, and what's next · ~1m
**Visual:** Two short blocks.
- *That's how we shipped VBS in 3 weeks. The AI wasn't doing magic. We put a stable thing between the BRD and the AI.*
- *What's next: BAs and PMs authoring the canvas directly, so we can do this for more than one project at a time.*
**Speaker:**
- Read the first block plainly.
- "Right now the canvas is built by me and Kavya in tight loops. The thing we're working on next is letting BAs and PMs author it directly."

### S·33 — Q&A · ~5–7m
**Visual:** Single line: *Questions? Drop them in chat or unmute.* Plus speaker email or follow-up handle.
**Speaker:**
- "Drop questions in chat as I'm closing or unmute now."
- Pull from chat as you go. With videos off, chat is the only signal you have on what's landing.
- Time-box visibly.

**Questions to be ready for** (in your head, not on the slide):
- *"Could we have shipped without the canvas?"* — Yes, but we'd still be rebuilding screens every time the BRD changed.
- *"How long did the canvas take to build?"* — About 3 weeks, in parallel with discovery.
- *"Does this work for small projects?"* — Probably overkill for one-screen tools. Worth it the moment you have multiple actors and stages. The canvas alone is great for scope finalisation at pre-discovery.
- *"Can BAs really write the canvas themselves?"* — Not yet. That's the next step.
- *"What didn't the canvas catch?"* — Pick one real thing: visual density, real-data overflow on the dashboard.

---

## Speaker notes

- **Cold-open energy:** the first 90 seconds (S·02 + S·03) is where the room either commits or doesn't. Don't rush past the chat poll. Reading their pain back to them is what buys you the next 35 minutes.
- **Where to slow down:** S·09 (revision rot), S·28 (coverage), S·29 (the build timeline). These are the proof.
- **Where to move:** S·05 / S·10 / S·21 act-titles — five seconds. S·14 / S·19 set-ups — under 30s.
- **If you're running long at S·25:** drop the actor-by-actor enumeration; just say "X routes, four actors, derived from the canvas."
- **Demo cuts:** four slides in the deck have live-demo hints (S·17, S·27, S·30, S·31). Pick at most two — the strongest is S·31 (running app) plus S·27 (`/dev/flows`).
- **With videos off:** vary tone, vary pace. Pull questions from chat as you go, not just at the end.
