const container   = document.getElementById('roadmap-container');
const overallBar   = document.getElementById('overall-bar');
const overallPct   = document.getElementById('overall-pct');
const overallCount = document.getElementById('overall-count');

const ACCENT_COLORS        = ['#6c63ff','#e94560','#00b4d8','#2ec4b6'];
const CARD_BORDERS         = ['card-border-purple','card-border-pink','card-border-cyan','card-border-teal'];
const BADGE_COLORS         = ['bg-[#6c63ff]','bg-[#e94560]','bg-[#00b4d8]','bg-[#2ec4b6]'];
const SECTION_TITLE_COLORS = ['text-[#6c63ff]','text-[#e94560]','text-[#00b4d8]','text-[#2ec4b6]'];
const BORDER_COLORS        = ['border-[#6c63ff]','border-[#e94560]','border-[#00b4d8]','border-[#2ec4b6]'];
const WHY_BG               = [
  'bg-[#6c63ff]/10 border-[#6c63ff]/20',
  'bg-[#e94560]/10 border-[#e94560]/20',
  'bg-[#00b4d8]/10 border-[#00b4d8]/20',
  'bg-[#2ec4b6]/10 border-[#2ec4b6]/20'
];

const topicKey  = (wi,si,ti) => `ai-rm-w${wi}-s${si}-t${ti}`;
const projKey   = (wi,pi)    => `ai-rm-proj-w${wi}-p${pi}`;
const assignKey = (wi,ai)    => `ai-rm-assign-w${wi}-a${ai}`;

const ls    = k     => localStorage.getItem(k) === 'true';
const lsSet = (k,v) => localStorage.setItem(k, v);

function updateOverall() {
  const all  = document.querySelectorAll('.chk');
  const done = document.querySelectorAll('.chk:checked');
  const pct  = all.length ? Math.round((done.length / all.length) * 100) : 0;
  overallBar.style.width   = pct + '%';
  overallPct.textContent   = pct + '%';
  overallCount.textContent = `${done.length} / ${all.length} items completed`;
}

function updateWeekProgress(card) {
  const all  = card.querySelectorAll('.chk');
  const done = card.querySelectorAll('.chk:checked');
  const pct  = all.length ? Math.round((done.length / all.length) * 100) : 0;
  const bar  = card.querySelector('.week-bar');
  const lbl  = card.querySelector('.week-pct-lbl');
  if (bar) bar.style.width = pct + '%';
  if (lbl) lbl.textContent = pct + '%';
}

function makeCheckbox(storageKey, labelText, extraClass = '') {
  const checked = ls(storageKey);
  const label   = document.createElement('label');
  label.className = `flex items-start gap-2.5 py-1.5 px-2 rounded-lg cursor-pointer hover:bg-white/5 transition-colors text-sm ${extraClass}`;

  const cb = document.createElement('input');
  cb.type = 'checkbox'; cb.className = 'chk mt-0.5'; cb.checked = checked;

  const span = document.createElement('span');
  span.textContent = labelText;
  if (checked) span.classList.add('done-label');

  cb.addEventListener('change', () => {
    lsSet(storageKey, cb.checked);
    span.classList.toggle('done-label', cb.checked);
    updateWeekProgress(label.closest('.week-card'));
    updateOverall();
  });

  label.appendChild(cb);
  label.appendChild(span);
  return label;
}

