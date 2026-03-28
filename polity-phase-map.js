// ── Phase data ───────────────────────────────────────────────────────────────

const PHASES = {
  formation: {
    id: "formation",
    label: "Formation",
    color: "purple",
    desc: "A polity comes into being through founding conflict, revolution, or negotiation. Legitimacy is contested; institutions are thin and symbolic; charismatic founders dominate. The choices made here echo for generations.",
    axes: { legitimacy: 2, capacity: 1, distribution: 2 },
    markers: [
      "Founding document or myth being written",
      "Rival factions still contesting authority",
      "High symbolic politics, low administrative capacity",
      "External threats often present (wars, interventions)",
      "Charismatic founders dominate — institutions are thin"
    ],
    branches: [
      { label: "Founding settlement reached", severity: "positive", desc: "Factions converge — negotiated or imposed — on a framework for authority.", target: "settlement" },
      { label: "No settlement", severity: "danger", desc: "No faction achieves sufficient dominance; the polity fractures before it forms.", target: "fragmentation" }
    ],
    loop: "Founding myths become self-reinforcing. Whichever faction writes the constitution shapes who is 'legitimate' for generations. Counter-loop: excluded groups build parallel legitimacy over time.",
    examples: [
      "American Revolution (1776) → constitutional republic",
      "French Revolution (1789) → oscillated for 80 years",
      "Weimar Germany (1919) → democratic formation under extreme strain",
      "Soviet formation (1917–22) → strongman path",
      "India (1947) → federal path under partition pressure"
    ]
  },

  settlement: {
    id: "settlement",
    label: "Settlement?",
    color: "decision",
    desc: "Was the founding settlement negotiated between factions, or imposed by a dominant one? This choice shapes the character of consolidation — and whether consolidation is possible at all.",
    axes: { legitimacy: 0, capacity: 0, distribution: 0 },
    markers: [
      "Is there a founding document accepted by major factions?",
      "Did the victorious faction negotiate concessions to rivals?",
      "Are excluded groups capable of spoiling the settlement?",
      "Is there a recognized process for resolving future disputes?",
      "Do all major armed actors accept disarmament or integration?"
    ],
    branches: [
      { label: "Negotiated → democratic character", severity: "positive", desc: "Rival factions accept a shared framework; consolidation carries a legitimate character.", target: "consolidation" },
      { label: "Imposed → autocratic character", severity: "danger", desc: "Dominant faction dictates terms; consolidation proceeds on exclusionary lines.", target: "consolidation" },
      { label: "No settlement → fragmentation", severity: "danger", desc: "No faction achieves sufficient dominance; the polity fails to cohere.", target: "fragmentation" }
    ],
    loop: "The character of the settlement is path-dependent. Negotiated settlements create precedents for future negotiation; imposed settlements normalize exclusion. Both can produce stable polities — but very different ones.",
    examples: [
      "Philadelphia Convention (1787) — negotiated",
      "Bolshevik October (1917) — imposed",
      "Versailles / Weimar (1919) — negotiated under duress",
      "Afghan Bonn Agreement (2001) — negotiated but externally imposed"
    ]
  },

  fragmentation: {
    id: "fragmentation",
    label: "Fragmentation",
    color: "red",
    desc: "No faction achieved sufficient dominance to impose a settlement, and no coalition was broad enough to negotiate one. The polity fractures: rival authorities, warlordism, or partition. A new founding attempt is possible but not guaranteed.",
    axes: { legitimacy: 0, capacity: 0, distribution: 0 },
    markers: [
      "Multiple armed factions with incompatible claims",
      "No recognized central authority",
      "Territory divided along factional, ethnic, or regional lines",
      "External actors backing rival claimants",
      "Population displaced or caught between competing authorities"
    ],
    branches: [
      { label: "New founding attempt", severity: "info", desc: "Mutual exhaustion or external pressure creates a new window for settlement.", target: "formation" }
    ],
    loop: "Fragmentation is often stable in a perverse sense: each faction has reason to continue fighting as long as it believes it can eventually win. Only mutual exhaustion, external guarantors, or a decisive military outcome breaks the deadlock.",
    examples: [
      "Lebanon civil war (1975–90)",
      "Somalia (1991–present)",
      "Libya (2011–present)",
      "Afghanistan (1989–2001)"
    ]
  },

  consolidation: {
    id: "consolidation",
    label: "Consolidation",
    color: "teal",
    desc: "Factional competition has resolved enough that a dominant coalition can begin building administrative capacity. Legitimacy grows as the new order delivers basic order and services. The character of this phase — democratic or autocratic — is set at the founding settlement.",
    axes: { legitimacy: 3, capacity: 3, distribution: 2 },
    markers: [
      "Single ruling coalition dominant but not unchallenged",
      "Bureaucratic infrastructure being built",
      "Patronage networks expanding to co-opt rivals",
      "External recognition sought and partially achieved",
      "National identity narratives actively promoted"
    ],
    branches: [
      { label: "Mature stability", severity: "positive", desc: "Institutions stabilize; opposition gains legitimate space.", target: "mature" },
      { label: "Autocratic consolidation", severity: "warning", desc: "Capacity turns toward exclusion; the democratic character of settlement is abandoned.", target: "autocratic" }
    ],
    loop: "Successful consolidation raises capacity, which raises revenue, which funds more capacity — a virtuous cycle. Reversed when patronage costs exceed revenue or excluded groups reach critical mass.",
    examples: [
      "Meiji Japan (1868–90) → rapid centralization",
      "Post-WWII South Korea (1950s–60s) → developmental state",
      "ANC South Africa (1994–2008) → managed transition",
      "Turkey under Atatürk (1923–38)"
    ]
  },

  mature: {
    id: "mature",
    label: "Mature Stability",
    color: "blue",
    desc: "The polity has achieved high legitimacy, functional capacity, and relatively broad distribution. Institutions operate predictably; peaceful transfers of power occur. The main risks are elite capture and complacency.",
    axes: { legitimacy: 5, capacity: 4, distribution: 3 },
    markers: [
      "Peaceful transfers of power are routine",
      "Independent judiciary and free press function",
      "Tax base is broad and compliance is high",
      "Civil society organizations operate freely",
      "Policy disagreements are managed through institutions"
    ],
    branches: [
      { label: "Reform / adaptation", severity: "positive", desc: "Institutions update to new challenges while preserving legitimacy.", target: "reform" },
      { label: "Strain / overreach", severity: "warning", desc: "External shocks or elite extraction erode the surplus.", target: "strain" },
      { label: "Elite capture (rare)", severity: "danger", desc: "Institutional protections hollowed from within; backsliding begins.", target: "autocratic" }
    ],
    loop: "High legitimacy enables taxation, which funds capacity, which delivers services, which reinforces legitimacy. Break this cycle anywhere and the whole structure weakens.",
    examples: [
      "Post-war Western Europe (1950–90)",
      "United States (1945–73)",
      "Botswana (1966–present) — African outlier",
      "Costa Rica (1949–present)"
    ]
  },

  autocratic: {
    id: "autocratic",
    label: "Autocratic Consolidation",
    color: "purple",
    desc: "Authority concentrated in a single leader or party. Capacity is deployed selectively to reward supporters and punish dissent. Legitimacy rests on performance, nationalism, or fear rather than consent.",
    axes: { legitimacy: 2, capacity: 3, distribution: 1 },
    markers: [
      "Courts and legislature subordinated to executive",
      "Opposition parties banned or rendered impotent",
      "Selective enforcement of law against rivals",
      "State media dominates the information environment",
      "Insider/outsider distinctions govern resource distribution"
    ],
    branches: [
      { label: "Repression / ossification", severity: "danger", desc: "Capacity turns inward; challengers suppressed rather than co-opted.", target: "repression" },
      { label: "Strain / overreach", severity: "warning", desc: "Overextension or elite conflict erodes autocratic capacity.", target: "strain" },
      { label: "Liberalization (rare)", severity: "positive", desc: "Elite splits or economic failure forces negotiated opening.", target: "mature" }
    ],
    loop: "Concentrated power enables faster decisions, which can produce early wins, which justify further concentration. Reversed when personalist networks decay, elite defection accelerates, or performance fails.",
    examples: [
      "Russia under Putin (2000–present)",
      "Hungary under Orbán (2010–present)",
      "Venezuela under Maduro (2013–present)",
      "Singapore (1965–90) — high-capacity variant"
    ]
  },

  strain: {
    id: "strain",
    label: "Strain / Overreach",
    color: "amber",
    desc: "The polity has overextended — militarily, fiscally, or socially. Capacity is declining relative to commitments. Legitimacy is eroding. The system faces competing pressures it cannot simultaneously satisfy.",
    axes: { legitimacy: 2, capacity: 2, distribution: 2 },
    markers: [
      "Deficit spending to maintain political commitments",
      "Public trust in institutions declining measurably",
      "Elite factions in open or covert conflict",
      "Peripheral regions or groups disengaging",
      "Policy failures becoming publicly visible"
    ],
    branches: [
      { label: "Reform", severity: "positive", desc: "Leadership acknowledges overreach and negotiates retrenchment.", target: "reform" },
      { label: "Authoritarian turn", severity: "warning", desc: "Elites close ranks; dissent criminalized to forestall accountability.", target: "autocratic" },
      { label: "Crisis / collapse", severity: "danger", desc: "Accumulated pressures rupture; the state loses control of key functions.", target: "crisis" }
    ],
    loop: "Strain reduces legitimacy, which reduces voluntary compliance, which reduces revenue, which reduces capacity, which deepens strain. Escape requires a credible new settlement — rare without external shock or leadership change.",
    examples: [
      "Late Roman Republic (133–31 BCE)",
      "France under Louis XVI (1787–89)",
      "Soviet Union (1985–91)",
      "United States (2016–present, contested)"
    ]
  },

  reform: {
    id: "reform",
    label: "Reform / Adaptation",
    color: "green",
    desc: "Elites accept that the current settlement is failing and negotiate a new one — redistributing power or resources to re-anchor legitimacy. Rare because it requires elites to accept short-term losses.",
    axes: { legitimacy: 4, capacity: 3, distribution: 4 },
    markers: [
      "Elite-sponsored concessions to rising groups",
      "Constitutional or electoral reform underway",
      "Redistribution or anti-corruption drives gaining traction",
      "New coalitions crossing old factional lines",
      "International models or pressure playing a role"
    ],
    branches: [
      { label: "Renewed maturity (rare)", severity: "positive", desc: "Reform re-anchors legitimacy; polity stabilizes at higher level.", target: "mature" },
      { label: "Managed succession", severity: "info", desc: "Reform sets the stage for an orderly leadership transition.", target: "succession" }
    ],
    loop: "Credible reform raises expectations, which raises the political cost of failure. If reform stalls, legitimacy can drop faster than before reform was promised. Success requires matching rhetoric with tangible redistribution.",
    examples: [
      "New Deal USA (1933–38)",
      "South Africa transition (1990–94)",
      "Spain's Transition (1975–82)",
      "Britain's Reform Acts (1832, 1867)"
    ]
  },

  repression: {
    id: "repression",
    label: "Repression / Ossification",
    color: "amber",
    desc: "The state maintains order primarily through coercion rather than legitimacy. Capacity is directed inward against the population. Institutions are frozen; adaptation is blocked by those who benefit from stasis.",
    axes: { legitimacy: 1, capacity: 2, distribution: 1 },
    markers: [
      "Mass incarceration or exile of political opponents",
      "Surveillance apparatus dominant in daily life",
      "Economic mobility blocked by political connections",
      "Nominal institutions (elections, courts) are theatrical",
      "Youth emigration accelerating"
    ],
    branches: [
      { label: "Terminal decay", severity: "danger", desc: "Coercion becomes unsustainable; the state hollows out.", target: "decay" },
      { label: "Crisis / collapse", severity: "danger", desc: "Sudden popular revolt or elite defection breaks the system.", target: "crisis" },
      { label: "Managed opening (rare)", severity: "positive", desc: "Elite coup or succession creates a reform window.", target: "mature" }
    ],
    loop: "Repression blocks feedback, which means problems compound unseen. When they surface, the state has no legitimate channel to absorb them. Coercive capacity itself atrophies as enforcers pursue private extraction.",
    examples: [
      "USSR Brezhnev era (1968–82)",
      "East Germany (1950–89)",
      "North Korea (1990–present)",
      "Zimbabwe under Mugabe (2000–17)"
    ]
  },

  crisis: {
    id: "crisis",
    label: "Crisis / Collapse",
    color: "red",
    desc: "State functions have broken down. Legitimacy and capacity are near zero. Multiple armed actors contest territory. The polity as a unit may cease to exist or exist only nominally.",
    axes: { legitimacy: 0, capacity: 0, distribution: 0 },
    markers: [
      "Multiple armed factions contesting core territories",
      "Currency collapse or fiscal paralysis",
      "Humanitarian emergency — displacement, famine",
      "International actors intervening directly",
      "State employees unpaid or switched to self-provisioning"
    ],
    branches: [
      { label: "Reconstitution (rare)", severity: "info", desc: "Surviving elites negotiate a new founding compact.", target: "formation" }
    ],
    loop: "Collapse is self-reinforcing: armed factions prey on the economy, collapsing it further, depriving any emergent authority of revenue. Escape requires an external guarantor or a dominant faction with enough capacity to begin providing public goods.",
    examples: [
      "Somalia (1991–present)",
      "Libya (2011–present)",
      "Lebanon (2019–present)",
      "Democratic Republic of Congo (1996–2003)"
    ]
  },

  succession: {
    id: "succession",
    label: "Managed Succession",
    color: "teal",
    desc: "A high-legitimacy polity navigates leadership transition through established institutions. The key challenge is whether the transition strengthens or weakens the institutional settlement.",
    axes: { legitimacy: 5, capacity: 4, distribution: 3 },
    markers: [
      "Election or succession mechanism broadly accepted",
      "Transfer of power peaceful and publicly visible",
      "Outgoing leadership cooperates with transition",
      "Policy continuity maintained through change",
      "New leadership seeking broad coalition"
    ],
    branches: [
      { label: "Return to maturity", severity: "positive", desc: "Succession strengthens norms; polity continues stable.", target: "mature" },
      { label: "New cycle (rare)", severity: "info", desc: "Succession exposes deeper fractures; new formation begins.", target: "formation" }
    ],
    loop: "Successful succession raises the value of institutions: each peaceful transfer makes the next one easier. Failed succession (even once) breaks the expectation, which makes future transfers harder to guarantee.",
    examples: [
      "US Presidential transitions (1797–present, with 2021 exception)",
      "UK general elections",
      "Taiwan's democratic consolidation (1996–present)",
      "Mexico's PRI-to-PAN transition (2000)"
    ]
  },

  decay: {
    id: "decay",
    label: "Terminal Decay",
    color: "red",
    desc: "The polity has lost both legitimacy and capacity but has not yet formally collapsed. The state persists nominally while actual governance is performed by informal actors — criminal networks, local strongmen, foreign powers.",
    axes: { legitimacy: 0, capacity: 0, distribution: 0 },
    markers: [
      "Formal institutions persist as facades only",
      "Actual power exercised by informal or criminal networks",
      "International aid or remittances sustain basic population",
      "National identity fragmenting along ethnic/regional lines",
      "Brain drain hollowing out technical capacity"
    ],
    branches: [
      { label: "External reset (rare)", severity: "info", desc: "Conquest, trusteeship, or foreign-backed reconstitution.", target: "formation" }
    ],
    loop: "Decay is stable in a perverse sense: the informal actors profiting from it have strong incentives to block reconstitution. External pressure or a complete resource collapse is usually required to break the equilibrium.",
    examples: [
      "Haiti (2010–present)",
      "Yemen (2015–present)",
      "Afghanistan under Taliban (2021–present)",
      "Late Western Roman Empire (395–476 CE)"
    ]
  }
};

