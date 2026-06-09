# DBiz Canvas Talk — Presenter Script

Two-screen setup: deck on the big monitor, this script on your laptop. Optimized for skim — eyes grab the **bold lead** first, fall into the beats, then advance.

---

## How to use this script

Each slide block has three zones:

- **SAY** — what comes out of your mouth. Bold lines are anchors. Each bullet is a full sentence (or two), so read them as you'd talk, not as a list.
- **DO** — clicks, reveals, pauses, demo jumps. Stage directions only — never read these aloud.
- **SKIP** — the line(s) to drop if the room is rushing. Pre-decided so you don't have to improvise it live.

Every slide ≥ 1 min has a SKIP. The talk is paced for ~30 min in a 30–40 min slot, so default is to deliver in full. Only reach for SKIPs if you're clearly running over.

---

## Frame (read once, before the talk)

**The point in one sentence:** if you build apps by feeding raw BRDs into an AI tool, things break in three ways. The DBiz Canvas is what we put between the BRD and the AI to stop them breaking.

**Audience:** mixed — designers, engineers, solutions architects, BAs, PMs, leadership, QA. Includes juniors and non-native English speakers. Plain language throughout. Brand term *DBiz Canvas*, introduced once on S·10. After that, just *the canvas.*

**Slot:** 30–40 min including Q&A.

**Format:** 100% online via Teams, cameras off. Engagement happens in chat. With voice the only signal you have, vary tone and pace — that's the body language.

**Time budget**

| Block | Time |
|---|---|
| Opening | ~2 min |
| Act 1 | ~5 min |
| Act 2 | ~5 min |
| Act 3 | ~11 min |
| Close + Q&A | 6–8 min |
| **Total** | **~30–32 min** |

**Cold-open fallback (memorize):** if chat is silent on S·02 after 15 seconds —
> *"If chat's slow, no worries — let me start with what I've heard from people I work with."*

Then use one prepared anecdote, jump to S·05.

---

## Opening · ~2 min

### S·01 — Title · 10s

**SAY**
- "Thanks for joining. Before I get started, I want to ask you two quick questions in the chat — they'll take about ten seconds each."

**DO**
- Stay on this slide while you read S·02.

---

### S·02 — Chat prompt 1 · 30–45s

**SAY**
- "Here's the first one. If you've ever fed a BRD straight into an AI tool — Cursor, Claude, v0, Codex, Gemini, anything like that — drop a **Y** in the chat. If you haven't, drop an **N**."
- *(read the first 4–5 letters out loud)*
- "Mostly Ys. That's the room I was hoping for."

**DO**
- Watch chat. Read 4–5 letters max — don't enumerate every reply.
- If silent after 15 seconds: use the fallback line, jump to S·05.

**SKIP**
- Reading the count back. If chat is fast, just say "lots of Ys" and move on.

---

### S·03 — Chat prompt 2 · 30–45s

**SAY**
- "Now for everyone who answered Y — I want to hear **what didn't work?** Just drop one line in chat."
- *(read 2–3 replies verbatim)*
- "Hold on to those — we're going to walk through them."

**DO**
- Prefer chat over unmute — easier to manage with cameras off.
- Two replies is enough. Don't wait for more.

**SKIP**
- The "hold on to those" callback. Just move on.

---

### S·04 — What this talk does · 30s

**SAY**
- "That's basically what this talk is about. There are three things I want to walk you through, in order."
- "**First** — what goes wrong when you do it the BRD-into-AI way."
- "**Second** — what we did differently for one of our client projects."
- "**Third** — how we managed to ship in three weeks even though the BRD got revised multiple times during the build."
- "**By the end, you'll see how to put structure between the BRD and the AI — and what it bought us in three weeks.**"
- "Drop questions in chat as we go, and I'll come back to them at the end."

**DO**
- Read each part briskly, one beat per. Don't dwell.
- Land the promise line — that's the contract for the next 40 minutes.

---

## Act 1 — What goes wrong · ~5 min

### S·05 — Act 1 title · 10s

**SAY**
- "Let me show you what breaks. There are three failure modes I want to walk through, all real, all from the VBS project."

---

