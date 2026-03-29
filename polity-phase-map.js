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
    ],
    theory: "The moment a new political entity comes into existence. Happens through revolution, independence, secession, or the collapse of a predecessor. Legitimacy is entirely projected, grounded in promises and founding myths rather than performance. The central variable is whether any faction achieves sufficient dominance to set terms unilaterally, or whether rough parity among rivals forces negotiated constraint. Whatever rules get written at this moment encode assumptions about who counts as a legitimate political actor, and those assumptions prove extraordinarily sticky.",
    citation: "Acemoglu, D., & Robinson, J. A. (2012). Why nations fail: The origins of power, prosperity, and poverty. Crown Business."
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
    ],
    theory: "The founding coalition has prevailed; now it must build institutions capable of outlasting the founders. Courts, bureaucracies, tax systems, and norms of succession need to replace personal loyalty networks. The critical diagnostic question is whether the dominant faction builds impersonal institutions — rules that bind even themselves — or personal ones centered on the founding leader. Linz and Stepan's formulation remains the sharpest: democracy is consolidated when it becomes \"the only game in town\" — behaviorally, attitudinally, and constitutionally. The danger of this phase is confusing the faction with the state.",
    citation: "Linz, J. J., & Stepan, A. (1996). Problems of democratic transition and consolidation: Southern Europe, South America, and post-communist Europe. Johns Hopkins University Press."
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
    ],
    theory: "Institutions have demonstrated they can survive stress. Power transfers peacefully over generations. Citizens have internalized the legitimacy of the regime, and even the opposition is loyal: it loses elections rather than revolting. This phase is what most political theory assumes but few entities sustain for long. Fukuyama's critical insight is that mature stability contains its own decay mechanism: successful institutions breed complacency, elites begin treating institutions as resources to capture rather than frameworks to maintain, and what he calls \"repatrimonialization\" — the return of personalized, patronage-based politics — sets in from within.",
    citation: "Fukuyama, F. (2014). Political order and political decay: From the industrial revolution to the globalization of democracy. Farrar, Straus and Giroux."
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
      "Venezuela (2013–present)",
      "Turkey under Erdogan (2014-present)",
      "Singapore (1965–90) — high-capacity variant"
    ],
    theory: "A single actor or small group has eliminated rival power centers. The state apparatus is personalized — institutions exist but serve the ruler rather than the rule. Svolik identifies the two fundamental problems all autocracies must navigate: authoritarian control (managing threats from the population) and authoritarian power-sharing (managing threats from the elite coalition). Because no independent authority can enforce agreements, violence is the ever-present final arbiter. This phase can be surprisingly stable, but stability is purchased at the cost of adaptability: information reaching the leadership is systematically distorted, succession is existentially dangerous, and problem-solving capacity degrades while coercive capacity remains high.",
    citation: "Svolik, M. W. (2012). The politics of authoritarian rule. Cambridge University Press."
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
    ],
    theory: "The polity's costs are outrunning its capacity to sustain them — military overextension, fiscal crisis, elite fracture, demographic pressure, or accumulated legitimacy deficits. This is the most diagnostically important phase because nearly every polity passes through it; what matters is whether institutions are robust enough to redirect the trajectory without rupture. The strain phase is self-amplifying: fiscal stress forces service cuts, which erode legitimacy, which increases dissent, which requires more coercive spending, which deepens fiscal stress. Goldstone's structural model identifies the three simultaneous conditions that tip strain into crisis: state revenue crisis, elite fragmentation, and a mobilizable popular base — each necessary, none sufficient alone.",
    citation: "Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press."
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
    ],
    theory: "Institutions bend without breaking. The polity absorbs a shock (economic, demographic, military, or legitimacy-based) and emerges with new rules, new coalitions, or redistributed power. This is the rarest and most undertheorized path, and it requires two simultaneous conditions that are difficult to achieve together: elite willingness to bear short-term losses, and credible popular pressure sufficient to make reform necessary. Hirschman's framework explains the mechanism: when exit is unavailable or costly, voice becomes the rational strategy — reform happens precisely when the credible alternative is something worse. Without that threat, elites have no incentive to absorb reform costs.",
    citation: "Hirschman, A. O. (1970). Exit, voice, and loyalty: Responses to decline in firms, organizations, and states. Harvard University Press."
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
    ],
    theory: "The regime responds to strain by tightening rather than adapting. Institutions calcify around the ruling coalition. The system becomes brittle: coercive capacity remains high while problem-solving and adaptive capacity collapses. Levitsky and Ziblatt document the mechanism in democratic contexts — the erosion of mutual toleration and institutional forbearance — but the same dynamic operates in autocracies with greater finality: once the reform faction is eliminated, only external shock or elite defection can produce change. The characteristic marker is that information reaching leadership is systematically falsified, not merely filtered.",
    citation: "Levitsky, S., & Ziblatt, D. (2018). How democracies die. Crown Publishing."
  },

  crisis: {
    id: "crisis",
    label: "Crisis / Collapse",
    color: "red",
    desc: "State functions have broken down. Legitimacy and capacity are near zero. Multiple armed actors contest territory. The polity as a unit may cease to exist or exist only nominally.",
    axes: { legitimacy: 1, capacity: 1, distribution: 2 },
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
    ],
    theory: "Legitimacy and capacity have failed simultaneously and publicly. The polity cannot perform its basic functions (security, law, taxation) and significant factions no longer recognize its authority. Critically, this phase does not represent zero on all axes: legitimacy does not disappear, it fragments across rival claimants; coercive capacity often persists in localized form long after administrative capacity has collapsed; and distribution sometimes increases as the collapsing regime throws resources at constituencies to buy loyalty. The diagnostic signal is not low scores but axis dissociation: the normal co-movement of legitimacy and capacity breaks down.",
    citation: "Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press."
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
    ],
    theory: "Power transfers peacefully according to established rules — elections, constitutional succession, term limits. This is simultaneously the signature achievement of a mature democratic system and the most critical moment of institutional reproduction. Each successful peaceful transfer makes the next one more likely by solidifying the norm. Each failed transfer makes future disputes more probable. The United States' 1800 election — the first democratic transfer of power between rival parties in history — is the paradigm case. Przeworski's formulation captures the mechanism precisely: democracy is a system for processing political conflict without violence, and succession is the moment that claim is tested.",
    citation: "Przeworski, A. (1991). Democracy and the market: Political and economic reforms in Eastern Europe and Latin America. Cambridge University Press."
  },

  decay: {
    id: "decay",
    label: "Terminal Decay",
    color: "red",
    desc: "The polity has lost both legitimacy and capacity but has not yet formally collapsed. The state persists nominally while actual governance is performed by informal actors — criminal networks, local strongmen, foreign powers.",
    axes: { legitimacy: 1, capacity: 2, distribution: 2 },
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
    ],
    theory: "The polity has lost the capacity to reconstitute itself from within. Reached through prolonged repression that eliminated reform factions, combined with economic or military failure, terminal decay is distinguished from crisis by the absence of any viable internal reform coalition. Tainter's core mechanism — diminishing marginal returns on administrative complexity — explains the terminal character: each new layer of bureaucracy added to solve a problem reduces the net benefit of complexity, until the system reaches a point where simplification (collapse, partition, absorption) is actually the rational adaptive response for most actors. Collapse in this frame is not failure but adaptation.",
    citation: "Tainter, J. A. (1988). The collapse of complex societies. Cambridge University Press."
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
  { from: "crisis",        to: "formation",     type: "normal",    label: "reconstitution" },
  { from: "succession",    to: "mature",        type: "normal" },
  { from: "succession",    to: "formation",     type: "rare",      label: "next cycle" },
  { from: "decay",         to: "formation",     type: "normal",    label: "external reset" },
];