// ── Graph edges ───────────────────────────────────────────────────────────────

const EDGES = [
  // Formation corridor
  { from: "formation",     to: "settlement",    type: "normal" },
  { from: "settlement",    to: "consolidation", type: "dangerous", label: "imposed" },
  { from: "settlement",    to: "consolidation", type: "normal",    label: "negotiated" },
  { from: "settlement",    to: "fragmentation", type: "dangerous", label: "no settlement" },
  { from: "fragmentation", to: "formation",     type: "rare",      label: "new attempt" },

  // Consolidation corridor exits
  { from: "consolidation", to: "mature",        type: "normal" },
  { from: "consolidation", to: "autocratic",    type: "normal",    label: "autocratic character" },

  // Mature
  { from: "mature",        to: "reform",        type: "normal" },
  { from: "mature",        to: "strain",        type: "normal" },
  { from: "mature",        to: "autocratic",    type: "rare",      label: "elite capture" },

  // Autocratic
  { from: "autocratic",    to: "strain",        type: "normal" },
  { from: "autocratic",    to: "repression",    type: "normal" },
  { from: "autocratic",    to: "mature",        type: "rare",      label: "liberalization" },

  // Strain
  { from: "strain",        to: "reform",        type: "normal" },
  { from: "strain",        to: "crisis",        type: "dangerous" },
  { from: "strain",        to: "autocratic",    type: "normal",    label: "authoritarian turn" },

  // Reform
  { from: "reform",        to: "mature",        type: "rare",      label: "renewal loop" },
  { from: "reform",        to: "succession",    type: "normal" },

  // Repression
  { from: "repression",    to: "decay",         type: "dangerous" },
  { from: "repression",    to: "crisis",        type: "dangerous" },
  { from: "repression",    to: "mature",        type: "rare",      label: "managed opening" },

  // Crisis / Succession / Decay
  { from: "crisis",        to: "formation",     type: "rare",      label: "reconstitution" },
  { from: "succession",    to: "mature",        type: "normal" },
  { from: "succession",    to: "formation",     type: "rare",      label: "next cycle" },
  { from: "decay",         to: "formation",     type: "rare",      label: "external reset" },
];