### S·06 — The setup · 45s

**SAY**
- "On the left, you're looking at a real chunk of a vehicle booking system BRD we built for a client. I pasted this into a real AI tool and asked it to build me the booking screen."
- *(click the BRD)*
- "Quick thing to hold on to — the BRD lists **thirteen fields** for an HBL right here."
- "And what the AI came back with is on the right."
- *(click the AI output)*
- "Now **watch what breaks.**"

**DO**
- Click the BRD to highlight the 13 fields, then the AI output to highlight what the AI invented.
- Each card toggles independently. The double-reveal sets up S·07.

---

### S·07 — Hallucination · 1m 15s

**SAY**
- "**First problem — the AI just invented multiple columns.**"
- "It's that one circled on the right. Consignor. The BRD lists thirteen fields for an HBL, and Consignor isn't one of them."
- "But the thing is, it looks reasonable. Anyone scanning this in a stand-up would sign off on it. **That's the danger.**"
- "And once you've built around a made-up field — the validation, the API, the database column — the rebuild cost is real."

**DO**
- Pause before "That's the danger." It's the line you want them to remember.

---

### S·08 — Drift · 1m

**SAY**
- "Second problem. And the slide says it for me — **one prompt, different outputs.**"
- "The top one was one run. The bottom one is the exact same prompt, run a few minutes later."
- "Field names shift around. The layout shifts. Nothing wildly different — just enough."
- "**Here's why this matters** — if I'd built around the first version and a teammate built around the second, neither of us would even notice until we tried to merge."
- "Two people building two different apps, both thinking they were building the same one."

**DO**
- Land the bold orange line for a beat before you go into the Monday/Tuesday example.
- Hold on the second image for two beats before advancing.

**SKIP**
- Listing the specific shifts. The merge-collision line is enough.

---

### S·09 — Revision rot · 1m 45s

**SAY**
- "Third problem — and this is the one that really hurt. **The BRD changes — and what comes back is a new app.** New features. New layout."
- "The top one is the screen we built on the first version of the BRD. The bottom one is the same screen, after the BRD got revised mid-build."
- "Let me pick just one of the three changes — *Consignor* got renamed to *Shipper.* Sounds like nothing, right? Same column, just a new word."
- "But the form has to follow. The API has to follow. Every reference in the codebase has to follow."
- "And when you multiply that by the other two — there's a new step now, a new billing flow — the v1 shell just doesn't survive."
- "Either I rebuild from scratch, or I try to stitch incompatible halves together. **There's no middle path.**"
- "It's basically the telephone game. Every revision loses something. The deeper problem is that the AI doesn't have anything stable to anchor to between those revisions."

**DO**
- Pause on the bold orange subtitle and let it land before you go into Consignor → Shipper.
- Slow down through the example. This is your strongest factual moment.
- Pause after "doesn't survive." Let the audience finish the thought.

**SKIP**
- The telephone-game aside. Strong line, but the rest already lands the point.

---

### S·09·5 — Pivot · 20s

**SAY**
- "So that's three problems."
- "What would have to exist, for none of these to happen?"
- *(2-second pause — count it)*
- "Something stable. Something both sides can anchor to."
- "That's what we built."

**DO**
- The pause is non-negotiable. Two full seconds. With cameras off, it'll feel uncomfortable — that's what makes the next slide land.

---

## Act 2 — The canvas in the bigger picture · ~5 min

### S·10 — Act 2 title · 10s

**SAY**
- "**We put structure between the BRD and the AI.**"
- "Before I tell you what that structure actually is, I want to show you where it sits in the bigger picture."

**DO**
- Land the bold line. This is the thesis statement for Act 2.
- Do *not* name the canvas yet — that comes on S·13.

---

### S·11 — Pipeline · 1m

**SAY** *(before click — four boxes on screen)*
- "Today, building with AI looks like this. Four stages. Raw inputs come in. You set up a working repository — usually a UI kit. The AI builds. Screens come out."
- "That's the shape most teams already use."

*(click — Structure phase grows in between Inputs and Repository, both turn orange)*