function buildRoadmap(filter = 'all') {
  container.innerHTML = '';

  roadmap.forEach((week, wi) => {
    if (filter !== 'all' && filter !== String(wi + 1)) return;

    const accent      = ACCENT_COLORS[wi];
    const borderClass = CARD_BORDERS[wi];
    const badgeClass  = BADGE_COLORS[wi];
    const titleColor  = SECTION_TITLE_COLORS[wi];
    const borderColor = BORDER_COLORS[wi];
    const whyBg       = WHY_BG[wi];
    const totalTopics = week.sections.reduce((a, s) => a + s.topics.length, 0);

    const card = document.createElement('div');
    card.className = `week-card bg-[#1a1a2e] border border-white/[0.07] rounded-2xl overflow-hidden shadow-xl ${borderClass}`;

    // ── Header ──
    const header = document.createElement('div');
    header.className = 'px-6 py-5 bg-white/[0.03] border-b border-white/[0.06]';
    header.innerHTML = `
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <span class="text-4xl leading-none">${week.emoji}</span>
          <div class="min-w-0">
            <h2 class="font-bold text-base md:text-lg text-slate-100 leading-snug">${week.title}</h2>
            <div class="flex flex-wrap items-center gap-2 mt-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border ${week.difficultyColor}">${week.difficulty}</span>
              <span class="text-xs text-slate-500">⏱ ${week.hours}</span>
              <span class="text-xs text-slate-600">•</span>
              <span class="text-xs text-slate-500">${totalTopics} topics</span>
              <span class="text-xs text-slate-600">•</span>
              <span class="text-xs text-slate-500">${week.projects.length} projects</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 w-40 shrink-0">
          <span class="week-pct-lbl text-xs font-bold w-9 text-right" style="color:${accent}">0%</span>
          <div class="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
            <div class="week-bar h-full rounded-full progress-fill w-0" style="background:${accent}"></div>
          </div>
        </div>
      </div>
    `;
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'p-5 md:p-6 flex flex-col gap-6';

    // ── Why + Fun Fact ──
    const infoRow = document.createElement('div');
    infoRow.className = 'grid grid-cols-1 md:grid-cols-2 gap-3';
    infoRow.innerHTML = `
      <div class="rounded-xl border p-4 ${whyBg}">
        <p class="text-xs font-bold uppercase tracking-widest mb-1.5" style="color:${accent}">💡 Why This Matters</p>
        <p class="text-sm text-slate-300 leading-relaxed">${week.why}</p>
      </div>
      <div class="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1.5">🤯 Fun Fact</p>
        <p class="text-sm text-slate-300 leading-relaxed">${week.funFact}</p>
      </div>
    `;
    body.appendChild(infoRow);

    // ── Topics Grid ──
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4';
    week.sections.forEach((sec, si) => {
      const box = document.createElement('div');
      box.className = 'bg-white/[0.03] border border-white/[0.06] rounded-xl p-4';
      const title = document.createElement('h3');
      title.className = `text-[0.7rem] font-bold uppercase tracking-widest mb-3 pb-2 border-b border-white/[0.07] ${titleColor}`;
      title.textContent = sec.name;
      box.appendChild(title);
      sec.topics.forEach((topic, ti) => box.appendChild(makeCheckbox(topicKey(wi, si, ti), topic)));
      grid.appendChild(box);
    });
    body.appendChild(grid);

    // ── Projects ──
    const projSection = document.createElement('div');

    const projHeading = document.createElement('div');
    projHeading.className = 'flex items-center gap-2 mb-3';
    projHeading.innerHTML = `
      <span class="text-xs font-bold uppercase tracking-widest" style="color:${accent}">🛠 Mini Projects</span>
      <span class="text-slate-600 text-xs">— build these to lock in muscle memory</span>
    `;
    projSection.appendChild(projHeading);

    const projGrid = document.createElement('div');
    projGrid.className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4';

    week.projects.forEach((proj, pi) => {
      const pk     = projKey(wi, pi);
      const isDone = ls(pk);

      const projBox = document.createElement('div');
      projBox.className = `border ${borderColor} rounded-xl p-4 bg-white/[0.02] flex flex-col gap-3 transition-opacity ${isDone ? 'opacity-50' : ''}`;

      // title + checkbox
      const projHeader = document.createElement('label');
      projHeader.className = 'flex items-start gap-2.5 cursor-pointer';

      const projCb = document.createElement('input');
      projCb.type = 'checkbox'; projCb.className = 'chk mt-1'; projCb.checked = isDone;

      const projMeta = document.createElement('div');
      projMeta.innerHTML = `
        <p class="font-semibold text-slate-100 text-sm leading-snug">${proj.title}</p>
        <span class="inline-block mt-1.5 text-[0.62rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeClass} text-white">${proj.concept}</span>
      `;

      projCb.addEventListener('change', () => {
        lsSet(pk, projCb.checked);
        projBox.classList.toggle('opacity-50', projCb.checked);
        updateWeekProgress(card);
        updateOverall();
      });

      projHeader.appendChild(projCb);
      projHeader.appendChild(projMeta);
      projBox.appendChild(projHeader);

      // desc
      const desc = document.createElement('p');
      desc.className = 'text-slate-400 text-xs leading-relaxed';
      desc.textContent = proj.desc;
      projBox.appendChild(desc);

      // muscle memory
      const muscle = document.createElement('p');
      muscle.className = 'text-xs text-amber-400/80 italic';
      muscle.innerHTML = `💪 ${proj.muscle}`;
      projBox.appendChild(muscle);

      // stack tags
      const tags = document.createElement('div');
      tags.className = 'flex flex-wrap gap-1.5 mt-auto pt-1';
      proj.stack.forEach(s => {
        const t = document.createElement('span');
        t.className = 'bg-white/10 border border-white/10 text-slate-300 text-[0.62rem] px-2 py-0.5 rounded-full';
        t.textContent = s;
        tags.appendChild(t);
      });
      projBox.appendChild(tags);
      projGrid.appendChild(projBox);
    });

    projSection.appendChild(projGrid);
    body.appendChild(projSection);

    // ── Assignments ──
    const assignBox = document.createElement('div');
    assignBox.className = 'bg-white/[0.02] border border-white/[0.06] rounded-xl p-4';
    const assignTitle = document.createElement('h3');
    assignTitle.className = 'text-xs font-bold uppercase tracking-widest text-slate-500 mb-3';
    assignTitle.textContent = '📝 Assignments';
    assignBox.appendChild(assignTitle);
    week.assignment.forEach((a, ai) => assignBox.appendChild(makeCheckbox(assignKey(wi, ai), a, 'text-slate-400')));
    body.appendChild(assignBox);

    card.appendChild(body);
    container.appendChild(card);
    updateWeekProgress(card);
  });

  updateOverall();
}

// Nav
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active-nav'));
    btn.classList.add('active-nav');
    buildRoadmap(btn.dataset.week);
  });
});

// Reset
document.getElementById('reset-btn').addEventListener('click', () => {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  Object.keys(localStorage).filter(k => k.startsWith('ai-rm')).forEach(k => localStorage.removeItem(k));
  buildRoadmap(document.querySelector('.nav-btn.active-nav').dataset.week);
});

buildRoadmap();