// ── Node layout ───────────────────────────────────────────────────────────────

const NW = 158, NH = 52, NRX = 8;
const COL = { left: 139, center: 340, right: 541 };

const NODE_POS = {
  // Row 0
  formation:    { x: COL.center, y: 40  },
  // Row 0.5 — settlement question + fragmentation
  settlement:   { x: COL.center, y: 118 },
  fragmentation:{ x: COL.right,  y: 118 },
  // Row 1 — consolidation alone
  consolidation:{ x: COL.center, y: 220 },
  // Row 2 — consolidation exits
  mature:       { x: COL.left,   y: 330 },
  autocratic:   { x: COL.right,  y: 330 },
  // Row 3
  strain:       { x: COL.left,   y: 440 },
  reform:       { x: COL.center, y: 440 },
  repression:   { x: COL.right,  y: 440 },
  // Row 4
  crisis:       { x: COL.left,   y: 550 },
  succession:   { x: COL.center, y: 550 },
  decay:        { x: COL.right,  y: 550 },
};

// ── Color helpers ─────────────────────────────────────────────────────────────

const COLOR_MAP = {
  purple:   { fill: "--purple-fill", stroke: "--purple-stroke", text: "--purple-text" },
  teal:     { fill: "--teal-fill",   stroke: "--teal-stroke",   text: "--teal-text"   },
  blue:     { fill: "--blue-fill",   stroke: "--blue-stroke",   text: "--blue-text"   },
  amber:    { fill: "--amber-fill",  stroke: "--amber-stroke",  text: "--amber-text"  },
  green:    { fill: "--green-fill",  stroke: "--green-stroke",  text: "--green-text"  },
  red:      { fill: "--red-fill",    stroke: "--red-stroke",    text: "--red-text"    },
  // Decision/question nodes use neutral surface colors
  decision: { fill: "--bg-secondary", stroke: "--text-muted",  text: "--text"        },
};

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function nodeColors(colorKey) {
  const m = COLOR_MAP[colorKey];
  return { fill: cssVar(m.fill), stroke: cssVar(m.stroke), text: cssVar(m.text) };
}