**SAY** *(after click — five boxes on screen)*
- "We're adding a new phase **between Inputs and Repository.** We call it **Structure** — and that structure *is* the DBiz Canvas."
- "It also changes what lives in your repo. Canvas specs sit alongside your design system specs — that's why Repository is also highlighted."
- "Everything in grey today is out of scope. **The orange boxes drive the next eight minutes.**"

**DO**
- Click once. Don't talk over the animation — it takes about a second to grow the new phase in.
- After the click, point at the *Today's focus* label that appears above the row. That's your visual anchor for the rest of Act 2.

**SKIP**
- The "alongside design system specs" line. Repository's orange border is self-explanatory.

---

### S·12 — The mess · 1m

**SAY**
- "Over the course of three weeks, we had **multiple revisions of the BRD,** multiple calls and discussions, and multiple brainstorming sessions on Miro."
- "**None of it was bad. None of it lined up with the others.**"
- "Now watch what happens when all of this goes into the canvas..."
- *(click — silence — pill lands)*
- "**One source. Same shape — no matter how it arrived, who had the idea, or when it came in.**"

**DO**
- Click once. Then **stop talking.** The three columns slide to centre and the canvas pill grows in — about 3 seconds total.
- Resume only after the canvas pill is fully on screen.

**SKIP**
- The bucket counts. *"Eight BRDs, some flows, some notes"* is enough — let the slide carry the count visually.

---

### S·13 — The canvas · 45s

**SAY**
- "So what *is* that structure? **The DBiz Canvas.**"
- "One structured document, **same five sections every project, every time.**"
- "**Actors** — who uses it. **Entities** — what they work with. **Journeys** — how they get things done. **Rules** — what constrains them. **Open questions** — still up for debate."
- "Every project we run from now on starts with exactly this shape. The content's different, but the skeleton stays the same."
- "Two uses coming up — collaboration for humans first, then artifacts for AI."

**DO**
- The slide animates from the orange pill into the structured layout — let it complete before talking.
- Say each section name with a small beat between, gesturing to the corresponding card on screen.

**SKIP**
- The five-section walkthrough. *"You've got actors, entities, journeys, rules, and open questions"* is enough if you're tight.

---

### S·14 — One canvas, two uses · 20s

**SAY**
- "**One canvas. Two uses.**"
- "**Use one — collaboration.** Humans align on the spine. BAs, designers, tech leads, all in the same doc."
- "**Use two — artifacts.** Structured for AI to consume, so it doesn't hallucinate."
- "Same source, both uses. **Collaboration for humans. Artifacts for AI.**"

**DO**
- Land the closing line — it's the slide's whole thesis on one breath.
- Don't read the bullets in either column. The audience can.

**SKIP**
- The expanded breakdown. *"Two uses — collaboration and artifacts"* is enough if you're tight.

---

### S·15 — Part 1 · Collaboration · 20s

**SAY**
- "So **use one — collaboration.** And rather than walk through screenshots, **let me show you the actual canvas.**"
- "We all live in the same doc — BA, designer, tech lead. We add to it, argue in it, mark things approved or pending."

**DO**
- ⚠ **HANDOFF — switch to the live DBiz Canvas tab now.** The slide has an orange "switching to the live canvas next" cue at the bottom — that's your visual reminder.
- Once you're in the live canvas: open *Documents / transcripts*, then walk through *Consensus → Actors → Entities → Journeys → Business rules → Constraints → Open questions*.
- Stay at **feature** level — show the approve/dispute/add-new affordances. Don't read the actual canvas content out loud.
- The killer feature to land hardest is **open questions** — AI surfacing gaps in the BRD on day one.
- Come back to the deck after the live walk — next slide is **S·18 (Part 2 · Artifacts).**

**SKIP**
- The full consensus tour if you're behind on time. Show *Open questions* alone — that's the strongest single feature.

---

### S·16 — Open questions · day 1 · 30s  *(part of the live canvas walk — see S·15)*

**SAY**
- "**This is the single most valuable feature.** Anything we couldn't answer in the moment became an open question."
- "**The AI surfaces gaps in the BRD on day one — not three weeks later in design review.**"
- "Each card stays visible until it becomes a rule, a constraint, or an entity."

