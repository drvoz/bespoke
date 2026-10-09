# bespoke

Speaking and facilitation site for **John Vozenilek, MD**, with a downloadable speaker kit.

Live at **https://drvoz.github.io/bespoke/** once GitHub Pages is on.

## Publish

1. Copy everything in this folder into the root of the `drvoz/bespoke` repo, including the hidden `.nojekyll` file.
2. Commit and push to `main`.
3. In the repo, go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, then `main`, then `/ (root)`, and save.
4. After a minute or two, the site is live at the address above.

## Structure

```
index.html                          The reveal: positioning, four offerings, formats, engagements
journey.html                        The career arc, starting from the 2008 inception story
topics/what-must-stay-human.html    01 · Human judgment & AI (lead topic)
topics/designing-experience.html    02 · Simulation, serious games, behavioral engineering
topics/space-as-leadership.html     03 · Learning spaces and experiential territory
topics/blood-brain-barrier.html     04 · Clinical–academic partnership method
kit.html                            Speaker kit: downloads, watch & listen, bios with copy buttons, intro, abstracts, logistics
downloads/                          One-sheet PDF, program menu PDF, bios DOCX/TXT, full kit ZIP
assets/css/site.css                 Shared styles (mu2sd palette and type)
assets/js/site.js                   Theme toggle, copy buttons, download checks
assets/img/                         Photos go here (see checklist), plus favicon and social card
```

## Photos

All photos live in `assets/img/`.

| File | Where it appears |
|---|---|
| `headshot.png` | Home hero (circle), one-sheet, kit download |
| `headshot-rect.jpg` | Kit download (standard headshot) |
| `press-briefing.jpg` | Journey · 2020 |
| `bedside-technology.jpg` | 01 · Human judgment & AI |
| `simulation-suite.jpg` | 02 · Experience design |
| `student-team.jpg` | 02 · Experience design |
| `oncall-exhibit.jpg` | 03 · Learning spaces |
| `arches-symposium.jpg` | 04 · Blood–brain barrier |
| `tedx-stage.jpg` | TEDx video thumbnail, home page |

**Optional additions.** These slots stay hidden until you add the file:
- `iai-network.png`: a screenshot of the collaboration network from the IAI dashboard, with names hidden. It appears on the 04 page.

**Worth sending later:**
- The EquIMED newsroom photo of you with students, `1920_equimedstudentsanddr.johnvozenilek.jpg` on content.presspage.com.
- A photo of a space you designed.
- Higher-resolution originals of any of the photos above. Most are about 640 px wide, which is fine on screen but too small for print.

Only use photos with the needed permissions for patients, learners, and colleagues.

## Please confirm before sharing widely

- [ ] **Confirm one video link.** "Jump Simulation: Celebrating 10 Years" (youtube.com/watch?v=T_xs_5bGkYY) could not be checked automatically. The Future of Medicine panel was removed because it does not feature John.
- [ ] **The federal funder of the 2008 consensus conference.** The site says "federally funded." Naming the agency (for example, AHRQ) would be stronger.
- [ ] **The public contact email.** The site uses John.A.Vozenilek@jumpsimulation.org. Switch to john@drvoz.com if you prefer a personal address.
- [ ] **Jump role wording.** The site says you have "led simulation and innovation at Jump since 2012," and does not use the Executive Director title.
- [ ] **"Seven papers" in the November 2008 issue of *Academic Emergency Medicine*.** This was counted from the CV.
- [ ] **Immersive visits.** Confirm Jump can host external executive cohorts for one to three days.
- [ ] **Language.** The kit says you present in English and that sessions work with simultaneous interpretation. Add Spanish if applicable.
- [ ] **Learning spaces.** Name any spaces you designed or shaped. This is the thinnest evidence on the site.
- [ ] **Executive and industry audiences.** Add sessions for boards, companies, or executive groups to Selected engagements.
- [ ] **Optional extras.** One or two organizer testimonials would strengthen the home page and kit most.

## Media

The featured clip, *How Can Simulation Improve Patient Safety and Outcomes?* (medDesign by Trig), is embedded on the home page and kit page, set to start at 7:40. To change the start point, edit `data-start="460"` (in seconds) and `t=460s` in `index.html` and `kit.html`. Videos load only when clicked, which keeps pages fast and avoids YouTube tracking until a visitor chooses to play.