// ── Node layout ───────────────────────────────────────────────────────────────
// x = center x, y = top edge (converted to center when building Cytoscape elements)

const NW = 158, NH = 52, NRX = 8;
const COL = { left: 139, center: 340, right: 541 };

const NODE_POS = {
  formation:    { x: COL.center, y: 40  },
  settlement:   { x: COL.center, y: 118 },
  fragmentation:{ x: COL.right,  y: 118 },
  consolidation:{ x: COL.center, y: 220 },
  mature:       { x: COL.left,   y: 330 },
  autocratic:   { x: COL.right,  y: 330 },
  strain:       { x: COL.left,   y: 440 },
  reform:       { x: COL.center, y: 440 },
  repression:   { x: COL.right,  y: 440 },
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
  decision: { fill: "--bg-secondary", stroke: "--text-muted",  text: "--text"        },
};

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function nodeColors(colorKey) {
  const m = COLOR_MAP[colorKey];
  return { fill: cssVar(m.fill), stroke: cssVar(m.stroke), text: cssVar(m.text) };
}

// ── Cytoscape setup ───────────────────────────────────────────────────────────

let cy = null;

function buildElements() {
  const els = [];

  for (const phase of Object.values(PHASES)) {
    const colors = nodeColors(phase.color);
    const pos = NODE_POS[phase.id];
    els.push({
      group: "nodes",
      data: {
        id: phase.id,
        label: phase.label,
        fill: colors.fill,
        stroke: colors.stroke,
        textColor: colors.text,
      },
      position: { x: pos.x, y: pos.y + NH / 2 },
      locked: true,
      classes: phase.color,
    });
  }

  const dirIdx = {};
  for (const edge of EDGES) {
    const k = `${edge.from}→${edge.to}`;
    const idx = dirIdx[k] || 0;
    dirIdx[k] = idx + 1;
    els.push({
      group: "edges",
      data: {
        id: `e-${edge.from}-${edge.to}-${idx}`,
        source: edge.from,
        target: edge.to,
        label: edge.label || "",
      },
      classes: edge.type,
    });
  }

  return els;
}