**DO**
- Stay at feature level — verify, approve, dispute, add new actors / constraints / questions.
- Don't read individual cards. The mechanic is the story, not the content.

**SKIP**
- The Open/Pending status detail. *"They stay visible until they're resolved"* is enough.

---

### S·17 — Open questions · a week later · 45s  *(still in the live canvas)*

**SAY**
- "Same view, a week later. **Most are resolved — each one folded into a rule, a constraint, or an entity in the canvas.**"
- "Three are still open. They'll be answered the same way."
- "Nobody is saying 'I thought we agreed on this' a week later — because the question stayed visible until it became part of the source."

**DO**
- Stay at **feature** level. Don't go into how the LLM resolves a question — that's content, not feature.
- After this, head back to the deck for **S·18 (Part 2 · Artifacts).**

**SKIP**
- The "answered the same way" line. Implicit.

---

### S·18 — Part 2 · Artifacts · 20s

**SAY**
- "Use two — **artifacts.**"
- "A BRD has rules and relationships hidden in prose. The canvas writes them as a structured spec the AI can read directly. **Implicit becomes explicit.**"
- "We already do this as humans — we draw flows, data models, ERDs. Same step. We're just giving the AI the same structured starting point."
- "API integration and DB schema are still **work in progress** — tech team's still finalising those."

**DO**
- Land the *"implicit → explicit"* line. That's the slide thesis.
- The analogy line is for engineers and BAs in the room. They'll connect immediately.

**SKIP**
- The (WIP) callout — the dashed tags on screen carry it visually.

---

### S·19 — Swim lanes · 30s

**SAY**
- "Each artifact has a consumer."
- "Design and front-end are **today's focus** — that's what we leaned on for VBS."
- "Back-end and architecture are **work in progress** — they exist in the canvas, but the tech team hasn't agreed on the final shape yet."

**DO**
- Read the WIP labels deliberately. Engineers in the audience will appreciate the honesty about scope.

**SKIP**
- "Now let me show you..." — just step to the next slide.

---

## Act 3 — From canvas to product · ~11 min

### S·20 — Act 3 title · 10s

**SAY**
- "**From canvas to product, despite the changes.**"
- "A real case study — ACFS VBS. The BRD was revised three times during the build. The screens kept up — because the source of truth was the canvas, not the BRD."

**DO**
- Land the bold thesis. Don't list the phases — the slide intentionally doesn't either.

---

### S·21 — Phase 0 · Repository to build · 1m

**SAY**
- "Phase zero — **repository to build.**"
- "Once the canvas is finalised — collaboration plus artifacts together — it lands in the working repo as a pair with the UI kit."
- "Canvas specs on the left, design-system specs on the right. The design-system side has its own structure; not going into that today."
- "**Here's the rule** — the AI reads from this one place. Both stacks. That's what keeps the build coherent when we regenerate."

**DO**
- Land "one place" hard — it's a callback you'll repeat through Act 3.
- *(collaboration + artifacts)* is the parenthetical to call out — explains why the canvas is one thing.

**SKIP**
- The design-system-layer breakdown. Tokens / components / registry get covered on S·25.

---

### S·22 — Phase 1 · Stages · 1m 30s

**SAY**
- "Phase one — **the shipment lifecycle.**"
- "Three columns: **Consensus** in the canvas, **Artifact** in the repo, **Screen** in the live app."
- "Five stages — on vessel, at wharf, in yard, unpacked, picked. Written in the canvas first, before any screen got designed."
- "Same five stages in the source file. Same five stages in the live UI badges. **Canvas → artifact → screen. No hallucination.**"

**DO**
- Move left to right with your voice — point at the column labels: *Consensus, Artifact, Screen.*
- Land the closing line — *"no hallucination"* — that's the slide's whole point.

**SKIP**
- The middle-panel narration. *"Same five stages in the source file"* is enough if you're tight.

---

### S·23 — Phase 2 · Data dictionary · 1m 30s

**SAY**
- "Phase two — **the data dictionary.**"
- "Same three columns: **Consensus** (the field list), **Artifact** (the generated entity model), **Screen** (the live UI)."
- "On the left — field name, type, required, choices. On the right — the same fields rendered as a card. HBL number is a string. Always. Across all three views."
- *(click the right panel to toggle annotations)*
- "**Same fields. No fabrication.** The designer reads what the engineer reads."

