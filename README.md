# Campus Pinboard

A digital notice board for campus communities — events, lost & found, academic alerts and club announcements, all in one searchable place.

**IMT 405 — Web Application Development Capstone Project**
Technology stack: **Option A — Core web technologies (HTML, CSS, JavaScript only)**

## Project Description

Campus Pinboard solves the problem of scattered, easily-missed campus announcements (paper flyers, WhatsApp groups, random posters) by giving students and clubs one shared, searchable noticeboard. Notices are tagged by category (Event, Academic, Lost & Found, Club, Urgent) and can be searched or filtered instantly.

## Pages

| Page    | File           | Description                                             |
| ------- | -------------- | ------------------------------------------------------- |
| Home    | `index.html`   | Landing page with featured notice and latest pins       |
| Notices | `notices.html` | Full searchable/filterable board + free-time calculator |
| Team    | `team.html`    | Team member profiles                                    |
| Contact | `contact.html` | Contact form and other contact info                     |

## Team

| Name                 | ID Number       | Level     | Programme                                                                              | Role               |
| -------------------- | --------------- | --------- | -------------------------------------------------------------------------------------- | ------------------ |
| Serah Zamdai Hampel  | DL/IMT/23D/1037 | 400 Level | Information Management Technology                                                      | Content Lead       |
| Mustapha Bala        | DL/IMT/23D/0128 | 400 Level | Information Management Technology                                                      | Content Lead       |
| Aishatu Halilu Nyako | DL/IMT/21U/0108 | 400 Level | Degree, Information Management Technology, Faculty of Social and Management Technology | Content Lead       |
| Suleiman Abubakar    | DL/IMT/21U/0117 | 400 Level | Degree, Information Management Technology, Faculty of Social and Management Sciences   | UI Designer        |
| Ummul Kulchumi Bappa | DL/IMT/23D/0130 | 400 Level | Information Management Technology                                                      | Frontend Developer |
| Buhari Haruna Aliyu  | DL/IMT/23D/0164 | 400 Level | Information Management Technology                                                      | Content Lead       |
| Ibrahim Aliyu        | DL/IMT/21U/0078 | 400 Level | Degree, Information Management Technology, Faculty of Social and Management Sciences   | Team Member        |
| Auwalu Mohammed      | DL/IMT/23D/0162 | 400 Level | Degree, Information Management and Technology, Faculty of Social Science               | Content Lead       |
| Abigail Markus Biriya | DL/IMT/23D/0150 | 400 Level | Information Technology Management                                                      | Team Member        |

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, responsive media queries)
- Vanilla JavaScript (DOM manipulation, form validation, search/filter)
- Google Fonts: Caveat, Inter, JetBrains Mono

## Features

- Responsive layout for mobile and desktop
- Live search and category filter on the Notices page
- Free-time calculator (interactive feature)
- Validated contact form with success/error messages
- Accessible navigation (skip link, keyboard focus states, ARIA labels)

## Setup / Installation

1. Clone or download this repository.
2. No build step or dependencies required — it's plain HTML/CSS/JS.
3. Open `index.html` in any modern browser, **or** serve the folder locally:
   ```bash
   npx serve .
   ```
4. To deploy, push this folder to a GitHub repository and enable **GitHub Pages** (Settings → Pages → deploy from main branch), or drag the folder into **Netlify**.

## Folder Structure

```
campus-notice-board/
├── index.html
├── notices.html
├── team.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── Team member photographs
└── README.md
```

## Notes for Submission

- After deployment, update the live URL in this README and in your project report.