// ── SVG builder ───────────────────────────────────────────────────────────────

const SVG_NS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function buildSVG() {
  const svg = document.getElementById("map");
  const svgW = 680, svgH = 650;
  svg.setAttribute("viewBox", `0 0 ${svgW} ${svgH}`);

  // Arrowhead markers
  const defs = svgEl("defs");

  const mkNormal = svgEl("marker", {
    id: "arrowhead", markerWidth: "8", markerHeight: "8",
    refX: "7", refY: "3", orient: "auto"
  });
  mkNormal.appendChild(svgEl("path", { d: "M0,0 L0,6 L8,3 z", fill: cssVar("--text-muted") }));
  defs.appendChild(mkNormal);

  const mkDanger = svgEl("marker", {
    id: "arrowhead-danger", markerWidth: "8", markerHeight: "8",
    refX: "7", refY: "3", orient: "auto"
  });
  mkDanger.appendChild(svgEl("path", { d: "M0,0 L0,6 L8,3 z", fill: "#A32D2D" }));
  defs.appendChild(mkDanger);

  const mkRare = svgEl("marker", {
    id: "arrowhead-rare", markerWidth: "8", markerHeight: "8",
    refX: "7", refY: "3", orient: "auto"
  });
  mkRare.appendChild(svgEl("path", { d: "M0,0 L0,6 L8,3 z", fill: cssVar("--edge-rare") }));
  defs.appendChild(mkRare);

  svg.appendChild(defs);

  const edgeLayer = svgEl("g", { id: "edges" });
  svg.appendChild(edgeLayer);
  const nodeLayer = svgEl("g", { id: "nodes" });
  svg.appendChild(nodeLayer);

  // Annotate edges with same-direction indices (for parallel edge offset)
  const dirCount = {}, dirIdx = {};
  for (const e of EDGES) {
    const k = `${e.from}→${e.to}`;
    dirCount[k] = (dirCount[k] || 0) + 1;
  }
  const annotated = EDGES.map(e => {
    const k = `${e.from}→${e.to}`;
    const idx = dirIdx[k] || 0;
    dirIdx[k] = idx + 1;
    return { ...e, sameIdx: idx, sameCount: dirCount[k] };
  });

  for (const edge of annotated) drawEdge(edgeLayer, edge);
  for (const phase of Object.values(PHASES)) drawNode(nodeLayer, phase);
}

