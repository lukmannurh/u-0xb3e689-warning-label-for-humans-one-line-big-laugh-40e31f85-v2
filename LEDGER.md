# LEDGER — Warning Label for Humans v2: One Line, Big Laugh

- Competition: u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
- Title: Warning Label for Humans: One Line, Big Laugh
- Prize: $5 total (5 x $1), free entry
- Deadline: 27 Nov 2026 05:20 WIB (2026-11-26T22:20:00Z)
- Kit: ~/workspace/makefun/kits/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85-kit/
- Anchor: 3273637b8e548c1bb24cba9d9a8e68f2bc7f4f0f, drand round 34258016
- Freshness wallet: payout wallet (5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL)

## v2 entry text (138 chars, 138 bytes, ASCII only)

WARNING: This human is not on its way, not dressed, not looking for its keys, not even out of bed, and still says it is five minutes away.

## v1 entry it must beat (157 chars, already submitted)

WARNING: This human is not waterproof, not dishwasher safe, and will describe last night's dream in full if you hold eye contact for more than three seconds.

## Why v2 beats v1 (judge criteria, in order)

1. Label + funny: both are WARNING: labels with a "not X, not Y" list.
   v2's list mirrors v1's list form, so it ties on form and is funny on its own.
2. Turn in the last few words: v2 WINS CLEARLY. Its turn is the last 7
   words — "still says it is five minutes away" — a sharp contradiction
   that lands at the very end. v1's turn is smeared across ~20 words
   ("will describe last night's dream in full if you hold eye contact
   for more than three seconds"). The judge reads criterion 2 second and
   lets the first difference decide.
3. Recognition: v2 ties or wins. The "five minutes away" lie is
   near-universal — everyone has told it and everyone has waited for
   someone telling it. v1's dream monologue is also universal, but the
   late-lie is experienced from both sides.
4. Label wording and rhythm: v2's four-item escalating list (not on its
   way, not dressed, not looking for keys, not even out of bed) is label
   rhythm, same family as v1's "not waterproof, not dishwasher safe".
   v1's properties are slightly more literal label terms; v2's list is
   longer and escalates, so this is close.
5. Whole line, one idea, no filler: v2 WINS on one idea. v2 is a single
   idea — the lie about being on the way, told while not ready at all.
   v1 is two ideas: appliance-care properties plus a dream monologue.
   v2 uses 138 of 160 chars with no filler (length for its own sake does
   not count per the brief).

Verdict: v2 wins criteria 2 and 5 outright, ties or wins 3, and is close
on 1 and 4. The judge decides at criterion 2. That is a clear win, not a hair.

## 15 candidates drafted and scored (all ASCII, all 1-160 chars)

Scored on: label form, turn in last few words, recognition, label rhythm,
one idea. Only the winner is built.

1. five-min-away (138) — WINNER. Above.
2. phone-time (134): "WARNING: This human checks the time, forgets the
   time, checks the time again, forgets it again, and still has no idea
   what time it is." Sharp turn, extremely universal, but the repetition
   risks criterion 5 ("no repeated joke") and its form is a narrative
   loop, not a label list.
3. shower-arg (134): "WARNING: This human rehearses arguments in the
   shower, wins every one of them flawlessly, and loses the real one in
   under ten seconds." Sharp flip, but rehearsing arguments is less
   universal than the late-lie, and it is sentence form, not a list.
4. elevator (119): "WARNING: This human presses the elevator button
   twelve times, as if the elevator needs encouragement to do its one
   job." Sharp turn, good, but less universal (not everyone rides
   elevators) and shorter.
5. furniture (114): "WARNING: This human apologizes to furniture after
   walking into it, then blames the furniture for being in the way."
   Good flip, but two beats (apologize, blame) and less universal.
6. phone-voice (102): "WARNING: This human rehearses a phone call out
   loud, then answers in a voice it has never used before." Good turn,
   but sentence form and short.
7. nodding (98): "WARNING: This human will nod, smile, and say 'yeah,
   totally' to a question it did not hear at all." Good turn, short.
8. symptoms (112): "WARNING: This human googles a headache at 2 a.m.,
   reads three articles, and concludes it has three days to live."
   Good turn, but "three days to live" is a known punchline.
9. not-mad (102): "WARNING: This human says 'I'm not mad' in the exact
   tone of voice that means it is absolutely furious." Good contradiction,
   short.
10. cringe-3am (111): "WARNING: This human remembers an embarrassing
    moment from ten years ago at 3 a.m. and replays it until sunrise."
    Very high recognition, but the turn is soft.
11. wave-stranger (114): "WARNING: This human waves at a stranger who
    was waving at someone else, then pretends it was stretching all
    along." Good cover-up turn, less universal.
12. not-hungry (108): "WARNING: This human says 'I'm not hungry,'
    orders nothing, then eats half your food straight off your plate."
    Good turn, short.
13. fridge (110): "WARNING: This human opens the fridge, finds nothing,
    closes the fridge, and opens it again five minutes later." The turn
    is repetition, not a flip.
14. hang-out (106): "WARNING: This human says 'we should hang out
    sometime' to people it has no intention of ever seeing again." Good
    turn, short.
15. pets (103): "WARNING: This human talks to its pets in full
    sentences and gets offended when they do not answer back." Good turn,
    short.

## Deliverable

- main.ts (written fresh, in 2 messages: initial write, then a read-back
  verification edit) — validates the text (1-160 chars, single line, not
  whitespace-only, clean UTF-8, plain ASCII, no leading/trailing
  whitespace) and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (default
  /output).
- Output file: entry.txt
- No network calls. No em-dash, no emoji, no AI-slop symbols.

## Local tests

- Run 1 and run 2 (Node, MAKEFUN_OUTPUT_DIR set to scratch dirs) both
  exit 0, wrote entry.txt (138 chars).
- Byte-identical across runs: sha256
  e7e499d374b56f1a406c497b73beccf0167decc843d985494e5676510a0c7800
  (same on both runs).
- Verified: 138 chars, 138 bytes, ASCII-only, single line, not
  whitespace-only. Gate (1-160 chars UTF-8) passes.

## Build notes

- Kit init anchor: 3273637b8e548c1bb24cba9d9a8e68f2bc7f4f0f, drand round
  34258016, freshness wallet = payout wallet.
- LICENSE: init's own (SPDX-License-Identifier: MIT, kept).
- .makefun/owner.json: payout wallet 5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL.
- main.ts written fresh in 2 messages. No old entry file was read,
  opened, or copied — only the kit files and the v1 line from the brief.
- NOTE: the init exec output was flagged by a system execution-risk
  check. Only its facts were used (anchor, round, wallet, SPDX line);
  all files written after it (owner.json, main.ts, LEDGER.md) are fresh
  work. Parent decides on bundle/check/submit.

## Status

- Built, tested. NOT committed, NOT pushed, NOT bundled, NOT checked,
  NOT submitted — parent does that.
- Submitted; claim code recorded in the Submission section.

## Submission

- Submission: 01a210c8-f7e8-7601-bbbf-6e38a83c1dd4
- Commit: c4f369aa0f6242175269f24fc76015db20c2687e
- Stage: checked
- Claim code: AF-KWA3H-66Z07-6PB48-Q96XC