**DO**
- Point at the column labels first, then walk an example field (HBL number) across all three views.
- Click the right panel once to show the annotated mapping. Hold for a beat. Click again to clear.

**SKIP**
- The annotation toggle. The unannotated card already lands the point.

---

### S·24 — Phase 3 · Layout · 45s

**SAY**
- "Phase three — **how the app is actually laid out.**"
- "Actor list becomes navigation. Four actors, four areas, seventeen routes — all derived from the canvas."
- "Nothing novel about actor-driven IA — that's how we already do it. **The win is that it falls out of the canvas without a workshop.**"

**DO**
- Talk through this briskly. Don't oversell — actor-list-as-navigation is how we already work; the canvas just removes the meeting.

**SKIP**
- Listing actor names. The grid carries them.

---

### S·25 — Phase 4a · Design system · 1m  *(then handoff to live component showcase)*

**SAY**
- "Phase four — **the design system.**"
- "Three layers in one breath: **tokens** (colour, spacing, type, radii) — **components** (buttons, inputs, cards, all unstyled) — **registry** (theme tokens and project binding)."
- "There's a structure to this side too, separate from the canvas. **We're not going into it today** — just know it exists, and the AI reads from it."

**DO**
- ⚠ **HANDOFF — switch to the live component showcase tab.** Show a few components. Say *"this is the design-spec output."* Don't tour every component — about 30 seconds.
- After the showcase, come back to the deck for **S·26 (flows index)** OR jump directly to the live `/dev` page (S·26 is also a live demo — see below).

**SKIP**
- Don't list every component on screen. *"Buttons, inputs, cards"* is enough.

---

### S·26 — Phase 4b · Flows index · 30s  *(skip in deck — show live)*

**SAY**
- "On top of all that, we keep one handoff page that lives **inside the app itself.** Every actor, every route, build status — all of it at `/dev`."
- "**This is the engineer's first stop.** They read the canvas, look at the design system, check this list, then build the next page."

**DO**
- ⚠ **HANDOFF — show this live in the app, not in the deck.** Open `/dev`. Click into one actor. Skim. About 20 seconds.
- The deck slide has an orange "Demo live · skip in deck" cue at the top — that's your visual reminder.

**SKIP**
- Don't dwell. The slide exists as a fallback if the live demo fails.

---

### S·27 — Phase 4c · Coverage · 45s  *(skip in deck — show live)*

**SAY**
- "Same handoff page also has a coverage view."
- "**What the canvas requires versus what the app actually has** — built, stale, missing."
- "Anyone on the team — including QA — can see where we are at any moment."

**DO**
- ⚠ **HANDOFF — open `/dev/drift` live.** Scroll once or twice. About 15 seconds.
- The deck slide has the same "Demo live · skip in deck" cue.

**SKIP**
- The QA aside if you know there's no QA in the room.

---

### S·28 — Phase 5 · The build, honestly · 2m 15s

**SAY**
- "I want to be honest about this next part."
- "The build was messy. We regenerated screens many times. Things broke. **AI tools aren't magic** — they didn't get it right the first time."
- "But every time something broke, we'd go back to the canvas, fix the root cause, and regenerate forward."
- "The BRD changed three times during the build. Each time, we updated the canvas, and the screens caught up — same day."
- "**Three weeks of human effort. One and a half weeks of actual shipping.** Because the canvas was always a stable place to come back to."

**DO**
- **Slow way down here.** This is the slide engineers and leadership both lean in on.
- Land the **3 weeks · 1.5 weeks** numbers visibly — they're the headline of the slide.

**SKIP**
- Don't skip anything on this slide. It's load-bearing.

---

### S·29 — Phase 6a · Feedback tracker · 1m  *(then demo live)*

**SAY**
- "How did we know we'd built the right thing? Two ways."
- "**First** — the canvas itself. Every flow maps to a screen, every rule to UI enforcement. Coverage view tells us where the gaps are."
- "**Second** — this. The feedback tracker, pinned to the screen the feedback refers to."
- "Rule changes fed back into the canvas. Styling changes fed back into the design system. **Same loop, both directions.**"