function nodeEdgePoint(id, towardId) {
  const p = NODE_POS[id];
  const t = NODE_POS[towardId];
  const cx = p.x, cy = p.y + NH / 2;
  const tcx = t.x, tcy = t.y + NH / 2;
  const dx = tcx - cx, dy = tcy - cy;
  const hw = NW / 2 + 2, hh = NH / 2 + 2;
  if (Math.abs(dx) * hh > Math.abs(dy) * hw) {
    const t2 = hw / Math.abs(dx);
    return { x: cx + Math.sign(dx) * hw, y: cy + dy * t2 };
  } else {
    const t2 = hh / Math.abs(dy);
    return { x: cx + dx * t2, y: cy + Math.sign(dy) * hh };
  }
}

function drawEdge(layer, edge) {
  const isDanger = edge.type === "dangerous";
  const isRare   = edge.type === "rare";

  const strokeColor = isDanger ? "#A32D2D"
                    : isRare   ? cssVar("--edge-rare")
                               : cssVar("--text-muted");
  const strokeW     = isRare ? "0.8" : "1";
  const arrowMark   = isDanger ? "url(#arrowhead-danger)"
                    : isRare   ? "url(#arrowhead-rare)"
                               : "url(#arrowhead)";

  const start = nodeEdgePoint(edge.from, edge.to);
  const end   = nodeEdgePoint(edge.to,   edge.from);

  // Perpendicular offset for parallel edges (same direction or bidirectional)
  const hasReverse = EDGES.some(e => e.from === edge.to && e.to === edge.from);
  const isParallel = edge.sameCount > 1;

  let offset = { x: 0, y: 0 };
  if (hasReverse || isParallel) {
    const dx = end.x - start.x, dy = end.y - start.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const perp = { x: -dy / len, y: dx / len };
    let shift;
    if (isParallel) {
      shift = (edge.sameIdx - (edge.sameCount - 1) / 2) * 9;
    } else {
      shift = 5;
    }
    offset = { x: perp.x * shift, y: perp.y * shift };
  }

  const attrs = {
    stroke: strokeColor,
    "stroke-width": strokeW,
    fill: "none",
    "marker-end": arrowMark,
    opacity: "0.7",
  };
  if (isRare) attrs["stroke-dasharray"] = "5 3";

  const x1 = start.x + offset.x, y1 = start.y + offset.y;
  const x2 = end.x + offset.x,   y2 = end.y + offset.y;

  const ddx = Math.abs(x2 - x1), ddy = Math.abs(y2 - y1);
  let pathD;
  if (ddx > 100 && ddy > 100) {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    pathD = `M ${x1} ${y1} Q ${mx} ${my - 20} ${x2} ${y2}`;
  }

  let el;
  if (pathD) {
    el = svgEl("path", { ...attrs, d: pathD });
  } else {
    el = svgEl("line", { ...attrs, x1, y1, x2, y2 });
  }
  layer.appendChild(el);

  // Transparent hit-area + label click (only for labeled edges)
  if (edge.label) {
    const hitAttrs = {
      stroke: "transparent",
      "stroke-width": "12",
      fill: "none",
      cursor: "pointer",
    };
    let hit;
    if (pathD) {
      hit = svgEl("path", { ...hitAttrs, d: pathD });
    } else {
      hit = svgEl("line", { ...hitAttrs, x1, y1, x2, y2 });
    }
    hit.addEventListener("click", (e) => {
      e.stopPropagation();
      showEdgeTooltip(edge.label, e.clientX, e.clientY);
    });
    layer.appendChild(hit);
  }
}

