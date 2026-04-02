<div align="center">

# 🤖 AI in a Nutshell — 2-Month Learning Roadmap

**A structured, interactive roadmap for Full Stack Developers who want to break into AI/ML — without the overwhelm.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-6c63ff?style=for-the-badge&logo=github)](https://riteshhvishwakarma.github.io/AI-ML-Roadmap-with-tracker/)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## The Problem This Solves

Most developers who want to learn AI face the same wall — there's too much content, no clear order, and zero way to track what you've actually done. You open a YouTube playlist, watch 3 videos, close the tab, and never come back.

This project fixes that. It's a **2-month, phase-by-phase roadmap** built specifically for intermediate full stack developers. Every topic, project, and assignment is laid out in order — and you can check things off as you go. Your progress saves automatically in the browser. No account needed, no backend, no friction.

---

## Live Demo

👉 **[riteshhvishwakarma.github.io/AI-ML-Roadmap-with-tracker](https://riteshhvishwakarma.github.io/AI-ML-Roadmap-with-tracker/)**

---

## What's Inside

The roadmap is split into 4 phases, each building on the last:

**🐍 Phase 1 — Python, Data Processing & ML Foundations** `~40 hrs`
Start with the tools every ML engineer uses daily. NumPy, Pandas, Scikit-Learn, data cleaning, feature engineering, and your first supervised learning models. You'll build a House Price Predictor, Spam Detector, and Customer Segmentation Dashboard.

**🧠 Phase 2 — Neural Networks & Deep Learning** `~50 hrs`
This is where things get interesting. CNNs, LSTMs, GRUs, TensorFlow, PyTorch, and transfer learning. Projects include an Image Classifier, Stock Price Forecaster, and a Dog Breed Identifier using MobileNetV2.

**💬 Phase 3 — NLP, Generative Models & Computer Vision** `~55 hrs`
BERT, GPT, YOLO, GANs, VAEs — the stuff that powers ChatGPT, Google Lens, and DALL·E. You'll build a Sentiment Analyzer, Real-Time Object Detector, Face Emotion Detector, and a Neural Style Transfer app.

**🚀 Phase 4 — Deployment, Ethical AI & Capstone** `~45 hrs`
A model that isn't deployed is just a science experiment. FastAPI, Docker, cloud platforms, SHAP/LIME explainability, and bias auditing. Ends with a full-stack AI portfolio app — Dockerized, deployed, CI/CD included.

---

## Features

- **Progress tracking** — every topic, project, and assignment has a checkbox. State persists in `localStorage`, so your progress survives page refreshes and browser restarts
- **Per-phase progress bars** — each phase shows a live completion percentage so you always know where you stand
- **Overall progress bar** — a single bar at the top showing your total journey completion across all 190+ items
- **Phase filter nav** — jump directly to any phase without scrolling through everything
- **Collapsible topic sections** — on mobile, topics collapse to keep the screen clean
- **Smooth scrolling** — powered by [Lenis](https://github.com/darkroomengineering/lenis) for a native-feeling scroll experience
- **Reset button** — wipe all progress and start fresh anytime
- **Zero dependencies to install** — pure HTML, JS, and Tailwind CDN. Open the file and it works

---

## How It Works

Everything runs in the browser. No server, no database.

```
index.html  →  layout, header, nav, overall progress bar
data.js     →  all roadmap content (phases, topics, projects, assignments)
app.js      →  renders cards dynamically, handles checkboxes, localStorage, progress updates
```

When you check off a topic:
1. The checkbox state saves to `localStorage` with a unique key per item
2. The phase progress bar recalculates instantly
3. The overall progress bar updates across all phases
4. On next visit, all checkboxes restore from `localStorage` automatically

Adding or editing content is just editing `data.js` — no build step, no config.

---

## Who This Is For

- Full stack developers who want to transition into AI/ML roles
- Self-taught developers who need structure, not just a list of YouTube links
- Anyone who's started an AI course 3 times and never finished it
- Developers building AI-powered products who want to understand what's under the hood

---

## Running Locally

No install needed. Just clone and open:

```bash
git clone https://github.com/riteshhvishwakarma/AI-ML-Roadmap-with-tracker.git
cd AI-ML-Roadmap-with-tracker
# open index.html in your browser
```

Or use any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

---

## Tech Stack

| Tool | Why |
|------|-----|
| Vanilla JS | No framework overhead, runs anywhere |
| Tailwind CSS (CDN) | Rapid styling without a build step |
| localStorage | Persistent progress with zero backend |
| Lenis | Smooth, natural scroll feel |

---

## Roadmap Content Stats

| Phase | Topics | Projects | Assignments | Hours |
|-------|--------|----------|-------------|-------|
| 🐍 ML Foundations | 14 | 5 | 3 | ~40 |
| 🧠 Deep Learning | 15 | 5 | 3 | ~50 |
| 💬 NLP & Vision | 17 | 5 | 3 | ~55 |
| 🚀 Deploy & Ethics | 13 | 5 | 4 | ~45 |
| **Total** | **59** | **20** | **13** | **~190** |

---

## Contributing

Found a topic that's missing? A project idea that would fit perfectly? PRs are welcome.

1. Fork the repo
2. Edit `data.js` to add/update content
3. Open a PR with a short description of what you changed and why

---

<div align="center">

Built for developers who learn by doing, not by watching.

⭐ Star this repo if it helped you — it helps others find it too.

</div>
