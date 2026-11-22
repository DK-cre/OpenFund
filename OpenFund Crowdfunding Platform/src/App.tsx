import { useEffect, useState, type ReactNode } from "react";

type Page = "home" | "explore" | "create" | "support" | "transparency";
type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "copy"
  | "globe"
  | "heart"
  | "menu"
  | "search"
  | "shield"
  | "spark"
  | "user"
  | "wallet";

const photos = {
  solar:
    "https://images.unsplash.com/photo-1753881110611-00755160afd2?auto=format&fit=crop&w=1200&q=85",
  ocean:
    "https://images.unsplash.com/photo-1616680214084-22670de1bc82?auto=format&fit=crop&w=1200&q=85",
  garden:
    "https://images.unsplash.com/photo-1788538812809-f22af3a6993a?auto=format&fit=crop&w=1200&q=85",
};

const projects = [
  {
    id: 1,
    title: "Solar Grid for Kijani Village",
    category: "Clean Energy",
    image: photos.solar,
    description: "Community-owned solar power for 240 homes, a school, and a rural health clinic.",
    raised: 68420,
    goal: 85000,
    contributors: 437,
    location: "Kijani, Kenya",
    days: 18,
    verified: true,
  },
  {
    id: 2,
    title: "Blue Coast Recovery",
    category: "Environment",
    image: photos.ocean,
    description: "Equipping local teams to remove marine waste and restore coastal habitats.",
    raised: 39180,
    goal: 60000,
    contributors: 281,
    location: "Mombasa, Kenya",
    days: 32,
    verified: true,
  },
  {
    id: 3,
    title: "Rooftop Harvest Network",
    category: "Food & Agriculture",
    image: photos.garden,
    description: "Turning underused city rooftops into productive, community-led gardens.",
    raised: 24750,
    goal: 42000,
    contributors: 193,
    location: "Medellín, Colombia",
    days: 26,
    verified: false,
  },
];

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 4.5 6v5.5c0 4.8 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.7 7.5-9.5V6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H18v16H6.5A2.5 2.5 0 0 1 4 17.5v-11Z" />
        <path d="M4 8h15.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H15a4 4 0 0 1 0-8Z" />
        <circle cx="16" cy="12" r=".7" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="logo-mark">
        <span />
      </span>
      <span>OPENFUND</span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
}

function Badge({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "blue" | "amber" | "gray";
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function Progress({ value }: { value: number }) {
  return (
    <div className="progress">
      <span style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  );
}

function Header({
  page,
  navigate,
  onWallet,
}: {
  page: Page;
  navigate: (page: Page) => void;
  onWallet: () => void;
}) {
  const [open, setOpen] = useState(false);
  const items: [Page, string][] = [
    ["home", "Home"],
    ["explore", "Explore Projects"],
    ["create", "Create Project"],
    ["support", "Support & Exchange"],
    ["transparency", "Transparency"],
  ];
  const go = (target: Page) => {
    navigate(target);
    setOpen(false);
  };
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <button className="logo-button" onClick={() => go("home")}>
          <Logo />
        </button>
        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {items.map(([key, label]) => (
            <button key={key} className={page === key ? "active" : ""} onClick={() => go(key)}>
              {label}
            </button>
          ))}
          <div className="mobile-actions">
            <Button onClick={onWallet}>
              <Icon name="wallet" /> Connect Wallet
            </Button>
          </div>
        </div>
        <div className="nav-actions">
          <Button variant="secondary" onClick={onWallet}>
            <Icon name="wallet" size={16} /> Connect Wallet
          </Button>
          <button className="profile" aria-label="Open profile">
            <Icon name="user" size={17} />
          </button>
        </div>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Open navigation">
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </nav>
    </header>
  );
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Open infrastructure for transparent, accountable community funding.</p>
        </div>
        <div>
          <strong>Platform</strong>
          <button onClick={() => navigate("explore")}>Explore projects</button>
          <button onClick={() => navigate("create")}>Start a project</button>
          <button onClick={() => navigate("transparency")}>Transparency</button>
        </div>
        <div>
          <strong>Resources</strong>
          <button>How it works</button>
          <button>Trust & safety</button>
          <button>Help center</button>
        </div>
        <div>
          <strong>Stay informed</strong>
          <p>Progress worth following, delivered monthly.</p>
          <div className="subscribe">
            <input placeholder="Email address" />
            <button aria-label="Subscribe">
              <Icon name="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 OpenFund Foundation</span>
        <span>Built in the open · Global by design</span>
      </div>
    </footer>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action}
    </div>
  );
}

function ProjectCard({
  project,
  onView,
}: {
  project: (typeof projects)[number];
  onView: () => void;
}) {
  const pct = Math.round((project.raised / project.goal) * 100);
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt="" />
        <Badge tone={project.verified ? "green" : "amber"}>
          {project.verified ? (
            <>
              <Icon name="shield" size={13} /> Verified
            </>
          ) : (
            "Verification pending"
          )}
        </Badge>
        <button className="save" aria-label="Save project">
          <Icon name="heart" size={17} />
        </button>
      </div>
      <div className="project-body">
        <div className="meta">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Progress value={pct} />
        <div className="funding-row">
          <strong>${project.raised.toLocaleString()}</strong>
          <span>raised of ${project.goal.toLocaleString()}</span>
          <b>{pct}%</b>
        </div>
        <div className="card-foot">
          <span>{project.contributors} contributors</span>
          <span>
            <Icon name="clock" size={14} /> {project.days} days left
          </span>
        </div>
        <Button variant="secondary" onClick={onView} className="full">
          View project <Icon name="arrow" />
        </Button>
      </div>
    </article>
  );
}