function drawNode(layer, phase) {
  const pos = NODE_POS[phase.id];
  const colors = nodeColors(phase.color);
  const isDecision = phase.color === "decision";

  const g = svgEl("g", {
    id: `node-${phase.id}`,
    class: "node-group",
    "data-id": phase.id,
  });

  const rectAttrs = {
    class: "node-rect",
    x: pos.x - NW / 2,
    y: pos.y,
    width: NW,
    height: NH,
    rx: NRX,
    fill: colors.fill,
    stroke: colors.stroke,
    "stroke-width": isDecision ? "1" : "1.5",
  };
  if (isDecision) rectAttrs["stroke-dasharray"] = "5 3";
  const rect = svgEl("rect", rectAttrs);

  const text = svgEl("text", {
    class: "node-label",
    x: pos.x,
    y: pos.y + NH / 2,
    fill: colors.text,
    style: `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;${isDecision ? " font-style: italic;" : ""}`,
  });
  text.textContent = phase.label;

  g.appendChild(rect);
  g.appendChild(text);
  layer.appendChild(g);

  g.addEventListener("click", () => handleNodeClick(phase.id));
}

// ── Edge tooltip ─────────────────────────────────────────────────────────────

function showEdgeTooltip(label, clientX, clientY) {
  const tip = document.getElementById("edge-tooltip");
  tip.textContent = label;
  tip.style.display = "block";
  tip.style.left = `${clientX}px`;
  tip.style.top  = `${clientY}px`;
}