**DO**
- ⚠ **HANDOFF — open the live feedback tracker (the version with data).** Leave a sample comment, copy to clipboard, show the payload. About 30 seconds.
- The deck slide has an orange "Demo live next" cue — that's your reminder.

**SKIP**
- The "two ways" framing if you're tight — go straight to *"this is the feedback tracker."*

---

### S·30 — Phase 6b · A live screen · 30s  *(skip in deck — show live app)*

**SAY**
- "**And this is what shipped.**"

**DO**
- ⚠ **HANDOFF — open the live app at `vbsportal.dbizapps.ai`.** Show a filled, populated screen — not the empty version. About 20 seconds.
- The deck slide has the same "Demo live · skip in deck" cue.
- Hold a beat after the live screen lands. Three seconds of silence is the punctuation.

---

## Close + Q&A · 6–8 min

### S·31 — Close · what worked, what didn't · 1m

**SAY**
- "Before I wrap up — **what worked, what didn't.** Honest, not polished."
- "**What worked** — the canvas as a stable source we kept coming back to. Same source, two uses — collaboration on one side, structured artifacts on the other. When things broke, we regenerated forward from the canvas, never backward."
- "**What didn't** — the dev team mostly worked off the BRD instead of the canvas, so the handoff had gaps because of that. The early canvas was a one-person effort — I was prompting it alone, with collaboration features only coming in later. We didn't have a user-stories layer yet. And backend and architecture still aren't represented in the canvas."
- "**What's next** — getting BAs and PMs authoring the canvas directly, with backend and dev in scope from day one."
- "**Headline:** human effort matters more than shipping time. Structure is what made the ship possible."

**DO**
- Read the three blocks as flowing sentences, not bullet points — the slide carries the structure.
- Pause before the headline line.

**SKIP**
- The user-stories or backend/architecture line if you're tight — the dev-team-on-BRD point carries the section.

---

### S·32 — Q&A · 5–7 min

**SAY**
- "That's everything I had. **Unmute and ask** — or drop in chat if you'd rather."
- *(if a question comes in via chat, read it out before answering)*
- "And catch me after if you'd rather not ask in front of everyone."

**DO**
- Lead with **voice** — invite unmuting, not chat. Chat is the fallback.
- Time-box visibly. Glance at the clock.

**Anticipated questions** *(in your head, not on screen)*

- *"Could we have shipped without the canvas?"* — Yes, but we'd be rebuilding screens every BRD revision.
- *"How long did the canvas take to build?"* — About three weeks, in parallel with discovery.
- *"Does this work for small projects?"* — Probably overkill for one-screen tools. The canvas alone is great for scope finalisation at pre-discovery — stops scope creep before it starts.
- *"Can BAs really write the canvas themselves?"* — Not yet. We're working on releasing a version they can use.
- *"What didn't the canvas catch?"* — **UX/UI.** Keep it that simple. *(Don't list visual density / real-data overflow / accessibility — that's content, not the answer.)*

---

## Speaker notes

- **Cold open** — first 90 seconds is where the room commits or doesn't. Don't rush past S·02 / S·03. Reading the audience's pain back to them is what buys the next 35 minutes. Have the fallback line memorized.
- **Where to slow down** — S·09 (revision rot), S·28 (the build, honestly), S·30 (the live screen pause). These are the proof.
- **Where to move fast** — S·05, S·10, S·20 act titles (10 seconds). S·14, S·18 set-ups (under 30s).
- **If you're running over by Act 3** — drop SKIPs aggressively. Cut the live demos in S·17, S·26, S·29 first. Q&A tightens last, not the body.
- **Demo cuts** — at most two live jumps total. Strongest pair: S·30 (running app) + S·26 (`/dev`). Skip the others.
- **With cameras off** — vary tone, vary pace. The voice does what body language usually does. Pull questions from chat as you go, not just at the end.
- **The line they remember** — *"We shipped in three weeks because there was always a stable place to come back to."* Land it on S·28. Echo it on S·31 if you have room.