function buildStyle() {
  const muted   = cssVar("--text-muted");
  const edgeRare = cssVar("--edge-rare");

  return [
    // ── Nodes ──
    {
      selector: "node",
      style: {
        width: NW, height: NH,
        shape: "round-rectangle",
        "corner-radius": NRX,
        "background-color": "data(fill)",
        "border-color": "data(stroke)",
        "border-width": 1.5,
        label: "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "font-size": "12px",
        "font-weight": "600",
        color: "data(textColor)",
        "text-wrap": "wrap",
        "text-max-width": NW - 16,
        cursor: "pointer",
        "transition-property": "opacity",
        "transition-duration": "150ms",
      }
    },
    {
      selector: "node.decision",
      style: {
        "border-style": "dashed",
        "border-width": 1,
        "font-style": "italic",
      }
    },
    {
      selector: "node.dimmed",
      style: { opacity: 0.3 }
    },

    // ── Edges ──
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "control-point-step-size": 30,
        "target-arrow-shape": "triangle",
        "target-arrow-fill": "filled",
        "arrow-scale": 0.75,
        "line-color": muted,
        "target-arrow-color": muted,
        width: 1,
        opacity: 0.75,
        "transition-property": "opacity",
        "transition-duration": "150ms",
      }
    },
    {
      selector: "edge.rare",
      style: {
        "line-color": edgeRare,
        "target-arrow-color": edgeRare,
        "line-style": "dashed",
        "line-dash-pattern": [5, 3],
        width: 0.8,
      }
    },
    {
      selector: "edge.dangerous",
      style: {
        "line-color": "#A32D2D",
        "target-arrow-color": "#A32D2D",
        width: 1.5,
      }
    },
    {
      selector: "edge.dimmed",
      style: { opacity: 0.12 }
    },

  ];
}

function initCytoscape() {
  cy = cytoscape({
    container: document.getElementById("cy"),
    elements: buildElements(),
    style: buildStyle(),
    layout: { name: "preset" },
    userZoomingEnabled: false,
    userPanningEnabled: false,
    autoungrabify: true,
  });

  cy.fit(undefined, 20);

  // Fit on resize
  new ResizeObserver(() => { if (cy) cy.fit(undefined, 20); })
    .observe(document.getElementById("cy"));

  // Node click
  cy.on("tap", "node", e => handleNodeClick(e.target.id()));

  // Edge click — show label tooltip
  cy.on("tap", "edge", e => {
    const label = e.target.data("label");
    if (!label) return;
    e.stopPropagation();
    const pos = e.renderedPosition;
    const rect = document.getElementById("cy").getBoundingClientRect();
    showEdgeTooltip(label, rect.left + pos.x, rect.top + pos.y);
  });

  // Background tap — deselect
  cy.on("tap", e => {
    if (e.target === cy) {
      deselect();
      hideEdgeTooltip();
    }
  });
}

// ── Edge tooltip ──────────────────────────────────────────────────────────────

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
  if (activeNode === id) { deselect(); return; }
  select(id);
}