function hideEdgeTooltip() {
  document.getElementById("edge-tooltip").style.display = "none";
}

document.addEventListener("click", () => hideEdgeTooltip());

// ── Interaction ───────────────────────────────────────────────────────────────

let activeNode = null;
let pinnedNode = localStorage.getItem("pinnedNode") || null;

function handleNodeClick(id) {
  if (activeNode === id) {
    deselect();
    return;
  }
  select(id);
}

function select(id) {
  activeNode = id;

  document.querySelectorAll(".node-group").forEach(g => {
    const gid = g.dataset.id;
    g.classList.remove("active", "dimmed");
    if (gid === id) g.classList.add("active");
    else g.classList.add("dimmed");
  });

  renderPanel(PHASES[id]);
  document.getElementById("detail-panel").classList.add("visible");
  document.getElementById("pin-btn").style.display = "inline-block";
  updatePinButton();
}

function deselect() {
  activeNode = null;
  document.querySelectorAll(".node-group").forEach(g => {
    g.classList.remove("active", "dimmed");
  });
  document.getElementById("detail-panel").classList.remove("visible");
  document.getElementById("pin-btn").style.display = "none";
}

function renderPanel(phase) {
  const isDecision = phase.color === "decision";
  const allZero = Object.values(phase.axes).every(v => v === 0);
  const colors = isDecision
    ? { stroke: cssVar("--text-muted") }
    : nodeColors(phase.color);

  const panel = document.getElementById("detail-panel");

  const nameEl = panel.querySelector(".panel-phase-name");
  nameEl.textContent = phase.label;
  nameEl.style.color = colors.stroke;
  nameEl.style.fontStyle = isDecision ? "italic" : "";

  panel.querySelector(".panel-desc").textContent = phase.desc;

  // Axes — hide for decision nodes and 0/0/0 states that aren't meaningful
  const axesContainer = panel.querySelector(".panel-axes");
  if (isDecision || (allZero && phase.id !== "crisis" && phase.id !== "decay")) {
    axesContainer.innerHTML = "";
  } else {
    axesContainer.innerHTML = "";
    const axisInfo = [
      { key: "legitimacy",   label: "Legitimacy"   },
      { key: "capacity",     label: "Capacity"     },
      { key: "distribution", label: "Distribution" },
    ];
    for (const ax of axisInfo) {
      const val = phase.axes[ax.key];
      const pct = (val / 5) * 100;
      const row = document.createElement("div");
      row.className = "axis-row";
      row.innerHTML = `
        <span class="axis-label">${ax.label}</span>
        <div class="axis-track">
          <div class="axis-fill" style="width:${pct}%; background:${colors.stroke};"></div>
        </div>
        <span class="axis-value">${val}/5</span>
      `;
      axesContainer.appendChild(row);
    }
  }

  panel.querySelector(".markers-list").innerHTML =
    phase.markers.map(m => `<li>${m}</li>`).join("");

  const branchesList = panel.querySelector(".branches-list");
  branchesList.innerHTML = phase.branches.map(b => {
    const cls = `branch-badge ${b.severity}${b.target ? " has-target" : ""}`;
    const data = b.target ? `data-target="${b.target}"` : "";
    return `<div class="${cls}" ${data}>
      <span class="branch-name">${b.label}</span>
      <span class="branch-desc">${b.desc}</span>
    </div>`;
  }).join("");

  branchesList.querySelectorAll(".has-target").forEach(el => {
    el.addEventListener("click", () => select(el.dataset.target));
  });

  panel.querySelector(".loop-text").textContent = phase.loop;

  panel.querySelector(".examples-list").innerHTML =
    phase.examples.map(e => `<li>${e}</li>`).join("");
}