function Home({ navigate, onProject }: { navigate: (p: Page) => void; onProject: () => void }) {
  const categories = [
    ["Clean energy", "18 projects", "01"],
    ["Community", "34 projects", "02"],
    ["Education", "22 projects", "03"],
    ["Environment", "16 projects", "04"],
  ];
  return (
    <>
      <main>
        <section className="hero container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="live-pill">
                <span /> Open infrastructure for collective progress
              </div>
              <h1>
                Fund ideas.
                <br />
                Build independence.
                <br />
                <em>Verify impact.</em>
              </h1>
              <p>
                OpenFund brings people, resources, and verifiable progress together—so meaningful
                projects can earn trust and move forward.
              </p>
              <div className="hero-actions">
                <Button onClick={() => navigate("explore")}>
                  Explore projects <Icon name="arrow" />
                </Button>
                <Button variant="secondary" onClick={() => navigate("create")}>
                  Create a project
                </Button>
              </div>
              <div className="trust-row">
                <div className="avatars">
                  <span>A</span>
                  <span>M</span>
                  <span>K</span>
                  <span>J</span>
                </div>
                <p>
                  <strong>12,480 people</strong>
                  <br />
                  contributing across 42 countries
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="impact-card">
                <div className="impact-top">
                  <span>LIVE IMPACT</span>
                  <Badge>On track</Badge>
                </div>
                <p>This month, the community funded</p>
                <strong>14 milestones</strong>
                <div className="impact-chart">
                  {[35, 55, 44, 72, 63, 88, 76, 96].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="impact-bottom">
                  <span>$284K allocated</span>
                  <span>94% verified</span>
                </div>
              </div>
              <div className="float-card float-a">
                <Icon name="shield" />
                <span>
                  <small>EVIDENCE VERIFIED</small>
                  <strong>Clinic foundation</strong>
                </span>
                <b>100%</b>
              </div>
              <div className="float-card float-b">
                <span className="pulse" />
                <span>
                  <small>NEW CONTRIBUTION</small>
                  <strong>2.4 ETH · just now</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="stats-bar">
            {[
              ["$12.8M", "Total funds raised"],
              ["186", "Active projects"],
              ["12,480", "Contributors"],
              ["142", "Verified projects"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section container">
          <SectionHead
            eyebrow="CURATED PROJECTS"
            title="Progress you can participate in"
            text="Projects with clear goals, public milestones, and transparent funding."
            action={
              <Button variant="quiet" onClick={() => navigate("explore")}>
                View all projects <Icon name="arrow" />
              </Button>
            }
          />
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onView={onProject} />
            ))}
          </div>
        </section>

        <section className="section container">
          <SectionHead eyebrow="DISCOVER" title="Find your place to contribute" />
          <div className="category-grid">
            {categories.map(([name, count, number]) => (
              <button key={name} onClick={() => navigate("explore")}>
                <span>{number}</span>
                <div>
                  <strong>{name}</strong>
                  <small>{count}</small>
                </div>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
        </section>

        <section className="section how-section">
          <div className="container">
            <SectionHead
              eyebrow="HOW IT WORKS"
              title="From an idea to measurable impact"
              text="A clear process keeps creators accountable and contributors informed."
            />
            <div className="steps">
              {[
                [
                  "01",
                  "Create with clarity",
                  "Define your goal, budget, contribution options, and measurable milestones.",
                ],
                [
                  "02",
                  "Mobilize support",
                  "Receive funding, equipment, expertise, volunteer time, or resource exchanges.",
                ],
                [
                  "03",
                  "Document progress",
                  "Publish evidence and updates as each project milestone is reached.",
                ],
                [
                  "04",
                  "Verify together",
                  "Independent reviewers and community signals make impact visible.",
                ],
              ].map(([n, t, d]) => (
                <div key={n} className="step">
                  <span>{n}</span>
                  <div className="step-icon">
                    <Icon
                      name={
                        n === "04"
                          ? "shield"
                          : n === "03"
                            ? "check"
                            : n === "02"
                              ? "globe"
                              : "spark"
                      }
                    />
                  </div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container contribution-section">
          <div>
            <span className="eyebrow">MORE THAN MONEY</span>
            <h2>Every resource can move a project forward.</h2>
            <p>
              Contribute in the way that works for you—from direct funding to materials, skills,
              time, and exchange.
            </p>
            <Button onClick={() => navigate("support")}>
              See contribution methods <Icon name="arrow" />
            </Button>
          </div>
          <div className="method-cloud">
            {[
              "Crypto",
              "Bank card",
              "Mobile pay",
              "NFC",
              "Bank transfer",
              "Equipment",
              "Professional skills",
              "Volunteer time",
              "Barter",
            ].map((m, i) => (
              <span key={m} className={i > 4 ? "muted-method" : ""}>
                {m}
                <i />
              </span>
            ))}
          </div>
        </section>

        <section className="section container trust-panel">
          <div className="trust-copy">
            <Badge>
              <Icon name="shield" size={14} /> TRANSPARENCY BY DESIGN
            </Badge>
            <h2>
              Trust should be visible,
              <br />
              not assumed.
            </h2>
            <p>
              Every allocation, milestone, evidence record, and verification decision is structured
              into a clear public trail.
            </p>
            <Button variant="secondary" onClick={() => navigate("transparency")}>
              Explore transparency <Icon name="arrow" />
            </Button>
          </div>
          <div className="ledger">
            <div className="ledger-head">
              <span>PUBLIC PROJECT LEDGER</span>
              <Badge>Synced</Badge>
            </div>
            {[
              ["Funds received", "$68,420", "100%"],
              ["Allocated to milestones", "$51,800", "76%"],
              ["Evidence approved", "8 of 9", "89%"],
              ["Community confidence", "4.9 / 5", "98%"],
            ].map(([l, v, p]) => (
              <div className="ledger-row" key={l}>
                <span>
                  <i className="check-dot">
                    <Icon name="check" size={12} />
                  </i>
                  {l}
                </span>
                <strong>{v}</strong>
                <small>{p}</small>
              </div>
            ))}
            <div className="hash">
              <span>Latest record</span>
              <code>0x8f2a...91c4</code>
              <Icon name="copy" size={14} />
            </div>
          </div>
        </section>
      </main>
      <Footer navigate={navigate} />
    </>
  );
}

function Explore({ onProject }: { onProject: () => void }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All projects");
  const filtered = projects.filter(
    (p) =>
      (category === "All projects" || p.category === category) &&
      `${p.title} ${p.description}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main className="page container">
      <div className="page-title">
        <div>
          <span className="eyebrow">EXPLORE OPENFUND</span>
          <h1>Projects building real progress</h1>
          <p>Discover public-benefit work with open budgets and visible milestones.</p>
        </div>
        <div className="project-count">
          <strong>186</strong>
          <span>active projects</span>
        </div>
      </div>
      <div className="filter-bar">
        <label className="search">
          <Icon name="search" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects, places, or causes"
          />
        </label>
        <select aria-label="Funding status">
          <option>All funding statuses</option>
          <option>Almost funded</option>
          <option>Recently launched</option>
        </select>
        <select aria-label="Sort projects">
          <option>Most relevant</option>
          <option>Most funded</option>
          <option>Ending soon</option>
        </select>
      </div>
      <div className="chip-row">
        {["All projects", "Clean Energy", "Environment", "Food & Agriculture", "Education"].map(
          (c) => (
            <button
              className={category === c ? "selected" : ""}
              onClick={() => setCategory(c)}
              key={c}
            >
              {c}
            </button>
          ),
        )}
      </div>
      {filtered.length ? (
        <div className="project-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onView={onProject} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <Icon name="search" size={30} />
          <h3>No projects found</h3>
          <p>Try a broader search or clear your filters.</p>
          <Button
            variant="secondary"
            onClick={() => {
              setSearch("");
              setCategory("All projects");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </main>
  );
}

function ProjectDetail({ back, support }: { back: () => void; support: () => void }) {
  const p = projects[0];
  return (
    <main className="page container detail-page">
      <button className="back" onClick={back}>
        ← Back to projects
      </button>
      <div className="detail-hero">
        <img src={p.image} alt="Solar panels installed in a rural landscape" />
        <div>
          <div className="meta">
            <span>{p.category}</span>
            <span>{p.location}</span>
          </div>
          <h1>{p.title}</h1>
          <p>
            {p.description} The system will be managed by a local cooperative and create four
            permanent technical roles.
          </p>
          <div className="creator">
            <span className="avatar">AM</span>
            <span>
              Created by <strong>Amina Mbeki</strong>
              <small>Verified organization · Joined 2023</small>
            </span>
          </div>
        </div>
      </div>
      <div className="detail-grid">
        <div className="detail-main">
          <section className="content-card">
            <h2>Why this project matters</h2>
            <p>
              Kijani currently experiences unreliable grid access, disrupting education, healthcare,
              and small business. This community-owned microgrid combines 72 kW of solar generation
              with battery storage to deliver resilient, affordable power.
            </p>
            <p>
              All procurement, installation, and training records will be published here as
              milestones are completed.
            </p>
          </section>
          <section className="content-card">
            <div className="card-title">
              <h2>Budget breakdown</h2>
              <Badge>Open budget</Badge>
            </div>
            {[
              ["Solar panels & inverters", 38000, 45],
              ["Battery storage", 22500, 26],
              ["Installation & grid works", 14500, 17],
              ["Training & contingency", 10000, 12],
            ].map(([name, cost, pct]) => (
              <div className="budget-row" key={String(name)}>
                <span>
                  {name}
                  <Progress value={Number(pct)} />
                </span>
                <strong>${Number(cost).toLocaleString()}</strong>
              </div>
            ))}
          </section>
          <section className="content-card">
            <div className="card-title">
              <h2>Milestones & evidence</h2>
              <span>2 of 4 completed</span>
            </div>
            {[
              ["Site survey and engineering", "Completed", "Jun 14"],
              ["Equipment procurement", "Completed", "Jul 28"],
              ["Installation and commissioning", "In progress", "Sep 30"],
              ["Training and handover", "Upcoming", "Nov 12"],
            ].map(([title, status, date], i) => (
              <div className="milestone" key={title}>
                <span className={`milestone-dot ${i < 2 ? "done" : ""}`}>
                  {i < 2 ? <Icon name="check" size={14} /> : i + 1}
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>
                    {status} · Target {date}
                  </small>
                  {i === 1 && (
                    <p>
                      Invoices, delivery receipts, and 18 geotagged photos approved by 3 verifiers.
                    </p>
                  )}
                </div>
                {i < 2 && <Badge>Evidence verified</Badge>}
              </div>
            ))}
          </section>
          <section className="content-card">
            <div className="card-title">
              <h2>Recent transactions</h2>
              <Button variant="quiet">View public ledger</Button>
            </div>
            <TransactionTable compact />
          </section>
        </div>
        <aside className="fund-card">
          <Badge>
            <Icon name="shield" size={13} /> Independently verified
          </Badge>
          <div className="fund-total">
            <strong>${p.raised.toLocaleString()}</strong>
            <span>raised of ${p.goal.toLocaleString()} goal</span>
          </div>
          <Progress value={80} />
          <div className="fund-stats">
            <span>
              <strong>80%</strong>funded
            </span>
            <span>
              <strong>{p.contributors}</strong>contributors
            </span>
            <span>
              <strong>{p.days}</strong>days left
            </span>
          </div>
          <Button onClick={support} className="full">
            Support this project <Icon name="arrow" />
          </Button>
          <Button variant="secondary" className="full">
            <Icon name="heart" /> Save project
          </Button>
          <p className="safe-note">
            <Icon name="shield" size={15} /> Contributions are recorded in the public project
            ledger. Payments are simulated in this prototype.
          </p>
          <div className="creator-box">
            <span className="avatar">AM</span>
            <div>
              <strong>Amina Mbeki</strong>
              <small>Project creator</small>
            </div>
            <Badge>Verified</Badge>
          </div>
        </aside>
      </div>
    </main>
  );
}

const formSteps = [
  "Project information",
  "Budget",
  "Milestones",
  "Contribution methods",
  "Review & publish",
];

function CreateProject() {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [touched, setTouched] = useState(false);
  const [published, setPublished] = useState(false);
  if (published)
    return (
      <main className="page container">
        <div className="success-state">
          <span>
            <Icon name="check" size={32} />
          </span>
          <Badge>READY FOR REVIEW</Badge>
          <h1>Your project draft is complete</h1>
          <p>
            Our verification team will review the structure, milestones, and creator information
            before publishing.
          </p>
          <Button
            onClick={() => {
              setPublished(false);
              setStep(0);
            }}
          >
            Create another project
          </Button>
        </div>
      </main>
    );
  return (
    <main className="page container">
      <div className="wizard-head">
        <div>
          <span className="eyebrow">CREATE A PROJECT</span>
          <h1>Turn a clear plan into shared progress</h1>
          <p>Build trust from the start with a transparent goal, budget, and milestones.</p>
        </div>
        <span>Draft saved</span>
      </div>
      <div className="wizard">
        <aside className="step-nav">
          {formSteps.map((s, i) => (
            <button
              key={s}
              className={`${i === step ? "active" : ""} ${i < step ? "complete" : ""}`}
              onClick={() => setStep(i)}
            >
              <span>{i < step ? <Icon name="check" size={15} /> : i + 1}</span>
              <div>
                <strong>{s}</strong>
                <small>{i < step ? "Completed" : i === step ? "In progress" : "Not started"}</small>
              </div>
            </button>
          ))}
        </aside>
        <section className="form-card">
          <div className="form-progress">
            <span>STEP {step + 1} OF 5</span>
            <strong>{formSteps[step]}</strong>
            <Progress value={(step + 1) * 20} />
          </div>
          {step === 0 && (
            <div className="form-body">
              <h2>Tell people what you’re building</h2>
              <p>Be specific about the need, the outcome, and who benefits.</p>
              <label>
                Project title <em>Required</em>
                <input
                  className={touched && !title ? "error-input" : ""}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Solar Grid for Kijani Village"
                />
                {touched && !title && (
                  <small className="error">Enter a project title to continue.</small>
                )}
              </label>
              <div className="form-row">
                <label>
                  Category
                  <select>
                    <option>Select a category</option>
                    <option>Clean Energy</option>
                    <option>Community</option>
                  </select>
                </label>
                <label>
                  Project location
                  <input placeholder="City, country" />
                </label>
              </div>
              <label>
                Short summary
                <textarea placeholder="Describe the project and its intended impact in a few clear sentences." />
                <small>0 / 240 characters</small>
              </label>
              <label>
                Cover image
                <div className="upload">
                  <span>+</span>
                  <strong>Upload a project cover</strong>
                  <small>PNG or JPG · Recommended 1600 × 900</small>
                </div>
              </label>
            </div>
          )}
          {step === 1 && (
            <div className="form-body">
              <h2>Build an open budget</h2>
              <p>Show contributors exactly how resources will be used.</p>
              <div className="form-row">
                <label>
                  Funding goal
                  <input defaultValue="$ 85,000" />
                </label>
                <label>
                  Currency
                  <select>
                    <option>USD — US Dollar</option>
                    <option>EUR — Euro</option>
                  </select>
                </label>
              </div>
              {[
                "Equipment and materials",
                "Implementation and labor",
                "Operations and contingency",
              ].map((x, i) => (
                <div className="line-item" key={x}>
                  <input defaultValue={x} />
                  <input defaultValue={["$ 48,000", "$ 27,000", "$ 10,000"][i]} />
                  <button>×</button>
                </div>
              ))}
              <Button variant="secondary">+ Add budget item</Button>
              <div className="total-row">
                <span>Total planned budget</span>
                <strong>$85,000</strong>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="form-body">
              <h2>Define measurable milestones</h2>
              <p>Funds and public updates can be tied to clear, verifiable outcomes.</p>
              {[
                "Complete site survey and engineering plan",
                "Procure equipment with public invoices",
                "Install, test, and commission system",
              ].map((m, i) => (
                <div className="milestone-edit" key={m}>
                  <span>{i + 1}</span>
                  <div>
                    <label>
                      Milestone title
                      <input defaultValue={m} />
                    </label>
                    <div className="form-row">
                      <label>
                        Target date
                        <input
                          defaultValue={["2026-06-14", "2026-07-28", "2026-09-30"][i]}
                          type="date"
                        />
                      </label>
                      <label>
                        Budget allocation
                        <input defaultValue={["$8,500", "$51,000", "$21,000"][i]} />
                      </label>
                    </div>
                    <label>
                      Evidence required
                      <input defaultValue="Photos, receipts, and verifier sign-off" />
                    </label>
                  </div>
                </div>
              ))}
              <Button variant="secondary">+ Add milestone</Button>
            </div>
          )}
          {step === 3 && (
            <div className="form-body">
              <h2>Choose how people can contribute</h2>
              <p>Select funding and non-monetary support methods that fit your project.</p>
              <div className="method-select">
                {[
                  "Cryptocurrency",
                  "Bank card",
                  "Mobile payment",
                  "NFC project tag",
                  "Bank transfer",
                  "Goods & equipment",
                  "Professional services",
                  "Volunteer work",
                  "Barter",
                ].map((m, i) => (
                  <label key={m}>
                    <input type="checkbox" defaultChecked={i < 6} />
                    <span>
                      <i>{i < 5 ? "$" : "+"}</i>
                      <strong>{m}</strong>
                      <small>{i < 5 ? "Financial contribution" : "Resource contribution"}</small>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="form-body">
              <h2>Review before submitting</h2>
              <p>Confirm your project is clear, accurate, and ready for public verification.</p>
              <div className="review-card">
                <img src={photos.solar} alt="" />
                <div>
                  <Badge>Clean Energy</Badge>
                  <h3>{title || "Solar Grid for Kijani Village"}</h3>
                  <p>Kijani, Kenya · $85,000 goal</p>
                </div>
              </div>
              {formSteps.slice(0, 4).map((s) => (
                <div className="review-row" key={s}>
                  <span>
                    <i>
                      <Icon name="check" size={14} />
                    </i>
                    {s}
                  </span>
                  <button onClick={() => setStep(formSteps.indexOf(s))}>Edit</button>
                </div>
              ))}
              <label className="confirm">
                <input type="checkbox" /> I confirm this information is accurate and agree to
                publish progress evidence.
              </label>
            </div>
          )}
          <div className="form-actions">
            <Button
              variant="secondary"
              onClick={() => setStep(Math.max(0, step - 1))}
              className={step === 0 ? "invisible" : ""}
            >
              Back
            </Button>
            <span>Saved just now</span>
            <Button
              onClick={() => {
                if (step === 0 && !title) {
                  setTouched(true);
                  return;
                }
                step < 4 ? setStep(step + 1) : setPublished(true);
              }}
            >
              {step === 4 ? "Submit for review" : "Save & continue"} <Icon name="arrow" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

const methods = [
  "Cryptocurrency",
  "Bank Card",
  "Mobile Payment",
  "NFC",
  "Bank Transfer",
  "Goods & Equipment",
  "Services",
  "Volunteer Work",
  "Barter",
];

function Support({ onWallet }: { onWallet: () => void }) {
  const [method, setMethod] = useState("Cryptocurrency");
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState("100");
  return (
    <main className="page container">
      <div className="page-title">
        <div>
          <span className="eyebrow">SUPPORT & EXCHANGE</span>
          <h1>Contribute in the way that works</h1>
          <p>Fund, equip, advise, volunteer, or exchange—every useful contribution counts.</p>
        </div>
      </div>
      <div className="support-grid">
        <section className="support-main">
          <div className="selected-project">
            <img src={photos.solar} alt="" />
            <div>
              <small>SUPPORTING</small>
              <strong>Solar Grid for Kijani Village</strong>
              <span>Kijani, Kenya · 80% funded</span>
            </div>
            <button>Change</button>
          </div>
          <h2>Choose a contribution method</h2>
          <div className="method-tabs">
            {methods.map((m, i) => (
              <button key={m} className={method === m ? "active" : ""} onClick={() => setMethod(m)}>
                <i>{i < 5 ? "$" : "+"}</i>
                {m}
              </button>
            ))}
          </div>
          <div className="contribution-panel">
            {method === "Barter" ? (
              <BarterPanel onSuccess={() => setSuccess(true)} />
            ) : method === "NFC" ? (
              <NfcPanel />
            ) : ["Goods & Equipment", "Services", "Volunteer Work"].includes(method) ? (
              <ResourcePanel method={method} onSuccess={() => setSuccess(true)} />
            ) : (
              <PaymentPanel
                method={method}
                amount={amount}
                setAmount={setAmount}
                onWallet={onWallet}
                onSuccess={() => setSuccess(true)}
              />
            )}
          </div>
        </section>
        <aside className="summary-card">
          <h3>Contribution summary</h3>
          <div className="mini-project">
            <img src={photos.solar} alt="" />
            <span>
              <strong>Solar Grid for Kijani Village</strong>
              <small>Verified project</small>
            </span>
          </div>
          <div className="summary-row">
            <span>Method</span>
            <strong>{method}</strong>
          </div>
          <div className="summary-row">
            <span>Contribution</span>
            <strong>
              {["Barter", "Goods & Equipment", "Services", "Volunteer Work", "NFC"].includes(method)
                ? "In kind"
                : `$${amount || 0}.00`}
            </strong>
          </div>
          <div className="summary-row">
            <span>Platform fee</span>
            <strong>$0.00</strong>
          </div>
          <div className="summary-total">
            <span>Estimated impact</span>
            <strong>
              {method === "Volunteer Work" ? "8 skilled hours" : "1.4% of next milestone"}
            </strong>
          </div>
          <p>
            <Icon name="shield" size={16} /> Your contribution will be added to the project’s public
            ledger after confirmation.
          </p>
        </aside>
      </div>
      {success && (
        <Modal onClose={() => setSuccess(false)}>
          <div className="modal-success">
            <span>
              <Icon name="check" size={28} />
            </span>
            <h2>Contribution confirmed</h2>
            <p>Your simulated contribution has been added to the project activity feed.</p>
            <div>
              <small>DEMO RECORD</small>
              <code>0x9d71...a40f</code>
            </div>
            <Button onClick={() => setSuccess(false)} className="full">
              Done
            </Button>
          </div>
        </Modal>
      )}
    </main>
  );
}

function PaymentPanel({
  method,
  amount,
  setAmount,
  onWallet,
  onSuccess,
}: {
  method: string;
  amount: string;
  setAmount: (v: string) => void;
  onWallet: () => void;
  onSuccess: () => void;
}) {
  return (
    <>
      <div className="panel-head">
        <div>
          <span className="eyebrow">FINANCIAL CONTRIBUTION</span>
          <h2>Support with {method}</h2>
        </div>
        <Badge tone="blue">Simulation</Badge>
      </div>
      <label>
        Contribution amount
        <div className="amount-input">
          <span>$</span>
          <input value={amount} onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))} />
          <b>USD</b>
        </div>
      </label>
      <div className="quick-amounts">
        {["25", "50", "100", "250"].map((n) => (
          <button className={amount === n ? "active" : ""} onClick={() => setAmount(n)} key={n}>
            ${n}
          </button>
        ))}
      </div>
      {method === "Cryptocurrency" ? (
        <div className="wallet-state">
          <span>
            <Icon name="wallet" />
          </span>
          <div>
            <strong>Wallet not connected</strong>
            <p>Connect to select a token and preview the transaction.</p>
          </div>
          <Button variant="secondary" onClick={onWallet}>
            Connect wallet
          </Button>
        </div>
      ) : (
        <div className="demo-fields">
          <label>
            Cardholder name
            <input placeholder="Name on card" />
          </label>
          <div className="form-row">
            <label>
              Payment reference
              <input placeholder="Demo reference" />
            </label>
            <label>
              Region
              <select>
                <option>Global provider</option>
              </select>
            </label>
          </div>
        </div>
      )}
      <Button className="full confirm-button" onClick={onSuccess}>
        Confirm contribution <Icon name="arrow" />
      </Button>
      <small className="prototype-note">Prototype only — no real payment will be processed.</small>
    </>
  );
}

function NfcPanel() {
  return (
    <>
      <div className="panel-head">
        <div>
          <span className="eyebrow">TWO DISTINCT NFC OPTIONS</span>
          <h2>Use contactless support</h2>
        </div>
      </div>
      <div className="nfc-grid">
        <div>
          <span className="nfc-icon">N</span>
          <Badge>NFC project tag</Badge>
          <h3>Open a project page</h3>
          <p>
            Tap a physical OpenFund tag to open this project’s contribution page on any NFC-enabled
            phone.
          </p>
          <Button variant="secondary">Preview tag experience</Button>
        </div>
        <div>
          <span className="nfc-icon card-nfc">$</span>
          <Badge tone="blue">External payment</Badge>
          <h3>Contactless card payment</h3>
          <p>
            Use a bank card or mobile wallet with an approved external payment terminal or provider.
          </p>
          <Button>Simulate terminal payment</Button>
        </div>
      </div>
    </>
  );
}

function ResourcePanel({ method, onSuccess }: { method: string; onSuccess: () => void }) {
  return (
    <>
      <div className="panel-head">
        <div>
          <span className="eyebrow">RESOURCE CONTRIBUTION</span>
          <h2>Offer {method.toLowerCase()}</h2>
        </div>
      </div>
      <label>
        What can you contribute?
        <input
          placeholder={
            method === "Services"
              ? "e.g. Electrical system design review"
              : method === "Volunteer Work"
                ? "e.g. 8 hours of installation support"
                : "e.g. 2 industrial inverters"
          }
        />
      </label>
      <div className="form-row">
        <label>
          Estimated value
          <input placeholder="$ 0.00" />
        </label>
        <label>
          Location
          <input placeholder="City, country" />
        </label>
      </div>
      <label>
        Details
        <textarea placeholder="Include availability, specifications, or other useful context." />
      </label>
      <Button onClick={onSuccess} className="full">
        Send contribution offer <Icon name="arrow" />
      </Button>
    </>
  );
}

function BarterPanel({ onSuccess }: { onSuccess: () => void }) {
  return (
    <>
      <div className="panel-head">
        <div>
          <span className="eyebrow">RESOURCE EXCHANGE</span>
          <h2>Propose a fair exchange</h2>
        </div>
        <Badge tone="amber">Requires creator approval</Badge>
      </div>
      <div className="form-row">
        <label>
          I offer
          <textarea placeholder="Describe your goods, equipment, or service" />
        </label>
        <label>
          I need
          <textarea placeholder="Describe what you want in exchange" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Estimated value
          <input placeholder="$ 0.00" />
        </label>
        <label>
          Delivery method
          <select>
            <option>Local pickup</option>
            <option>Courier</option>
            <option>Digital delivery</option>
          </select>
        </label>
      </div>
      <label>
        Location
        <input placeholder="City, country" />
      </label>
      <Button onClick={onSuccess} className="full">
        Submit barter offer <Icon name="arrow" />
      </Button>
    </>
  );
}

function TransactionTable({ compact = false }: { compact?: boolean }) {
  const rows = [
    ["Aug 28, 2026", "Contribution", "0x8f2a...91c4", "+ $2,400", "Verified"],
    ["Aug 26, 2026", "Equipment allocation", "0x44be...1d08", "− $8,250", "Released"],
    ["Aug 24, 2026", "Card contribution", "OF-829104", "+ $750", "Verified"],
    ["Aug 20, 2026", "Milestone release", "0xc182...77af", "− $14,500", "Verified"],
  ];
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Record</th>
            <th>Amount</th>
            {!compact && <th>Status</th>}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, compact ? 3 : 4).map((r) => (
            <tr key={r[2]}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>
                <code>{r[2]}</code>
              </td>
              <td className={r[3].startsWith("+") ? "positive" : ""}>{r[3]}</td>
              {!compact && (
                <td>
                  <Badge>{r[4]}</Badge>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Transparency() {
  const [tab, setTab] = useState("Overview");
  return (
    <main className="page container">
      <div className="page-title">
        <div>
          <span className="eyebrow">PUBLIC ACCOUNTABILITY</span>
          <h1>Transparency & verification</h1>
          <p>
            A clear, readable record of where resources came from, where they went, and what
            changed.
          </p>
        </div>
        <div className="sync">
          <span /> Ledger synced 2 min ago
        </div>
      </div>
      <div className="project-switcher">
        <img src={photos.solar} alt="" />
        <div>
          <small>VIEWING TRANSPARENCY FOR</small>
          <strong>Solar Grid for Kijani Village</strong>
        </div>
        <button>
          Change project <Icon name="chevron" />
        </button>
      </div>
      <div className="dashboard-tabs">
        {["Overview", "Transactions", "Milestones", "Evidence", "Community"].map((t) => (
          <button className={tab === t ? "active" : ""} onClick={() => setTab(t)} key={t}>
            {t}
          </button>
        ))}
      </div>
      <div className="metric-grid">
        {[
          ["$68,420", "Total funds received", "+8.2% this month"],
          ["$51,800", "Funds allocated", "Across 4 milestones"],
          ["$22,750", "Funds released", "2 milestones complete"],
          ["$16,620", "Remaining funds", "24.3% available"],
        ].map(([v, l, s], i) => (
          <div className="metric-card" key={l}>
            <span className={`metric-icon metric-${i}`}>
              <Icon name={i === 2 ? "check" : i === 3 ? "wallet" : "spark"} />
            </span>
            <small>{l}</small>
            <strong>{v}</strong>
            <p>{s}</p>
          </div>
        ))}
      </div>
      <div className="dashboard-grid">
        <section className="content-card allocation">
          <div className="card-title">
            <div>
              <h2>Fund allocation</h2>
              <p>Received funds by current status</p>
            </div>
            <select>
              <option>All time</option>
            </select>
          </div>
          <div className="allocation-body">
            <div className="donut">
              <div>
                <strong>75.7%</strong>
                <span>allocated</span>
              </div>
            </div>
            <div className="legend">
              {[
                ["Released", "$22,750", "green"],
                ["Committed", "$29,050", "blue"],
                ["Available", "$16,620", "gray"],
              ].map(([l, v, c]) => (
                <div key={l}>
                  <span>
                    <i className={c} />
                    {l}
                  </span>
                  <strong>{v}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="content-card">
          <div className="card-title">
            <div>
              <h2>Verification status</h2>
              <p>Independent and community review</p>
            </div>
            <Badge>Healthy</Badge>
          </div>
          <div className="score">
            <span>
              <Icon name="shield" size={28} />
            </span>
            <div>
              <strong>94</strong>
              <small>/ 100 trust score</small>
            </div>
          </div>
          {[
            ["Identity and organization", "Verified"],
            ["Budget documentation", "Verified"],
            ["Milestone evidence", "8 of 9 approved"],
            ["Community confidence", "98% positive"],
          ].map(([l, v]) => (
            <div className="verify-row" key={l}>
              <span>
                <Icon name="check" size={13} />
                {l}
              </span>
              <strong>{v}</strong>
            </div>
          ))}
        </section>
      </div>
      <section className="content-card transaction-section">
        <div className="card-title">
          <div>
            <h2>Transaction history</h2>
            <p>Public funding and allocation activity</p>
          </div>
          <Button variant="secondary">Export records</Button>
        </div>
        <TransactionTable />
      </section>
      <div className="dashboard-grid lower">
        <section className="content-card">
          <div className="card-title">
            <h2>Milestone progress</h2>
            <span>2 of 4 completed</span>
          </div>
          {[
            ["Site survey & engineering", "100%", true],
            ["Equipment procurement", "100%", true],
            ["Installation & commissioning", "62%", false],
            ["Training & handover", "0%", false],
          ].map(([l, p, done], i) => (
            <div className="dash-milestone" key={String(l)}>
              <span className={done ? "done" : ""}>
                {done ? <Icon name="check" size={13} /> : i + 1}
              </span>
              <div>
                <strong>{l}</strong>
                <Progress value={Number(String(p).replace("%", ""))} />
              </div>
              <b>{p}</b>
            </div>
          ))}
        </section>
        <section className="content-card">
          <div className="card-title">
            <h2>Evidence & governance</h2>
            <Badge tone="blue">12 records</Badge>
          </div>
          {[
            ["Procurement invoices", "Approved by 3 verifiers", "Aug 26"],
            ["Equipment delivery", "18 geotagged photos", "Aug 24"],
            ["Community vote #04", "98% approved · 184 votes", "Aug 20"],
            ["Dispute status", "No active disputes", "Current"],
          ].map(([l, s, d]) => (
            <div className="evidence-row" key={l}>
              <span>
                <Icon name="check" size={14} />
              </span>
              <div>
                <strong>{l}</strong>
                <small>{s}</small>
              </div>
              <time>{d}</time>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <Icon name="close" />
        </button>
        {children}
      </div>
    </div>
  );
}

function WalletModal({ onClose }: { onClose: () => void }) {
  const [connected, setConnected] = useState(false);
  return (
    <Modal onClose={onClose}>
      {connected ? (
        <div className="modal-success">
          <span>
            <Icon name="check" size={28} />
          </span>
          <h2>Wallet connected</h2>
          <p>Your demo wallet is ready to preview contribution flows.</p>
          <div>
            <small>CONNECTED ADDRESS</small>
            <code>0x71b4...2e90</code>
          </div>
          <Button onClick={onClose} className="full">
            Continue
          </Button>
        </div>
      ) : (
        <div className="wallet-modal">
          <Badge tone="blue">SIMULATED CONNECTION</Badge>
          <h2>Connect a wallet</h2>
          <p>
            Choose a demo wallet to preview cryptocurrency contributions. No real wallet access is
            requested.
          </p>
          {["OpenFund Demo Wallet", "Browser Wallet", "WalletConnect"].map((w, i) => (
            <button onClick={() => setConnected(true)} key={w}>
              <span>{i === 0 ? "OF" : i === 1 ? "BW" : "WC"}</span>
              <strong>{w}</strong>
              <Icon name="chevron" />
            </button>
          ))}
          <small>
            By connecting, you agree to the prototype terms. No transaction will be submitted.
          </small>
        </div>
      )}
    </Modal>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [detail, setDetail] = useState(false);
  const [wallet, setWallet] = useState(false);
  const navigate = (target: Page) => {
    setPage(target);
    setDetail(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [detail]);
  return (
    <div className="app-shell">
      <Header page={page} navigate={navigate} onWallet={() => setWallet(true)} />
      {detail ? (
        <ProjectDetail back={() => setDetail(false)} support={() => navigate("support")} />
      ) : page === "home" ? (
        <Home navigate={navigate} onProject={() => setDetail(true)} />
      ) : page === "explore" ? (
        <Explore onProject={() => setDetail(true)} />
      ) : page === "create" ? (
        <CreateProject />
      ) : page === "support" ? (
        <Support onWallet={() => setWallet(true)} />
      ) : (
        <Transparency />
      )}
      {wallet && <WalletModal onClose={() => setWallet(false)} />}
    </div>
  );
}
