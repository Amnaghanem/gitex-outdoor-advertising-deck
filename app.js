/* Mira Media — GITEX Global 2026 outdoor advertising deck */

(function () {
  'use strict';

  const SLIDES = [
    { id: 'cover', title: 'Cover' },
    { id: 'gitex', title: 'Already on the route' },
    { id: 'why', title: 'Why GITEX Expo 2026' },
    { id: 'audience', title: 'GITEX audience' },
    { id: 'station', title: 'Expo Station screens' },
    { id: 'sites', title: 'Station site pictures' },
    { id: 'more', title: 'More station screens' },
    { id: 'city', title: 'Expo City screens' },
    { id: 'steps', title: 'The Steps Screens' },
    { id: 'network', title: 'Horizontal and MUPI screens' },
    { id: 'graffiti', title: 'Metro graffiti' },
    { id: 'graffiti-map', title: 'Where the graffiti sits' },
    { id: 'rates', title: 'Rate schedule' },
    { id: 'plan', title: 'Recommended plan' },
    { id: 'artwork', title: 'Artwork terms & conditions' },
    { id: 'mira', title: 'Why Mira Media?' },
    { id: 'brands', title: 'Brands that trusted us' },
    { id: 'thanks', title: 'Contact' },
  ];

  const SITES = {
    skylight: { name: 'Platform skylight', screens: 46, photo: 'assets/sites/platform-skylight.png', note: 'Overhead screens above the platform.', slide: 'sites' },
    totem: { name: 'Entrance totem', screens: 4, photo: 'assets/sites/entrance-totem.png', note: 'A freestanding screen at the entrance.', slide: 'sites' },
    column: { name: 'LED column', screens: 29, photo: 'assets/sites/led-column.png', note: 'A column screen on the concourse.', slide: 'sites' },
    desk: { name: 'Ticketing office & police room', screens: 2, photo: 'assets/sites/ticketing-police.png', note: 'Screens at the ticketing office and police room.', slide: 'more' },
    wall: { name: 'Wall unit', screens: 2, photo: 'assets/sites/wall-unit.png', note: 'Wall-mounted screens on the concourse.', slide: 'more' },
    psd: { name: 'PSD', screens: 51, photo: 'assets/sites/psd.png', note: 'Screens above the platform screen doors.', slide: 'more' },
  };

  const FORMAT_SLIDE = {
    'Platform skylight': 'sites',
    'Entrance totem': 'sites',
    'LED column': 'sites',
    'Ticketing office': 'more',
    'Police room': 'more',
    'Wall unit': 'more',
    PSD: 'more',
  };

  function siteIndex(id) {
    return SLIDES.findIndex((s) => s.id === id);
  }

  let state = {};
  let current = 0;

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s ?? '';
    return d.innerHTML;
  }

  function slideShell(num, title, body, hideHead, scrollBody, centered) {
    if (hideHead) {
      return `<article class="slide slide-cover" data-slide="${num}">${body}</article>`;
    }
    const bodyCls = scrollBody ? ' slide-body-scroll' : '';
    const centerCls = centered ? ' is-centered' : '';
    return `<article class="slide pitch-slide${centerCls}" data-slide="${num}">
      <p class="pitch-kicker"><span class="pitch-kicker-line"></span> ${String(num).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')}</p>
      <h1 class="pitch-slide-title">${esc(title)}</h1>
      <div class="slide-body${bodyCls}">${body}</div>
    </article>`;
  }

  function usdFromAed(aed) {
    return Math.round(aed / state.rates.peg);
  }

  function money(amount) {
    if (amount == null) return '—';
    return '$' + amount.toLocaleString('en-US');
  }

  function kpi(label, value, note) {
    return `<article class="kpi-card">
      <div class="kpi-label">${esc(label)}</div>
      <div class="kpi-value">${esc(value)}</div>
      <div class="kpi-sub">${esc(note)}</div>
    </article>`;
  }

  function renderSlide(index) {
    const c = state;

    switch (SLIDES[index].id) {
      case 'cover':
        return slideShell(1, c.meta.title, `
          <div class="pitch-cover has-photo">
            <div class="pitch-cover-row">
            <div class="pitch-cover-inner">
              <div class="pitch-lockup">
                <img src="${esc(c.brand.logo)}" alt="Mira Media" />
                <span class="pitch-rule" aria-hidden="true"></span>
                <span class="pitch-x" aria-hidden="true">×</span>
                <img class="pitch-gitex" src="assets/gitex-logo.png" alt="GITEX Global" />
              </div>
              <p class="pitch-kicker"><span class="pitch-kicker-line"></span> ${esc(c.meta.kicker)}</p>
              <h1 class="pitch-title">${esc(c.cover.line1)}<br><span>${esc(c.cover.line2)}</span></h1>
              <p class="pitch-lead">${esc(c.cover.hook)}</p>
              <div class="pitch-facts">
                <div><small>${esc(c.cover.windowLabel)}</small><strong>${esc(c.cover.window)}</strong></div>
                <div><small>${esc(c.cover.venueLabel)}</small><strong>${esc(c.cover.venue)}</strong></div>
              </div>
              <p class="pitch-tag"><span aria-hidden="true">★</span> ${esc(c.cover.tag)}</p>
            </div>
            <div class="pitch-hero-frame">
              <img class="pitch-hero" src="assets/gitex-stage.png" alt="GITEX Global stage at Expo City Dubai" />
            </div>
            </div>
          </div>
        `, true);

      case 'gitex':
        return `<article class="slide story-slide" data-slide="2">
          <p class="story-kicker">01 — Already on the route</p>
          <h1 class="story-title">GITEX is already <span>outside the hall.</span></h1>
          <p class="story-lead">GITEX GLOBAL is at Expo City Dubai from Tuesday 8 to Friday 11 December 2026. Four days. This outdoor plan is for every company attending.</p>
          <div class="story-cards">
            <article>
              <span class="story-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 13.5h12M4.5 13.5V6.5L9 4l4.5 2.5v7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </span>
              <h2>Opens 8 December</h2>
              <p>Tuesday 8 to Friday 11 December 2026 at Expo City Dubai.</p>
            </article>
            <article>
              <span class="story-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M7 15.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </span>
              <h2>GITEX GLOBAL Expo</h2>
              <p>Tuesday 8 to Friday 11 December 2026 at Expo City Dubai. Four days. The world’s biggest technology event.</p>
            </article>
            <article>
              <span class="story-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="currentColor" stroke-width="1.5"/><path d="M9 5.5V9l2.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </span>
              <h2>Expand North Star</h2>
              <p>8–11 December 2026 at Expo City Dubai. The startup show of GITEX, on the Dune stage.</p>
            </article>
          </div>
          <div class="story-panels">
            <article>
              <div class="story-panel-face">
                <span>Expo Station</span>
                <strong>134</strong>
                <em>LED network screens</em>
              </div>
            </article>
            <article>
              <div class="story-panel-face">
                <span>Expo City</span>
                <strong>49</strong>
                <em>LED network screens</em>
              </div>
            </article>
            <article>
              <div class="story-panel-face">
                <span>Graffiti</span>
                <strong>3 <small>Circuits</small></strong>
                <em>Stretch at Expo City entrance and exit</em>
              </div>
            </article>
          </div>
        </article>`;

      case 'why':
        return `<article class="slide why-slide" data-slide="3">
          <p class="story-kicker">02 — Why GITEX Expo</p>
          <h1 class="why-title">Why GITEX <span>Expo 2026.</span></h1>
          <hr class="why-rule" />
          <p class="why-lead">GITEX GLOBAL is at Expo City Dubai, 8–11 December 2026. Every company attending shares the same route: the metro in, the destination itself, and the road at the entrance and exit.</p>
          <div class="why-cards">
            <article>
              <div class="why-card-top">
                <div class="why-card-id">
                  <span class="why-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 14.5h12M4.5 14.5V7.5L9 4.5l4.5 3v7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
                  </span>
                  <span class="why-reason">Reason 01</span>
                </div>
              </div>
              <h2>One destination</h2>
              <p>The exhibition is at Expo City for four days. The companies attending are already in the same place.</p>
            </article>
            <article>
              <div class="why-card-top">
                <div class="why-card-id">
                  <span class="why-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="4" width="13" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6 15h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </span>
                  <span class="why-reason">Reason 02</span>
                </div>
              </div>
              <h2>Seen on the metro</h2>
              <p>134 LED screens at Expo Station meet people on the entrance, platform, concourse and footbridge.</p>
            </article>
            <article>
              <div class="why-card-top">
                <div class="why-card-id">
                  <span class="why-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="3.5" width="5.5" height="11" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="3.5" width="5.5" height="11" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>
                  </span>
                  <span class="why-reason">Reason 03</span>
                </div>
              </div>
              <h2>Inside Expo City</h2>
              <p>49 screens stay with visitors who are already walking the destination during the show.</p>
            </article>
            <article>
              <div class="why-card-top">
                <div class="why-card-id">
                  <span class="why-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 12.5h12M4 12.5V8.5h10v4M6.5 8.5V6h5v2.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
                  </span>
                  <span class="why-reason">Reason 04</span>
                </div>
              </div>
              <h2>At the entrance</h2>
              <p>Three graffiti circuits cover the stretch at the Expo City entrance and exit.</p>
            </article>
          </div>
        </article>`;

      case 'audience':
        return `<article class="slide audience-slide" data-slide="4">
          <p class="story-kicker">03 — The audience</p>
          <h1 class="why-title">Reaching the audience <span>at GITEX.</span></h1>
          <hr class="why-rule" />
          <p class="why-lead">From 8 to 11 December, exhibitors, founders, buyers and delegations share one route through Expo City. Outdoor media sits on the places they already pass.</p>
          <div class="audience-grid">
            <article>
              <span class="why-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 14.5h12M4.5 14.5V7.5L9 4.5l4.5 3v7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></span>
              <div><h2>Exhibiting companies</h2><p>Teams with a stand at the show</p></div>
            </article>
            <article>
              <span class="why-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="2.2" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 14.2c.6-2.2 2.3-3.4 4.5-3.4s3.9 1.2 4.5 3.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
              <div><h2>Founders and startups</h2><p>Expand North Star, the startup show of GITEX</p></div>
            </article>
            <article>
              <span class="why-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2.5l1.6 3.4 3.7.4-2.8 2.5.8 3.6L9 10.6 5.7 12.4l.8-3.6L3.7 6.3l3.7-.4L9 2.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg></span>
              <div><h2>Government delegations</h2><p>Public-sector leaders visiting the exhibition</p></div>
            </article>
            <article>
              <span class="why-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="3" y="4" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6 13.5V15M12 13.5V15M6 15h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
              <div><h2>Technology buyers</h2><p>Companies in the halls to meet suppliers</p></div>
            </article>
            <article>
              <span class="why-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M4 13.5V8.5M9 13.5V5M14 13.5V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
              <div><h2>Investors</h2><p>Capital meeting founders during the four days</p></div>
            </article>
            <article>
              <span class="why-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 12h12M5 12V8h8v4M7 8V6h4v2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></span>
              <div><h2>Arriving visitors</h2><p>People on the metro and the entrance road</p></div>
            </article>
          </div>
        </article>`;

      case 'station':
        return `<article class="slide station-slide" data-slide="5">
          <p class="story-kicker">04 — Expo Station</p>
          <h1 class="why-title">The metro network <span>into the show.</span></h1>
          <p class="why-lead">134 LED screens at Expo City Station. Counts are from the 2024 credentials and are reconfirmed before booking.</p>
          <div class="station-board">
            <article class="station-total">
              <span>Expo Station</span>
              <strong>${c.station.total}</strong>
              <em>LED network screens</em>
            </article>
            <div class="station-formats">
              ${c.station.formats.map((f) => {
                const dest = FORMAT_SLIDE[f.name];
                const inner = `<strong>${f.screens}</strong><span>${esc(f.name)}</span>`;
                if (!dest) return `<article>${inner}</article>`;
                return `<button type="button" class="is-link" data-goto="${siteIndex(dest)}">${inner}</button>`;
              }).join('')}
            </div>
          </div>
          <ul class="station-notes">
            ${c.station.specs.map((s) => `<li>${esc(s)}</li>`).join('')}
          </ul>
        </article>`;

      case 'sites': {
        const order = ['skylight', 'totem', 'column'];
        return `<article class="slide metro-slide" data-slide="6">
          <p class="story-kicker">05 — Metro station screens</p>
          <h1 class="why-title">Metro station <span>screens.</span></h1>
          <p class="why-lead">Three formats at Expo City Station: platform skylight, entrance totem and LED column.</p>
          <div class="metro-sites">
            ${order.map((id, i) => {
              const site = SITES[id];
              return `<article>
                <figure class="site-photo site-photo-${id}">
                  <img src="${esc(site.photo)}" alt="${esc(site.name)}" />
                </figure>
                <p class="metro-name"><span>0${i + 1}</span> ${esc(site.name)}</p>
                <p class="metro-meta"><strong>${site.screens}</strong> screens</p>
              </article>`;
            }).join('')}
          </div>
        </article>`;
      }

      case 'more': {
        const order = ['desk', 'wall', 'psd'];
        return `<article class="slide metro-slide" data-slide="7">
          <p class="story-kicker">06 — Metro station screens</p>
          <h1 class="why-title">More station <span>screens.</span></h1>
          <p class="why-lead">Ticketing office and police room, wall unit, and PSD at Expo City Station.</p>
          <div class="metro-sites">
            ${order.map((id, i) => {
              const site = SITES[id];
              return `<article>
                <figure class="site-photo site-photo-${id}">
                  <img src="${esc(site.photo)}" alt="${esc(site.name)}" />
                </figure>
                <p class="metro-name"><span>0${i + 1}</span> ${esc(site.name)}</p>
                <p class="metro-meta"><strong>${site.screens}</strong> screens</p>
              </article>`;
            }).join('')}
          </div>
        </article>`;
      }

      case 'skylight':
      case 'totem':
      case 'column': {
        const order = ['skylight', 'totem', 'column'];
        const pos = order.indexOf(SLIDES[index].id);
        const site = SITES[SLIDES[index].id];
        const next = pos < order.length - 1 ? order[pos + 1] : 'city';
        return `<article class="slide site-slide" data-slide="${index + 1}">
          <div class="site-copy">
            <p class="story-kicker">0${pos + 5} — Site ${pos + 1} of 3</p>
            <h1 class="why-title">${esc(site.name)}</h1>
            <p class="site-count"><strong>${site.screens}</strong><span>screens</span></p>
            <p class="why-lead">${esc(site.note)} Click the picture for the next site.</p>
          </div>
          <button type="button" class="site-shot" data-goto="${siteIndex(next)}" aria-label="Next site">
            <img src="${esc(site.photo)}" alt="${esc(site.name)}" />
          </button>
        </article>`;
      }

      case 'city':
        return `<article class="slide city-slide" data-slide="6">
          <p class="story-kicker">08 — Expo City</p>
          <h1 class="why-title">Screens inside <span>the destination.</span></h1>
          <p class="why-lead">49 screens for people already at Expo City. Counts are from the 2024 credentials and are reconfirmed before booking.</p>
          <div class="station-board city-board">
            <article class="station-total">
              <span>Expo City</span>
              <strong>${c.city.total}</strong>
              <em>Total screens</em>
            </article>
            <div class="city-sites">
              ${c.city.formats.map((f) => {
                const dest = f.name === 'Step screens' ? 'steps' : 'network';
                return `<button type="button" class="is-link" data-goto="${siteIndex(dest)}">
                  <figure class="site-photo${f.photo ? '' : ' is-empty'}">
                    ${f.photo
                      ? `<img src="${esc(f.photo)}" alt="${esc(f.name)}" />`
                      : `<span>Add a photo</span>`}
                  </figure>
                  <strong>${f.screens}</strong>
                  <span>${esc(f.name)}</span>
                </button>`;
              }).join('')}
            </div>
          </div>
        </article>`;

      case 'steps':
        return `<article class="slide metro-slide" data-slide="9">
          <p class="story-kicker">09 — Destinations · Expo City Dubai</p>
          <h1 class="why-title">The Steps <span>Screens.</span></h1>
          <p class="why-lead">On the plaza at Expo City Dubai.</p>
          <div class="metro-sites metro-sites-one">
            <article>
              <figure class="site-photo site-photo-steps">
                <img src="assets/sites/step-screens.png" alt="The Steps Screens at Expo City Dubai" />
              </figure>
              <p class="metro-name"><span>01</span> The Steps Screens</p>
              <p class="metro-meta"><strong>6</strong> screens</p>
            </article>
          </div>
        </article>`;

      case 'network':
        return `<article class="slide metro-slide" data-slide="10">
          <p class="story-kicker">10 — Destinations · Expo City Dubai</p>
          <h1 class="why-title">Destination <span>screens.</span></h1>
          <p class="why-lead">Horizontal screens and the digital network at Expo City Dubai.</p>
          <div class="metro-sites metro-sites-two">
            <article>
              <figure class="site-photo site-photo-horizontal">
                <img src="assets/sites/horizontal-screens.png" alt="The Horizontal Screens at Expo City Dubai" />
              </figure>
              <p class="metro-name"><span>01</span> The Horizontal Screens</p>
              <p class="metro-meta"><strong>2</strong> screens</p>
            </article>
            <article>
              <figure class="site-photo site-photo-mupi">
                <img src="assets/sites/mupi-screens.jpg" alt="MUPI screens on the digital network at Expo City Dubai" />
              </figure>
              <p class="metro-name"><span>02</span> The Digital Network — MUPI Screens</p>
              <p class="metro-meta"><strong>41</strong> screens</p>
            </article>
          </div>
        </article>`;

      case 'graffiti': {
        const pillars = c.graffiti.stats.find((s) => s.label === 'Pillars');
        return `<article class="slide metro-slide" data-slide="11">
          <p class="story-kicker">11 — Metro Graffiti</p>
          <h1 class="why-title">Metro <span>Graffiti.</span></h1>
          <p class="why-lead">${esc(c.graffiti.place)}</p>
          <div class="metro-sites metro-sites-one">
            <article>
              <figure class="site-photo site-photo-graffiti">
                <img src="${esc(c.graffiti.photo)}" alt="Metro graffiti at Expo City Dubai Exhibition Centre" />
              </figure>
              <p class="metro-name"><span>01</span> Metro Graffiti</p>
              <p class="metro-meta"><strong>${esc(pillars.value)}</strong> pillars</p>
            </article>
          </div>
        </article>`;
      }

      case 'graffiti-map':
        return `<article class="slide graffiti-slide" data-slide="12">
          <p class="story-kicker">12 — Metro Graffiti</p>
          <h1 class="why-title">Where stretch <span>32 sits.</span></h1>
          <p class="why-lead">59 pillars under the metro line at Expo City Dubai Exhibition Centre. Stretch 32 is three parts: 32A, 32B and 32C.</p>
          <div class="graffiti-board">
            <article class="station-total">
              <span>Stretch 32</span>
              <strong>59</strong>
              <em>20 + 20 + 19 pillars</em>
            </article>
            <div class="graffiti-splits">
              ${c.graffiti.splits.map((s) => `
                <article>
                  <strong>${esc(s.name)}</strong>
                  <b>${s.pillars} pillars</b>
                  <p>${esc(s.where)}</p>
                </article>`).join('')}
            </div>
          </div>
          <p class="graffiti-note">${esc(c.graffiti.body)}</p>
        </article>`;

      case 'rates':
        return `<article class="slide rate-slide" data-slide="13">
          <p class="story-kicker">13 — Rates</p>
          <h1 class="why-title">The <span>schedule.</span></h1>
          <p class="why-lead">US dollars. Dirham prices are converted at ${c.rates.peg} AED per dollar. Graffiti is not priced yet.</p>
          <div class="rate-schedule">
            <p class="rate-label">On their own</p>
            ${c.rates.sites.map((item) => `
              <div class="rate-row">
                <strong>${esc(item.name)}</strong>
                <span>${esc(item.detail)}</span>
                <b class="rate-usd${item.aed == null ? ' is-empty' : ''}">${money(item.aed == null ? null : usdFromAed(item.aed))}</b>
              </div>`).join('')}
            <p class="rate-label">Packages</p>
            ${c.rates.packages.map((item) => `
              <div class="rate-row is-package">
                <strong>${esc(item.name)}</strong>
                <span>${esc(item.detail)}</span>
                <b class="rate-usd${item.usd == null ? ' is-empty' : ''}">${money(item.usd)}</b>
              </div>`).join('')}
          </div>
        </article>`;

      case 'plan':
        return slideShell(14, 'Recommended plan', `
          <p class="slide-lead">${esc(c.plan.lead)}</p>
          <div class="grid-3 plan-grid">
            ${c.plan.layers.map((layer) => `
              <article class="card card-accent">
                <h4><span class="layer-num">${esc(layer.num)}</span> ${esc(layer.title)}</h4>
                <p class="layer-place">${esc(layer.place)}</p>
                <p>${esc(layer.body)}</p>
              </article>`).join('')}
          </div>
        `, false, false, true);

      case 'artwork':
        return slideShell(15, c.artwork.title, `
          <div class="grid-4 terms-grid">
            ${c.artwork.items.map((item, i) => `
              <article class="card term-card">
                <span class="term-num">${String(i + 1).padStart(2, '0')}</span>
                <h4>${esc(item.title)}</h4>
                <p>${esc(item.body)}</p>
              </article>`).join('')}
          </div>
        `, false, true, true);

      case 'mira':
        return slideShell(16, c.mira.title, `
          <p class="slide-lead">${esc(c.mira.lead)}</p>
          <div class="grid-2 mira-grid">
            ${c.mira.items.map((item) => `
              <article class="card">
                <h4><span class="layer-num">${esc(item.num)}</span> ${esc(item.title)}</h4>
                <p>${esc(item.body)}</p>
              </article>`).join('')}
          </div>
        `, false, false, true);

      case 'brands':
        return slideShell(17, c.brands.title, `
          <p class="slide-lead">${esc(c.brands.lead)}</p>
          <div class="brand-wall">
            ${c.brands.logos.map((logo) => `
              <img src="${esc(logo.src)}" alt="${esc(logo.name)}" />`).join('')}
          </div>
        `, false, false, true);

      case 'thanks':
        return slideShell(18, c.contact.headline, `
          <div class="pitch-cover">
            <span class="pitch-watermark" aria-hidden="true">26</span>
            <div class="pitch-cover-inner">
              <div class="pitch-lockup">
                <img src="${esc(c.brand.logo)}" alt="Mira Media" />
                <span class="pitch-rule" aria-hidden="true"></span>
                <span class="pitch-x" aria-hidden="true">×</span>
                <img class="pitch-gitex" src="assets/gitex-logo.png" alt="GITEX Global" />
              </div>
              <p class="pitch-kicker"><span class="pitch-kicker-line"></span> Mira Media · Dubai</p>
              <h1 class="pitch-title">${esc(c.contact.line1)}<br><span>${esc(c.contact.line2)}</span></h1>
              <p class="pitch-lead">${esc(c.contact.message)}</p>
              <div class="pitch-facts">
                <div><small>Email</small><strong><a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></strong></div>
                <div><small>Phone</small><strong><a href="tel:+97144368624">${esc(c.contact.phones[0])}</a></strong></div>
              </div>
              <p class="pitch-tag">${esc(c.contact.address)} · ${esc(c.contact.poBox)}</p>
            </div>
          </div>
        `, true);

      default:
        return '';
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(SLIDES.length - 1, index));
    const stage = document.getElementById('slide-stage');
    stage.innerHTML = renderSlide(current);
    stage.classList.remove('slide-in');
    void stage.offsetWidth;
    stage.classList.add('slide-in');

    const pad = (n) => String(n).padStart(2, '0');
    document.getElementById('slide-counter').textContent = `${pad(current + 1)} / ${pad(SLIDES.length)}`;
    document.getElementById('prev-btn').disabled = current === 0;
    document.getElementById('next-btn').disabled = current === SLIDES.length - 1;
    const dots = document.getElementById('pitch-dots');
    if (dots) {
      dots.innerHTML = SLIDES.map((_, i) =>
        `<span class="pitch-dot${i === current ? ' is-on' : ''}"></span>`
      ).join('');
    }

    document.querySelectorAll('.overview-thumb').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === current);
    });
  }

  function renderOverview() {
    document.getElementById('overview-grid').innerHTML = SLIDES.map((s, i) => `
      <button type="button" class="overview-thumb" data-index="${i}">
        <span class="overview-thumb-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="overview-thumb-title">${esc(s.title)}</span>
      </button>
    `).join('');

    document.querySelectorAll('.overview-thumb').forEach((btn) => {
      btn.addEventListener('click', () => {
        goTo(parseInt(btn.dataset.index, 10));
        document.getElementById('overview-dialog').close();
      });
    });
  }

  function preparePrint() {
    const root = document.getElementById('print-root');
    root.innerHTML = SLIDES.map((_, i) => renderSlide(i)).join('');
    root.hidden = false;
  }

  function cleanupPrint() {
    const root = document.getElementById('print-root');
    root.innerHTML = '';
    root.hidden = true;
  }

  function initNav() {
    document.getElementById('slide-stage').addEventListener('click', (e) => {
      const jump = e.target.closest('[data-goto]');
      if (!jump) return;
      goTo(parseInt(jump.dataset.goto, 10));
    });

    document.getElementById('prev-btn').addEventListener('click', () => goTo(current - 1));
    document.getElementById('next-btn').addEventListener('click', () => {
      if (current < SLIDES.length - 1) goTo(current + 1);
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea')) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goTo(current + 1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goTo(current - 1); }
    });

    const dialog = document.getElementById('overview-dialog');
    document.getElementById('overview-btn').addEventListener('click', () => dialog.showModal());
    document.getElementById('overview-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

    document.getElementById('print-btn').addEventListener('click', () => {
      preparePrint();
      window.print();
    });
    window.addEventListener('afterprint', cleanupPrint);
  }

  function init() {
    state = window.DECK;
    renderOverview();
    initNav();
    goTo(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