function select(id) {
  activeNode = id;
  hideEdgeTooltip();

  // Dim everything, then un-dim selected node + its edges
  cy.elements().addClass("dimmed");
  const node = cy.getElementById(id);
  node.removeClass("dimmed");
  node.connectedEdges().removeClass("dimmed");

  renderPanel(PHASES[id]);
  document.getElementById("detail-panel").classList.add("visible");

  const isDecision = PHASES[id].color === "decision";
  document.getElementById("pin-btn").style.display = isDecision ? "none" : "inline-block";
  if (!isDecision) updatePinButton();
}

function deselect() {
  activeNode = null;
  cy.elements().removeClass("dimmed");
  document.getElementById("detail-panel").classList.remove("visible");
  document.getElementById("pin-btn").style.display = "none";
}

// ── Panel rendering ───────────────────────────────────────────────────────────

function renderPanel(phase) {
  const isDecision = phase.color === "decision";
  const allZero = Object.values(phase.axes).every(v => v === 0);
  const colors = nodeColors(phase.color);

  const panel = document.getElementById("detail-panel");

  const nameEl = panel.querySelector(".panel-phase-name");
  nameEl.innerHTML = "";
  const nameTxt = document.createElement("span");
  nameTxt.textContent = phase.label;
  nameTxt.style.color = colors.stroke;
  nameTxt.style.fontStyle = isDecision ? "italic" : "";
  nameEl.appendChild(nameTxt);
  if (phase.theory) {
    const btn = document.createElement("button");
    btn.className = "axis-info-btn";
    btn.setAttribute("aria-label", `Theory: ${phase.label}`);
    btn.textContent = "?";
    btn.addEventListener("click", () => openAxisModal(phase.label, phase.theory, phase.citation));
    nameEl.appendChild(btn);
  }

  panel.querySelector(".panel-desc").textContent = phase.desc;

  // Axes — skip for decision nodes and phases where axes aren't meaningful
  const axesContainer = panel.querySelector(".panel-axes");
  if (isDecision || allZero) {
    axesContainer.innerHTML = "";
  } else {
    axesContainer.innerHTML = "";
    for (const [key, label] of [["legitimacy","Legitimacy"],["capacity","Capacity"],["distribution","Distribution"]]) {
      const val = phase.axes[key];
      const row = document.createElement("div");
      row.className = "axis-row";
      row.innerHTML = `
        <span class="axis-label">${label}</span>
        <button class="axis-info-btn" data-axis="${key}" aria-label="About ${label}">?</button>
        <div class="axis-track"><div class="axis-fill" style="width:${val/5*100}%;background:${colors.stroke};"></div></div>
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
  const colors = nodeColors(PHASES[activeNode].color);
  if (pinnedNode === activeNode) {
    btn.textContent = "Pinned: You are here";
    btn.classList.add("pinned");
    btn.style.color = colors.stroke;
    btn.style.borderColor = colors.stroke;
  } else {
    btn.textContent = "Mark as: We are here";
    btn.classList.remove("pinned");
    btn.style.color = "";
    btn.style.borderColor = "";
  }
  renderPinRing();
}

function renderPinRing() {
  if (!cy) return;
  // Clear all outlines
  cy.nodes().forEach(n => n.style({ "outline-width": 0 }));
  if (!pinnedNode) return;
  const node = cy.getElementById(pinnedNode);
  if (!node.length) return;
  const stroke = nodeColors(PHASES[pinnedNode].color).stroke;
  node.style({
    "outline-width": 3,
    "outline-color": stroke,
    "outline-offset": 5,
    "outline-style": "dashed",
    "outline-opacity": 0.85,
  });
}

document.getElementById("pin-btn").addEventListener("click", () => {
  if (!activeNode) return;
  pinnedNode = pinnedNode === activeNode ? null : activeNode;
  if (pinnedNode) localStorage.setItem("pinnedNode", pinnedNode);
  else localStorage.removeItem("pinnedNode");
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
    const stroke = cssVar(c.key === "decision" ? "--text-muted" : `--${c.key}-stroke`);
    const dotStyle = c.key === "decision"
      ? `border: 1px dashed ${stroke}; background: transparent;`
      : `background: ${stroke};`;
    return `<div class="legend-item">
      <span class="legend-dot" style="${dotStyle}"></span>
      <span>${c.label}</span>
    </div>`;
  }).join("");
}

// ── Axis info modal ───────────────────────────────────────────────────────────

const AXIS_INFO = {
  legitimacy: {
    title: "Legitimacy",
    body: `<p>Legitimacy has the deepest theoretical pedigree of the three axes. Max Weber's three types — traditional, charismatic, and rational-legal — are the foundation of almost all subsequent work. The core idea, that durable power requires voluntary compliance and not just coercion, is as close to consensus as political science gets. Seymour Martin Lipset formalized it empirically in the 1950s–60s.</p>
<p>A government can hold power through fear alone, but coercion is expensive and brittle. Legitimacy is what converts raw power into authority — the population's acceptance that the regime has a <em>right</em> to rule, not merely the capacity to enforce.</p>
<p><strong>Scale (0–5):</strong> 0 = pure coercion, no voluntary compliance; 5 = broad, cross-factional acceptance of the regime's right to rule.</p>`
  },
  capacity: {
    title: "Capacity",
    body: `<p>Capacity comes primarily from the state-building literature — Charles Tilly's war-makes-states thesis, Francis Fukuyama's work on political order, and the "failed states" research that expanded after the Cold War (Robert Rotberg and others). The basic insight: legitimacy without capacity is an empty shell. A government can be beloved and still unable to deliver security, collect taxes, or enforce contracts.</p>
<p>There is ongoing debate about whether capacity is one thing or several. Coercive capacity (monopoly on violence), administrative capacity (bureaucratic reach), and fiscal capacity (ability to tax and spend) are meaningfully different and don't always move together.</p>
<p><strong>Scale (0–5):</strong> 0 = state cannot execute basic functions; 5 = high administrative, fiscal, and coercive capacity operating in tandem.</p>`
  },
  distribution: {
    title: "Distribution",
    body: `<p>Distribution is the most contested axis. It draws from several traditions that don't fully agree: Mancur Olson's logic of collective action, Acemoglu and Robinson's framework of inclusive vs. extractive institutions (<em>Why Nations Fail</em>), and older structural traditions about who the state ultimately serves.</p>
<p>The empirical record supports the basic claim that highly extractive regimes are less stable long-term, but causal mechanisms are disputed. The concept is also genuinely ambiguous — distribution of <em>what</em>? Wealth? Public services? Political voice? Rights? These don't always move together, and different theoretical traditions weight them differently.</p>
<p><strong>Scale (0–5):</strong> 0 = highly extractive, benefits concentrated in a small elite; 5 = broadly shared benefits across social groups.</p>`
  }
};

(function initAxisModal() {
  const modal    = document.getElementById("axis-modal");
  const backdrop = document.getElementById("axis-modal-backdrop");
  const closeBtn = document.getElementById("axis-modal-close");
  const titleEl  = document.getElementById("axis-modal-title");
  const bodyEl   = document.getElementById("axis-modal-body");

  function openModal(axis) {
    const info = AXIS_INFO[axis];
    if (!info) return;
    titleEl.textContent = info.title;
    bodyEl.innerHTML = info.body;
    modal.classList.add("visible");
    closeBtn.focus();
  }

  // Exposed for phase theory popups (called directly from renderPanel)
  window.openAxisModal = function(title, body, citation) {
    titleEl.textContent = title;
    bodyEl.innerHTML = `<p>${body}</p>` +
      (citation ? `<p class="modal-citation">${citation}</p>` : "");
    modal.classList.add("visible");
    closeBtn.focus();
  };

  function closeModal() {
    modal.classList.remove("visible");
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("visible")) closeModal();
  });

  // Event delegation — axis buttons inside the panel
  document.getElementById("detail-panel").addEventListener("click", e => {
    const btn = e.target.closest(".axis-info-btn[data-axis]");
    if (btn) {
      e.stopPropagation();
      openModal(btn.dataset.axis);
    }
  });
})();

// ── Intro → App transition ────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const app   = document.getElementById("app");

  document.getElementById("intro-start").addEventListener("click", () => {
    intro.style.display = "none";
    app.style.display   = "block";
    // Initialise Cytoscape now that the container is visible and has dimensions
    initCytoscape();
    buildLegend();
    if (pinnedNode) renderPinRing();
  });
});