// ── Pin / "You are here" ──────────────────────────────────────────────────────

function updatePinButton() {
  const btn = document.getElementById("pin-btn");
  if (!activeNode) return;
  const phase = PHASES[activeNode];
  const isDecision = phase.color === "decision";
  if (isDecision) {
    btn.style.display = "none";
    return;
  }
  if (pinnedNode === activeNode) {
    btn.textContent = "Pinned: You are here";
    btn.classList.add("pinned");
    btn.style.color = nodeColors(phase.color).stroke;
    btn.style.borderColor = nodeColors(phase.color).stroke;
  } else {
    btn.textContent = "Mark as: We are here";
    btn.classList.remove("pinned");
    btn.style.color = "";
    btn.style.borderColor = "";
  }
  renderPinRing();
}

function renderPinRing() {
  document.querySelectorAll(".pin-ring").forEach(el => el.remove());
  if (!pinnedNode) return;
  const pos = NODE_POS[pinnedNode];
  const colors = nodeColors(PHASES[pinnedNode].color);
  const ring = svgEl("rect", {
    class: "pin-ring",
    x: pos.x - NW / 2 - 4,
    y: pos.y - 4,
    width: NW + 8,
    height: NH + 8,
    rx: NRX + 3,
    fill: "none",
    stroke: colors.stroke,
    "stroke-width": "2.5",
    "stroke-dasharray": "6 3",
    opacity: "0.8",
    "pointer-events": "none",
  });
  document.getElementById("nodes").appendChild(ring);
}

document.getElementById("pin-btn").addEventListener("click", () => {
  if (!activeNode) return;
  if (pinnedNode === activeNode) {
    pinnedNode = null;
    localStorage.removeItem("pinnedNode");
  } else {
    pinnedNode = activeNode;
    localStorage.setItem("pinnedNode", pinnedNode);
  }
  updatePinButton();
});

// ── Legend ────────────────────────────────────────────────────────────────────

function buildLegend() {
  const container = document.getElementById("legend");
  const entries = [
    { key: "purple",   label: "Formation / Autocratic" },
    { key: "teal",     label: "Consolidation / Succession" },
    { key: "blue",     label: "Mature Stability" },
    { key: "amber",    label: "Strain / Repression" },
    { key: "green",    label: "Reform" },
    { key: "red",      label: "Crisis / Decay / Fragmentation" },
    { key: "decision", label: "Branching question" },
  ];
  container.innerHTML = entries.map(c => {
    const stroke = cssVar(`--${c.key === "decision" ? "text-muted" : c.key + "-stroke"}`);
    const dash = c.key === "decision"
      ? `border: 1px dashed ${stroke}; background: transparent;`
      : `background: ${stroke};`;
    return `<div class="legend-item">
      <span class="legend-dot" style="${dash}"></span>
      <span>${c.label}</span>
    </div>`;
  }).join("");
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  buildSVG();
  buildLegend();
  if (pinnedNode) renderPinRing();
});
